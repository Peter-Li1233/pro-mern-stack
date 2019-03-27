import React from 'react';

export default class IssueAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var form = document.forms.issueAdd;
        this.props.createIssue({
            owner:form.owner.value,
            title:form.title.value,
            status:'New',
            created:new Date(),
        });

        form.owner.value='';
        form.title.value='';

    }
    render() {
        console.log("renders again...");
        console.log(this.props);
        return (
            <div>
                <form name="issueAdd" onSubmit={this.handleSubmit}>
                    <input type='text' name='owner' placeholder="Owner" />
                    <input type='text' name='title' placeholder="Title" />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

// function IssueAdd(props) {
//     function handleSubmit(e) {
//         e.preventDefault();
//         var form = document.forms.issueAdd;
//         props.createIssue({
//             owner:form.owner.value,
//             title:form.title.value,
//             status:'New',
//             created:new Date(),
//         });

//         form.owner.value='';
//         form.title.value='';

//     }
//     return (
//         <div>
//             <form name="issueAdd" onSubmit={handleSubmit}>
//                 <input type='text' name='owner' placeholder="Owner" />
//                 <input type='text' name='title' placeholder="Title" />
//                 <button>Add</button>
//             </form>
//         </div>
//     );
    
// }