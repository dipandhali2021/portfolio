import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import Site from './common';

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
    endDate?: string;
    details?: string;
    logoScale?: number;
}

export const experienceTimeline: ExperienceTimelineItem[] = [
    {
        company: 'Members Co., Ltd',
        role: 'Full Stack Web SWE Intern',
        url: 'https://www.members.co.jp/',
        logoUrl: 'https://www.members.co.jp/hubfs/logo.svg',
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
        logoUrl: 'https://codeforgovtech.in/wp-content/uploads/2024/01/logo.webp',
        logoAlt: 'C4GT Logo',
        startDate: '2024-06-01',
        endDate: '2024-09-30',
        details:
            'Delivered Keycloak-powered RBAC, jBPM automation, and Grafana/Prometheus monitoring for The Mifos Initiative—cutting manual beneficiary ops by half.'
    }
];
