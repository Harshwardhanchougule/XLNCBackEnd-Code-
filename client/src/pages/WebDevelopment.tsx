import { useParams } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PricingCard from "../components/PricingCard";
import PortfolioSection from "../components/PortfolioSection";
import { useRef, useState } from "react";
import { Check, ChevronDown, ChevronUp, Circle } from "lucide-react";
import Image from "@/images/3269700_edit.webp";
import images from "@/images/industry_banner.jpg";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Image1 from "@/images/Webiste Mockup/1.png";
import SEO1 from "@/images/Web Design That Delivers More Than Just Aesthetics/SEO-Optimized for Higher Rankings.jpg";
import SEO2 from "@/images/Web Design That Delivers More Than Just Aesthetics/Fast & Mobile-Responsive.jpg";
import SEO3 from "@/images/Web Design That Delivers More Than Just Aesthetics/Conversion-Focused Layouts.jpg";
import SEO4 from "@/images/Web Design That Delivers More Than Just Aesthetics/Secure & Reliable.jpg";
import SEO5 from "@/images/Web Design That Delivers More Than Just Aesthetics/User-Friendly Navigation.jpg";
import SEO6 from "@/images/Web Design That Delivers More Than Just Aesthetics/Scalable & Future-Ready.jpg";
import FAQSection from "@/components/FAQ_Section";
import TechnologyCard from "@/components/TechnologyCard ";
import GoogleSEO from "@/images/SEO-Optimized Web Designs/Google-Friendly Structure.jpg";
import SeoServicesWeb from "@/components/SeoServicesWeb";

import PortFolio1 from "@/images/WebDevelopment/Website images/Air Conditioning-HVAC.jpg";
import PortFolio2 from "@/images/WebDevelopment/Website images/AIRSLV_HVAC.jpg";
import PortFolio3 from "@/images/WebDevelopment/Website images/Attoyer- Lawyer.jpg";
import PortFolio4 from "@/images/WebDevelopment/Website images/Bevan salon.jpg";
import PortFolio5 from "@/images/WebDevelopment/Website images/Cameron-Home Inspection.jpg";
import PortFolio6 from "@/images/WebDevelopment/Website images/Catering.jpg";
import PortFolio7 from "@/images/WebDevelopment/Website images/Cinestar-Video production.jpg";
import PortFolio8 from "@/images/WebDevelopment/Website images/Cohous Interior design.jpg";
import PortFolio9 from "@/images/WebDevelopment/Website images/Coxprint-printing.jpg";
import PortFolio10 from "@/images/WebDevelopment/Website images/Cyberchip web security.jpg";
import PortFolio11 from "@/images/WebDevelopment/Website images/Fauxis-Window treatment.jpg";
import PortFolio12 from "@/images/WebDevelopment/Website images/florist.png";
import PortFolio13 from "@/images/WebDevelopment/Website images/Financial Consulting.jpg";
import PortFolio14 from "@/images/WebDevelopment/Website images/Fitness & Gym.jpg";
import PortFolio15 from "@/images/WebDevelopment/Website images/Foxeyoga-Healing wellness.jpg";
import PortFolio16 from "@/images/WebDevelopment/Website images/Hair Salon.jpg";
import PortFolio17 from "@/images/WebDevelopment/Website images/Heal-Charity.jpg";
import PortFolio18 from "@/images/WebDevelopment/Website images/Healthcare & Medical.jpg";
import PortFolio19 from "@/images/WebDevelopment/Website images/Inox Kitchen Interior.jpg";
import PortFolio20 from "@/images/WebDevelopment/Website images/Makeup.jpg";
import PortFolio21 from "@/images/WebDevelopment/Website images/Margin-Marketing.jpg";
import PortFolio22 from "@/images/WebDevelopment/Website images/Medilix.jpg";
import PortFolio23 from "@/images/WebDevelopment/Website images/Medwell.jpg";
import PortFolio24 from "@/images/WebDevelopment/Website images/Mousiqa.jpg";
import PortFolio25 from "@/images/WebDevelopment/Website images/MOVFLX-Video production.jpg";
import PortFolio26 from "@/images/WebDevelopment/Website images/Opai-Marketing.jpg";
import PortFolio27 from "@/images/WebDevelopment/Website images/OPKLIM Law.jpg";
import PortFolio28 from "@/images/WebDevelopment/Website images/Restoral-catering.jpg";
import PortFolio29 from "@/images/WebDevelopment/Website images/Safzon Security.jpg";
import PortFolio30 from "@/images/WebDevelopment/Website images/Saloni.jpg";
import PortFolio31 from "@/images/WebDevelopment/Website images/Wedding planner.jpg";
import PortFolio32 from "@/images/WebDevelopment/Website images/Yogastic-Healing wellness.png";
import PortFolio33 from "@/images/WebDevelopment/Website images/Superclean-window treatment.png";
import PortFolio43 from "@/images/WebDevelopment/Website images/Handstand-Sports.png";
import PortFolio44 from "@/images/WebDevelopment/Website images/img.png";
import PF1 from "@/images/WebDevelopment/Website images/florist temp1.png";
import Print1 from "@/images/WebDevelopment/Website images/printing1.png";
import healingWellness from "@/images/WebDevelopment/Website images/healing-wellness.png";
import Beauty from "@/images/WebDevelopment/Website images/beauty.png";
import hiImg from "@/images/WebDevelopment/Website images/hi2.png";

