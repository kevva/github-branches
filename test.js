import test from 'ava';
import fn from './';

test(async t => {
	const data = await fn('kevva/github-branches');
	t.truthy(data.length);
	t.is(data[0].name, 'master');
});
