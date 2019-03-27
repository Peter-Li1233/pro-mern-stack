/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class IssueFilter extends React.Component {
  constructor() {
    super();
    this.clearFilter = this.clearFilter.bind(this);
    this.setFilterOpen = this.setFilterOpen.bind(this);
    this.setFilterAssigned = this.setFilterAssigned.bind(this);
  }

  setFilterOpen(e) {
    e.preventDefault();
    this.props.setFilter('?status=Open');
  }

  setFilterAssigned(e) {
    e.preventDefault();
    this.props.setFilter('?status=Assigned');
  }

  clearFilter(e) {
    e.preventDefault();
    this.props.setFilter('');
  }

  render() {
    const Seperator = () => <span> | </span>;
    // eslint-disable-next-line no-console
    console.log(this.props);
    return (
      <div>
        <a href='#' onClick={this.clearFilter}>All Issues</a>
        <Seperator />
        <a href='#' onClick={this.setFilterOpen}>Open Issues</a>
        <Seperator />
        <a href='#' onClick={this.setFilterAssigned}>Assigned Issues</a>
      </div>
    );
  }
}

IssueFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
}