export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Agency',
    description:
      'Discover creative websites and developers. A portal for you to share your projects using React.Js.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/Michael2197/AgencyUpdated-main',
    slug: 'Agency',
  },
  {
    title: 'FS Restrunt',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/Michael2197/Restrunt',
    slug: 'FS Restrunt',
  },
  {
    title: 'music bot',
    description:
      'A simple and elegant way to track your subscriptions and save money.',
    logo: '/logos/subtrackt.svg',
    link: 'https://github.com/Michael2197/musicbot-main',
    slug: 'music bot',
  },
  {
    title: 'FS GYM',
    description:
      'VSCode extension to track and deploy your Coolify applications.',
    logo: '/logos/coolify.svg',
    link: 'https://github.com/Michael2197/Gym-website-Full-stack-Native-',
    slug: 'FS GYM',
  },
];
