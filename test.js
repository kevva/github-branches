import test from 'ava';
import m from './';

test(async t => {
	const data = await m('kevva/github-branches');
	t.truthy(data.length);
	t.is(data[0].name, 'master');
});
