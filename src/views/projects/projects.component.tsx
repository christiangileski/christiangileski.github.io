import herettoSrc from '../../assets/heretto.png';
import viewpointSrc from '../../assets/viewpoint.png';
import { NewTabLink } from '../../components';

import './projects.scss';

export const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='projects-text'>
        I wanted to be able to showcase my coding ability to prospective
        employers, so I built this website to highlight my creative side as well
        as a little bit of coding expertise, as I believe that blend of skills
        is the combination I bring to the table. I bootstrapped the website
        using <NewTabLink href='https://vitejs.dev/'>Vite</NewTabLink>,
        registered the domain and maintain DNS records through{' '}
        <NewTabLink href='https://porkbun.com/'>Porkbun</NewTabLink>, and
        deployed the site through{' '}
        <NewTabLink href='https://pages.github.com/'>Github Pages</NewTabLink>.
        You can find the repository{' '}
        <NewTabLink href='https://github.com/christiangileski/christiangileski.github.io'>
          here
        </NewTabLink>
        .
        <br />
        <br />I didn't use <em>any</em> AI tools in the creation of this site.
        Professionally, I use Claude, ChatGPT, Cursor, etc. extensively, but I
        wanted to demonstrate that there are still programmers out there who can
        whip up applications from scratch. Although, I suppose that breed of
        developer is becoming obsolete with the prominence of the aforementioned
        AI tools. As such, I've been channeling my efforts towards becoming a
        better architect and thinking more about the long-term objectives that
        AI lacks the foresight to consider, but having the foundational coding
        skills is still important, in my opinion.
        <br />
        <br />
        The artist whose picture is used for the background is{' '}
        <b>Mark Kirkpatrick</b>. You can find him on{' '}
        <NewTabLink href='https://www.artstation.com/visualhuman'>
          ArtStation
        </NewTabLink>{' '}
        and{' '}
        <NewTabLink href='https://www.behance.net/mkcreativeco'>
          Behance
        </NewTabLink>
        .
        <br />
        <br />
        The majority of the work I have done professionally is gated by login.
        As such, those web applications are private and inaccessible. However,
        at <NewTabLink href='https://www.heretto.com/'>Heretto</NewTabLink>, my
        team and I built a comprehensive portal to serve structured{' '}
        <NewTabLink href='https://en.wikipedia.org/wiki/Darwin_Information_Typing_Architecture'>
          DITA
        </NewTabLink>{' '}
        content. These sites are public. The unique feature of this portal is
        the full customization. The two sites linked below, the Heretto Help
        site and Viewpoint Help site, are the same application, yet you'll find
        they are styled completely differently. Click below to check them out!
      </div>
      <div className='heretto-sites'>
        <NewTabLink href='https://help.heretto.com/en'>
          <img
            src={herettoSrc}
            alt='Heretto Help Site'
            width='100%'
            height='auto'
          />
        </NewTabLink>
        <NewTabLink href='https://help.viewpoint.com/en'>
          <img
            src={viewpointSrc}
            alt='Viewpoint Help Site'
            width='100%'
            height='auto'
          />
        </NewTabLink>
      </div>
    </div>
  );
};