import laptopImage1 from "@/images/Webiste Mockup/1.png";
import laptopImage2 from "@/images/Webiste Mockup/2.png";
import laptopImage3 from "@/images/Webiste Mockup/3.png";
import laptopImage4 from "@/images/Webiste Mockup/4.png";
import laptopImage5 from "@/images/Webiste Mockup/5.png";
import laptopImage6 from "@/images/Webiste Mockup/6.png";
import laptopImage7 from "@/images/Webiste Mockup/7.png";
import laptopImage8 from "@/images/Webiste Mockup/8.png";
import laptopImage9 from "@/images/Webiste Mockup/9.png";
import laptopImage10 from "@/images/Webiste Mockup/10.png";
import laptopImage11 from "@/images/Webiste Mockup/11.png";
import laptopImage12 from "@/images/Webiste Mockup/12.png";
import laptopImage13 from "@/images/Webiste Mockup/13.png";
import laptopImage14 from "@/images/Webiste Mockup/14.png";
import laptopImage15 from "@/images/Webiste Mockup/15.png";
import laptopImage16 from "@/images/Webiste Mockup/16.png";
import laptopImage17 from "@/images/Webiste Mockup/17.png";
import laptopImage18 from "@/images/Webiste Mockup/18.png";
import laptopImage19 from "@/images/Webiste Mockup/19.png";
import laptopImage20 from "@/images/Webiste Mockup/20.png";
import laptopImage21 from "@/images/Webiste Mockup/21.png";
import laptopImage22 from "@/images/Webiste Mockup/22.png";
import laptopImage23 from "@/images/Webiste Mockup/23.png";
import laptopImage24 from "@/images/Webiste Mockup/24.png";
import laptopImage25 from "@/images/Webiste Mockup/25.png";
import laptopImage26 from "@/images/Webiste Mockup/26.png";
import laptopImage27 from "@/images/Webiste Mockup/27.png";
import laptopImage28 from "@/images/Webiste Mockup/28.png";
import laptopImage29 from "@/images/Webiste Mockup/29.png";
import laptopImage30 from "@/images/Webiste Mockup/30.png";
import laptopImage31 from "@/images/Webiste Mockup/31.png";
import laptopImage32 from "@/images/Webiste Mockup/32.png";
import LaptopSlideshow from "@/components/LaptopSlideshow";
import PromotionalBanner from "@/components/PromotionalBanner";
import responsiveIMg from "@/images/WebDevelopment/Responsive Web Design.jpg"
import ProcessSteps from "@/components/ProcessMap";
import { SEOBenefitsSection } from "@/components/seo-benefits-section";
import { NewsBenefitsSection } from "@/components/NewsBenefitsSectio";
import ImageCarousel from "./ImageCarousel";
import ImageCarousel1 from "@/components/ImageWebDesgin";
import MetaTags from '@/components/MetaTags';
import FeatureCarousel from "@/components/FeatureCarousel";
const commonPages = [
  "Home",
  "About",
  "Service",
  "FAQ",
  "Blog",
  "Contact",
  "Privacy"
];

const LaptopImgArray = [
  laptopImage1,
  laptopImage2,
  laptopImage3,
  laptopImage4,
  laptopImage5,
  laptopImage6,
  laptopImage7,
  laptopImage8,
  laptopImage9,
  laptopImage10,
  laptopImage11,
  laptopImage12,
  laptopImage13,
  laptopImage14,
  laptopImage15,
  laptopImage16,
  laptopImage17,
  laptopImage18,
  laptopImage19,
  laptopImage20,
  laptopImage21,
  laptopImage22,
  laptopImage23,
  laptopImage24,
  laptopImage25,
  laptopImage26,
  laptopImage27,
  laptopImage28,
  laptopImage29,
  laptopImage30,
  laptopImage31,
  laptopImage32
];

