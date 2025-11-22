export type AchievementItem =
	| string
	| {
		title: string;
		description?: string;
		href: string;
		date?: string;
	};

export const achievements: AchievementItem[] = [
	'Smart India Hackathon 2024 Finalist (Problem 1742)',
	'C4GT Gold Badge – 18th overall contributor',
	{
		title: 'CodeChef Starters 116',
		description: 'Finished 37th in Division 4 solving every problem',
		href: 'https://www.codechef.com/users/dipandhali2021',
		date: '2024'
	},
	{
		title: 'Postman API Fundamentals',
		description: 'Certified for hands-on REST API development and testing',
		href: 'https://academy.postman.com/certification/api-fundamentals/'
	},
	'Shipped 200+ LeetCode solutions and 100+ CodeChef problems'
];

export const latestCommits = [
	{
		repo: 'dipandhali2021/DXTalent',
		message: 'feat: wire Gemini-powered DX lessons + Stripe plans',
		href: 'https://github.com/dipandhali2021/DXTalent/commit/4c5c6b7',
		sha: '4c5c6b7'
	},
	{
		repo: 'dipandhali2021/pathos',
		message: 'chore: VS Code Marketplace assets for v1.1 launch',
		href: 'https://github.com/dipandhali2021/pathos/commit/d19cafe',
		sha: 'd19cafe'
	},
	{
		repo: 'openMF/community-app',
		message: 'perf: add beneficiary segmentation filters for mapper API',
		href: 'https://github.com/openMF/community-app/commit/ac1d1ab',
		sha: 'ac1d1ab'
	},
	{
		repo: 'dipandhali2021/portfolio',
		message: 'content: personalize homepage + achievements',
		href: 'https://github.com/dipandhali2021/portfolio/commit/b71d00d',
		sha: 'b71d00d'
	}
];
