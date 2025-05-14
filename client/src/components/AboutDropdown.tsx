import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Building, Target, Users, Award } from "lucide-react";

const aboutSections = [
  {
    name: "Company Overview",
    path: "/about/overview",
    description: "Learn about our journey and values",
    icon: Building
  },
  {
    name: "Mission & Vision",
    path: "/about/mission",
    description: "Our goals and future aspirations",
    icon: Target
  },
  {
    name: "Team",
    path: "/about/team",
    description: "Meet our expert professionals",
    icon: Users
  },
  {
    name: "Why Choose Us",
    path: "/about/why-us",
    description: "Our unique value proposition",
    icon: Award
  }
];

const AboutDropdown = ({ mobile = false }) => {
  if (mobile) {
    return (
      <div className="px-3 py-2">
        <div className="font-medium text-gray-700 mb-2">About Us</div>
        {aboutSections.map((section, index) => (
          <Link key={index} href={section.path}>
            <a className="block px-4 py-2 text-sm text-gray-700 hover:text-primary">
              <div className="flex items-center gap-2">
                <section.icon className="h-4 w-4" />
                {section.name}
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
          About Us <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        {aboutSections.map((section, index) => (
          <DropdownMenuItem key={index}>
            <Link href={section.path} className="w-full">
              <a className="flex items-start gap-3 p-2 w-full">
                <section.icon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{section.name}</div>
                  <p className="text-sm text-gray-500">{section.description}</p>
                </div>
              </a>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AboutDropdown;
