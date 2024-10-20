"use client";
import { TextGenerateEffect } from "../../ui/text-generate-effect";

// Full text for desktop
const fullText = `I am Brajesh Singh Chouhan, a dedicated Software Engineer with six months of experience in web design, specializing in front-end and WordPress development. Currently pursuing a degree in Computer Science Engineering at Shushila-devi 
  Bansal College, I am passionate about creating user-friendly websites and enhancing online experiences. Beyond academics, I actively contribute to the tech community by designing user interfaces for Google Developer Student Clubs and coordinating coding events at my college, empowering fellow students to embark on their coding journeys.`;

// Shortened text for mobile
const shortText = `I am Brajesh Singh Chouhan, a dedicated Software Engineer with six months of experience in web design, specializing in front-end and WordPress development.`;

export function TextGenerateEffectDemo() {
  return (
    <div className="flex absolute z-10 text-xs md:text-base">
      {/* Render different text based on screen size */}
      <div className="block md:hidden">
        {/* This will show only on mobile */}
        <TextGenerateEffect words={shortText} />
      </div>
      <div className="hidden md:block">
        {/* This will show only on desktop */}
        <TextGenerateEffect words={fullText} />
      </div>
    </div>
  );
}

export default TextGenerateEffectDemo;
