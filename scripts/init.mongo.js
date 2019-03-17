db = new Mongo().getDB('issuetracker');

db.issues.remove({});

db.issues.insert([
    {
        status: "Open", owner: "Raven",
        created: new Date('2019-03-01'), 
        effort: 5, 
        completionDate: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        status: "Assigned", 
        owner: 'Eddie',
        created: new Date('2019-03-01'), 
        effort: 14, 
        completionDate: new Date('2019-03-04'),
        title: 'Missing bottom border on panel',
    }
]);

db.issues.createIndex({status: 1});
db.issues.createIndex({owner: 1});
db.issues.createIndex({created: 1});