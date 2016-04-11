'use strict';
const ghGot = require('gh-got');

module.exports = (repo, opts) => {
	opts = opts || {};

	if (typeof repo !== 'string') {
		return Promise.reject(new Error('Repository is required'));
	}

	return ghGot(`repos/${repo}/branches`, opts).then(res => res.body);
};
