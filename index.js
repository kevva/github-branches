'use strict';
const ghGot = require('gh-got');

module.exports = (repo, opts) => {
	opts = opts || {};

	let page = 1;
	let ret = [];

	if (typeof repo !== 'string') {
		return Promise.reject(new TypeError(`Expected a \`string\`, got \`${typeof repo}\``));
	}

	return (function loop() {
		const url = `repos/${repo}/branches?page=${page}`;

		return ghGot(url, opts).then(res => {
			ret = ret.concat(res.body);

			if (res.headers.link && res.headers.link.includes('next')) {
				page++;
				return loop();
			}

			return ret;
		});
	})();
};