const serviceDetails = {
  "web-design": {
    title: "",
    subtitle: "Transform your online presence with high-quality, modern web design",
    description: "Elevate your online presence: turn clicks into customers with a high-converting website",

    process: [
      {
        step: 1,
        title: "Onboarding Session with Our Expert",
        description: "Begin your journey with a personalized onboarding session where our expert understands your business needs and goals."
      },
      {
        step: 2,
        title: "Revolutionary Content Writing",
        description: "Experience the power of webware.ai's technology, where AI meets real-life marketing expertise to create optimized website content for SEO."
      },
      {
        step: 3,
        title: "Professional Web Design",
        description: "Our skilled web designers craft a visually stunning and functional website tailored to your brand."
      },
      {
        step: 4,
        title: "Client Feedback",
        description: "Review and provide feedback to ensure your website meets your expectations."
      },
      {
        step: 5,
        title: "Website Finalization and Launch",
        description: "Finalize the details and launch your new website to go live online."
      },
      {
        step: 6,
        title: "Attract New Clients and Grow Your Business",
        description: "With your new website, attract ideal customers and watch your business grow."
      },
      {
        step: 7,
        title: "Ongoing Content Writing, Optimization, and Support",
        description: "Benefit from continuous content updates, SEO optimization, and expert support to keep your website performing at its best."
      }
    ],
    sections: [
      {
        title: "Competitive Advantages",
        items: [
          {
            title: "Boost search rankings",
            description: "SEO-optimized websites with responsive design achieve higher search engine rankings.",
            icon: "LineChart"
          },
          {
            title: "Reduce maintenance costs",
            description: "Responsive design reduces web development and maintenance costs across all devices.",
            icon: "Wallet"
          },
          {
            title: "Get found online",
            description: "Optimized web design boosts visibility and attracts the right audience.",
            icon: "Search"
          },
          {
            title: "Acquire more leads",
            description: "Mobile-optimized websites generate more leads and increase web traffic.",
            icon: "Users"
          },
          {
            title: "Reach more customers",
            description: "Responsive websites provide a positive experience across all devices, reaching more customers.",
            icon: "Globe"
          },
          {
            title: "Drive more conversions",
            description: "Responsive web design enhances mobile-friendliness, boosting conversion rates.",
            icon: "TrendingUp"
          }
        ]
      },
      {
        title: "Our Services Include",
        items: [
          {
            title: "Content Writing",
            description: "Keep your website updated with unique, industry-related information addressing customer needs.",
            icon: "FileText"
          },
          {
            title: "Logo Design",
            description: "Get a custom logo that conveys your brand's identity and professionalism.",
            icon: "Palette"
          },
          {
            title: "Search Engine Optimization",
            description: "Ensure your website is easily crawled and indexed with our SEO-optimized design services.",
            icon: "Search"
          },
          {
            title: "Conversion Rate Optimization",
            description: "Transform visitors into loyal customers by optimizing site speed, navigation, and calls-to-action.",
            icon: "BarChart"
          },
          {
            title: "Technical SEO",
            description: "Enhance device-responsiveness with technical SEO solutions, including audits and speed optimization.",
            icon: "Settings"
          },
          {
            title: "Website Analysis",
            description: "Thoroughly analyze your site to identify conversion opportunities and improve engagement.",
            icon: "Activity"
          }
        ]
      }
    ],
    pricing: [
      {
        tier: "Basic",
        price: "$999.00",
        features: [
          { name: "Themes", value: "4" },
          { name: "SEO", value: true },
          { name: "Service Pages", value: "Up to 5" },
          { name: "Image/Video Gallery", value: "25 Photos/Videos" },
          { name: "Theme Personalization", value: false },
          { name: "Comprehensive Theme Editing", value: false },
          { name: "Integration", value: false },
          { name: "Additional Page", value: "$?" }
        ]
      },
      {
        tier: "Standard",
        price: "$1,599",
        popular: true,
        features: [
          { name: "Themes", value: "6" },
          { name: "SEO", value: true },
          { name: "Service Pages", value: "Up to 10" },
          { name: "Image/Video Gallery", value: "25 Photos/Videos" },
          { name: "Theme Personalization", value: true },
          { name: "Comprehensive Theme Editing", value: false },
          { name: "Integration", value: false },
          { name: "Additional Page", value: "$?" }
        ]
      },
      {
        tier: "Premium",
        price: "$2,999",
        features: [
          { name: "Themes", value: "Customized Themes" },
          { name: "SEO", value: true },
          { name: "Service Pages", value: "Up to 15" },
          { name: "Image/Video Gallery", value: "50 Photos/Videos" },
          { name: "Theme Personalization", value: true },
          { name: "Comprehensive Theme Editing", value: true },
          { name: "Integration", value: false },
          { name: "Additional Page", value: "$?" }
        ]
      },
      {
        tier: "Ultimate",
        price: "$5,000.00",
        features: [
          { name: "Themes", value: "Customized Themes" },
          { name: "SEO", value: true },
          { name: "Service Pages", value: "25" },
          { name: "Image/Video Gallery", value: "50 Photos/Videos" },
          { name: "Theme Personalization", value: true },
          { name: "Comprehensive Theme Editing", value: true },
          { name: "Integration", value: "Available**" },
          { name: "Additional Pages", value: "Gallery (if needed), 6 additional pages, Product page, Privacy pages & TOS" }
        ]
      }
    ]
  },
  "blogging": {
    title: "Professional Blogging",
    description: "Drive traffic and engage your audience with professional content creation services",
    features: [
      "Professional Content Writing",
      "SEO Optimized Articles",
      "Regular Content Updates",
      "Content Strategy Development",
      "Target Audience Research",
      "Engagement Analytics",
      "Topic Research and Planning",
      "Brand Voice Consistency"
    ],
    longDescription: `Transform your website into a powerful content hub with our professional blogging services. Our expert writers create engaging, SEO-optimized content that resonates with your target audience and drives organic traffic to your website.`,
    benefits: [
      "Increase organic traffic through SEO-optimized content",
      "Build authority in your industry",
      "Regular, consistent content updates",
      "Engage your target audience effectively",
      "Improve search engine rankings",
      "Generate quality leads through content"
    ]
  },
  "seo": {
    title: "SEO Services",
    description: "Boost your online visibility and drive organic traffic",
    features: [
      "Comprehensive Website Audit",
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Content Optimization",
      "Technical SEO Improvements",
      "Local SEO Optimization",
      "Performance Tracking",
      "Monthly Reporting"
    ],
    longDescription: `Our SEO services help businesses improve their online visibility and drive organic traffic through proven search engine optimization techniques. We focus on sustainable, white-hat SEO practices that deliver long-term results.`,
    benefits: [
      "Higher search engine rankings",
      "Increased organic traffic",
      "Better quality leads",
      "Improved user experience",
      "Local search visibility",
      "Competitive advantage"
    ]
  },
  "social-media": {
    title: "Social Media Marketing",
    description: "Build your brand presence across social platforms",
    features: [
      "Social Media Strategy Development",
      "Content Creation & Curation",
      "Community Management",
      "Paid Social Advertising",
      "Performance Analytics",
      "Influencer Partnerships",
      "Brand Voice Development",
      "Engagement Monitoring"
    ],
    longDescription: `Our social media marketing services help businesses build and maintain a strong presence across social platforms. We create engaging content, manage communities, and drive meaningful interactions with your target audience.`,
    benefits: [
      "Increased brand awareness",
      "Higher engagement rates",
      "Quality lead generation",
      "Improved customer relationships",
      "Better brand loyalty",
      "Real-time customer feedback"
    ]
  },
  "ppc": {
    title: "Pay Per Click Advertising",
    description: "Drive targeted traffic and maximize ROI with strategic PPC campaigns",
    features: [
      "Campaign Strategy Development",
      "Keyword Research & Analysis",
      "Ad Copy Creation",
      "Landing Page Optimization",
      "Bid Management",
      "A/B Testing",
      "Conversion Tracking",
      "ROI Optimization"
    ],
    longDescription: `Our PPC services help businesses achieve their marketing goals through targeted paid advertising campaigns. We focus on maximizing ROI while driving quality traffic to your website.`,
    benefits: [
      "Instant targeted traffic",
      "Measurable results",
      "Flexible budget control",
      "Geographic targeting",
      "Quick market testing",
      "Brand visibility"
    ]
  },
  "reputation": {
    title: "Reputation Management",
    description: "Build and maintain a positive online presence",
    features: [
      "Online Review Monitoring",
      "Review Response Management",
      "Brand Sentiment Analysis",
      "Crisis Management Planning",
      "Social Media Monitoring",
      "Competitive Analysis",
      "Reputation Building Strategy",
      "Customer Feedback Management"
    ],
    longDescription: `Our reputation management services help businesses maintain a positive online presence while effectively managing customer feedback and reviews. We focus on building and protecting your brand's reputation across all digital channels.`,
    benefits: [
      "Improved brand trust",
      "Better customer relationships",
      "Crisis prevention",
      "Increased customer loyalty",
      "Competitive advantage",
      "Enhanced online credibility"
    ]
  }
};

