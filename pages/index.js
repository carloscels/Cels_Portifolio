import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avartar from '../components/Avatar';

import { motion } from "framer-motion";

import { fadeIn } from '../variants'

const Home = () => {
  return( 
  <div className='bg-primary/60 h-full'>
    {/* Text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-10 xl:text-left h-full container mx-auto'>       
    {/* Title */}
        <motion.h1
        variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
         className='h1'>
        Ideias Transformadas em<br /> 
          <span className='text-accent'>Software Full-Stack.</span>
        </motion.h1>      
    {/* Subtitle */}
        <motion.p 
        variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden'
        className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-5'>
          Saudações digitais! Meu nome é Carlos, um desenvolvedor full-stack apaixonado por criar experiências excepcionais na web. Se você está em busca de um profissional que domina todas as camadas do desenvolvimento - desde o back-end até o front-end - você está prestes a encontrar a peça-chave para o sucesso do seu projeto.        </motion.p>
        {/* Btn */}
        <div className='flex justify-center xl:hidden relative'>
          <ProjectsBtn />
        </div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden'
        className='hidden xl:flex'>
          <ProjectsBtn />
        </motion.div>
      </div>
    </div >
    {/* Image */}
    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      {/* BG Img */}
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
      </div>
        {/* Particles */}
        <div>
          <ParticlesContainer />
        </div>
        {/* Avatar */}
        <motion.div
          variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit='hidden' transition={{duration: 1, ease:'easeInOut'}}
          className='w-full h-full max-w-[535px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]' >
          <Avartar />
        </motion.div>
    </div>
  </div>
  );
};

export default Home;
