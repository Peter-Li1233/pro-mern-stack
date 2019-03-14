'use strict';
const MongoClient = require('mongodb');


function* CoTest() {
    const client = yield MongoClient.connect('mongodb://localhost', {useNewUrlParser: true});
    
    const db = client.db('classroomdb');

    const result = yield db.collection('employees').insertOne({id: 1, name: 'C. Generator'});
    console.log('Result of insert:', result.insertedId);

    const docs = yield db.collection('employees').find({id: 1}).toArray();
    console.log('Result of find:', docs);

    client.close();
  }

  const coIterator = CoTest();

  coIterator.next().value
  .then(client => coIterator.next(client).value)
  .then(result => coIterator.next(result).value)
  .then(result => coIterator.next(result))
  .then(response => console.log(response.done));