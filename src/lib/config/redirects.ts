/*
 * Copyright (c) 2025. Dipan Dhali
 * All Rights Reserved
 */
import Site from '$lib/config/common';
import createRedirects from '$utils/redirects';

const redirects = createRedirects([
	{ paths: ['/github', '/gh'], url: Site.out.github },
	{ paths: ['/linkedin', '/li'], url: Site.out.linkedin },
	{ paths: '/leetcode', url: Site.out.leetcode || Site.out.github },
	{ paths: '/codechef', url: Site.out.codechef || Site.out.github },
	{ paths: ['/insta', '/ig'], url: Site.out.instagram || Site.out.linkedin },
	{ paths: ['/cal', '/chat', '/email'], url: Site.out.calcom },
	{ paths: '/hello', url: Site.out.email },
	{ paths: '/repo', url: Site.repo.url },
	{ paths: '/resume', url: '/resume.pdf' },
	{ paths: '/dxtalent', url: 'https://dxtalent.vercel.app' },
	{ paths: '/pathos', url: 'https://marketplace.visualstudio.com/items?itemName=DipanDhali.pathos' }
]);

export default redirects;