const services = [
  {
    title: "SEO-Optimized for Higher Rankings",
    description:
      "Websites designed to perform on Google and attract more visitors.",
    image: SEO1, // Using imported Image1
  },
  {
    title: "Fast & Mobile-Responsive",
    description:
      "Ensuring flawless user experience on all devices.",
    image: SEO2, // Using imported Image2
  },
  {
    title: "Conversion-Focused Layouts",
    description: "Structured to turn visitors into customers.",
    image: SEO3, // Using imported Image3
  },
  {
    title: "Secure & Reliable",
    description:
      "Built with top security measures to protect user data.",
    image: SEO4, // Using imported Image4
  },
  {
    title: "User-Friendly Navigation",
    description:
      "Intuitive design for better engagement and retention.",
    image: SEO5, // Using imported Image5
  },
  {
    title: "Scalable & Future-Ready",
    description:
      "Websites that grow with your business.",
    image: SEO6, // Using imported Image5
  }
];

const portfolioData = [
  // SALON
  {
    id: 1,
    title: "SALONI SPA & SALON",
    category: "Salon",
    image: PortFolio30,
    link: "https://www.xlnctechnologies.com/templates/salon/temp1/index-2.html",
  },
  {
    id: 2,
    title: "BEVAN- BARBER SALON",
    category: "Salon",
    image: PortFolio4,
    link: "https://www.xlnctechnologies.com/templates/salon/temp2/index.html",
  },
  {
    id: 3,
    title: "MREMOT- HAIR STYLING",
    category: "Salon",
    image: PortFolio16,
    link: "https://www.xlnctechnologies.com/templates/beauty-care/temp1/",
  },

  // EVENT
  {
    id: 4,
    title: "LAVEWELL- MARRIAGE STORY",
    category: "Event",
    image: PortFolio31,
    link: "https://www.xlnctechnologies.com/templates/event/temp1/index.html",
  },
  {
    id: 5,
    title: "MOUSIQUA– MUSIC BAND & MUSICIAN",
    category: "Event",
    image: PortFolio24,
    link: "https://www.xlnctechnologies.com/templates/event/temp2/MOUSIQUA/HTML/index.html",
  },

  // EYECARE
  {
    id: 6,
    title: "MEDILIX- HEALTHCARE & MEDICAL",
    category: "Eyecare",
    image: PortFolio22,
    link: "https://www.xlnctechnologies.com/templates/healthcare/temp1/medilix-html/index.html",
  },

  // ACCOUNTANT
  {
    id: 7,
    title: "FINANCER | BUSINESS CONSULTATIONS",
    category: "Accountant",
    image: PortFolio13,
    link: "https://www.xlnctechnologies.com/templates/accountant/temp1/index.html",
  },
  {
    id: 8,
    title: "FINANZI- FINANCE & BUSINESS",
    category: "Accountant",
    image: PortFolio44,
    link: "https://www.xlnctechnologies.com/templates/accountant/temp2/finance/MAINFILE/HTML/index.html",
  },

  // BEAUTY & BODY CARE
  {
    id: 9,
    title: "GMAAKEUP– MAKEUP ARTIST",
    category: "Beauty Body care",
    image: PortFolio20,
    link: "https://www.xlnctechnologies.com/templates/beauty-care/temp2/index.html",
  },
  {
    id: 10,
    title: "BEAUTY SPA",
    category: "Beauty Body care",
    image: Beauty,
    link: "https://www.xlnctechnologies.com/templates/beauty-care/temp3/index.html",
  },

  // HOME DECOR
  {
    id: 11,
    title: "iNOX- KITCHEN & INTERIOR DESIGN",
    category: "Home Decor",
    image: PortFolio19,
    link: "https://www.xlnctechnologies.com/templates/home-decor/temp2/index.html",
  },
  {
    id: 12,
    title: "COHOUS FURNITURE & DECOR",
    category: "Home Decor",
    image: PortFolio8,
    link: "https://www.xlnctechnologies.com/templates/home-decor/temp1/index.html",
  },

  // HEALTHCARE
  {
    id: 13,
    title: "MEDWELL",
    category: "Healthcare",
    image: PortFolio23,
    link: "https://www.xlnctechnologies.com/templates/healthcare/temp2/index.html",
  },
  {
    id: 14,
    title: "MEDIKAL- HEALTHCARE & MEDICAL",
    category: "Healthcare",
    image: PortFolio18,
    link: "https://www.xlnctechnologies.com/templates/healthcare/temp3/index.html",
  },

  // LAWYERS
  {
    id: 15,
    title: "ATTOYER-ATTORNEY & LAWYER",
    category: "Lawyers",
    image: PortFolio27,
    link: "https://www.xlnctechnologies.com/templates/lawyers/temp1/index.html",
  },
  {
    id: 16,
    title: "OPKLIM- A LAW FIRM",
    category: "Lawyers",
    image: PortFolio3,
    link: "https://www.xlnctechnologies.com/templates/lawyers/temp2/opklim-html-files/index.html",
  },

  // SECURITY
  {
    id: 17,
    title: "SAFZON- SECURITY GUARD",
    category: "Security",
    image: PortFolio29,
    link: "https://www.xlnctechnologies.com/templates/security/temp2/index.html",
  },
  {
    id: 18,
    title: "CYBERCHIP",
    category: "Security",
    image: PortFolio10,
    link: "https://www.xlnctechnologies.com/templates/security/temp1/index.html",
  },

  // SALES MARKETING
  {
    id: 19,
    title: "MARGIN- MARKETING",
    category: "Sales Marketing",
    image: PortFolio21,
    link: "https://www.xlnctechnologies.com/templates/sales-marketing/temp2/index.html",
  },
  {
    id: 20,
    title: "OPAI MARKETING BUSINESS",
    category: "Sales Marketing",
    image: PortFolio26,
    link: "https://www.xlnctechnologies.com/templates/sales-marketing/temp1/opai/index.html",
  },

  // FOOD CATERING
  {
    id: 21,
    title: "CATERING SERVICES",
    category: "Food Catering",
    image: PortFolio6,
    link: " https://www.xlnctechnologies.com/templates/food/temp1/main/index.html",
  },
  {
    id: 22,
    title: "RESTORAL",
    category: "Food Catering",
    image: PortFolio28,
    link: "https://www.xlnctechnologies.com/templates/food/temp2/index.html",
  },

  // HOME INSPECTION
  {
    id: 23,
    title: "CAMERON",
    category: "Home Inspection",
    image: PortFolio5,
    link: "https://www.xlnctechnologies.com/templates/home-inspection/temp1/index.html",
  },
  {
    id: 24,
    title: "WESECURE",
    category: "Home Inspection",
    image: hiImg,
    link: "https://www.xlnctechnologies.com/templates/home-inspection/temp2/index.html",
  },
  // Charity
  {
    id: 25,
    title: "HEAL",
    category: "Charity",
    image: PortFolio17,
    link: "https://www.xlnctechnologies.com/templates/healing-wellness/temp1/index.html",
  },
  {
    id: 26,
    title: "GENEROSITY",
    category: "Charity",
    image: healingWellness,
    link: "https://www.xlnctechnologies.com/templates/healing-wellness/temp3/index.html",
  },


  // HEALING WELLNESS
  {
    id: 27,
    title: "FOXEYOGA",
    category: "Healing wellness",
    image: PortFolio15,
    link: "https://www.xlnctechnologies.com/templates/healing-wellness/temp2/index.html",
  },
  {
    id: 28,
    title: "YOGASTIC",
    category: "Healing wellness",
    image: PortFolio32,
    link: "https://www.xlnctechnologies.com/templates/healing-wellness/temp4/index.html",
  },

  // PRINTING
  {
    id: 29,
    title: "COXPRINT- PRINTING AGENCY",
    category: "Printing",
    image: PortFolio9,
    link: "https://www.xlnctechnologies.com/templates/printing/temp1/blog-details.html",
  },
  {
    id: 30,
    title: "PIXIS - PRINT",
    category: "Printing",
    image: Print1,
    link: "https://www.xlnctechnologies.com/templates/printing/temp2/pixis/index.html",
  },

  // SPORTS
  {
    id: 31,
    title: "HITUP- FITNESS & GYM",
    category: "Sports",
    image: PortFolio14,
    link: "https://www.xlnctechnologies.com/templates/sports/temp1/index.html",
  },
  {
    id: 32,
    title: "Handstand-Fitness",
    category: "Sports",
    image: PortFolio43,
    link: "https://www.xlnctechnologies.com/templates/sports/temp2/index.html",
  },
  // FLORIST 
  {
    id: 33,
    title: "FIAMA-FLOWER & FLORIST SHOP",
    category: "Florist",
    image: PF1,
    link: "https://www.xlnctechnologies.com/templates/florist/temp1/index.html",
  },
  {
    id: 34,
    title: "NATURE PLANT",
    category: "Florist",
    image: PortFolio12,
    link: "https://www.xlnctechnologies.com/templates/florist/temp2/index.html",
  },

  // VIDEO PRODUCTION
  {
    id: 35,
    title: "CINESTAR",
    category: "Video Production",
    image: PortFolio7,
    link: "https://www.xlnctechnologies.com/templates/video-production/temp2/index.html",
  },
  {
    id: 36,
    title: "MOVFIX- ONLINE MOVIES & TV SHOWS",
    category: "Video Production",
    image: PortFolio25,
    link: "https://www.xlnctechnologies.com/templates/video-production/temp1/index.html",
  },

  // HVAC
  {
    id: 37,
    title: "COOLAIR- AIR CONDITIONER & HVAC REPAIR",
    category: "HVAC",
    image: PortFolio1,
    link: "https://www.xlnctechnologies.com/templates/hvac/temp2/index.html",
  },
  {
    id: 38,
    title: "AIRSLV",
    category: "HVAC",
    image: PortFolio2,
    link: "https://www.xlnctechnologies.com/templates/hvac/temp1/index.html",
  },

  // WINDOW TREATMENT
  {
    id: 39,
    title: "FAUXIS",
    category: "Window Treatment",
    image: PortFolio11,
    link: "https://www.xlnctechnologies.com/templates/window-treatment/temp1/index.html",
  },
  {
    id: 40,
    title: "Superclean",
    category: "Window Treatment",
    image: PortFolio33,
    link: "https://www.xlnctechnologies.com/templates/window-treatment/temp2/index.html",
  },
];


