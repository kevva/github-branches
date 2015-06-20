'use strict';
var test = require('ava');
var githubBranches = require('./');

test(function (t) {
	t.plan(3);

	githubBranches('kevva/github-branches', function (err, branches) {
		t.assert(!err, err);
		t.assert(branches.length === 1, branches.length);
		t.assert(branches[0].name === 'master', branches[0]);
	});
});
