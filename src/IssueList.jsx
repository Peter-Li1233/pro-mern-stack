/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import 'whatwg-fetch';

import IssueAdd from './IssueAdd.jsx';
import IssueFilter from './IssueFilter.jsx';

import PropTypes from 'prop-types';


// class IssueRow extends React.Component {
//     render() {
//         const issue = this.props.issue;
//         console.log("count");
//         return (
//             <tr>
//               <td>{issue._id}</td>  
//               <td>{issue.status}</td>
//               <td>{issue.owner}</td>
//               <td>{issue.created.toDateString()}</td>
//               <td>{issue.effort}</td>
//               <td>{issue.completionDate? 
//               issue.completionDate.toDateString(): ''}</td>
//               <td>{issue.title}</td>
//             </tr>
//         );
        
//     };
// }

const IssueRow = props => (
  <tr>
    <td>
      <Link to={`/issues/${props.issue._id}`}>
        {props.issue._id.substr(-4)} 
      </Link>
    </td>
    <td>{props.issue.status}</td>
    <td>{props.issue.owner}</td>
    <td>{props.issue.created.toDateString()}</td>
    <td>{props.issue.effort}</td>
    <td>
      {props.issue.completionDate? props.issue.completionDate.toDateString(): ''}
    </td>
    <td>{props.issue.title}</td>
  </tr>
)

// class IssueTable extends React.Component {
//     render() {
//         const issueRows = this.props.issues.map(issue => <IssueRow key={issue._id} issue={issue} />)
//         return (
//             <table className="bordered-table">
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Status</th>
//                         <th>Owner</th>
//                         <th>Created</th>
//                         <th>Effort</th>
//                         <th>Completion Date</th>
//                         <th>title</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {issueRows}
//                 </tbody>
//             </table>
//         );
//     }
// }

const IssueTable = (props) => {
    const issueRows = props.issues.map(issue => <IssueRow key={issue._id} issue={issue} />)
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {issueRows}
        </tbody>
      </table>
    );
};

export default class IssueList extends React.Component {
    constructor() {
        super();
        this.state = { issues: [] };
        this.createIssue = this.createIssue.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps) {
        const oldQuery = prevProps.location.search;
        const newQuery = this.props.location.search;
        // eslint-disable-next-line no-console
        console.log(this.props);
        if (oldQuery === newQuery) {
            return;
        }

        this.loadData();
    }

    setFilter(query) {
      this.props.history.push({ pathname: this.props.location.pathname, search: query });
    }

    createIssue(newIssue) {
        fetch('/api/issues', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newIssue),
        })
        .then((response) => {
          if (response.ok) {
            response.json()
            .then((newIssue) => {
                newIssue.created = new Date(newIssue.created);
                if (newIssue.completionDate) {
                    newIssue.completionDate = new Date(newIssue.completionDate);
                }
                const newIssues = this.state.issues.concat(newIssue);
                this.setState({ issues: newIssues });
            });
         } else {
             response.json().then((error) => {
                 alert(`Failed to add issue: ${error.message}`);
             });
         }
        })
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err);
        });
    }

    loadData() {
        fetch(`/api/issues${this.props.location.search}`)
        .then((response) => {
            if (response.ok) {
                response.json()
                .then((data) => {
                    // eslint-disable-next-line no-console
                    console.log('Total count of records: ', data._metadata.total_count);
                    data.records.forEach((issue) => {
                        issue.created = new Date(issue.created);
                        if (issue.completionDate) {
                            issue.completionDate = new Date(issue.completionDate);
                        }
                    });
                    this.setState({ issues: data.records });
                });
            } else {
                response.json().then((error) => {
                    alert(`Failed to fetch issues: ${error.message}`);
                });
            }
        })
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err);
        });
    }

    render() {
        return (
          <div>
            <IssueFilter setFilter={this.setFilter} />
            <hr />
            <IssueTable issues={this.state.issues} />
            <hr />
            <IssueAdd createIssue={this.createIssue} />
          </div>
        );
    }
}

IssueList.propTypes = {
    location: PropTypes.object.isRequired,
};