// 2. CATEGORY LIST
//    Include "All Industries" plus any specific categories you have.
const categories = [
  "Salon",
  "Event",
  "Eyecare",
  "Accountant",
  "Beauty Body care",
  "Home Decor",
  "Healthcare",
  "Lawyers",
  "Security",
  "Sales Marketing",
  "Food Catering",
  "Home Inspection",
  "Charity",
  "Healing wellness",
  "Printing",
  "Sports",
  "Florist",
  "Video Production",
  "HVAC",
  "Window Treatment",
];

// 3. TESTIMONIALS
const testimonialData = [
  {
    quote: "Working with XLNC Technologies to build my website was a great experience. They were attentive to my needs and wants, ensuring every detail aligned with my vision. Any changes I requested were made quickly, and they consistently found creative solutions to bring my ideas to life. Their flexibility and willingness to take calls at times that worked for me made the process smooth and stress-free. I highly recommend XLNC Technologies to anyone looking for a dedicated and talented wed development team!",
    author: "Reema Parikh (VP)",
    company: "Packaging Company",
    rating: 5
  },
  {
    quote: "Planning events is already chaotic, so we needed a website that made life easier, not harder. Now, everything’s smooth—clients can check out our past events, book consultations, and get all the info they need without blowing up our phones. Best decision ever!",
    author: "Event Planner",
    company: "Event Services",
    rating: 4
  },
  {
    quote: "Our website went from looking like it was stuck in the early 2000s to something that makes people hungry! The online menu is a hit, and we’re getting way more event requests. Seriously, this upgrade has been a total game-changer for our business.",
    author: "Owner",
    company: " Food Catering Business",
    rating: 5
  },
];

