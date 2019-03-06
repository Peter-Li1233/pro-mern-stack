var destination = document.getElementById("container");

const issues = [
    {
        id: 1, status: "Open", owner: "Raven",
        created: new Date('2019-03-01'), effort: 5, completionDate: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        id: 2, status: "Assigned", owner: 'Eddie',
        created: new Date('2019-03-01'), effort: 14, 
        completionDate: new Date('2019-03-04'),
        title: 'Missing bottom border on panel',
    },
];


class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a place holder for the issue Filter.</div>
        );
    }
}

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

const IssueRow = props => (
    <tr>
        <td>{props.issue.id}</td>  
        <td>{props.issue.status}</td>
        <td>{props.issue.owner}</td>
        <td>{props.issue.created.toDateString()}</td>
        <td>{props.issue.effort}</td>
        <td>{props.issue.completionDate? 
        props.issue.completionDate.toDateString(): ''}</td>
        <td>{props.issue.title}</td>
    </tr>
)

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

const IssueTable = (props) => {
    const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
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
}

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
            owner:form.owner.value,
            title:form.title.value,
            status:'New',
            created:new Date(),
        });

        form.owner.value='';
        form.title.value='';

    }
    return (
        <div>
            <form name="issueAdd" onSubmit={handleSubmit}>
                <input type='text' name='owner' placeholder="Owner" />
                <input type='text' name='title' placeholder="Title" />
                <button>Add</button>
            </form>
        </div>
    );
    
}

class IssueList extends React.Component {
    constructor() {
        super();
        this.state = {issues: []};
        this.createIssue = this.createIssue.bind(this);
    }

    createIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({issues:newIssues});
    }

    loadData() {
        setTimeout(() => {
            this.setState({issues: issues});
        }, 500);
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable  issues={this.state.issues}/>
                <hr />
                <IssueAdd createIssue={this.createIssue} />
            </div>
        );
    }
}

ReactDOM.render(<IssueList />, destination);