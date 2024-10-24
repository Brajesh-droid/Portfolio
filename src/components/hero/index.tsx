"use client";

import React from "react";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import ParticlesDemo from "./HeroParticle";
import GradualSpacing from "../ui/gradual-spacing";
import { motion } from "framer-motion";
import ShimmerButton from "../ui/shimmer-button";
import { ArrowRightIcon, MoveUpRight } from "lucide-react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import FloatingNavDemo from "./Navbar";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Particles Background */}
      <ParticlesDemo />

      {/* Main Content */}
      <div className="absolute top-0 w-full h-screen z-10 flex flex-col items-center justify-center space-y-5 p-4">
        {/* Floating Navigation */}
        <FloatingNavDemo />

        {/* Shiny Welcome Text */}
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-xl md:text-3xl transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Holla! Folks</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>

        {/* Gradual Spacing for Title */}
        <GradualSpacing
          className="font-display text-center text-xl font-bold tracking-widest text-black dark:text-white md:text-5xl md:leading-[5rem]"
          text="Welcome to dev-x-world"
        />

        {/* Subtitle with Motion Animation */}
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-400 xl:w-[40rem] text-center md:text-2xl"
        >
        Welcome to brajesh-x-dev portfolio 🛸
        </motion.p>

        {/* Contact Me Button with Motion Animation */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Link href="mailto:workkforbrajesh@gmail.com" passHref>
            <ShimmerButton className="shadow-2xl gap-2">
              <span className="flex whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Contact me
                <MoveUpRight className="ml-2 dark:text-white" />
              </span>
            </ShimmerButton>
          </Link>
        </motion.div>

        {/* Velocity Scrolling Text */}
        <div className="absolute bottom-[2%] w-full flex justify-center">
          <VelocityScroll
            text="EAT🚀CODE✨REPEAT🔁"
            default_velocity={5}
            className="text-center text-xs font-semibold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