// Process steps data
const steps = [
  {
    number: 1,
    title: "Discovery & Consultation",
    description: "Begin with a personalized consultation where our experts understand your business goals, target audience, and website requirements."
  },
  {
    number: 2,
    title: "Content Strategy & SEO Planning",
    description: "We craft SEO-driven, engaging content that aligns with your business, ensuring high search rankings and maximum impact."
  },
  {
    number: 3,
    title: "High-Performance Web Design",
    description: "Our team develops a visually appealing, fast, and mobile-friendly website that enhances user experience and engagement."
  },
  {
    number: 4,
    title: "Client Review & Refinements",
    description: "We involve you in the feedback process, making necessary improvements to ensure your website meets expectations."
  },
  {
    number: 5,
    title: "Website Launch & Optimization",
    description: "Once finalized, we securely launch your website, optimize it for performance, and ensure it is fully functional across devices."
  },
  {
    number: 6,
    title: "Traffic & Lead Generation",
    description: "With your new website live, we implement strategies to attract targeted traffic, increase conversions, and boost sales."
  },
  {
    number: 7,
    title: "Ongoing Support & Growth Optimization",
    description: "Benefit from continuous updates, SEO enhancements, and marketing support to keep your website performing at its best."
  }
];

//FAQ section

const sampleFaqs: any = [
  {
    id: "item-1",
    question: "How long does it take to design and develop a website?",
    answer:
      "The timeline depends on the complexity and features of your website. Typically, a standard business website takes <strong>2-4 weeks</strong>, while larger, feature-rich websites may take longer. We ensure a streamlined process to deliver high-quality results efficiently.",
  },
  {
    id: "item-2",
    question: "Will my website be SEO-optimized from the start?",
    answer:
      "Yes, all our websites are built with <strong>SEO best practices</strong>, including optimized site structure, fast loading speeds, mobile responsiveness, keyword-friendly content, and schema markup to help your site rank higher on Google.",
  },
  {
    id: "item-3",
    question: "Is the website mobile-friendly and responsive?",
    answer:
      "Absolutely. We create <strong>fully responsive websites</strong> that adapt seamlessly to all devices—desktops, tablets, and smartphones—ensuring a smooth user experience and better search rankings.",
  },
  {
    id: "item-4",
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes, we offer <strong>ongoing maintenance and support</strong> to ensure your website remains up-to-date, secure, and optimized for performance. Our services include content updates, security monitoring, SEO enhancements, and technical troubleshooting.",
  },
  {
    id: "item-5",
    question: "How does a well-designed website help grow my business?",
    answer:
      "A professionally designed website improves your <strong>brand credibility, search rankings, and user engagement</strong>, leading to higher conversions. With fast-loading pages, clear navigation, and SEO optimization, your website becomes a lead-generation tool that drives business growth.",
  },
  {
    id: "item-6",
    question: "Can I share my website on social media and other platforms?",
    answer:
      "Yes, absolutely! We ensure your website is optimized for <strong>social media sharing</strong> with proper meta tags, share buttons, and responsive design. This makes it easy to share your content across platforms like Facebook, LinkedIn, Twitter, and more, helping expand your reach and drive more traffic to your site.",
  }
]

