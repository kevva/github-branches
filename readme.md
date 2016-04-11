# github-branches [![Build Status](https://travis-ci.org/kevva/github-branches.svg?branch=master)](https://travis-ci.org/kevva/github-branches)

> Get all branches from a GitHub repository


## Install

```
$ npm install --save github-branches
```


## Usage

```js
const githubBranches = require('github-branches');

githubBranches('kevva/github-branches').then(branches => {
	console.log(branches);
	/*
	[{
		name: 'master',
		commit: {
			sha: '768eda9204db19df0bd59cffd0386fac7686ce02',
			url: 'https://api.github.com/repos/kevva/github-branches/commits/768eda9204db19df0bd59cffd0386fac7686ce02'
		}
	}, ...]
	*/
});
```


## CLI

```
$ npm install --global github-branches
```

```
$ github-branches --help

  Example
    $ github-branches kevva/github-branches
    $ github-branches kevva/github-branches --token 523ef69119eadg12

  Options
    -t, --token    GitHub authentication token
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
