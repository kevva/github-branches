import test from 'ava';
import m from './';

test('get branches', async t => {
	const data = await m('kevva/github-branches');
	t.truthy(data.length);
	t.is(data[0].name, 'master');
});

test('accepts a string', async t => {
	t.throws(m(0), 'Expected a `string`, got `number`');
});
