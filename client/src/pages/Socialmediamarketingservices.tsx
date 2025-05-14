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
import TabImage from "@/images/Social media Marketing/Social media marketing services/Social media marketing services.jpg"
import TabImage1 from "@/images/Social media Marketing/Create Buzz, Spark Conversations & Grow Your Brand/Create Buzz, Spark Conversations & Grow Your Brand.jpg";
import TestimonialCarousel from '@/components/TestimonialCarousel';
import BLOG1 from "@/images/Blogging/SEO-Optimized Blogging.jpg";
import BLOG2 from "@/images/Blogging/Engaging & Informative Content.jpg";
import BLOG3 from "@/images/Blogging/Industry-Specific Writing.jpg";
import BLOG4 from "@/images/Blogging/Lead-Generating Blog Posts.jpg";
import BLOG5 from "@/images/Blogging/Mobile & Readability Optimized.jpg";
import BLOG6 from "@/images/Blogging/Consistent Publishing Strategy.jpg";
import LaptopBanner from "@/images/Blogging/Blogging Mockup.2.png"
import { Handshake, Target, TrendingUp } from 'lucide-react';
import { BarChart2, Pencil, MessageCircle, Megaphone, Users, PieChart } from 'lucide-react';
import SmmImg from "@/images/Social media Marketing/Social media marketing services.jpg"



