'use strict';
const ghGot = require('gh-got');

module.exports = (repo, opts) => {
	opts = opts || {};

	if (typeof repo !== 'string') {
		return Promise.reject(new TypeError(`Expected a \`string\`, got \`${typeof repo}\``));
	}

	return ghGot(`repos/${repo}/branches`, opts).then(res => res.body);
};
