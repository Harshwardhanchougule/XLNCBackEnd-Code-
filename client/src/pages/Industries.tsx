import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/useTypewriter";
import HeroImage from "@/images/industry_banner.jpg";
import { Building2, Wallet, ShoppingBag, GraduationCap, Landmark, Heart, Shield, MonitorSmartphone, Factory, Film, Rocket, Home, ChevronDown, Users } from "lucide-react";
import { useEffect, useState } from "react";
import image from "@/images/Banner/Industries.jpg";
import AnimatedCardSection from "@/components/ui/animated-card-section"
import img from "@/images/XLNC/Industries.jpg";
import MetaTags from "@/components/MetaTags";

const Industries = () => {
    const industries = ["Financial Services", "eCommerce & Retail", "Education & Learning", "Government/Semi-Government", "Healthcare", "Insurance", "IT & Consulting", "Manufacturing", "Media & Entertainment", "Tech Startups"];
    const displayText = useTypewriter(industries, 50, 50, 100);

    const [projectCount, setProjectCount] = useState(0);
    const [industryCount, setIndustryCount] = useState(0);

    useEffect(() => {
        const projectInterval = setInterval(() => {
            setProjectCount(prev => prev < 3896 ? prev + 39 : 3896);
        }, 50);

        const industryInterval = setInterval(() => {
            setIndustryCount(prev => prev < 13 ? prev + 1 : 13);
        }, 150);

        return () => {
            clearInterval(projectInterval);
            clearInterval(industryInterval);
        };
    }, []);

    const services1 = [
        {
            title: "Logistics",
            description: "From real-time tracking to seamless coordination, we help logistics companies optimize operations, automate workflows, and enhance supply chain visibility with intelligent digital solutions.",
            icon: <Building2 size={24} />
        },
        {
            title: "Financial Services & Banking",
            description: "We enable financial institutions to enhance security, improve operational efficiency, and deliver seamless digital banking experiences through next-gen automation, AI, and compliance-driven solutions.",
            icon: <Wallet size={24} />
        },
        {
            title: "Manufacturing",
            description: "Manufacturers trust us to help them integrate smart technologies, automate workflows, and improve productivity, ensuring seamless operations and faster market adaptability.",
            icon: <Factory size={24} />
        },
        {
            title: "Insurance",
            description: "We help insurance providers streamline claims, improve customer interactions, and enhance risk assessment with AI-driven automation and secure data solutions.",
            icon: <Shield size={24} />
        },
        {
            title: "Healthcare",
            description: "From hospital administration to patient engagement, we empower healthcare providers with digital transformation strategies that enhance care, improve efficiency, and ensure data security.",
            icon: <Heart size={24} />
        },
        {
            title: "eCommerce & Retail",
            description: "We help eCommerce brands and retailers deliver engaging, AI-powered shopping experiences, optimize supply chains, and drive customer loyalty with intelligent digital solutions.",
            icon: <ShoppingBag size={24} />
        },
        {
            title: "IT & Consulting",
            description: "IT and consulting firms rely on us to enhance digital infrastructure, strengthen cybersecurity, and implement cloud-driven strategies that drive business agility.",
            icon: <MonitorSmartphone size={24} />
        },
        {
            title: "Education & Learning",
            description: "We help educational institutions and e-learning platforms deliver seamless, interactive learning experiences with AI-driven tools, cloud solutions, and mobile-first technologies.",
            icon: <GraduationCap size={24} />
        },
        {
            title: "Government/Semi-Government",
            description: "Governments and public-sector organizations leverage our expertise to modernize citizen services, enhance security, and create efficient digital ecosystems.",
            icon: <Landmark size={24} />
        },
        {
            title: "Media & Entertainment",
            description: "We work with media and entertainment companies to enhance content creation, streamline digital distribution, and drive audience engagement through AI and cloud solutions.",
            icon: <Film size={24} />
        },
        {
            title: "HR & Workforce Management",
            description: "From recruitment to employee engagement, we help HR teams automate workflows, gain workforce insights, and enhance productivity with intelligent digital solutions.",
            icon: <Users size={24} />
        },
        {
            title: "Tech Startups",
            description: "Startups turn to us for scalable, AI-driven solutions that help them build, innovate, and grow faster in a highly competitive digital landscape.",
            icon: <Rocket size={24} />
        },
        {
            title: "Real Estate",
            description: "We help real estate businesses digitize property management, streamline transactions, and enhance customer experiences with smart, AI-powered solutions.",
            icon: <Home size={24} />
        }
    ]; 
    const scrollToServices = () => {
        const navbarHeight = 80; // Adjust this value based on your navbar height
        window.scrollTo({
            top: window.innerHeight - navbarHeight,
            behavior: 'smooth'
        });
    };

    return (
        <>
        <MetaTags 
          title="Solutions for Finance, Retail, and Healthcare Industries"
          description="Explore industry-specific technology solutions for financial services, eCommerce, retail, and healthcare sectors with XLNC Technologies empowers growth with IT services."
        />
        <div className="bg-[#f8fafc]">
            <div className="relative overflow-hidden bg-[#020B2D]">
                {/* Video Background */}
                <img
                    src={image}
                    alt="SEO Background"
                    className="absolute w-full h-full object-cover"
                />
                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 flex flex-col items-start justify-center min-h-[100vh]">
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-wide uppercase">INDUSTRIES WE SERVE</h1>

                    <div className="h-16 flex items-start justify-start mb-8">
                        <div className="text-2xl md:text-4xl text-[#0d59de] font-semibold">
                            {displayText}
                            <span className="animate-blink">|</span>
                        </div>
                    </div>

                    <div className="text-left mb-4 animate-fadeIn">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Delivered  <span className="text-blue-600">{projectCount}+</span>projects worldwide
                            across <br />worldwide across <span className="text-blue-600">{industryCount}+</span> industries
                        </h2>

                    </div>
                    <button onClick={() => window.location.href = '/contact'} className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 ">
                        Let's Talk
                    </button>

                    <div onClick={scrollToServices} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-[bounce_2s_ease-in-out_infinite] cursor-pointer">
                        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                            <ChevronDown size={24} className="text-white" />
                        </div>
                    </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020B2D]/50 md:bg-[linear-gradient(45deg,rgba(0,0,0,.3)_50%,rgba(0,0,0,.7)_50%)] md:bg-[length:3px_3px] md:h-full" />
            </div>

            <div className="py-10">
                <AnimatedCardSection
                    title="Who We Are - A Trusted IT Service Provider"
                    paragraphs={[
                        "At XLNC Technologies, excellence isn't just in our name—it's in everything we do. We are more than just an IT company; we are innovation architects, crafting 360° digital transformation solutions that help businesses stay ahead in a fast-evolving digital landscape.",
                        "With expertise in web development, digital optimization, and next-gen technology solutions, we empower organizations to scale and thrive with advanced, scalable, and result-driven strategies. Partnering with industry-leading technology providers, we deliver future-ready solutions that transform ideas into tangible digital success."
                    ]}
                />

                <AnimatedCardSection
                    title="Our Expertise Across Industries"
                    paragraphs={[
                        "At XLNC Technologies, we don't just adapt to the digital future—we shape it. Our expertise in intelligent automation and next-gen digital solutions drives business transformation while maintaining the highest industry standards.",
                        "With a proven track record of empowering hundreds of enterprises across 13+ industries and departments, we deliver tailored, impact-driven solutions that boost efficiency, maximize productivity, and elevate customer experiences."
                    ]}
                />

                <AnimatedCardSection
                    title="Tailored Technology Solutions for Diverse Sectors"
                    paragraphs={[
                        "We understand that every industry has unique challenges and requirements. That's why our solutions are designed to be flexible, scalable, and industry-specific—empowering businesses to optimize operations, workflows, and customer engagement.",
                        "With a strong foundation in AI, automation, and digital transformation, we provide customized technology solutions that align with your sector's needs, ensuring seamless integration, long-term reliability, and measurable impact."
                    ]}
                />

                <div className="px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services1.map((service1, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl overflow-hidden 
                                transform transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                                border border-gray-200 h-full flex flex-col cursor-pointer
                                animate-slideUp"
                                    style={{
                                        animationDelay: `${index * 150}ms`
                                    }}
                                >
                                    <div className="p-8 flex-1 group">
                                        <div className="flex items-center mb-6">
                                            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 
                                            text-white mr-4 shadow-lg transform transition-all duration-300
                                            group-hover:scale-110 group-hover:rotate-6"
                                            >
                                                {service1.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-800 leading-tight
                                            transform transition-all duration-300 group-hover:translate-x-2">
                                                {service1.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-base leading-relaxed
                                        transform transition-all duration-300 group-hover:translate-y-1">
                                            {service1.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <p className="text-xl text-gray-700 mb-8">
                            For More information...
                        </p>
                        <button
                            onClick={() => window.location.href = '/contact'}
                            className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 text-lg"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Industries;