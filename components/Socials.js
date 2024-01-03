import Link from "next/link";

import {RiGithubLine, RiLinkedinLine, RiBehanceLine } from 'react-icons/ri'


const Socials = () => {
  return (<div className='flex items-center gap-x-5 text-lg'>
      <Link href='https://www.linkedin.com/in/carloseduardoleosantos/' className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href='https://github.com/carloscels' className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href='https://www.behance.net/carloselsantos' className='hover:text-accent transition-all duration-300'>
        <RiBehanceLine />
      </Link>
    </div>
  );
};

export default Socials;
