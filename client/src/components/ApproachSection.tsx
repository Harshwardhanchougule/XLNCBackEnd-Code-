import { Users, Target, Lightbulb, Shield, MessageSquare } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const approaches = [
  {
    title: "People-First Digital Transformation",
    description: "We prioritize human-centric automation, ensuring technology enhances productivity, not replaces it. Our end-to-end support and training foster an automation-friendly environment for seamless integration.",
    icon: <Users className="h-10 w-10" />
  },
  {
    title: "Client-Centric Strategy",
    description: "We align our solutions with your growth objectives, ensuring efficiency and scalability in every project.",
    icon: <Target className="h-10 w-10" />
  },
  {
    title: "Innovation-Driven Execution",
    description: "By leveraging AI, automation, and cybersecurity, we keep your business ahead in a rapidly evolving digital world.",
    icon: <Lightbulb className="h-10 w-10" />
  },
  {
    title: "Reliable Quality & Support",
    description: "We ensure seamless, secure, and future-ready solutions, backed by ongoing expert support.",
    icon: <Shield className="h-10 w-10" />
  },
  {
    title: "Transparent Collaboration",
    description: "With real-time insights and clear communication, we keep you informed at every step.",
    icon: <MessageSquare className="h-10 w-10" />
  }
];

const ApproachSection = () => {
  return (
    <section className="py-4 px-4">
      <div className="container mx-auto">
        <div className="text-black py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Approach to IT Services</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
              At XLNC Technologies, we deliver strategic, future-proof digital solutions that drive real business impact. 
              Our approach blends innovation, agility, and transparency to ensure success. For each client, we establish a Center of Excellence to tailor, optimize, and seamlessly deliver comprehensive tech solutions.

            </p>
          </div>
        </div>

        <div className="relative">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
          >
            <CarouselContent>
              {approaches.map((approach, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-[#004879] text-white border-none">
                    <CardContent className="p-6 flex flex-col items-start text-left">
                      <div className="mb-4 text-white scale-125">{approach.icon}</div>
                      <h3 className="text-2xl font-semibold mb-3">{approach.title}</h3>
                      <p className="text-gray-300 text-justify text-lg whitespace-pre-line">
                        {approach.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static h-10 w-10 border-gray-600 bg-[#004879] hover:bg-gray-700 hover:text-white text-white disabled:bg-[#6592b2] disabled:border-none" />
              <CarouselNext className="relative static h-10 w-10 border-gray-600 bg-[#004879] hover:bg-gray-700 hover:text-white text-white disabled:bg-[#6592b2] disabled:border-none" />
            </div>
          </Carousel>
        </div>

        
      </div>
    </section>
  );
};

export default ApproachSection;
