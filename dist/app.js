"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongodb = require("mongodb");

require("babel-polyfill");

var _sourceMapSupport = _interopRequireDefault(require("source-map-support"));

var _issue = _interopRequireDefault(require("./issue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require("express");
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const Issue = require('./issue');
_sourceMapSupport.default.install();

var app = (0, _express.default)();
app.use(_express.default.static('static'));
app.use(_bodyParser.default.json()); // console.log(process.env.NODE_ENV);
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

app.get('/api/issues', function (req, res) {
  db.collection('issues').find().toArray().then(function (issues) {
    var metadata = {
      total_count: issues.length
    };
    res.json({
      _metadata: metadata,
      records: issues
    });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error: ".concat(err)
    });
  });
});
app.post('/api/issues', function (req, res) {
  var newIssue = req.body;
  console.log(newIssue); // newIssue.id = issues.length + 1;

  newIssue.created = new Date();

  if (!newIssue.status) {
    newIssue.status = 'New';
  }

  var err = _issue.default.validateIssue(newIssue);

  if (err) {
    res.status(422).json({
      message: "Invalid request: ".concat(err)
    });
    return;
  }

  db.collection('issues').insertOne(_issue.default.cleanupIssue(newIssue)).then(function (result) {
    return db.collection('issues').find({
      _id: result.insertedId
    }).limit(1).next();
  }).then(function (newIssue) {
    console.log(newIssue);
    res.json(newIssue);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error: ".concat(err)
    });
  });
});
var db;
var client;

_mongodb.MongoClient.connect('mongodb://localhost', {
  useNewUrlParser: true
}).then(function (connection) {
  client = connection;
  db = client.db('issuetracker');
  app.listen(3000, function () {
    console.log('Server started on port 3000');
  });
}).catch(function (error) {
  console.log('Error:', error);
});
//# sourceMappingURL=app.js.map