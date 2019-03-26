/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
export default class IssueFilter extends React.Component {
  render() {
    const Seperator = () => <span> | </span>;
    // eslint-disable-next-line no-console
    console.log(this.props);
    return (
      <div>
        <Link to="/issues">All Issues</Link>
        <Seperator />
        <Link to={{ pathname: '/issues', search: 'status=Open' }}>Open Issues</Link>
        <Seperator />
        <Link to="/issues?status=Assigned">Assigned Issues</Link>
      </div>
    );
  }
}
