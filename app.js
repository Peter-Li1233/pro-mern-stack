const express = require("express");
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const validIssueStatus = {
    New: true,
    Open: true,
    Assigned: true,
    Fixed: true,
    Verified: true,
    Closed: true,
};

const issueFieldType = {
    id: 'required',
    status: 'required',
    owner: 'required',
    effort: 'optional',
    created: 'required',
    completionDate: 'optional',
    title: 'required',
}

function validateIssue(issue) {
    for (const field in issue) {
        const type = issueFieldType[field];
        if(!type) {
            delete issue[field]
        } else if (type === 'required' && !issue[field]) {
            return `${field} is required.`;
        }
    }

    if(!validIssueStatus[issue.status]) {
        return `${issue.status} is not a valid status`;
    }

    return null
}

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/api/issues', (req, res) => {
    db.collection('issues').find().toArray()
    .then(issues => {
        const metadata = {total_count: issues.length};
        res.json({_metadata: metadata, records:issues});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: `Internal Server Error: ${err}`});
    });
    
});

app.post('/api/issues', (req, res) => {
    const newIssue = req.body;
    console.log(newIssue);

    // newIssue.id = issues.length + 1;
    newIssue.created = new Date();
    if(!newIssue.status) {
        newIssue.status = "New";
    };

    const err = validateIssue(newIssue);
    if(err) {
        res.status(422).json({message: `Invalid request: ${err}`});
        return;
    }

    db.collection('issues').insertOne(newIssue)
    .then(result => db.collection('issues').find({_id: result.insertedId}).limit(1).next())
    .then(newIssue => {
        console.log(newIssue);
        res.json(newIssue);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: `Internal Server Error: ${err}`});
    });
})

let db, client;

MongoClient.connect('mongodb://localhost', {useNewUrlParser: true})
.then(connection => {
    client = connection;
    db = client.db('issuetracker');
    app.listen(3000, function() {
    console.log('Server started on port 3000');
    });
})
.catch(error => {
    console.log('Error:', error);
});