// Add this before the SEOservices array
const serviceCategories = [
  {
    title: "Technology Services",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    services: ["Technology Consulting", "Cloud solutions & IT security", "Software Development"]
  },
  {
    title: "Business Solutions",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
    services: ["Business process solutions", "Data Tracking Security"]
  },
  {
    title: "SEO & Performance",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
    services: ["Google-Friendly Structure", "Speed-Optimized Pages", "Schema Markup Integration"]
  },
  {
    title: "Content & Technical",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>,
    services: ["Technical SEO Best Practices", "Content Optimization", "SEO-Focused Blog Integration"]
  }
];


const SEOservices = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
    title: "Technology Consulting",
    description: "Expertise in IT consultancy for many companies, for their different working areas.",
    bgImage: "GoogleSEO"
  }, {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    title: "Cloud solutions & IT security",
    description: "Expertise in cloud solutions and IT security for various companies in different sectors."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    title: "Software Development",
    description: "Expertise in custom software development for diverse businesses across various sectors."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
    title: "Business process solutions",
    description: "Expertise in optimizing business processes for companies across multiple industries."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    title: "Data Tracking Security",
    description: "Expertise in securing data tracking systems for companies across various industries."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>,
    title: "Google-Friendly Structure",
    description: "Designed for better indexing and search rankings with optimized site architecture."
  },
  {
    title: "SEO-Focused Blog Integration",
    description: "Helping businesses build authority and drive consistent organic traffic."
  }
];




