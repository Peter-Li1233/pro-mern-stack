import React from 'react';
import ReactDOM from 'react-dom';

import IssueList from './IssueList.jsx';

var destination = document.getElementById("container");

ReactDOM.render(<IssueList />, destination);

if (module.hot) {
    module.hot.accept();
}