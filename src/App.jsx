/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const destination = document.getElementById('container');
const NoMatch = () => <p>Page Not Found</p>;

const RouteApp = () => (
  <HashRouter>
    {/* <Redirect from='/' to='/issues' /> */}
    <Route exact path="/issues" component={IssueList} />
    <Route exact path="/issues/:id" component={IssueEdit} />
    <Route path="*" component={NoMatch} />
  </HashRouter>
);

ReactDOM.render(<RouteApp />, destination);

if (module.hot) {
  module.hot.accept();
}
