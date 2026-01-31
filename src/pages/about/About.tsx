import imageSrc from '../../assets/christian.jpeg';
import { NewTabLink } from '../../components';

import './about.scss';

export const About = () => {
  return (
    <div className='about-container'>
      <img
        className='about-image'
        src={imageSrc}
        alt='Christian'
        width='auto'
        height='650'
      />

      <div className='about-text'>
        Hi, my name is <b>Christian Gileski</b>. Thank you so much for visiting
        my page, I appreciate you taking the time out of your day!
        <br />
        <br />
        I'm a front-end software engineer based in Rochester, New York,
        specializing in <b>React</b> and <b>Typescript</b> applications. I have
        experience developing software for higher education, structured content,
        customer relationship management, and more. In addition, I'm an
        enthusiast for design systems, and like to spend time working with
        designers to ensure clean, consistent, functional designs resulting in
        sleek products.
        <br />
        <br />I graduated from <b>Rochester Institute of Technology</b> in 2016
        with a BS in Game Design and Development. My former employers include{' '}
        <NewTabLink href='https://www.ellucian.com/'>Ellucian</NewTabLink>,{' '}
        <NewTabLink href='https://www.heretto.com/'>Heretto</NewTabLink>, and{' '}
        <NewTabLink href='https://www.affinity.co/'>Affinity</NewTabLink>. I
        currently work for{' '}
        <NewTabLink href='https://www.vantaca.com/'>
          <b>Vantaca</b>
        </NewTabLink>
        .
        <br />
        <br />
        In my personal time, I enjoy playing pickleball, disc golf, hockey,
        kickball, volleyball, and pretty much any other recreational sports you
        can think of. I love watching football on Sundays, visiting different
        breweries with my dear friends, and spending time in the sun, especially
        considering Rochester doesn't get much of it. I'm also an aspiring DJ.
        If you are curious, my favorite beer is the Double Berry Wheat from
        Cooper River Brewing in beautiful Charleston, South Carolina. I like to
        think of myself as a social butterfly, so please feel free to reach out,
        connect on LinkedIn, or follow me on Instagram!
      </div>
    </div>
  );
};
