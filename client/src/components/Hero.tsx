"use client"

import { useTypewriter } from "@/hooks/useTypewriter"
import { Button } from "@/components/ui/button"
import video1 from "@/video/home_banner_video.webm"
import image from "@/images/ISO_logo1.png"
import image2 from "@/images/ISO_logo2.png"
import image3 from "@/images/ISO_logo3.png"
import image4 from "@/images/nasscom_logo.png"
import image5 from "@/images/Cmmi-logo_PNG.png"
import Video from "@/images/Banner/Home.mp4"
import homeimg from "@/images/Banner/Homepage.mp4"
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

import ReflectionForm from "@/components/Reflection/Form";
import ReflectionList from "@/components/Reflection/List";
import { IReflection } from "@/types/reflection";

import { useEffect, useRef, useState } from "react"
import MetaTags from "./MetaTags"
import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel"

const Hero = () => {
  const industries = ["INNOVATE", "AUTOMATE", "ACCELERATE "]

  const displayText = useTypewriter(industries, 50, 50, 100)
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const happyClientsNextRef = useRef(null)

  // const [position, setPosition] = useState(100);

  //   // Array of dummy client logos
  //   const clientLogos = [
  //     { id: 1, name: {image4}},
  //     { id: 2, name: "Bajaj Finance Limited" },
  //     { id: 3, name: "Bajaj Finserv" },
  //     { id: 4, name: "DSP Investment Managers" },
  //     { id: 5, name: "Bajaj Housing Finance Limited" },
  //     { id: 6, name: "L&T Hydrocarbon Engineering" },
  //     { id: 7, name: "Client Logo 7" },
  //     { id: 8, name: "Client Logo 8" },
  //     { id: 9, name: "Image Shear" },
  //   ];

  //   // Animation effect for right to left movement
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setPosition((prevPosition) => {
  //         if (prevPosition <= -200) {
  //           return 100;
  //         }
  //         return prevPosition - 1;
  //       });
  //     }, 30);

  //     return () => clearInterval(interval);
  //   }, []);

  const startAutoPlay = () => {
    if (!autoPlayIntervalRef.current) {
      autoPlayIntervalRef.current = setInterval(() => {
        if (happyClientsNextRef.current && 'click' in happyClientsNextRef.current) {
          (happyClientsNextRef.current as HTMLElement).click();
        }
      }, 1000);
    }
  };
  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  };


  const [newReflection, setNewReflection] = useState<IReflection | null>(null);

  const handleReflectionCreated = (reflection: IReflection) => {
    setNewReflection(reflection);
  };

  return (
    <>
      <MetaTags
        title="Comprehensive IT and Digital Solutions | XLNC Technologies"
        description="Explore expert tech consulting, FinTech consulting, and automation software solutions from XLNC Technologies, a leading software and IT consulting company."
      />
      <div className="relative min-h-[60vh] overflow-hidden bg-[#020B2D]">
        {/* Video Background */}
        <video src={homeimg} loop muted autoPlay playsInline className="absolute inset-0 w-full h-full object-cover">
        </video>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-[100vh] text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-wide uppercase"> Comprehensive IT and Digital Solutions for the Digital First World
          </h1>
          <div className="h-16 flex items-center justify-center mb-8">
            <div className="text-2xl md:text-5xl text-[#FFA500] font-semibold">
              {displayText}
              <span className="animate-blink">|</span>
            </div>
          </div>
          <button className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300  border-2 border-white" onClick={() => window.location.href = '/contact'}>
            Let's Talk
          </button>

        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020B2D]/50 md:bg-[linear-gradient(45deg,rgba(0,0,0,.3)_50%,rgba(0,0,0,.7)_10%)] md:bg-[length:3px_3px] md:h-[100vh]" /> */}
      </div>

      <div className="w-full bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Certification logos row - centered and responsive */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-8">
            {/* ISO 9001:2015 */}
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
              <img
                src={image}
                alt="ISO 9001:2015 Certification"
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* ISO 27001:2013 */}
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
              <img
                src={image2}
                alt="ISO 27001:2013 Certification"
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* ISO 20000-1:2018 */}
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
              <img
                src={image3}
                alt="ISO 20000-1:2018 Certification"
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* NASSCOM */}
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
              <img
                src={image4}
                alt="NASSCOM Member"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
              <img
                src={image5}
                alt="CMMI LOGO"
                className="w-full h-full object-contain p-2"
              />
            </div>
          </div>

          <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-3xl font-bold text-center mb-8">AI Reflection Journal</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ReflectionForm onReflectionCreated={handleReflectionCreated} />
                </div>
                <div>
                  <ReflectionList key={newReflection?._id || 'list'} />
                </div>
              </div>
            </div>
          </div>




          {/* Text content - centered and responsive */}
          <div className="text-center px-2 md:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">WE SERVE CUSTOMER GLOBALLY</h2>
            <p className="text-sm md:text-base text-gray-800">
              XLNC Technologies works with the World's Leading Enterprises, SMEs & Startups - To Plan, Develop, Test, and Expand their Digital Initiatives.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              className="text-center mb-16"
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
            >
              <h2 className="text-3xl font-bold mb-8">OUR HAPPY CLIENTS</h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-full overflow-hidden"
              >
                <CarouselContent className="-ml-1 md:-ml-4">
                  {[
                    HappyClient1, HappyClient2, HappyClient3, HappyClient4,
                    HappyClient6, HappyClient7, HappyClient8,
                    HappyClient9, HappyClient10, HappyClient11, HappyClient12,
                    HappyClient13, HappyClient14, HappyClient15, HappyClient16,
                    HappyClient17, HappyClient18, HappyClient19, HappyClient20,
                    HappyClient21, HappyClient22, HappyClient23
                  ].map((image, index) => (
                    <CarouselItem key={index} className="pl-1 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="p-1">
                        <Card className="overflow-hidden bg-transparent">
                          <CardContent className="relative p-0" style={{ height: '80px' }}>
                            <img
                              src={image}
                              alt={`Happy Client ${index + 1}`}
                              className="w-full h-full object-contain transition-all hover:scale-105 duration-300 px-2 md:px-4"
                              loading="lazy"
                              style={{ maxWidth: '150px', margin: '0 auto' }}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <CarouselPrevious className="position-static" />
                  <CarouselNext ref={happyClientsNextRef} className="position-static" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <section className="relative w-full text-[#242424] overflow-hidden">
        {/* Main Content with Card and Animation */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-4">
          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <div className="relative overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 opacity-50 animate-gradient"></div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl pb-2 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  Driving Your Digital Journey
                </h2>
                <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                  Every great innovation starts with a vision. At XLNC Technologies, we turn that vision into reality. With a proven track record of 7,500+ successful projects, ISO-certified expertise, and partnerships with industry leaders, we deliver tailored, reliable, and transformative IT solutions that drive measurable business impact.
                </p>
                <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                  We go beyond traditional IT services—we craft smart, future-ready digital experiences that empower businesses to scale, innovate, and thrive in a rapidly evolving world. Whether it's automating workflows, leveraging AI, optimizing cloud infrastructure, or leading full-scale digital transformation, we provide the tools, strategies, and expertise to propel your business forward.
                </p>
                <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                  With a team of industry experts, cutting-edge technologies, and a results-driven approach, we help organizations streamline operations, enhance customer engagement, and achieve long-term success. Our commitment to clarity, agility, and seamless execution ensures that every solution is designed for impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <div className="flex justify-center flex-wrap gap-8 px-4 max-w-6xl mx-auto">
        <a href="#" className="transform transition-transform hover:scale-110">
          <img src="/api/placeholder/180/50" alt="GXO" className="h-12" />
        </a>
        <a href="#" className="transform transition-transform hover:scale-110">
          <img src="/api/placeholder/180/50" alt="LARSEN & TOUBRO" className="h-12" />
        </a>
        <a href="#" className="transform transition-transform hover:scale-110">
          <img src="/api/placeholder/180/50" alt="XPO Logistics" className="h-12" />
        </a>
        <a href="#" className="transform transition-transform hover:scale-110">
          <img src="/api/placeholder/180/50" alt="WELSPUN" className="h-12" />
        </a>
        <a href="#" className="transform transition-transform hover:scale-110">
          <img src="/api/placeholder/180/50" alt="PSIPL" className="h-12" />
        </a>
        <a href="#" className="transform transition-transform hover:scale-110">
          <img src="/api/placeholder/180/50" alt="RELIANCE" className="h-12" />        </a>
      </div> */}

      <div className="h-px bg-gray-200 mt-12"></div>

    </>
  )
}

export default Hero
