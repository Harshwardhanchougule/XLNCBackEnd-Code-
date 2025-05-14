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
import {
  MessageSquare,
  Search,
  FileText,
  BarChart,
  Clock,
  Smartphone
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PromotionalBanner from '@/components/PromotionalBanner';
import FAQSection from '@/components/FAQ_Section';
import ProcessSteps from '@/components/ProcessMap';
import Image1 from "@/images/Webiste Mockup/1.png";
import TabImage from "@/images/Blogging/Content & Blogging Mockup.png"
import TestimonialCarousel from '@/components/TestimonialCarousel';
// client\src\images\Blogging\Blogging Mockup.2.png
// client\src\images\Blogging\Consistent Publishing Strategy.jpg
// client\src\images\Blogging\Content & Blogging Mockup.png
// client\src\images\Blogging\Engaging & Informative Content.jpg
// client\src\images\Blogging\Industry-Specific Writing.jpg
// client\src\images\Blogging\Lead-Generating Blog Posts.jpg
// client\src\images\Blogging\Mobile & Readability Optimized.jpg
// client\src\images\Blogging\SEO-Optimized Blogging.jpg
import BLOG1 from "@/images/Blogging/SEO-Optimized Blogging.jpg";
import BLOG2 from "@/images/Blogging/Engaging & Informative Content.jpg";
import BLOG3 from "@/images/Blogging/Industry-Specific Writing.jpg";
import BLOG4 from "@/images/Blogging/Lead-Generating Blog Posts.jpg";
import BLOG5 from "@/images/Blogging/Mobile & Readability Optimized.jpg";
import BLOG6 from "@/images/Blogging/Consistent Publishing Strategy.jpg";
import LaptopBanner from "@/images/Blogging/Blogging Mockup.2.png"
import MetaTags from '@/components/MetaTags';
import ServiceCarousel from '@/components/ServiceCarousel';
import FeatureCarousel from '@/components/FeatureCarousel';

const BloggingPage = () => {
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
      title: "SEO-Optimized Blogging",
      description:
        "High-quality, keyword-rich articles that boost search rankings and organic traffic.",
      image: BLOG1,
    },
    {
      title: "Engaging & Informative Content",
      description:
        "Well-researched blogs that educate, engage, and convert readers.",
      image: BLOG2,
    },
    {
      title: "Industry-Specific Writing",
      description: "Expert content tailored to your business niche for maximum relevance.",
      image: BLOG3,
    },
    {
      title: "Consistent Publishing Strategy",
      description:
        "Regular content updates to improve domain authority and visibility.",
      image: BLOG4,
    },
    {
      title: "Lead-Generating Blog Posts",
      description:
        "Action-driven content designed to convert visitors into customers.",
      image: BLOG5,
    },
    {
      title: "Mobile & Readability Optimized",
      description:
        "Clear, concise, and structured blogs for better user experience and engagement.",
      image: BLOG6,
    }
  ];  // 3. TESTIMONIALS
  const testimonialData = [
    {
      quote: "Working with XLNC Technologies to build my website was a great experience. They were attentive to my needs and wants, ensuring every detail aligned with my vision. Any changes I requested were made quickly, and they consistently found creative solutions to bring my ideas to life. Their flexibility and willingness to take calls at times that worked for me made the process smooth and stress-free. I highly recommend XLNC Technologies to anyone looking for a dedicated and talented wed development team!",
      author: "Reema Parikh (VP)",
      company:"Packaging Company",
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
      question: "How does content help with SEO?",
      answer: "SEO-optimized content improves <strong>search rankings, increases organic traffic, and establishes industry authority</strong>, helping your website appear higher on Google."
    },
    {
      id: "item-2",
      question: "What types of content do you create?",
      answer: "We specialize in <strong>SEO blog writing, website content, guest posts, product descriptions, and pillar pages</strong> to maximize your digital presence."
    },
    {
      id: "item-3",
      question: "How often should I publish new content?",
      answer: "Publishing <strong>2-4 blogs per month</strong> is recommended for consistent SEO growth and audience engagement."
    },
    {
      id: "item-4",
      question: "Do you conduct keyword research before writing?",
      answer: "Yes, we perform <strong>in-depth keyword analysis</strong> to target relevant search terms and improve rankings."
    },
    {
      id: "item-5",
      question: "How do I get started?",
      answer: "Click the <strong>\"Contact us\"</strong> button, and we'll help you craft an SEO-driven content plan."
    }
  ];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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
  return (
    <>
     <MetaTags 
        title="High-Quality Blogging | SEO-Optimized Content Services"
        description="Boost traffic & leads with SEO-optimized blogs! Our experts craft engaging, keyword-rich content to enhance rankings & audience engagement."
      />
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden ">
        {/* Colored light streak effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 transform -rotate-12 blur-lg"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Main content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">SEO-Optimized Blogs That Increases Traffic & Converts</h1>
            <p className="text-lg mb-8">
              High-Quality Blogging | Keyword-Rich Content | More Organic Traffic & Leads
            </p>

            {/* CTA Button */}
            <button className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 mb-12"  onClick={() => window.location.href = '/contact'}>
              CONTACT US
            </button>

            {/* Laptop mockup */}
            <div className="relative max-w-2xl mx-auto mb-16">
              <img
                src={TabImage}
                alt="Laptop displaying website"
                className="w-full h-auto"
              />
            </div>

            {/* Testimonial */}

          </div>
          <TestimonialCarousel testimonials={testimonialData} autoPlay interval={3000} />
        </div>

      </div>
      <FeatureCarousel  features={services} title="" cardWidth={340} cardHeight={320} />

      {/* Hero Banner Section */}
      <br /><br />
      <div className="mx-16">
        <PromotionalBanner
          title="Try our new premium features for free today"
          buttonText="CONTACT US"
          
          textColor="#FFFFFF"
        />
      </div>


      <div className="w-full py-16 px-4 ">
      {/* Grid container with responsive behavior */}
      <div className="grid grid-cols-1 gap-4 ">
        <div className="text-center order-3 md:order-3 ">
          <Card className="overflow-hidden border-0 shadow-none">
            <div className="relative bg-[#f8fafc]">
              {/* Desktop image - only show on large screens */}
              <img 
                className="w-full hidden lg:block" 
                id="ww-rkfyzvlr" 
                alt="Feature image" 
                src={LaptopBanner}
              />
              
              {/* Mobile image - only show on smaller screens */}
              <img 
                className="w-full lg:hidden" 
                alt="Feature image for mobile" 
                src={LaptopBanner}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>

      {/* How Our Process Works */}
      <ProcessSteps title="How Our SEO Content Writing Process Works" steps={seoSteps} />

      {/* FAQ Section */}
      <FAQSection faqs={sampleFaqs} />;

      {/* CTA Section */}
    
    </div>
    </>
  );
};

export default BloggingPage;