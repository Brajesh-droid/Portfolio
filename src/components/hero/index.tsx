"use client"
import React from 'react'
import ParticlesDemo from './HeroParticle';
import GradualSpacing from '../ui/gradual-spacing';
import {motion} from "framer-motion"
import ShimmerButton from "../ui/shimmer-button";
import { ArrowRightIcon, Dock, MoveUpRight } from 'lucide-react';
import AnimatedShinyText from '../ui/animated-shiny-text';
import FloatingNavDemo from './Navbar';
import Link from "next/link";
import RippleDemo from './pop/Ripple';




const HeroSection = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute top-0 w-full h-screen z-10 flex items-center justify-center flex-col space-y-5 ">
        <FloatingNavDemo />
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Holla! Folks</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        <GradualSpacing
          className="font-display text-center text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem] "
          text="Welcome to dev-x-world"
        />

        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.5 }}
          className="text-2xl text-gray-400 xl:w-[40rem] text-center"
        >
          Welcome to brajesh-x-dev Portflio 🛸
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 1 }}
        >
          <Link href="mailto:your-email@example.com" passHref>
            <ShimmerButton className="shadow-2xl gap-2">
              <span className="gap-2 flex whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Contact me
                <MoveUpRight className="gap-2 dark:text-white" />
              </span>
            </ShimmerButton>
          </Link>
        </motion.div>
        
      </div>

      <ParticlesDemo />
    </div>
  );
}

export default HeroSection;