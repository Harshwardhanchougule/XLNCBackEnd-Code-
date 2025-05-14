import React, { useEffect, useState } from 'react';
import { Smartphone, Bot, Cog, MonitorSmartphone, Network, Share2 } from 'lucide-react';
import { Building2, Rocket, Users2 } from 'lucide-react';
import Cater1 from "@/images/Who we cater to/Enterprises.jpg"
import Cater2 from "@/images/Who we cater to/Startups.jpg"
import Cater3 from "@/images/Who we cater to/Agencies.jpg"
import { BarChart2, Pencil, MessageCircle, Megaphone, Users, PieChart, Settings, Code, Shield, Palette, Database, Cloud, Cpu, Globe, Brain } from "lucide-react";
import PromotionalBanner from './PromotionalBanner';
import FAQSection from './FAQ_Section';
import { FeatureCardGrid } from '@/pages/feature-card-grid';
import { NewsBenefitsSection } from './NewsBenefitsSectio';
import { HomePagewhyChoose } from './HomePagewhyChoose';


const ServicesSection = () => {
  const [position, setPosition] = useState(0);

  const services = [
    {
      title: "Robotic Process Automation (RPA) Solutions",
      description: "Automate repetitive tasks, reduce errors, and boost efficiency with intelligent RPA technology.",
      icon: <Settings size={24} />
    },
    {
      title: "EDI (Electronic Data Interchange) Integration",
      description: "Seamlessly exchange business documents with automated, secure, and scalable EDI solutions.",
      icon: <Database size={24} />
    },
    {
      title: "Generative AI (Gen AI) Services",
      description: "Harness the power of AI to optimize workflows, enhance decision-making, and drive innovation.",
      icon: <Brain size={24} />
    },
    {
      title: "Comprehensive Web Development Services",
      description: "Create fast, SEO-friendly, and high-converting websites designed for business success.",
      icon: <Code size={24} />
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business with advanced cybersecurity strategies, threat detection, and risk mitigation to ensure data security and compliance.",
      icon: <Shield size={24} />
    },
    {
      title: "IT Staff Augmentation & Dedicated Teams",
      description: "Access top IT talent on demand to scale your team, accelerate projects, and drive growth.",
      icon: <Users size={24} />
    }
  ];
  const sampleFaqs: any = [
    {
      id: "item-1",
      question: "What services does XLNC Technologies provide?",
      answer: "XLNC Technologies offers a comprehensive range of IT and digital solutions, including <strong>AI & ML, robotic process automation (RPA), cloud computing, cybersecurity, web & mobile app development, business intelligence, DevOps, blockchain implementation, EDI, and software consulting</strong>. Our tailored solutions help businesses streamline operations, enhance customer experiences, and drive digital transformation."
    },
    {
      id: "item-2",
      question: "How does XLNC Technologies help in digital transformation?",
      answer: "We enable businesses to embrace next-gen technologies by providing <strong>customized automation, AI-driven insights, cloud solutions, and scalable digital infrastructure</strong>. Our expertise helps organizations optimize workflows, improve efficiency, and unlock new growth opportunities in a competitive digital-first world."
    },
    {
      id: "item-3",
      question: "Who can benefit from XLNC Technologies' solutions?",
      answer: "Our solutions are designed for <strong>businesses of all sizes, from startups to large enterprises</strong>. Whether you're looking to automate processes, improve security, scale digital platforms, or drive operational efficiency, our expertise ensures future-ready solutions tailored to your business needs."
    },
    {
      id: "item-4",
      question: "What industries does XLNC Technologies serve?",
      answer: "We serve a wide range of industries, including <strong>logistics, financial services, banking, manufacturing, insurance, healthcare, eCommerce, retail, IT & consulting, education, government, media, HR, tech startups, operations, and real estate</strong>. Our industry-specific solutions help businesses stay ahead of technological advancements and market disruptions."
    },
    {
      id: "item-5",
      question: "How can I contact XLNC Technologies?",
      answer: "You can reach us through our <strong>website contact form, email, or phone</strong> for any inquiries. Our team is available to discuss your business challenges, project requirements, and digital transformation goals. Get in touch today to explore customized IT solutions that drive success."
    }
  ];
  const services1 = [
    {
      id: 1,
      title: "Enterprises",
      description: "Helping businesses of all sizes use digital solutions to work smarter and serve customers better.",
      icon: <Building2 size={48} className="text-blue-600" />
    },
    {
      id: 2,
      title: "Agencies",
      description: "Working with consulting firms and software companies to build powerful digital solutions and deliver end-to-end projects.",
      icon: <Users2 size={48} className="text-blue-600" />
    },
    {
      id: 3,
      title: "Startups",
      description: "Supporting new businesses with the right tools, expert advice, and smart strategies.",
      icon: <Rocket size={48} className="text-blue-600" />
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition <= -1500) {
          return 0;
        }
        return prevPosition - 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = () => {
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <>
      <div className="min-h-screen bg-g[#f8fafc] from-white to-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">  Our Solutions & Tech Services</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto animate-width" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden 
                      transform transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                      border border-gray-200 h-[220px] flex flex-col cursor-pointer
                      animate-slideUp"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="p-6 flex-1 group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 
                                  text-white mr-3 shadow-lg transform transition-all duration-300
                                  group-hover:scale-110 group-hover:rotate-6"
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 leading-tight
                                  transform transition-all duration-300 group-hover:translate-x-2">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed
                              transform transition-all duration-300 group-hover:translate-y-1">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.location.href = '/services'}
            className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 mb-0"
          >
            Explore More
          </button>
        </div>
      </div>

      <div className="mx-16 mt-0">
        <PromotionalBanner
          title="Your Vision, Our Expertise – Innovate and Scale with XLNC Technologies!"
          buttonText="Contact Us"
          backgroundColor="#8cc0e8"
          textColor="#FFFFFF"
        />
      </div>

      <div className="flex justify-center py-6">
        <h1

          className=" text-3xl font-bold text-gray-800 px-6 py-2 "
        >
          OUR EXPERTISE
        </h1>
      </div>
      <div className="flex justify-center bg-gray-100 py-6">
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-6xl">

          {/* Card 1 - Revenue Optimization */}
          <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
            <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex justify-center items-center mb-4 relative z-10 animate-pulse">
                <Cpu size={32} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">PRODUCT ENGINEERING</h3>
            </div>
            <div className="px-6 pb-6 text-center">
              <p className="text-gray-600 leading-relaxed">Designing and developing next-generation products, platforms, and experiences that enhance customer engagement and drive business success.
              </p>
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
          </div>

          {/* Card 2 - AI Targeting */}
          <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
            <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
              <div className="w-16 h-16 rounded-full bg-pink-600 flex justify-center items-center mb-4 relative z-10" id="rotating-icon">
                <Globe size={32} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center"> DIGITAL TRANSFORMATION                            </h3>
            </div>
            <div className="px-6 pb-6 text-center">
              <p className="text-gray-600 leading-relaxed">Enabling businesses to adapt, evolve, and innovate by creating cutting-edge products, seamless services, and immersive experiences.
              </p>
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-500 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
          </div>

          {/* Card 3 - Full-Funnel Approach */}
          <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
            <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
              <div className="w-16 h-16 rounded-full bg-blue-400 flex justify-center items-center mb-4 relative z-10" id="bounce-icon">
                <Users size={32} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center"> RESOURCE SPECIALIZATION                           </h3>
            </div>
            <div className="px-6 pb-6 text-center">
              <p className="text-gray-600 leading-relaxed">From brand awareness to customer retention, we design campaigns that nurture leads at every stage.</p>
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
          </div>

        </div>
      </div >

      <div className="flex justify-center py-6">
        <HomePagewhyChoose heading="Why Choose XLNC Technologies?" />
      </div>
      <div className="w-full bg-gray-100 py-16">
        {/* Section heading */}
        <div className="text-center mb-6">
          <h2 className="text-navy-900 font-bold text-2xl md:text-3xl">
            WHO WE CATER TO?
          </h2>
        </div>



        {/* Services cards */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services1.map((service1) => (
              <div
                key={service1.id}
                className="bg-white rounded-md shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  {/* Icon container with centered icon */}
                  <div className="w-24 h-24 mb-6 flex items-center justify-center bg-blue-50 rounded-full hover:bg-blue-100 transition-colors duration-300">
                    {service1.icon}
                  </div>

                  {/* Title with increased spacing */}
                  <h3 className="text-gray-800 text-xl font-bold mb-4">
                    {service1.title}
                  </h3>

                  {/* Description with better line height */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service1.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-16 mt-0">
        <PromotionalBanner
          title="Take the Next Step in Digital Transformation "
          buttonText="Contact Us Now!"
          backgroundColor="#8cc0e8"
          textColor="#FFFFFF"
        />
      </div>

      <FAQSection faqs={sampleFaqs} />

    </>
  );
};

export default ServicesSection;