import linkedInSrc from '../../assets/linkedin.svg';
import instagramSrc from '../../assets/instagram.svg';
import githubSrc from '../../assets/github.svg';

import './contact.scss';
import { NewTabLink } from '../../components';

export const Contact = () => {
  return (
    <div className='contact-container'>
      <h1 className='title'>Let's chat.</h1>
      <h2 className='subtitle'>Reach out and say hello -</h2>

      <div className='contact-info'>
        christiangileski@gmail.com
        <br />
        845-857-3956
      </div>

      <div className='contact-links'>
        <NewTabLink href='https://www.linkedin.com/in/christiangileski/'>
          <img src={linkedInSrc} alt='LinkedIn' />
        </NewTabLink>
        <NewTabLink href='https://www.instagram.com/christianryang'>
          <img src={instagramSrc} alt='Instagram' />
        </NewTabLink>
        <NewTabLink href='https://github.com/christiangileski'>
          <img src={githubSrc} alt='Github' />
        </NewTabLink>
      </div>
    </div>
  );
};
