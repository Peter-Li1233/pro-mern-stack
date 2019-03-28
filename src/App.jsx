/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import PropTypes from 'prop-types';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const destination = document.getElementById('container');
const NoMatch = () => <p>Page Not Found</p>;

const App = (props) => {
  // eslint-disable-next-line no-console
  console.log(props);
  return (
    <div>
      <div className="header">
        <h1>Issue Tracker</h1>
      </div>
      <RouteNestedApp />
      <div className="footer">
        Full source code available at this
        <a href="https://github.com/Peter-Li1233/pro-mern-stack">GitHub repository</a>
      </div>
    </div>
 );
};

const RouteNestedApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/issues" component={IssueList} />
      <Route exact path="/issues/:id" component={IssueEdit} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);


// App.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   children: PropTypes.object.isRequired,
// };

const RouteApp = () => (
  <BrowserRouter>
    {/* <Redirect exact from="/" to="/issues" /> */}
    <Route path="/" component={App}>
      {/* <div>
      <Route path="/issues" component={IssueList} />
      <Route path="/issues/:id" component={IssueEdit} />
      <Route path="*" component={NoMatch} />
    </div> */}
    </Route>
  </BrowserRouter>
);

ReactDOM.render(<RouteApp />, destination);

if (module.hot) {
  module.hot.accept();
}
