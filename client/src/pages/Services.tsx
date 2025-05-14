import HeroImage from "@/images/service_banner.jpg";
import { BarChart2, Pencil, MessageCircle, Megaphone, Users, PieChart, Settings, Code, Shield, Palette, Database, Cloud, Cpu, Globe, Brain, ChevronDown } from "lucide-react";
import ServiceImg from "@/images/Banner/Our services.jpg";
import img from "@/images/XLNC/Our services.jpg";
import MetaTags from "@/components/MetaTags";
const Services = () => {
    const services1 = [
        {
            title: "Robotic Process Automation (RPA)",
            description: "Streamline workflows and improve efficiency with custom bots and automation solutions.",
            icon: <Settings size={24} />
        },
        {
            title: "EDI (Electronic Data Interchange)",
            description: "Fast, secure, and error-free electronic data interchange for seamless business operations.",
            icon: <Database size={24} />
        },
        {
            title: "Artificial Intelligence & Machine Learning (AI & ML)",
            description: "Deliver predictive analytics and intelligent automation for smarter decision-making.",
            icon: <Brain size={24} />
        },
        {
            title: "Cloud Solutions",
            description: "Seamless cloud migration, hybrid cloud systems, and cost-effective management services.",
            icon: <Cloud size={24} />
        },
        {
            title: "Web Development",
            description: "Custom applications to enhance digital presence and drive user engagement. Craft intuitive, user-centric designs that enhance engagement and usability.",
            icon: <Code size={24} />
        },
        {
            title: "Mobile App Development",
            description: "Intuitive, feature-rich mobile apps that help businesses connect with customers, enhance operations, and drive revenue growth.",
            icon: <Cpu size={24} />
        },
        {
            title: "Cybersecurity & Security Analysis",
            description: "Comprehensive threat detection, prevention, and compliance services.",
            icon: <Shield size={24} />
        },
        {
            title: "Blockchain Implementation",
            description: "Build smart contracts, decentralized apps, and secure ledger systems for enhanced trust and efficiency.",
            icon: <Database size={24} />
        },
        {
            title: "Business Intelligence & Big Data Analytics",
            description: "Transform data into actionable insights with advanced analytics and visualization tools.",
            icon: <BarChart2 size={24} />
        },
        {
            title: "DevOps & Automated Testing",
            description: "Enhance software delivery pipelines with DevOps and automated QA testing.",
            icon: <Settings size={24} />
        },
        {
            title: "Database Administration",
            description: "Ensure seamless data management with secure, optimized, and well-structured databases.",
            icon: <Database size={24} />
        },
        {
            title: "Independent QA & Testing",
            description: "Guaranteed software reliability with manual and automated testing for flawless performance.",
            icon: <PieChart size={24} />
        },
        {
            title: "Digital Marketing",
            description: "SEO, social media marketing, and targeted digital strategies designed to increase traffic, enhance brand visibility, and drive real business results.",
            icon: <Megaphone size={24} />
        },
        {
            title: "Software Consulting",
            description: "Align technology with business objectives through expert insights and strategic planning.",
            icon: <MessageCircle size={24} />
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
          title="RPA Software and EDI Services for Business Automation"
          description="Discover robotic process automation, EDI services, and IT solutions tailored to your needs. XLNC Technologies offers advanced automated and software services."
        />
        <div className="min-h-screen bg-[#f8fafc]">
            <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden flex items-center">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src={img}
                        alt="SEO Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="container mx-auto px-4 py-16 relative z-10">
                    {/* Main content */}
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-8xl font-bold mb-4">Our Services</h1>
                    </div>
                </div>
                <div onClick={scrollToServices} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-[bounce_2s_ease-in-out_infinite] cursor-pointer">
                        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                            <ChevronDown size={24} className="text-white" />
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
                                    Driving Innovation with Tailored IT Solutions
                                </h2>
                                <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                                    Innovation isn’t just about adopting new technology—it’s about creating smart, scalable, and future-ready solutions that transform the way businesses operate. At XLNC Technologies, we craft custom IT strategies that blend intelligent automation, AI-driven insights, and cloud-powered agility to fuel digital evolution.

                                </p>
                                <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                                    Whether it’s optimizing workflows, enhancing security, or building seamless digital experiences, our solutions are designed to empower businesses to adapt, scale, and lead in an ever-changing world. With innovation at the core, we don’t just solve challenges—we create opportunities for growth and transformation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 animate-fadeIn">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto animate-width" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services1.map((service1, index) => (
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
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-lg mb-4 mt-12 text-center">
                    For More information...
                </p>
                {/* CTA Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => window.location.href = '/contact'}
                        className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 mb-12"
                    >
                        Contact Us
                    </button>
                </div>
            </div>

        </div>
        </>
    );
};

export default Services;