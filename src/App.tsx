/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CustomCursor } from './components/CustomCursor.tsx';
import { ScrollProgress } from './components/ScrollProgress.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TheGirlISee } from './components/TheGirlISee.tsx';
import { WhatMakesYouYou } from './components/WhatMakesYouYou.tsx';
import { IBelieveInYou } from './components/IBelieveInYou.tsx';
import { OpenWhenCards } from './components/OpenWhenCards.tsx';
import { TechAndSecurity } from './components/TechAndSecurity.tsx';
import { OurStoryTimeline } from './components/OurStoryTimeline.tsx';
import { YourFuture } from './components/YourFuture.tsx';
import { FutureGenerator } from './components/FutureGenerator.tsx';
import { ALittleReminder } from './components/ALittleReminder.tsx';
import { FinalSection } from './components/FinalSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F8F5EF] text-[#171717] selection:bg-[#5A0F18] selection:text-[#F8F5EF] font-sans antialiased overflow-x-hidden">
      {/* Desktop Custom Precision Cursor */}
      <CustomCursor />

      {/* Pinned Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Experience Chapters */}
      <main id="main-content">
        {/* Cinematic Light Hero */}
        <Hero />

        {/* Chapter 01: The Girl I See */}
        <TheGirlISee />

        {/* Chapter 02: What Makes You, You */}
        <WhatMakesYouYou />

        {/* Large Typography: I Believe In You */}
        <IBelieveInYou />

        {/* Chapter 03: Open When... Interactive Letters */}
        <OpenWhenCards />

        {/* Chapter 04: Programming & Cybersecurity — Two Minds. One Direction. */}
        <TechAndSecurity />

        {/* Chapter 05: Our Story Timeline */}
        <OurStoryTimeline />

        {/* Chapter 06: Your Future Is Bigger Than You Think */}
        <YourFuture />

        {/* Interactive Future Possibility Generator */}
        <FutureGenerator />

        {/* Chapter 07: A Little Reminder */}
        <ALittleReminder />

        {/* Final Emotional Transition: Still Choosing You */}
        <FinalSection />
      </main>

      {/* Quiet Archival Footer */}
      <Footer />
    </div>
  );
}
