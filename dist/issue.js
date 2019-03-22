"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var validIssueStatus = {
  New: true,
  Open: true,
  Assigned: true,
  Fixed: true,
  Verified: true,
  Closed: true
};
var issueFieldType = {
  status: 'required',
  owner: 'required',
  effort: 'optional',
  created: 'required',
  completionDate: 'optional',
  title: 'required'
};

function cleanupIssue(issue) {
  var cleanedUpIssue = {};
  Object.keys(issue).forEach(function (field) {
    if (issueFieldType[field]) {
      cleanedUpIssue[field] = issue[field];
    }
  });
  return cleanedUpIssue;
}

function validateIssue(issue) {
  var errors = [];
  Object.keys(issueFieldType).forEach(function (field) {
    if (issueFieldType[field] === 'required' && !issue[field]) {
      errors.push("Missing Mandatory field: ".concat(field));
    }
  });

  if (!validIssueStatus[issue.status]) {
    errors.push("".concat(issue.status, " is not a valid status"));
  }

  return errors.length ? errors.join(';') : null;
}

var _default = {
  cleanupIssue: cleanupIssue,
  validateIssue: validateIssue
};
exports.default = _default;
//# sourceMappingURL=issue.js.map