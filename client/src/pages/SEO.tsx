import React, { useRef, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
//client\src\images\SEO-Optimized Web Designs\Content Optimization.jpg
import ImageCover from '@/images/SEO-Optimized Web Designs/Content Optimization.jpg';
import {
  MessageSquare,
  Search,
  FileText,
  BarChart,
  Clock,
  Smartphone,
  Code, Compass, Database, Globe, Shield
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PromotionalBanner from '@/components/PromotionalBanner';
import FAQSection from '@/components/FAQ_Section';
import ProcessSteps from '@/components/ProcessMap';
import Image1 from "@/images/Webiste Mockup/1.png";
import TabImage from "@/images/Blogging/Content & Blogging Mockup.png"
import TestimonialCarousel from '@/components/TestimonialCarousel';
import HeroImage from "@/images/SEO-Optimized Web Designs/SEO Coverpage.jpg";
import LaptopBanner from "@/images/Blogging/Blogging Mockup.2.png"
import { SEOBenefitsSection } from '@/components/seo-benefits-section';
import { WhyChooseUs } from '@/components/why-choose-us';
import { FeatureCardGrid } from './feature-card-grid';
import SEO_Pointer_Img1 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/Advanced SEO Enhancements.jpg";
import SEO_Pointer_Img2 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/Comprehensive Website Audit & Optimization.jpg";
import SEO_Pointer_Img3 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/Google My Business & Local Listings Optimization.jpg";
import SEO_Pointer_Img4 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/Reputation & Local SEO Strategy.jpg";
import SEO_Pointer_Img5 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/SEO-Optimized Content & Blog Writing.jpg";
import SEO_Pointer_Img6 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/Speed, Security & Mobile Optimization.jpg";
import ImageCarousel from './ImageCarousel';
import MetaTags from '@/components/MetaTags';
import FeatureCarousel from '@/components/FeatureCarousel';

const SEO_Page = () => {
  const seoSteps = [
    {
      title: "SEO Research & Topic Planning",
      description: "Identifying <strong>high-ranking keywords</strong> and blog topics aligned with your audience's search intent."
    },
    {
      title: "Strategic Content Creation",
      description: "Writing engaging, <strong>SEO-friendly articles</strong> with optimized headers, meta descriptions, and internal linking."
    },
    {
      title: "Client Review & Revisions",
      description: "Refining content based on feedback to ensure it aligns with your goals and brand voice."
    },
    {
      title: "Publishing & Indexing",
      description: "Optimizing for search engines with structured data, schema markup, and keyword placement."
    },
    {
      title: "Performance Tracking & Updates",
      description: "Monitoring rankings, engagement, and conversions for continuous improvement."
    }
  ];
  const services = [
    {
      title: "Comprehensive Website Audit & Optimization",
      description:
        "Identify and fix technical issues, improve indexing, and enhance site structure for better rankings.",
      image: SEO_Pointer_Img2,
    },
    {
      title: "Speed, Security & Mobile Optimization",
      description:
        "Boost loading times, ensure mobile-friendliness, and implement HTTPS for a seamless and secure experience.",
      image: SEO_Pointer_Img6,
    },
    {
      title: "Advanced SEO Enhancements",
      description: "Leverage structured data, schema markup, and Core Web Vitals optimization to improve visibility.",
      image: SEO_Pointer_Img1,
    },
    {
      title: "Google My Business & Local Listings Optimization",
      description:
        "Improve local rankings with a fully optimized GMB profile and accurate business listings.",
      image: SEO_Pointer_Img3,
    },
    {
      title: "SEO-Optimized Content & Blog Writing",
      description:
        "Drive organic traffic with keyword-rich, engaging, and regularly updated content.",
      image: SEO_Pointer_Img5,
    },
    {
      title: "Reputation & Local SEO Strategy",
      description:
        "Boost credibility with customer reviews, NAP consistency, and geo-targeted keyword optimization.",
      image: SEO_Pointer_Img4,
    }
  ];
  const testimonialData = [
    {
      quote: "From user-centric web design to full-scale digital marketing, we create high-performing websites that put your brand ahead of the competition.",
      author: "",
      rating: 5
    },
    {
      quote: "As a small business owner, I needed an affordable solution that didn't compromise on quality. Webware delivered exactly that. Their attention to detail and ongoing support have been invaluable to my business growth.",
      author: "Michael Chang",
      rating: 4
    }
  ];
  const sampleFaqs: any = [
    {
      id: "item-1",
      question: "How long does SEO take to show results?",
      answer: "SEO is a long-term strategy, but you can start seeing improvements within <strong>3-6 months</strong>, depending on competition and industry."
    },
    {
      id: "item-2",
      question: "Do you offer local SEO for small businesses?",
      answer: "Absolutely! We specialize in optimizing local businesses for <strong>Google Maps, GMB, and local search results</strong>."
    },
    {
      id: "item-3",
      question: "Can you help with content creation?",
      answer: "Yes! We offer <strong>SEO-optimized blogs, website copy, and guest posting</strong> to enhance your rankings."
    }
  ]; const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 280;
    const gap = 16;
    const totalCards = services.length;
    const maxIndex = Math.floor((container.clientWidth - cardWidth) / (cardWidth + gap));

    if (direction === 'left') {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
    }
  };
  const techFeatures = [
    {
      title: "Technical SEO",
      description: "Enhance your website's structure, indexing, and performance to ensure search engines can crawl and rank your pages efficiently. We optimize site speed, fix broken links, implement structured data, and improve Core Web Vitals.",
      icon: Code,
      color: "purple",
    },
    {
      title: "Local SEO",
      description: "Increase your visibility in local searches with optimized Google My Business profile, accurate directory listings, and geo-targeted keyword strategies. We ensure NAP consistency and manage customer reviews.",
      icon: Compass,
      color: "green",
    },
    {
      title: "Content Writing",
      description: "Create compelling, SEO-friendly content that educates, engages, and converts your audience. From blog posts to meta tags, we craft keyword-rich content that enhances rankings and builds authority.",
      icon: FileText,
      color: "blue",
    }
  ]
  return (
    <>
       <MetaTags 
        title="Local & Technical SEO | Complete SEO Solutions"
        description="Improve your online presence with result-driven SEO. We optimize websites for search engines, increase traffic, and enhance brand authority."
      />
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="SEO Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Main content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Online Presence with Expert SEO Services</h1>
            <p className="text-lg mb-8">
              Drive More Traffic, Boost Rankings & Convert Visitors into Customers
            </p>

            {/* CTA Button */}
            <button className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 mb-12" onClick={() => window.location.href = '/contact'}>
              CONTACT US
            </button>
            {/* Testimonial */}

          </div>
        </div>

      </div>

      {/* New Section */}
      <div className="text-black pb-6 pt-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Proven SEO Strategies to Supercharge Your Business</h1>
          <p className="text-lg mb-8 text-gray-700 leading-relaxed">
            We don’t just optimize - we transform. Our SEO services are designed to enhance visibility, increase conversions, and establish your brand as an authority in your industry. Let’s make your website work for you!          </p>
        </div>

      </div>
      <FeatureCarousel 
                features={services}
                title=""
                cardWidth={340}
                cardHeight={320}
            />
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Are You Struggling to Get Found Online?</h2>
              <p className="text-lg text-gray-700 mb-12">
                A slow, unoptimized website and weak local presence can cost you valuable traffic and revenue. Our tailored SEO strategies ensure your business stays ahead of the competition, bringing in more leads and customers.
              </p>
              <div className="text-center md:text-left">
                <h2 className="text-2xl text-[#2256d5] font-bold mb-2">Rank Higher, Grow Faster</h2>
                <div
                  className="cursor-pointer text-2xl text-[#2256d5] font-bold mb-0 hover:underline transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us Today!
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={ImageCover}
                alt="SEO Professional at Desk"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10 py-4 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our SEO Services</h1>

        <section>
          <FeatureCardGrid features={techFeatures} />
        </section>
      </div>
      <div className="mx-16 mb-4 my-12">
        <PromotionalBanner
          title="Your Growth Starts with the Right SEO Strategy – Let’s Build It Together!"
          buttonText="CONTACT US"
          backgroundColor="#8cc0e8"
          textColor="#FFFFFF"
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center my-8">Core SEO Features That Drive Results</h1>
      <ImageCarousel />
      <SEOBenefitsSection heading="Benefits of Our SEO Services" />
      <WhyChooseUs />
      <ProcessSteps title="Our SEO Process" steps={seoSteps} />
      <FAQSection faqs={sampleFaqs} />;
    </div>
    </>
  );
};

export default SEO_Page;