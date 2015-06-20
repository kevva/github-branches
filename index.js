'use strict';
var ghGot = require('gh-got');

module.exports = function (repo, opts, cb) {
	opts = opts || {};

	if (typeof repo !== 'string') {
		throw new Error('Repository is required');
	}

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	var url = 'repos/' + repo + '/branches';

	ghGot(url, opts, function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, data);
	});
};
