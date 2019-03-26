/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class IssueEdit extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>This is a placeholder for the editting issue {this.props.match.params.id}</p>
        <Link to="/issues">Back to Issue List</Link>
      </div>
    );
  }
}

IssueEdit.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  params: PropTypes.object.isRequired,
};
