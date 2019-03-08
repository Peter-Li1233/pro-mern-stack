const express = require("express");
const bodyParser = require('body-parser');

const issues = [
    {
        id: 1, status: "Open", owner: "Raven",
        created: new Date('2019-03-01'), effort: 5, completionDate: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        id: 2, status: "Assigned", owner: 'Eddie',
        created: new Date('2019-03-01'), effort: 14, 
        completionDate: new Date('2019-03-04'),
        title: 'Missing bottom border on panel',
    },
];

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

app.get('/api/issues', function(req, res) {
    const metadata = {total_count: issues.length};
    res.json({_metadata: metadata, records:issues});
});

app.post('/api/issues', (req, res) => {
    const newIssue = req.body;
    console.log(newIssue);

    newIssue.id = issues.length + 1;
    newIssue.created = new Date();
    if(!newIssue.status) {
        newIssue.status = "New";
    };

    const err = validateIssue(newIssue);
    if(err) {
        res.status(422).json({message: `Invalid request: ${err}`});
        return;
    }

    issues.push(newIssue);

    res.json(newIssue);
})

app.listen(3000, function() {
    console.log('Server started on port 3000');
})