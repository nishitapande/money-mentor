import React from 'react'
import Hero from "../commponents/home-page/Hero";
import BlogsSection from "../commponents/home-page/BlogsSection";
import ResourcesCards from "../commponents/home-page/ResourcesCards";
import AboutSection from "../commponents/home-page/AboutSection";

function Home() {
  return (
    <>
      <Hero />
      <ResourcesCards />
      <AboutSection />
      <BlogsSection />
    </>
  );
}

export default Home