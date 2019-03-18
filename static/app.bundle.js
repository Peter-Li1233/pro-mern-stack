!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),c=(r=o)&&r.__esModule?r:{default:r};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=document.getElementById("container"),f=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,React.Component),a(t,[{key:"render",value:function(){return React.createElement("div",null,"This is a place holder for the issue Filter.")}}]),t}(),p=function(e){return React.createElement("tr",null,React.createElement("td",null,e.issue._id),React.createElement("td",null,e.issue.status),React.createElement("td",null,e.issue.owner),React.createElement("td",null,e.issue.created.toDateString()),React.createElement("td",null,e.issue.effort),React.createElement("td",null,e.issue.completionDate?e.issue.completionDate.toDateString():""),React.createElement("td",null,e.issue.title))},d=function(e){var t=e.issues.map(function(e){return React.createElement(p,{key:e._id,issue:e})});return React.createElement("table",{className:"bordered-table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Id"),React.createElement("th",null,"Status"),React.createElement("th",null,"Owner"),React.createElement("th",null,"Created"),React.createElement("th",null,"Effort"),React.createElement("th",null,"Completion Date"),React.createElement("th",null,"title"))),React.createElement("tbody",null,t))},m=function(e){function t(){l(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={issues:[]},e.createIssue=e.createIssue.bind(e),e}return i(t,React.Component),a(t,[{key:"createIssue",value:function(e){var t=this;fetch("/api/issues",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){e.ok?e.json().then(function(e){e.created=new Date(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate));var n=t.state.issues.concat(e);t.setState({issues:n})}):e.json().then(function(e){alert("Failed to add issue: "+e.message)})}).catch(function(e){console.log(e)})}},{key:"loadData",value:function(){var e=this;fetch("/api/issues").then(function(t){t.ok?t.json().then(function(t){console.log("Total count of records: ",t._metadata.total_count),t.records.forEach(function(e){e.created=new Date(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate))}),e.setState({issues:t.records})}):t.json().then(function(e){alert("Failed to fetch issues:"+e.message)})}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){return React.createElement("div",null,React.createElement("h1",null,"Issue Tracker"),React.createElement(f,null),React.createElement("hr",null),React.createElement(d,{issues:this.state.issues}),React.createElement("hr",null),React.createElement(c.default,{createIssue:this.createIssue}))}}]),t}();ReactDOM.render(React.createElement(m,null),s)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleSubmit=e.handleSubmit.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),r(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.issueAdd;this.props.createIssue({owner:t.owner.value,title:t.title.value,status:"New",created:new Date}),t.owner.value="",t.title.value=""}},{key:"render",value:function(){return React.createElement("div",null,React.createElement("form",{name:"issueAdd",onSubmit:this.handleSubmit},React.createElement("input",{type:"text",name:"owner",placeholder:"Owner"}),React.createElement("input",{type:"text",name:"title",placeholder:"Title"}),React.createElement("button",null,"Add")))}}]),t}();t.default=a}]);