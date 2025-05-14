import React, { useEffect, useRef, useState } from 'react';
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
import TestimonialCarousel from '@/components/TestimonialCarousel';
import LaptopBanner from "@/images/Blogging/Blogging Mockup.2.png"
import { SEOBenefitsSection } from '@/components/seo-benefits-section';
import image from "@/images/Performance Marketing/Performance Marketing.jpg";
import image2 from "@/images/Performance Marketing/Why choose us .jpg";
import { Handshake, Target, TrendingUp, DollarSign, BrainCircuit, LayersIcon } from 'lucide-react';
import MetaTags from '@/components/MetaTags';

const PerformanceMarketing = () => {
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
    // 3. TESTIMONIALS  
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
    

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const cardWidth = 280;
        const gap = 16;
        // const totalCards = services.length;
        const maxIndex = Math.floor((container.clientWidth - cardWidth) / (cardWidth + gap));

        if (direction === 'left') {
            setCurrentIndex(Math.max(0, currentIndex - 1));
        } else {
            setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
        }
    };
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
        <MetaTags 
          title="Google Ads & Performance Marketing | XLNC Technologies"
          description="Get more leads, higher sales, and better ROI with XLNC’s full-funnel marketing approach. Advanced strategies that work smarter, not harder."
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">Fuel Your Business Growth with High-Performance Advertising</h1>
                        <p className="text-lg mb-8">
                            Data-Driven Marketing Strategies Designed to Maximize Conversions
                        </p>

                        {/* CTA Button */}
                        <button className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 mb-12" onClick={() => window.location.href = '/contact'}>
                            Start Your Growth Journey
                        </button>

                        {/* Laptop mockup */}
                        <div className="relative max-w-2xl mx-auto mb-0">
                            <img
                                src={image}
                                alt="Laptop displaying website"
                                className="w-full h-auto object-contain rounded-[20px] border-4 border-white/10 shadow-xl"
                            />
                        </div>
                    </div>
                    {/* <TestimonialCarousel testimonials={testimonialData} /> */}
                </div>

            </div>
            {/* Main Content with Card and Animation */}
            <section className="relative w-full text-[#242424] overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                    <div className="bg-gray-100 rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <div className="relative overflow-hidden">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 opacity-50 animate-gradient"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                                    Performance Marketing That Works Smarter, Not Harder
                                </h2>
                                <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                                    We specialize in strategic, results-driven advertising that helps businesses scale faster. By leveraging cutting-edge technology, audience insights, and conversion-focused tactics, we ensure your brand reaches the right people at the right time—driving real engagement and revenue.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* New Section */}

            <div className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 p-4">
                <div className="max-w-6xl mx-auto py-10 px-4">
                    {/* Section Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold mb-2 text-gray-800">Why Choose XLNC Technologies for Performance Marketing?</h1>
                    </div>

                    {/* Content Wrapper */}
                    <div className="flex flex-col md:flex-row items-center gap-10 mt-4">
                        {/* Image Container */}
                        <div className="flex-1 min-w-full md:min-w-0 bg-white rounded-lg overflow-hidden shadow-md">
                            <img
                                src={image2}
                                alt="Laptop displaying website"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Content Block */}
                        <div className="flex-1 min-w-full md:min-w-0">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">Advertising That Delivers Maximum Impact</h2>
                            <p className="text-base leading-relaxed mb-4">
                                We craft data-driven marketing campaigns that focus on real business outcomes—whether it’s more leads, higher sales, or stronger brand visibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-black py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">

                        <h1 className="text-1xl md:text-4xl font-bold">What Sets Us Apart?</h1>
                    </div>
                    <div className="flex items-start gap-3">

                        <p className="text-xl max-w-3xl">
                            With our expertise in search, social, and programmatic advertising, we deliver performance-driven campaigns that generate measurable success.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center bg-gray-100 py-6">
                <div className="flex flex-col md:flex-row justify-center gap-4 max-w-6xl">

                    {/* Card 1 - Revenue Optimization */}
                    <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                        <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
                            <div className="w-16 h-16 rounded-full bg-blue-600 flex justify-center items-center mb-4 relative z-10 animate-pulse">
                                <DollarSign size={32} color="white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Revenue-Optimized Campaigns</h3>
                        </div>
                        <div className="px-6 pb-6 text-center">
                            <p className="text-gray-600 leading-relaxed">Every marketing dollar is spent efficiently, ensuring higher returns and better customer acquisition rates.
                            </p>
                        </div>
                        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
                    </div>

                    {/* Card 2 - AI Targeting */}
                    <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                        <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
                            <div className="w-16 h-16 rounded-full bg-pink-600 flex justify-center items-center mb-4 relative z-10" id="rotating-icon">
                                <BrainCircuit size={32} color="white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center"> AI-Powered Targeting & Bidding</h3>
                        </div>
                        <div className="px-6 pb-6 text-center">
                            <p className="text-gray-600 leading-relaxed">We use intelligent ad placement strategies to maximize visibility while keeping costs under control.</p>
                        </div>
                        <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-500 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
                    </div>

                    {/* Card 3 - Full-Funnel Approach */}
                    <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                        <div className="flex flex-col items-center pt-6 pb-3 px-5 relative">
                            <div className="w-16 h-16 rounded-full bg-blue-400 flex justify-center items-center mb-4 relative z-10" id="bounce-icon">
                                <LayersIcon size={32} color="white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center"> Full-Funnel Marketing Approach                            </h3>
                        </div>
                        <div className="px-6 pb-6 text-center">
                            <p className="text-gray-600 leading-relaxed">From brand awareness to customer retention, we design campaigns that nurture leads at every stage.</p>
                        </div>
                        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400 rounded-full opacity-10 translate-x-8 translate-y-8"></div>
                    </div>

                </div>
            </div >

            <div className="mx-16 mb-6">
                <PromotionalBanner
                    title="Let’s Build a High-Performance Marketing Strategy for You!"
                    buttonText="Contact Us"
                    backgroundColor="#8cc0e8"
                    textColor="#FFFFFF"
                />
            </div>


            <div className="flex flex-col items-center w-full bg-gray-100 py-4">
                <div
                    className={`w-full max-w-7xl bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                    {/* Header Section */}
                    <div className="bg-[#f8fafc] p-8">
                        <h1 className="text-4xl font-bold mb-6 text-[#245cdf]">
                            Our Google Ads Management Services
                        </h1>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-full">
                                <h3 className="text-2xl font-semibold mb-4 text-[#245cdf]">
                                    Comprehensive PPC Campaign Management
                                </h3>
                                <p className="text-black w-full">
                                    Our team of Google Ads specialists will manage every aspect of your PPC campaign, from keyword research to ad creation, optimization, and reporting. We focus on maximizing your ROI by continuously monitoring and adjusting your campaigns to ensure optimal performance.
                                </p>
                            </div>
                        </div>

                        {/* New Points Section */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h4 className="text-xl font-semibold text-[#245cdf] mb-2">
                                    💡 Purpose & Value
                                </h4>
                                <p className="text-black">
                                    We focus on real results, not vanity metrics — Helping businesses grow through powerful, insight-driven advertising strategies.
                                </p>
                            </div>

                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h4 className="text-xl font-semibold text-[#245cdf] mb-2">
                                    🚀 Market Differentiator
                                </h4>
                                <p className="text-black">
                                    Our approach is built for conversions, not just clicks. We combine creative excellence with advanced analytics to craft campaigns that drive real business impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
        </>
    );
};

export default PerformanceMarketing;