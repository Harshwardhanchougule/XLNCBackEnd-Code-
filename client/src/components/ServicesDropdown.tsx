import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, LineChart, Smartphone, Cloud, Lightbulb, Palette } from "lucide-react";

const services = [
  {
    name: "Web Development Services",
    path: "/service/web-design",
    description: "Custom website solutions and web applications",
    icon: Globe
  },
  {
    name: "Digital Marketing Services",
    path: "/service/digital-marketing",
    description: "SEO, SEM, and social media marketing",
    icon: LineChart
  },
  {
    name: "Mobile App Development",
    path: "/service/mobile-app",
    description: "iOS and Android application development",
    icon: Smartphone
  },
  {
    name: "Cloud Solutions",
    path: "/service/cloud",
    description: "Cloud infrastructure and deployment",
    icon: Cloud
  },
  {
    name: "IT Consulting",
    path: "/service/consulting",
    description: "Strategic technology consulting",
    icon: Lightbulb
  },
  {
    name: "Branding & Design",
    path: "/service/branding",
    description: "Brand identity and creative design",
    icon: Palette
  }
];

const ServicesDropdown = ({ mobile = false }) => {
  if (mobile) {
    return (
      <div className="px-3 py-2">
        <div className="font-medium text-gray-700 mb-2">Services</div>
        {services.map((service, index) => (
          <Link key={index} href={service.path}>
            <a className="block px-4 py-2 text-sm text-gray-700 hover:text-primary">
              <div className="flex items-center gap-2">
                <service.icon className="h-4 w-4" />
                {service.name}
              </div>
            </a>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="font-medium text-gray-700 hover:text-primary">
          Services <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        {services.map((service, index) => (
          <DropdownMenuItem key={index}>
            <Link href={service.path} className="w-full">
              <a className="flex items-start gap-3 p-2 w-full">
                <service.icon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{service.name}</div>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </a>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesDropdown;
