"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Aboutimg from "@/images/Banner/About us.jpg"
import { ChevronDown } from "lucide-react" // Add this import
import AnimatedCardSection from "@/components/ui/animated-card-section"
import VisionMissionSection from "@/components/VisionMissionSection"
import ApproachSection from "@/components/ApproachSection"
import FAQSection from "@/components/FAQSection"
import PromotionalBanner from "@/components/PromotionalBanner"
import AchievementBanner1 from "@/images/Our Achievements/1.png"
import AchievementBanner2 from "@/images/Our Achievements/2.png"
import AchievementBanner3 from "@/images/Our Achievements/3.png"
import AchievementBanner4 from "@/images/Our Achievements/4.png"
import AchievementBanner5 from "@/images/Our Achievements/Trophy.png"
import AchievementBanner6 from "@/images/Our Achievements/6.webp"
import AchievementBanner7 from "@/images/Our Achievements/7.webp"
import HappyClient1 from "@/images/Icons/1.png"
import HappyClient2 from "@/images/Icons/2.png"
import HappyClient3 from "@/images/Icons/3.png"
import HappyClient4 from "@/images/Icons/4.png"
import HappyClient5 from "@/images/Icons/5.png"
import HappyClient6 from "@/images/Icons/6.png"
import HappyClient7 from "@/images/Icons/7.png"
import HappyClient8 from "@/images/Icons/8.png"
import HappyClient9 from "@/images/Icons/9.png"
import HappyClient10 from "@/images/Icons/10.png"
import HappyClient11 from "@/images/Icons/11.png"
import HappyClient12 from "@/images/Icons/12.png"
import HappyClient13 from "@/images/Icons/13.png"
import HappyClient14 from "@/images/Icons/14.png"
import HappyClient15 from "@/images/Icons/15.png"
import HappyClient16 from "@/images/Icons/16.png"
import HappyClient17 from "@/images/Icons/17.png"
import HappyClient18 from "@/images/Icons/18.png"
import HappyClient19 from "@/images/Icons/19.png"
import HappyClient20 from "@/images/Icons/20.png"
import HappyClient21 from "@/images/Icons/21.png"
import HappyClient22 from "@/images/Icons/22.png"
import HappyClient23 from "@/images/Icons/23.png"
import img2 from "@/images/XLNC/About us.jpg"
import MetaTags from "@/components/MetaTags"
const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const happyClientsNextRef = useRef(null) // added ref for happy clients carousel
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null) // new ref for auto-play interval

  const achievementImages = [
    { src: AchievementBanner1, alt: "Achievement 1" },
    { src: AchievementBanner2, alt: "Achievement 2" },
    { src: AchievementBanner3, alt: "Achievement 3" },
    { src: AchievementBanner4, alt: "Achievement 4" },
    { src: AchievementBanner5, alt: "Achievement 5" },
    { src: AchievementBanner6, alt: "Achievement 6" },
    { src: AchievementBanner7, alt: "Achievement 7" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === achievementImages.length - 1 ? 0 : prevSlide + 1))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // New auto-play functions for smooth start/stop control in Happy Clients section
  const startAutoPlay = () => {
    if (!autoPlayIntervalRef.current) {
      autoPlayIntervalRef.current = setInterval(() => {
        if (happyClientsNextRef.current && 'click' in happyClientsNextRef.current) {
          (happyClientsNextRef.current as HTMLElement).click();
        }
      }, 3000);
    }
  };

  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  };

  // Start auto-play on mount
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const scrollToServices = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <MetaTags 
      title="About Us | AI Technologies & IT Service Provider"
      description="Learn about XLNC Technologies, a US-based IT company specializing in AI technologies, RPA solutions, and reliable IT services for businesses."
    />
    <div className="overflow-x-hidden bg-[#f8fafc]"> {/* Added bg-[#f8fafc] here */}
      <div className="min-h-screen">  {/* Removed bg-[#f8fafc] from here */}
        <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden flex items-center">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={img2}
              alt="SEO Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            {/* Main content */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-8xl font-bold mb-10">About Us
              </h1>
              <h2 className="text-4xl md:text-2xl font-bold mb-4">Discover XLNC Technologies
              </h2>
            </div>
           
          </div>

          {/* Add the arrow button */}
          <div onClick={scrollToServices} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-[bounce_2s_ease-in-out_infinite] cursor-pointer">
            <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
              <ChevronDown size={24} className="text-white" />
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020B2D]/50 md:bg-[linear-gradient(45deg,rgba(0,0,0,.3)_50%,rgba(0,0,0,.7)_50%)] md:bg-[length:3px_3px] md:h-full" /> */}
      </div>

      <div className="py-16"> {/* Added wrapper div with padding */}
        {/* Add the Who We Are section here */}
        <AnimatedCardSection
          title="Who We Are - A Trusted IT Service Provider"
          paragraphs={[
            "At XLNC Technologies, excellence isn't just in our name—it's in everything we do. We are more than just an IT company; we are innovation architects, crafting 360° digital transformation solutions that help businesses stay ahead in a fast-evolving digital landscape.",
            "With expertise in web development, digital optimization, and next-gen technology solutions, we empower organizations to scale and thrive with advanced, scalable, and result-driven strategies. Partnering with industry-leading technology providers, we deliver future-ready solutions that transform ideas into tangible digital success."
          ]}
        />

        {/* Add the new What We Do section */}
        <AnimatedCardSection
          title="What We Do"
          subheading="Proven Success in Automation & Digital Transformation"
          subheadingAfterFirstPara={true}
          paragraphs={[
            "With a global footprint across 50+ countries, we are committed to delivering intelligent automation and digital transformation while ensuring industry best practices. Our expertise spans across multiple industries, helping businesses enhance efficiency, reduce costs, and achieve sustainable growth.",
            "We have successfully delivered end-to-end automation solutions, including software reselling of RPA tools, and continue to provide strategic business transformation services to enterprises worldwide."
          ]}
        />

        <VisionMissionSection />
        <ApproachSection />
      </div>

      {/* Happy Clients Section */}
      <div className="pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-16"
              onMouseEnter={stopAutoPlay}   // pause on hover
              onMouseLeave={startAutoPlay}   // resume on mouse leave
            >
              <h2 className="text-3xl font-bold mb-8">OUR HAPPY CLIENTS</h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[
                    HappyClient1, HappyClient2, HappyClient3, HappyClient4,
                    HappyClient6, HappyClient7, HappyClient8,
                    HappyClient9, HappyClient10, HappyClient11, HappyClient12,
                    HappyClient13, HappyClient14, HappyClient15, HappyClient16,
                    HappyClient17, HappyClient18, HappyClient19, HappyClient20,
                    HappyClient21, HappyClient22, HappyClient23
                  ].map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                      <div className="p-1">
                        <Card className="overflow-hidden bg-transparent">
                          <CardContent className="relative p-0" style={{ height: '100px' }}>
                            <img
                              src={image}
                              alt={`Happy Client ${index + 1}`}
                              className="w-full h-full object-contain transition-all hover:scale-105 duration-300 px-4"
                              loading="lazy"
                              style={{ maxWidth: '200px', margin: '0 auto' }}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <CarouselPrevious className="position-static" />
                  <CarouselNext ref={happyClientsNextRef} className="position-static" /> {/* added ref */}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-0 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-8">OUR ACHIEVEMENTS</h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {achievementImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden">
                          <CardContent className="aspect-square relative p-0">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-contain transition-all hover:scale-105 duration-300"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <CarouselPrevious className="position-static" />
                  <CarouselNext className="position-static" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Add promotional banner before FAQ section */}
      <div className="mx-16 mb-4">
        <PromotionalBanner
          title="Let's Connect and Collaborate"
          buttonText="CONTACT US"
          textColor="#FFFFFF"
        />
      </div>

      <FAQSection />

    </div>
    </>
  )
}

export default About

