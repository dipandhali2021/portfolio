import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-svelte';
import Site from '$lib/config/common';

export const Home = {
	socialLinks: [
		{
			href: Site.out.github,
			text: 'GitHub',
			icon: IconBrandGithub
		},
		{
			href: Site.out.linkedin,
			text: 'LinkedIn',
			icon: IconBrandLinkedin
		},
		{
			href: Site.out.email,
			text: 'Email',
			icon: IconMail
		}
	]
};

export interface ExperienceTimelineItem {
	company: string;
	role: string;
	url: string;
	logoUrl: string;
	logoAlt: string;
	startDate: string;
	endDate?: string; // optional endDate. If present, it's a past role.
	details?: string; // Optional details for expansion
	logoScale?: number; // Optional logo scale multiplier
}

export const experienceTimeline: ExperienceTimelineItem[] = [
	{
		company: 'Members Co., Ltd',
		role: 'Full Stack Web SWE Intern',
		url: 'https://www.members.co.jp/',
		logoUrl: '/logos/members.svg',
		logoAlt: 'Members Co., Ltd Logo',
		startDate: '2025-05-01',
		endDate: '2025-07-31',
		details:
			'Built a DX maturity platform for enterprise DevOps teams—shipping CI/CD observability dashboards, Gemini-powered coaching, and AWS-hosted API processors.',
		logoScale: 1.05
	},
	{
		company: 'Code For GovTech',
		role: 'Open Source Developer Intern',
		url: 'https://codeforgovtech.in/',
		logoUrl: '/logos/c4gt.svg',
		logoAlt: 'C4GT Logo',
		startDate: '2024-06-01',
		endDate: '2024-09-30',
		details:
			'Delivered Keycloak-powered RBAC, jBPM automation, and Grafana/Prometheus monitoring for The Mifos Initiative—cutting manual beneficiary ops by half.'
	},
	{
		company: 'DXTalent',
		role: 'Founder & Product Engineer',
		url: 'https://dxtalent.vercel.app',
		logoUrl: '/logos/dxtalent.svg',
		logoAlt: 'DXTalent Logo',
		startDate: '2025-10-01',
		details:
			'Building an AI-powered DX learning marketplace with Stripe monetization, recruiter-learners workflow, and a gamified credibility engine for Asian upskilling teams.'
	}
];
