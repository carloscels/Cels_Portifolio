import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className ='flex flex-col xl:flex-row gap-x-8'>
        <div>
          <motion.h2
          variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden'
           className='h2 xl:mt-8'>
          Meus 
            <span className='text-accent'> Serviços.</span>
          </motion.h2>
          <motion.p 
          variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
Em um cenário digital cada vez mais dinâmico, a busca por um parceiro que não apenas compreenda, mas integre de maneira magistral todas as dimensões do desenvolvimento é crucial. Eu sou o seu desenvolvedor full-stack, pronto para não apenas atender, mas exceder suas expectativas em todas as fases da criação digital.          </motion.p>
        </div>
        <motion.div
        variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden'
        className='w-full xl:max-w-[65%]'>
          <ServiceSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Services;