const Socialmediamarketingservices = () => {
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
            question: "Which social media platforms do you specialize in?",
            answer: "We create tailored strategies for <strong>Facebook, Instagram, LinkedIn, Twitter, and YouTube</strong>, helping brands thrive on the platforms most relevant to their audience."
        },
        {
            id: "item-2",
            question: "Do you handle both organic and paid social media marketing?",
            answer: "Absolutely! We combine <strong>organic content strategy with strategic paid campaigns</strong> to maximize reach, engagement, and ROI for your brand."
        },
        {
            id: "item-3",
            question: "How do you measure social media success?",
            answer: "We track key metrics including <strong>engagement rates, reach, website traffic, conversions, and ROI</strong> to ensure your social media efforts deliver measurable results."
        },
        {
            id: "item-4",
            question: "Will you create custom content for my brand?",
            answer: "Yes! Our creative team designs <strong>branded visuals, videos, and engaging copy</strong> that perfectly align with your brand voice and resonate with your target audience."
        },
        {
            id: "item-5",
            question: "How long does it take to see results?",
            answer: "While organic growth takes time to build, <strong>paid campaigns can deliver quick wins</strong>. We'll customize strategies to meet your timeline and business goals effectively."
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

    const services1 = [
        {
            title: "Data-Driven Social Media Strategy",
            description: "Success starts with a plan. We analyze market trends, competitors, and audience behavior to craft a tailored strategy that aligns with your business goals. From choosing the right platforms to defining key performance indicators (KPIs), we ensure your social media efforts drive measurable results.",
            icon: <BarChart2 size={24} />
        },
        {
            title: "Engaging Content Creation & Branding",
            description: "Stand out with eye-catching visuals, compelling videos, and scroll-stopping captions. Our team curates high-quality content that reflects your brand personality, resonates with your audience, and strengthens brand recall—whether it's Instagram Reels, LinkedIn thought leadership posts, or interactive stories.",
            icon: <Pencil size={24} />
        },
        {
            title: "Social Media Management & Community Engagement",
            description: "Your social presence is only as strong as your engagement. We handle everything—from scheduling posts and managing your profiles to responding to comments and messages. Our interactive approach builds genuine relationships with your audience, fostering brand loyalty and trust.",
            icon: <MessageCircle size={24} />
        },
        {
            title: "Paid Advertising & Lead Generation",
            description: "Maximize your reach with high-converting paid campaigns across Facebook, Instagram, LinkedIn, and Twitter. We fine-tune audience targeting, optimize ad creatives, and use A/B testing to ensure your budget is spent wisely—delivering more leads, sales, and website traffic.",
            icon: <Megaphone size={24} />
        },
        {
            title: "Influencer Marketing & Social Commerce",
            description: "Leverage the power of influencers to boost brand credibility and expand your reach. We connect you with industry-relevant influencers and set up seamless brand collaborations. Plus, we integrate social commerce strategies, turning your social profiles into revenue-generating platforms.",
            icon: <Users size={24} />
        },
        {
            title: "Analytics, Performance Tracking & Continuous Optimization",
            description: "Numbers tell a story, and we make sure you understand yours. Through advanced analytics, we track engagement rates, conversions, and campaign success. With real-time data insights, we continuously refine your strategy to ensure long-term growth and maximum ROI.",
            icon: <PieChart size={24} />
        }
    ];

    const SocialMediaCardFlex = [
        {
            title: " Why Choose Us for Social Media Marketing?",
            description: "We’re not just another agency—we’re your brand’s digital storytellers. Our team combines creative genius with marketing precision, crafting strategies that don’t just get likes but drive real business growth. Whether you're looking to build awareness, drive traffic, or boost conversions, we make social media work for you."
        },

    ];
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden flex items-center justify-center">
                {/* Colored light streak effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 transform -rotate-12 blur-lg"></div>
                </div>

                <div className="container mx-auto px-4 py-16 relative z-10">
                    {/* Main content */}
                    <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Ignite Your Brand's Social Media Success
                        </h1>
                        <p className="text-lg mb-8">
                            Build, Engage & Convert with Powerful Social Media Marketing
                        </p>
                        {/* CTA Button */}
                        <button className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 mb-12" onClick={() => window.location.href = '/contact'}>
                            CONTACT US
                        </button>
                        {/* Laptop mockup */}
                        {/* <div className="relative max-w-2xl mx-auto mb-16">
                            <img
                                src={SmmImg}
                                alt="Laptop displaying website"
                                 className="w-full h-auto object-contain rounded-[20px] border-4 border-white/10 shadow-xl"
                            />
                        </div> */}
                    </div>
                </div>
            </div>

            <section className="relative w-full text-[#242424] overflow-hidden">
                {/* Main Content with Card and Animation */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                    <div className="bg-gray-100 rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <div className="relative overflow-hidden">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 opacity-50 animate-gradient"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                                    Social Media That Drives Real Results
                                </h2>
                                <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                                    Social media isn't just about posting—it's about creating experiences that connect, inspire,
                                    and convert. Our expert social media marketing services blend creativity with data-driven
                                    strategies to help your brand stand out, engage audiences, and drive meaningful growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="relative pt-0 px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Create Buzz, Spark Conversations & Grow Your Brand
                </h2>
                <div className="relative max-w-2xl mx-auto mb-16">
                    <img
                        src={TabImage1}
                        alt="Laptop displaying website"
                        className="w-full h-24 md:h-96 object-contain rounded-2xl"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-16 py-0">
                    <div className="relative overflow-hidden">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 opacity-50 animate-gradient"></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                                Social Media That Drives Real Results
                            </h2>
                            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                                Social media isn't just about posting—it's about creating experiences that connect, inspire,
                                and convert. Our expert social media marketing services blend creativity with data-driven
                                strategies to help your brand stand out, engage audiences, and drive meaningful growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center bg-gray-100 p-6">
                <div className="flex flex-col md:flex-row justify-center gap-10 max-w-6xl">

                    {/* Card 1 - Brand Identity */}
                    <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                        <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
                            <div className="w-16 h-16 rounded-full bg-blue-600 flex justify-center items-center mb-4 relative z-10 animate-pulse">
                                <Handshake size={32} color="white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Brand Identity & Awareness</h3>
                        </div>
                        <div className="px-6 pb-6 text-center">
                            <p className="text-gray-600 leading-relaxed">Make a lasting impression with a distinctive online presence. Our strategies build recognition that sets you apart from competitors.</p>
                        </div>
                        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
                    </div>

                    {/* Card 2 - Engagement */}
                    <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                        <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
                            <div className="w-16 h-16 rounded-full bg-pink-600 flex justify-center items-center mb-4 relative z-10" id="rotating-icon">
                                <TrendingUp size={32} color="white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Engagement & Community</h3>
                        </div>
                        <div className="px-6 pb-6 text-center">
                            <p className="text-gray-600 leading-relaxed">Build loyal followers who actively engage with your brand. Create meaningful connections that transform audiences into advocates.</p>
                        </div>
                        <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-500 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
                    </div>

                    {/* Card 3 - Lead Generation */}
                    <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                        <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
                            <div className="w-16 h-16 rounded-full bg-blue-400 flex justify-center items-center mb-4 relative z-10" id="bounce-icon">
                                <Target size={32} color="white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Lead Generation & Conversions</h3>
                        </div>
                        <div className="px-6 pb-6 text-center">
                            <p className="text-gray-600 leading-relaxed">Turn interactions into customers with precision-driven marketing. Our targeted approaches deliver measurable ROI and business growth.</p>
                        </div>
                        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
                    </div>

                </div>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 animate-fadeIn">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Social Media Marketing Expertise</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto animate-width"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services1.map((service1, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden 
                    transform transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                    border border-gray-200 h-[350px] flex flex-col
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
                                            {service1.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 leading-tight
                                transform transition-all duration-300 group-hover:translate-x-2">
                                            {service1.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed
                            transform transition-all duration-300 group-hover:translate-y-1">
                                        {service1.description}
                                    </p>
                                </div>
                                <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 
                        mt-auto relative overflow-hidden group-hover:bg-gradient-to-r 
                        group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-5 
                            transition-opacity duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="mx-16 mt-4 mb-8">

                <PromotionalBanner
                    title1="Ready to Dominate Social Media?"
                    title="Let’s create something extraordinary— more engagement, more leads, more growth."
                    buttonText="Contact Us Today!"
                    backgroundColor="#8cc0e8"
                    textColor="#FFFFFF"
                />
            </div>


            <div className="min-h-85 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <div className="max-w-6xl mx-auto">


                    <div className="grid grid-cols-1 gap-8">
                        {SocialMediaCardFlex.map((SocialMediaCardFlex, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                                {/* Left side - Image */}
                                <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600">
                                    <div className="h-full flex items-center justify-center p-6">
                                        <img
                                            src={TabImage1}
                                            alt={`${SocialMediaCardFlex.title} illustration`}
                                            className="max-h-screen w-auto object-contain rounded-2xl"
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

            {/* How Our Process Works */}
            {/* <ProcessSteps title="How Our SEO Content Writing Process Works" steps={seoSteps} /> */}

            {/* FAQ Section */}
            <FAQSection faqs={sampleFaqs} />;

            {/* CTA Section */}

        </div>
    );
};

export default Socialmediamarketingservices;