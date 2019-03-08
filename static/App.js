"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var destination = document.getElementById("container");

var IssueFilter = function (_React$Component) {
    _inherits(IssueFilter, _React$Component);

    function IssueFilter() {
        _classCallCheck(this, IssueFilter);

        return _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).apply(this, arguments));
    }

    _createClass(IssueFilter, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "This is a place holder for the issue Filter."
            );
        }
    }]);

    return IssueFilter;
}(React.Component);

// class IssueRow extends React.Component {
//     render() {
//         const issue = this.props.issue;
//         console.log("count");
//         return (
//             <tr>
//               <td>{issue.id}</td>  
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

var IssueRow = function IssueRow(props) {
    return React.createElement(
        "tr",
        null,
        React.createElement(
            "td",
            null,
            props.issue.id
        ),
        React.createElement(
            "td",
            null,
            props.issue.status
        ),
        React.createElement(
            "td",
            null,
            props.issue.owner
        ),
        React.createElement(
            "td",
            null,
            props.issue.created.toDateString()
        ),
        React.createElement(
            "td",
            null,
            props.issue.effort
        ),
        React.createElement(
            "td",
            null,
            props.issue.completionDate ? props.issue.completionDate.toDateString() : ''
        ),
        React.createElement(
            "td",
            null,
            props.issue.title
        )
    );
};

// class IssueTable extends React.Component {
//     render() {
//         const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
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

var IssueTable = function IssueTable(props) {
    var issueRows = props.issues.map(function (issue) {
        return React.createElement(IssueRow, { key: issue.id, issue: issue });
    });
    return React.createElement(
        "table",
        { className: "bordered-table" },
        React.createElement(
            "thead",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    null,
                    "Id"
                ),
                React.createElement(
                    "th",
                    null,
                    "Status"
                ),
                React.createElement(
                    "th",
                    null,
                    "Owner"
                ),
                React.createElement(
                    "th",
                    null,
                    "Created"
                ),
                React.createElement(
                    "th",
                    null,
                    "Effort"
                ),
                React.createElement(
                    "th",
                    null,
                    "Completion Date"
                ),
                React.createElement(
                    "th",
                    null,
                    "title"
                )
            )
        ),
        React.createElement(
            "tbody",
            null,
            issueRows
        )
    );
};

// class IssueAdd extends React.Component {
//     constructor() {
//         super();
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         var form = document.forms.issueAdd;
//         this.props.createIssue({
//             owner:form.owner.value,
//             title:form.title.value,
//             status:'New',
//             created:new Date(),
//         });

//         form.owner.value='';
//         form.title.value='';

//     }
//     render() {
//         return (
//             <div>
//                 <form name="issueAdd" onSubmit={this.handleSubmit}>
//                     <input type='text' name='owner' placeholder="Owner" />
//                     <input type='text' name='title' placeholder="Title" />
//                     <button>Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

function IssueAdd(props) {
    function handleSubmit(e) {
        e.preventDefault();
        var form = document.forms.issueAdd;
        props.createIssue({
            owner: form.owner.value,
            title: form.title.value,
            status: 'New',
            created: new Date()
        });

        form.owner.value = '';
        form.title.value = '';
    }
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { name: "issueAdd", onSubmit: handleSubmit },
            React.createElement("input", { type: "text", name: "owner", placeholder: "Owner" }),
            React.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
            React.createElement(
                "button",
                null,
                "Add"
            )
        )
    );
}

var IssueList = function (_React$Component2) {
    _inherits(IssueList, _React$Component2);

    function IssueList() {
        _classCallCheck(this, IssueList);

        var _this2 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

        _this2.state = { issues: [] };
        _this2.createIssue = _this2.createIssue.bind(_this2);
        return _this2;
    }

    _createClass(IssueList, [{
        key: "createIssue",
        value: function createIssue(newIssue) {
            var _this3 = this;

            fetch('/api/issues', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newIssue)
            }).then(function (response) {
                if (response.ok) {
                    response.json().then(function (newIssue) {
                        newIssue.created = new Date(newIssue.created);
                        if (newIssue.completionDate) {
                            newIssue.completionDate = new Date(newIssue.completionDate);
                        };
                        var newIssues = _this3.state.issues.concat(newIssue);
                        _this3.setState({ issues: newIssues });
                    });
                } else {
                    response.json().then(function (error) {
                        alert("Failed to add issue: " + error.message);
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: "loadData",
        value: function loadData() {
            var _this4 = this;

            fetch('/api/issues').then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log("Total count of records: ", data._metadata.total_count);

                data.records.forEach(function (issue) {
                    issue.created = new Date(issue.created);
                    if (issue.completionDate) {
                        issue.completionDate = new Date(issue.completionDate);
                    }
                });
                _this4.setState({ issues: data.records });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadData();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Issue Tracker"
                ),
                React.createElement(IssueFilter, null),
                React.createElement("hr", null),
                React.createElement(IssueTable, { issues: this.state.issues }),
                React.createElement("hr", null),
                React.createElement(IssueAdd, { createIssue: this.createIssue })
            );
        }
    }]);

    return IssueList;
}(React.Component);

ReactDOM.render(React.createElement(IssueList, null), destination);