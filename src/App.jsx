/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import PropTypes from 'prop-types';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter,
  Route,
} from 'react-router-dom';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const destination = document.getElementById('container');
const NoMatch = () => <p>Page Not Found</p>;

const App = (props) => (
  <div>
    <div className="header">
      <h1>Issue Tracker</h1>
    </div>
    <div className="contents">
      {props.children}
    </div>
    <div className="footer">
     Full source code available at this 
      <a href="https://github.com/Peter-Li1233/pro-mern-stack">
     GitHub repository
      </a>
    </div>
  </div>
);

// App.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   children: PropTypes.object.isRequired,
// };

const RouteApp = () => (
  <HashRouter>
    {/* <Redirect from="/" to="/issues" /> */}
    <Route path="/" compoenent={App}>
      <Route path="/issues" component={IssueList} />
      <Route path="/issues/:id" component={IssueEdit} />
      <Route path="*" component={NoMatch} />
    </Route>
  </HashRouter>
);

ReactDOM.render(<RouteApp />, destination);

if (module.hot) {
  module.hot.accept();
}
