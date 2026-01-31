import { Link as Link } from 'react-router-dom';
import { useLinks } from '../../utilities/links.hooks';
import './home.scss';

export const Home = () => {
  const { links } = useLinks();

  return (
    <div className='home-container'>
      <h1 className='title'>Hi, I'm Christian.</h1>
      <h2 className='subtitle'>Welcome, thanks for stopping by.</h2>

      <div className='home-links'>
        {links.map(({ text, href }) => (
          <Link key={text} to={href}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};
