import { ComponentProps, FC, ReactNode } from 'react';

import './newTabLink.scss';

type NewTabLinkProps = {
  href: HTMLAnchorElement['href'];
  children: ReactNode;
} & Omit<ComponentProps<'a'>, 'href' | 'target' | 'rel'>;

export const NewTabLink: FC<NewTabLinkProps> = ({
  href,
  children,
  ...anchorProps
}) => (
  <a
    className='new-tab-link'
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    {...anchorProps}
  >
    {children}
  </a>
);
