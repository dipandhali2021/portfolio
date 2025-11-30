interface NavItem {
    title: string;
    href: string;
    external?: boolean;
}

export const mainNavItems: NavItem[] = [
    { title: 'About', href: '/about' },
    { title: 'Posts', href: '/posts' },
    { title: 'Projects', href: '/projects' },
    { title: 'Resume', href: 'http://drive.google.com/file/d/12cO8rE4HmbuDC-2AGDvf-Gb_D8SGRrNx/view', external: true }
];

export const moreNavItems: NavItem[] = [
    { title: 'Tutorials', href: '/tutorials' },
    { title: 'Notes', href: '/notes' },
];
