import { useLocation } from 'react-router-dom';

type LinkProps = {
  text: string;
  href: string;
  underlined: boolean;
};

export const useLinks = (includeHome?: boolean) => {
  const { pathname } = useLocation();

  const links: LinkProps[] = [
    ...(includeHome
      ? [
          {
            text: 'Home',
            href: '/',
            underlined: pathname === '/',
          },
        ]
      : []),
    {
      text: 'About',
      href: '/about',
      underlined: pathname === '/about',
    },
    {
      text: 'Resume',
      href: '/resume',
      underlined: pathname === '/resume',
    },
    {
      text: 'Projects',
      href: '/projects',
      underlined: pathname === '/projects',
    },
    {
      text: 'Contact',
      href: '/contact',
      underlined: pathname === '/contact',
    },
  ];

  return { links };
};
