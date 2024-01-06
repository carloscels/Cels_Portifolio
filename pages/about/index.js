import React, {useState} from 'react'
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAws,
  FaFigma,
  FaBootstrap,
  FaAndroid,
  FaAngular,
  FaGithub,
  FaJava,
  FaNode,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiSpringboot,
  SiKotlin,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'Habilidades',
    info: [
      {
        title: 'Front-End',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaBootstrap />,
          <FaAngular />,
          <FaFigma />,
        ],
      },
      {
        title: 'Back-end',
        icons:[<FaJava />,
        <SiSpringboot />,
        <FaPython />,
        <FaNode />,
        <FaAws />,
        <FaGithub />
       ],
      }, 
      {
        title: 'Mobile',
        icons: [
          <FaJava />,
          <SiKotlin />,
          <FaAndroid />,
        ],
      } 
      
    ],
  },
  {
    title: 'Certificações',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '100 - Horas',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '100 - Horas',
      },
    ],
  },
  {
    title: 'Experiências',
    info: [
      {
        title: 'Feelancer - Internet',
        stage: '2022 - 2023',
      },
    ],
  },
];

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

import CountUp from 'react-countup';


const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        intial = 'hidden'
        animate= 'show'
        exit = 'hidden'
        className='hidden xl:flex absolute bottom-0 -left-[460px]'>
          <Avatar />
     
      </motion.div>
  
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
          variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'
           className='h2'>
          Ideias e 
            <span className='text-accent'> Software.</span>
          </motion.h2>      
      {/* Subtitle */}
          <motion.p 
          variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            Seja bem-vindo ao meu mundo de código, onde transformo ideias em soluções robustas! Sou um desenvolvedor full-stack com expertise em Java, JavaScript, Python, HTML, CSS, e frameworks como Angular, React, Spring Boot e Node.js. Ao longo da minha jornada, entreguei projetos inovadores e funcionais, destacando-me pela capacidade de harmonizar o back-end sólido com interfaces intuitivas.
          </motion.p>
        </div>
        <motion.div
        variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item,itemIndex) =>{
              return (
                <div key={itemIndex}
                className ={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration/300'}
                cursor-pointer captalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:-left-0`}
                onClick={()=>setIndex(itemIndex)}>
                  {item.title}
                  
                </div>
              )
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex)=>{
              return(
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 itms-center text-white/60'>
                <div className='font-light mb-2 md:mb-0'>{item.title} </div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon,itemIndex)=>{
                    return <div className='text 2xl text-white'>{icon}</div>
                  })}
                </div>
              </div>
            );})}
          </div>
        </motion.div>
      </div>
    </div>
    );
};

export default About;
