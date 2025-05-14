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
import ImageTab from "@/images/Reputation management/Reputation management.jpg";
import TestimonialCarousel from '@/components/TestimonialCarousel';
import BLOG1 from "@/images/Blogging/SEO-Optimized Blogging.jpg";
import BLOG2 from "@/images/Blogging/Engaging & Informative Content.jpg";
import BLOG3 from "@/images/Blogging/Industry-Specific Writing.jpg";
import BLOG4 from "@/images/Blogging/Lead-Generating Blog Posts.jpg";
import BLOG5 from "@/images/Blogging/Mobile & Readability Optimized.jpg";
import BLOG6 from "@/images/Blogging/Consistent Publishing Strategy.jpg";
import LaptopBanner from "@/images/Blogging/Blogging Mockup.2.png"
import SmartImage from "@/images/Reputation management/A Smarter Approach to Online Reputation.png";
import { ThumbsUp, Laugh, Medal, HeartHandshake } from 'lucide-react';
import { WhyChooseRMS } from '@/components/WhyChooseRMS';
import BrandImg from "@/images/Reputation management/We Help You Take Control.jpg"
import MetaTags from '@/components/MetaTags';
import FeatureCarousel from '@/components/FeatureCarousel';

const ReputationManagement = () => {
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
      title: "Review Monitoring & Sentiment Analysis",
      description:
        "Track customer feedback across multiple platforms and gain insights into brand sentiment.",
      image: BLOG1,
    },
    {
      title: "Reputation Score Tracking",
      description:
        "Measure and improve your brand’s reputation score with in-depth analytics.",
      image: BLOG2,
    },
    {
      title: "Crisis Management & Negative Review Mitigation",
      description: "Address negative feedback proactively and turn dissatisfied customers into loyal advocates.",
      image: BLOG3,
    },
    {
      title: "Review Generation & Social Proof Management",
      description:
        "Encourage happy customers to leave positive reviews and showcase them across digital platforms.",
      image: BLOG4,
    },
    {
      title: "Competitor Reputation Benchmarking",
      description:
        "Analyze competitors’ online reputations and identify areas for your brand’s improvement.",
      image: BLOG5,
    },

  ];  // 3. TESTIMONIALS
  const testimonialData = [
    {
      quote: "Keeping up with reviews used to be a headache, but these guys made it easy. They help us stay on top of customer feedback and respond the right way. Our shop gets way more foot traffic now, and people actually mention our great reviews when they come in!",
      author: "Owner,  ",
      company: "Local Retail Shop",
      rating: 5
    },
    {
      quote: "Online reviews can make or break a small business, and I’m so glad we got help managing ours. They helped us handle negative feedback professionally and highlight the good stuff. We’ve seen more regulars coming in, and our reputation has never been better!",
      author: "Manager, ",
      company: "Neighborhood Café",
      rating: 4
    },
    {
      quote: "As a small business owner, I don’t have time to chase down reviews or worry about bad ones hurting my reputation. This team took that stress off my plate. They helped us respond to customers the right way and made sure our business looks great online. Totally worth it!",
      author: "Founder,",
      company: "Local Home Services Business",
      rating: 5
    }
  ];
  const sampleFaqs: any = [
    {
      id: "item-1",
      question: "Why is reputation management important for my business?",
      answer: "Your online reputation directly impacts customer trust, sales, and brand credibility. Managing it effectively helps in <strong>building a positive image</strong> and <strong>attracting more customers</strong>."
    },
    {
      id: "item-2",
      question: "How do you handle negative reviews?",
      answer: "We offer <strong>proactive reputation repair</strong>, including private conflict resolution, professional responses, and suppression strategies to minimize negative impacts."
    },
    {
      id: "item-3",
      question: "Can I track my reputation performance?",
      answer: "Yes! We provide <strong>detailed analytics, sentiment tracking, and reputation score insights</strong> to help you monitor progress."
    },
    {
      id: "item-4",
      question: "How quickly can I see results?",
      answer: "Reputation improvement varies, but with our <strong>strategic approach</strong>, you'll notice positive changes within weeks."
    },
    {
      id: "item-5",
      question: "Is reputation management only for businesses?",
      answer: "No! <strong>Personal brands, professionals, and even public figures</strong> can benefit from reputation control to maintain a strong digital presence."
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

  const SocialMediaCardFlex = [

    {
      title: " We Help You Take Control",
      description: "Our tailored reputation management strategies ensure that your brand is seen in the best light. From boosting positive content to handling negative feedback, we help shape a strong, trustworthy image that drives growth and customer confidence."
    },

  ];


  return (
    <>
      <MetaTags
        title="Online Reputation Management | XLNC Technologies"
        description="Manage reviews, handle crises, and improve online perception with expert reputation management. Turn feedback into a business advantage."
      />
      <div className="min-h-screen bg-[#f2f2f2]">
        <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden ">
          {/* Colored light streak effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 transform -rotate-12 blur-lg"></div>
          </div>

          <div className="container mx-auto px-4 pt-16 relative z-10">
            {/* Main content */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">Take Control of Your Brand’s Image with Expert Online Reputation Management            </h1>
              <h5 className="text-lg mb-8">
                Build Trust, Strengthen Credibility & Grow Your Business
              </h5>
              <p className="text-lg mb-8">
                Your online reputation can make or break your brand. XLNC Technologies helps you monitor, manage, and enhance your digital presence, ensuring positive customer perception and long-term success.
              </p>

              {/* CTA Button */}
              <button className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 mb-12" onClick={() => window.location.href = '/contact'}>
                Get Started Today
              </button>

              {/* Laptop mockup */}
              <div className="relative max-w-2xl mx-auto mb-16">
                <img
                  src={ImageTab}
                  alt="Laptop displaying website"
                  className="w-full h-auto object-contain rounded-[20px] border-4 border-white/10 shadow-xl"
                />
              </div>

              {/* Testimonial */}

            </div>

          </div>

        </div>

        <section className="relative  mx-8 text-[#242424] overflow-hidden">
          {/* Main Content with Card and Animation */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
            <div className="bg-gray-100 rounded-2xl shadow-lg p-2 transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
              <div className="relative overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 opacity-50 animate-gradient"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Your Reputation, Our Priority
                  </h2>
                  <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                    A single negative review has the power to influence customer perception and damage brand credibility. <br />
                    XLNC Technologies offers comprehensive reputation management solutions to help businesses monitor, improve, and maintain a strong online presence. From review monitoring and response management to brand perception analysis and crisis control, we ensure your business stays ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 p-4 mx-12 rounded-lg shadow-lg">
          <div className="max-w-6xl mx-auto py-2 px-4">
            {/* Section Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-2 text-gray-800">Turn Reviews into Your Competitive Advantage
              </h1>
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col md:flex-row items-center gap-10 mt-4">
              {/* Image Container */}
              <div className="flex-1 min-w-full md:min-w-0 bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={SmartImage}
                  alt="Laptop displaying website"
                  className="w-full h-auto"
                />
              </div>

              {/* Content Block */}
              <div className="flex-1 min-w-full md:min-w-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">A Smarter Approach to Online Reputation</h2>
                <p className="text-base leading-relaxed mb-4">
                  Your reputation isn’t just about what customers say—it’s about how you respond, manage, and shape public perception. With XLNC Technologies, you get a powerful reputation management service that lets you:     <br></br>
                  Enhance your brand’s reputation with our expert online reputation management services. We help you stay on top of customer feedback by monitoring and responding to reviews across platforms like Google, Facebook, and LinkedIn. Showcase positive experiences by collecting and sharing customer reviews on your website and social media. Facing negative feedback? We handle it proactively, resolving issues privately to protect your brand’s credibility. Plus, our in-depth brand perception analysis gives you valuable insights to make informed decisions and build a strong, trustworthy online presence                     </p>
              </div>
            </div>
          </div>
        </div>

        
          <FeatureCarousel
            features={services}
            title="Key features of our online reputation software "
            cardWidth={340}
            cardHeight={320}
          />
        


        <div>

          <TestimonialCarousel testimonials={testimonialData} autoPlay interval={5000} />
        </div>



        {/* Hero Banner Section */}

        <div className="mx-16 my-8  ">
          <PromotionalBanner
            title="Boost your brand’s reputation and drive business growth"
            buttonText="Let’s get started today!"
            textColor="#FFFFFF"
          />
        </div>

        <div className=' my-8 bg-inherit'>
          <h2 className="text-2xl font-bold mb-2 text-center">Benefits of Our Reputation Management Services
          </h2>
          <div className="flex justify-center bg-gray-100 py-8">
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl">

              {/* Card 1 - Revenue Optimization */}
              <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex justify-center items-center mb-4 relative z-10 animate-pulse">
                    <HeartHandshake size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Stronger Brand Trust & Credibility
                  </h3>
                </div>
                <div className="px-6 pb-6 text-center">
                  <p className="text-gray-600 leading-relaxed">With our reputation management services, we help you build a trustworthy and credible brand image. By ensuring positive online engagement and addressing concerns proactively, we create a strong and reliable presence that attracts customers and business partners with confidence.
                  </p>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
              </div>

              {/* Card 2 - AI Targeting */}
              <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
                  <div className="w-16 h-16 rounded-full bg-pink-600 flex justify-center items-center mb-4 relative z-10" id="rotating-icon">
                    <Medal size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center"> Higher Search Rankings & Visibility</h3>
                </div>
                <div className="px-6 pb-6 text-center">
                  <p className="text-gray-600 leading-relaxed">Our strategies improve your search rankings by leveraging positive reviews, high-quality backlinks, and consistent brand engagement. With increased visibility, your brand will attract more organic traffic, making it easier for potential customers to find and trust you.
                  </p>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-500 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
              </div>

              {/* Card 3 - Full-Funnel Approach */}
              <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
                  <div className="w-16 h-16 rounded-full bg-blue-400 flex justify-center items-center mb-4 relative z-10" id="bounce-icon">
                    <Laugh size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center"> Increased Customer Retention & Loyalty
                  </h3>
                </div>
                <div className="px-6 pb-6 text-center">
                  <p className="text-gray-600 leading-relaxed">We monitor and respond to customer feedback promptly, ensuring concerns are resolved before they escalate. By improving customer satisfaction, we help you retain loyal clients, boost repeat business, and enhance word-of-mouth referrals.
                  </p>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
              </div>

              {/* Card 4 - Full-Funnel Approach */}
              <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex justify-center items-center mb-4 relative z-10 animate-pulse">
                    <ThumbsUp size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Competitive Edge Over Rivals
                  </h3>
                </div>
                <div className="px-6 pb-6 text-center">
                  <p className="text-gray-600 leading-relaxed">A well-managed online reputation gives you a significant advantage over competitors. We position your brand as the preferred choice by highlighting positive customer experiences and maintaining a strong digital presence that sets you apart in the market.
                  </p>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
              </div>
            </div>
          </div>
        </div>
        <section className="relative  mx-0 text-[#242424] overflow-hidden bg-[#f8f9fa]">
          {/* Main Content with Card and Animation */}
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="p-4">
              <div className="relative overflow-hidden">
                {/* Animated gradient background */}


                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Does Your Brand’s Reputation Reflect Its True Value?
                  </h2>
                  <h5 className="text-lg mb-1 text-black font-semibold leading-relaxed">Worried About What People See When They Search for You?
                  </h5>
                  <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                    First impressions happen online. If outdated information, bad reviews, or low visibility are affecting your credibility, your business could be missing out on valuable opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="min-h-85 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {SocialMediaCardFlex.map((SocialMediaCardFlex, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                  {/* Left side - Image */}
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="h-full flex items-center justify-center p-6">
                      <img
                        src={BrandImg}
                        alt={`${SocialMediaCardFlex.title} illustration`}
                        className="max-h-screen w-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="md:w-2/3 p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{SocialMediaCardFlex.title}</h1>
                    <p className="text-gray-600">{SocialMediaCardFlex.description}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <WhyChooseRMS />

        <FAQSection faqs={sampleFaqs} />;

      </div>
    </>
  );
};

export default ReputationManagement;