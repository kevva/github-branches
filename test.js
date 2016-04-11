'use strict';
var test = require('ava');
var githubBranches = require('./');

test(function (t) {
	t.plan(2);

	githubBranches('kevva/github-branches').then(function (branches) {
		t.assert(branches.length === 1, branches.length);
		t.assert(branches[0].name === 'master', branches[0]);
	});
});
