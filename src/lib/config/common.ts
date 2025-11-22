import {
	type Icon,
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLeetcode,
	IconBrandLinkedin,
	IconChefHat,
	IconMail
} from '@tabler/icons-svelte';
import { dev } from '$app/environment';
import Wakatime from '$lib/icons/Wakatime.svelte';

interface Site {
	name: string;
	url: string;
	description: string;
	tags: string[];
	seo: {
		author: string;
		birthDate: string;
		worksFor: {
			name: string;
			url: string;
		};
		location: {
			city: string;
			region: string;
			country: string;
		};
	};
	abacus: { enabled: boolean; instance?: string; namespace?: string; key?: string };
	out: {
		github: string;
		linkedin: string;
		calcom: string;
		wakatime?: string;
		bluesky?: string;
		instagram?: string;
		x?: string;
		leetcode?: string;
		codechef?: string;
		email: string;
	};
	repo: { url: string; commitBaseUrl: string };
}

const Site: Site = {
	name: 'Dipan Dhali',
	url: dev ? 'http://localhost:5173' : 'https://dipandhali2021.github.io',
	description:
		"Dipan Dhali — IIITDM Jabalpur ECE undergrad building DX platforms, developer tooling, and thoughtful web experiences.",
	tags: [
		'Dipan Dhali',
		'IIITDM Jabalpur',
		'DX Platform Engineer',
		'Full Stack Developer India',
		'Next.js Developer',
		'Django Developer',
		'DevOps',
		'Digital Transformation',
		'Open Source Contributor',
		'Docker',
		'AWS',
		'React',
		'TypeScript',
		'Node.js',
		'Python',
		'Data Visualization',
		'Product Engineering',
		'Gamification'
	],
	seo: {
		author: 'Dipan Dhali',
		birthDate: '2004-01-01',
		worksFor: {
			name: 'Members Co., Ltd',
			url: 'https://www.members.co.jp/'
		},
		location: {
			city: 'Jabalpur',
			region: 'Madhya Pradesh',
			country: 'India'
		}
	},
	abacus: {
		enabled: false
	},
	out: {
		github: 'https://github.com/dipandhali2021',
		linkedin: 'https://www.linkedin.com/in/dipan-dhali',
		calcom: 'mailto:dipandhali2021@gmail.com?subject=Let%27s%20build%20something',
		wakatime: 'https://wakatime.com/@dipandhali2021',
		leetcode: 'https://leetcode.com/u/dipandhali2021/',
		codechef: 'https://www.codechef.com/users/dipandhali2021',
		email: 'mailto:dipandhali2021@gmail.com'
	},
	repo: {
		url: 'https://github.com/dipandhali2021/portfolio',
		commitBaseUrl: 'https://github.com/dipandhali2021/portfolio/commit/'
	}
};

export default Site;

export const Socials = [
	{
		url: Site.out.github,
		label: 'GitHub',
		icon: IconBrandGithub,
		footer: true
	},
	{
		url: Site.out.linkedin,
		label: 'LinkedIn',
		icon: IconBrandLinkedin,
		footer: true
	},
	{
		url: Site.out.leetcode,
		label: 'LeetCode',
		icon: IconBrandLeetcode,
		footer: false
	},
	{
		url: Site.out.codechef,
		label: 'CodeChef',
		icon: IconChefHat,
		footer: false
	},
	{
		url: Site.out.email,
		label: 'Email',
		icon: IconMail,
		footer: true
	},
	{
		url: Site.out.wakatime,
		label: 'WakaTime',
		icon: Wakatime as unknown as Icon,
		footer: false
	},
	{
		url: Site.out.instagram,
		label: 'Instagram',
		icon: IconBrandInstagram,
		footer: false
	}
].filter((item) => Boolean(item.url));
