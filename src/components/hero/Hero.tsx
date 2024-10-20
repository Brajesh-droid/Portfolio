import React from 'react'
import ParticlesDemo from './HeroParticle';
import { VelocityScroll } from "../ui/scroll-based-velocity";




const Hero = () => {
  return (
    <div>
      <div className=" flex absolute top-[85%]">
        <VelocityScroll
          text="EAT🚀CODE✨REPEAT🔁"
          default_velocity={5}
          className=" text-center text-xs mb-8 font-semibold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      
      </div>
    </div>
  );
}

export default Hero;