#!/usr/bin/env node
'use strict';

var meow = require('meow');
var githubBranches = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ github-branches kevva/github-branches',
		'  $ github-branches kevva/github-branches --token 523ef69119eadg12',
		'',
		'Options',
		'  -t, --token    GitHub authentication token'
	]
}, {
	string: ['token'],
	alias: {t: 'token'}
});

if (!cli.input[0]) {
	console.error('Repository is required');
	process.exit(1);
}

githubBranches(cli.input[0], cli.flags, function (err, data) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	data.forEach(function (branch) {
		console.log(branch.name);
	});
});
