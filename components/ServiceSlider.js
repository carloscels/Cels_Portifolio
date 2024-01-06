import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowRight,
  RxArrowTopRight,
} from "react-icons/rx";

import {FreeMode, Pagination} from 'swiper'


// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Full-Stack',
    description: 'Domínio de tecnologias como Java, JavaScript, Spring Boot, React e Angular para criar soluções escaláveis.',
  },
  {
    icon: <RxDesktop />,
    title: 'Back-End',
    description: 'Arquiteturas sólidas e eficientes que garantem desempenho, segurança e escalabilidade.',
  },
  {
    icon: <RxDesktop />,
    title: 'Front-End',
    description: 'Designs modernos e intuitivos que proporcionam uma experiência de usuário excepcional.',
  },
  {
    icon: <RxDesktop />,
    title: 'Ui-Ux',
    description: 'Abordagem centrada no usuário desde a concepção até a implementação, priorizando a usabilidade e a estética.',
  },
  {
    icon: <RxDesktop />,
    title: 'Mobile',
    description: 'Criação de aplicativos móveis nativos e responsivos, garantindo uma presença dinâmica em todas as plataformas.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320:{
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640:{
        slidesPerView: 3,
        spaceBetween: 15,
      },

    }}
    freeMode ={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode,Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index)=>{
        return(
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15) h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6
              sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-8'>
                <div className='mb-2 lext-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all
                duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