const WebDevelopment = () => {
  const { name } = useParams();
  const service = serviceDetails[name as keyof typeof serviceDetails];
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Salon"); // Empty string represents all categories
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);



  // 4. FILTER DATA BASED ON SELECTED CATEGORY
  const filteredPortfolio =
    selectedCategory === ""
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);



  const toggleExpand = (tier: string) => {
    setExpandedPlan(expandedPlan === tier ? null : tier);
  };
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
      title: " Responsive Web Design: Built for Every Screen, Every User",
      description: "With our responsive web design, your website won’t just look great; it will intelligently respond to your customers' needs and the unique capabilities of their devices. By delivering a seamless and dynamic user experience, we help ensure your brand stays relevant, accessible, and engaging—no matter how technology evolves. ",
      list: "Lets build a website that is as flexible as your business ambitions!"
    },

  ];

  const seoSteps = [
    {
      title: "Discovery & Consultation",
      description: "Begin with a personalized consultation where our experts understand your business goals, target audience, and website requirements."
    },
    {
      title: "Content Strategy & SEO Planning",
      description: "We craft SEO-driven, engaging content that aligns with your business, ensuring high search rankings and maximum impact."
    },
    {
      title: "High-Performance Web Design",
      description: "Our team develops a visually appealing, fast, and mobile-friendly website that enhances user experience and engagement."
    },
    {
      title: "Client Review & Refinements",
      description: "We involve you in the feedback process, making necessary improvements to ensure your website meets expectations."
    },
    {
      title: "Website Launch & Optimization",
      description: "Once finalized, we securely launch your website, optimize it for performance, and ensure it is fully functional across devices."
    },
    {
      title: "Traffic & Lead Generation",
      description: "With your new website live, we implement strategies to attract targeted traffic, increase conversions, and boost sales."
    },
    {
      title: "Ongoing Support & Growth Optimization",
      description: "Benefit from continuous updates, SEO enhancements, and marketing support to keep your website performing at its best."
    }
  ];


  return (
    <>
      <MetaTags 
        title="Comprehensive Web Development for Your Business – XLNC"
        description="Develop dynamic, responsive websites with web development solutions focused on superior user experience, performance, and security at XLNC."
      />
      <div className="bg-[#f2f2f2]">
        <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden ">
          {/* Colored light streak effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 transform -rotate-12 blur-lg"></div>
          </div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            {/* Main content */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">Digital Success Starts with the Right Website – Let’s Build It!</h1>
              <p className="text-lg mb-8">
                Your Website, Your Success – Built to Attract, Convert & Grow
              </p>
              {/* CTA Button */}
              <button className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 " onClick={() => window.location.href = '/contact'}>
                CONTACT US
              </button>
              {/* Laptop mockup */}
              <LaptopSlideshow images={LaptopImgArray} interval={3000} />
              <div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#111827] py-6">
          <TestimonialCarousel testimonials={testimonialData} autoPlay={true} />
        </div>

        <FeatureCarousel 
                features={services}
                title=""
                cardWidth={340}
                cardHeight={320}
            />

        <section className="relative w-full  text-[#242424] overflow-hidden bg-[#cbdceb]">
          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold">Real Results from Our Web Design Services</h1>
            <p className="text-lg"><b>Industry:</b> Healthcare</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {/* Stat 1 */}
              <div>
                <p className="text-4xl font-bold">528.45%</p>
                <p>Website traffic growth</p>
              </div>
              {/* Stat 2 */}
              <div>
                <p className="text-4xl font-bold">42.15%</p>
                <p>Organic traffic contribution</p>
              </div>
              {/* Stat 3 */}
              <div>
                <p className="text-4xl font-bold">57.85%</p>
                <p>Paid traffic contribution</p>
              </div>
              {/* Stat 4 */}
              <div>
                <p className="text-4xl font-bold">38.92%</p>
                <p>
                  Average conversion rate on website <br />
                  (Industry average is 2% - 5%)
                </p>
              </div>
            </div>

            {/* Rank Info */}
            <div className="mt-10">
              <p className="text-4xl font-bold">1</p>
              <p>Website Rank on Page (For 65 keywords)
              </p>
            </div>
          </div>
        </section>


        <div className="bg-[#f4f3f2] py-8 md:py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-20">
            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">See What We've Built</h2>

            {/* FLEX CONTAINER: Subheading text & Select Category */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 md:mb-8">
              <p className="text-gray-600 text-sm md:text-base max-w-2xl">
                We design industry-specific high-converting websites for your business.
                Check out some of our latest work.
              </p>
              <div className="w-full md:w-auto">
                <label htmlFor="category" className="block mb-1 text-sm font-medium">
                  Select Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full md:w-auto border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >

                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredPortfolio.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                >
                  <div className="relative aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="text-base md:text-lg font-semibold mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <a
                     target={"_blank"}
                      href={item.link} 
                      className="inline-flex items-center text-sm md:text-base text-blue-500 hover:text-blue-700 font-medium"
                    >
                      Visit Website
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredPortfolio.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No projects found for this category.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mx-16 my-8  ">
          <PromotionalBanner
            title="Your website should be a growth engine—let our website design agency design one that delivers!"
            buttonText="CONTACT US"
            textColor="#FFFFFF"
          />
        </div>

        <div className="min-h-85 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {SocialMediaCardFlex.map((SocialMediaCardFlex, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                  {/* Left side - Image */}
                  <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="h-full flex items-center justify-center p-6">
                      <img
                        src={responsiveIMg}
                        alt={`${SocialMediaCardFlex.title} illustration`}
                        className="max-h-screen w-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="md:w-2/3 p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{SocialMediaCardFlex.title}</h1>
                    <p className="text-gray-600 ">{SocialMediaCardFlex.description}</p>
                    <div className="mt-4">
                      <h5 className="text-[#3a80f6] text-bold">{SocialMediaCardFlex.list}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
            <h2 className="text-3xl font-bold text-[#3a80f6] mb-4">Why Our Responsive Web Designs Stand Out
            </h2>
            <h6 className="text-gray-600 mb-4">At XLNC Technologies, we create websites that effortlessly adapt to any screen size—whether it's a smartphone, tablet, laptop, or the next big device of the future.</h6>
          </div>
          <NewsBenefitsSection heading="" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center my-8">SEO-Optimized Web Designs – Built to Rank, Convert & Perform
        </h1>
        <ImageCarousel1 />

        <div className="mx-16 my-8  ">
          <PromotionalBanner
            title="Your dream website is just a conversation away—let’s create something amazing! "
            buttonText="CONTACT US"
            textColor="#FFFFFF"
          />
        </div>

        <ProcessSteps title="XLNC Technologies’ Streamlined Web Design Process" steps={seoSteps} />


        <FAQSection faqs={sampleFaqs} />;

      </div>
    </>
  );
}

export default WebDevelopment;