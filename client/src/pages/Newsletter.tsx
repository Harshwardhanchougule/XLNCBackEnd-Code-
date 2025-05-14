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
import PNLimg1 from "@/images/Newsletter/Personalized Campaigns That Resonate.jpg";
import PNLimg2 from "@/images/Newsletter/Click-Worthy Copy & Eye-Catching Designs.jpg";
import PNLimg3 from "@/images/Newsletter/Smart Email Automation for Consistent Engagement.jpg";
import PNLimg4 from "@/images/Newsletter/Precision Audience Targeting & Segmentation.jpg";
import PNLimg5 from "@/images/Newsletter/Data-Driven Optimization for Maximum ROI.jpg";
import PNLimg6 from "@/images/Newsletter/Spam-Proof & Mobile-Optimized Emails.jpg";
import coverImage from "@/images/Newsletter/Why Choose Us.jpg";

// client\src\images\SEO-Optimized Web Designs\Google-Friendly Structure.jpg
import { SEOBenefitsSection } from '@/components/seo-benefits-section';
import { WhyChooseUs } from '@/components/why-choose-us';
import { FeatureCardGrid } from './feature-card-grid';
import imageHero from "@/images/Newsletter/Newsletter.jpg";
import { NewsBenefitsSection } from '@/components/NewsBenefitsSectio';
import MetaTags from '@/components/MetaTags';
import FeatureCarousel from '@/components/FeatureCarousel';

const Newsletter = () => {
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
            title: "Personalized Campaigns That Resonate",
            description:
                "Generic emails don’t work! We create customized, data-driven newsletters that speak directly to your audience’s interests, ensuring higher engagement and stronger customer relationships.",
            image: PNLimg1,
        },
        {
            title: "Click-Worthy Copy & Eye-Catching Designs",
            description:
                "Your emails will stand out in crowded inboxes with compelling subject lines, high-quality visuals, and persuasive messaging that drives clicks, responses, and sales.",
            image: PNLimg2,
        },
        {
            title: "Smart Email Automation for Consistent Engagement",
            description: "We build intelligent, automated email workflows that nurture leads, send timely follow-ups, and turn one-time buyers into lifelong customers.",
            image: PNLimg3,
        },
        {
            title: "Precision Audience Targeting & Segmentation",
            description:
                "We ensure the right message reaches the right people at the right time using advanced customer segmentation, boosting open rates and conversions effortlessly.",
            image: PNLimg4,
        },
        {
            title: "Data-Driven Optimization for Maximum ROI",
            description:
                "Our real-time analytics and A/B testing track every open, click, and conversion, ensuring continuous improvement and higher returns on your email campaigns.",
            image: PNLimg5,
        },
        {
            title: "Spam-Proof & Mobile-Optimized Emails",
            description:
                "We ensure 100% deliverability with compliance-friendly strategies, and all emails are designed for mobile-first engagement, maximizing readability and conversion.",
            image: PNLimg6,
        }
    ];


    const testimonialData = [
        {
            quote: "Our email campaigns have totally changed the game! Client engagement shot up, we’re getting way more repeat bookings, and customer loyalty is stronger than ever. Hands down, one of the best moves we’ve made for our salon!",
            author: "Owner,",
            company: "Luxury Salon",
            rating: 5
        },
        {
            quote: "Patient communication is a breeze now! The appointment reminders and personalized health tips keep our patients in the loop and coming back. It’s made everything smoother for us and way more convenient for them!",
            author: "Operations Head, ",
            company: "Multi-Specialty Hospital",
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
          title="High-Impact Newsletter Marketing | XLNC Technologies"
          description="Build strong customer relationships with personalized newsletters. Increase open rates, engagement, and repeat sales effortlessly. Start growing today!"
        />
        <div className="min-h-screen bg-[#f8fafc]">
            <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden flex items-center">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src={imageHero}
                        alt="SEO Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>

                <div className="container mx-auto px-4 py-16 relative z-10 max-h-6xl">
                    {/* Main content */}
                    <div className="text-center max-w-6xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Business with High-Impact Newsletter Marketing</h1>
                        <p className="text-lg mb-8">
                            Drive Engagement, Boost Conversions & Keep Customers Coming Back
                        </p>

                        {/* CTA Button */}
                        <button className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 mb-12" onClick={() => window.location.href = '/contact'}>
                            Start Growing Today!
                        </button>
                        {/* Testimonial */}

                    </div>
                    <TestimonialCarousel testimonials={testimonialData} autoPlay={true} interval={5000} />
                </div>

            </div>

            {/* New Section */}
            <div className="text-black py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Done-For-You Newsletter Marketing That Delivers Results
                    </h2>
                    <p className="text-xl max-w-3xl">
                        Newsletters aren’t just emails; they’re your direct connection to customers. With our strategic, conversion-driven email marketing, you can nurture relationships, increase brand loyalty, and drive repeat sales—without lifting a finger.
                    </p>
                </div>

            </div>

            <FeatureCarousel 
                features={services}
                title="Our Powerful Newsletter Marketing Features"
                cardWidth={340}
                cardHeight={320}
            />

            <div className="mx-16">
                <PromotionalBanner
                    title="Boost Engagement & Sales."
                    buttonText=" Get Started Now!"
                    backgroundColor="#8cc0e8"
                    textColor="#FFFFFF"
                />
            </div>
            <div className="pt-16">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="text-center md:text-left md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Why Choose Us? Proven Strategies, Measurable Growth</h2>
                            <p className="text-lg text-gray-700 mb-12">
                                Struggling with low open rates, weak engagement, or email fatigue? We solve these challenges with high-performing newsletters that build brand trust, keep customers engaged, and drive consistent revenue growth.
                            </p>
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl text-[#2256d5] font-bold mb-6 cursor-pointer hover:underline" onClick={() => window.location.href = '/contact'}> Book Consultation</h2>                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src={coverImage}
                                alt="SEO Professional at Desk"
                                className="w-full h-[400] rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                
                <NewsBenefitsSection heading="Why Choose Us? Proven Strategies, Measurable Growth" />
                <div className="mx-10 mb-12">
                    <PromotionalBanner
                        title="Let’s Elevate Your Email Game"
                        buttonText="Start Today!"
                        backgroundColor="#8cc0e8"
                        textColor="#FFFFFF"
                    />
                </div>
            </div>


        </div>
        </>
    );
};

export default Newsletter;