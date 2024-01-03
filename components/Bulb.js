import Image from "next/image";

const Bulb = () => {
  return(
    <div className='w-[200px] xl:w-[260px] absolute -left-24 -bottom-20 
    mix-blend-color-dodge animate-pluse duration-75 z-10 '>
      <Image src={'/bulb.png'} 
        width={260} 
        height={200}
        className='w-full h-full'  
        alt='' />
    </div>
    );
};

export default Bulb;
 