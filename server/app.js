// const express = require("express");
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const Issue = require('./issue');
import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import 'babel-polyfill';
import SourceMapSupport from 'source-map-support';
import path from 'path';

import Issue from './issue';


SourceMapSupport.install();

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

// console.log(process.env.NODE_ENV);
// if(process.env.NODE_ENV !== "production") {
//     const webpack = require('webpack');
//     const webpackDevMiddleware = require('webpack-dev-middleware');
//     const webpackHotMiddleware = require('webpack-hot-middleware');

//     const config = require('../webpack.config');
//     config.entry.app.push('webpack-hot-middleware/client', 'webpack/hot/only-dev-server');

//     const bundler = webpack(config);
//     app.use(webpackDevMiddleware(bundler, {noInfo: true}));
//     app.use(webpackHotMiddleware(bundler, {log: console.log}));
// }

app.get('/api/issues', (req, res) => {
  console.log(req);
  const filter = {};
  if (req.query.status) filter.status = req.query.status;
  db.collection('issues').find(filter).toArray()
    .then((issues) => {
      const metadata = { total_count: issues.length };
      res.json({ _metadata: metadata, records: issues });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: `Internal Server Error: ${err}` });
    });
});

app.post('/api/issues', (req, res) => {
  const newIssue = req.body;
  console.log(newIssue);

  // newIssue.id = issues.length + 1;
  newIssue.created = new Date();
  if (!newIssue.status) {
    newIssue.status = 'New';
  }

  const err = Issue.validateIssue(newIssue);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }

  db.collection('issues').insertOne(Issue.cleanupIssue(newIssue))
    .then(result => db.collection('issues').find({ _id: result.insertedId }).limit(1).next())
    .then((newIssue) => {
      console.log(newIssue);
      res.json(newIssue);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({message: `Internal Server Error: ${err}`});
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('static/index.html'));
});

let db;
let client;

MongoClient.connect('mongodb://localhost', { useNewUrlParser: true })
  .then((connection) => {
    client = connection;
    db = client.db('issuetracker');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.log('Error:', error);
  });
