import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconChefHat,
} from '@tabler/icons-react';

export interface Site {
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
    url: import.meta.env.DEV ? 'http://localhost:5173' : 'https://dipandhali2021.github.io',
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
        calcom: 'https://cal.com/dipan-dhali/15min',
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

export const Socials = [
    {
        label: 'GitHub',
        url: Site.out.github,
        icon: IconBrandGithub,
        footer: true
    },
    {
        label: 'LinkedIn',
        url: Site.out.linkedin,
        icon: IconBrandLinkedin,
        footer: true
    },
    {
        label: 'Email',
        url: Site.out.email,
        icon: IconMail,
        footer: true
    },
    {
        label: 'CodeChef',
        url: Site.out.codechef || '#',
        icon: IconChefHat,
        footer: false
    }
];

export default Site;
