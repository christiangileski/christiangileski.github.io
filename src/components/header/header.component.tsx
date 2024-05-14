import { Link as Link } from 'react-router-dom';
import { FocusableItem, Menu } from '@szhsin/react-menu';

import logo from '../../assets/logo.png';
import burger from '../../assets/burger-icon.svg';
import { useLinks } from '../../utilities/links.hooks';

import './header.scss';

export const Header = () => {
  const { links } = useLinks(true);

  return (
    <div className='header-container'>
      <Link className='logo' to='/'>
        <img src={logo} alt='Logo' width='auto' height='64' />
      </Link>

      <div className='header-links'>
        {links.map(({ text, href, underlined }) => (
          <Link
            key={text}
            className={underlined ? 'underline' : undefined}
            to={href}
          >
            {text}
          </Link>
        ))}
      </div>

      <Menu
        menuButton={
          <button className='header-menu-button'>
            <img src={burger} alt='Menu' width='auto' height='48' />
          </button>
        }
        align='end'
        gap={12}
      >
        {links.map(({ text, href }) => (
          // Using FocusableItem is the recommended way to handle SPA links. This maintains accessibility and keyboard navigation.
          // https://szhsin.github.io/react-menu#link-disabled
          <FocusableItem key={text}>
            {({ ref, closeMenu }) => (
              <Link
                ref={ref}
                to={href}
                onClick={({ detail }) =>
                  closeMenu(detail === 0 ? 'Enter' : undefined)
                }
              >
                {text}
              </Link>
            )}
          </FocusableItem>
        ))}
      </Menu>
    </div>
  );
};
