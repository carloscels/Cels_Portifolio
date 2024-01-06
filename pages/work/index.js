import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'

const Work = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className ='flex flex-col xl:flex-row gap-x-8'>
        <div>
          <motion.h2
          variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden'
           className='h2 xl:mt-10'>
          Meus 
            <span className='text-accent'> Projetos.</span>
          </motion.h2>
          <motion.p 
          variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
Como desenvolvedor full-stack, mergulho de cabeça em projetos desafiadores, transformando visões em realidade digital. Minha abordagem holística abrange cada fase do desenvolvimento, garantindo não apenas funcionalidade, mas também uma experiência única para os usuários.          </motion.p>
        </div>
        <motion.div
        variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden'
        className='w-full xl:max-w-[65%]'>
          <WorkSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Work;
