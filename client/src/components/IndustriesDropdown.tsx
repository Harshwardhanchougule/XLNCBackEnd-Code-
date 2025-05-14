import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Building2, GraduationCap, Building, Factory, Landmark, ShoppingBag } from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    path: "/industry/healthcare",
    description: "Digital solutions for healthcare providers",
    icon: Building2
  },
  {
    name: "Education",
    path: "/industry/education",
    description: "EdTech solutions and learning platforms",
    icon: GraduationCap
  },
  {
    name: "Real Estate",
    path: "/industry/real-estate",
    description: "Property management and listing solutions",
    icon: Building
  },
  {
    name: "Manufacturing",
    path: "/industry/manufacturing",
    description: "Industry 4.0 and smart manufacturing",
    icon: Factory
  },
  {
    name: "Banking & Finance",
    path: "/industry/banking",
    description: "FinTech solutions and banking software",
    icon: Landmark
  },
  {
    name: "eCommerce",
    path: "/industry/ecommerce",
    description: "Online retail and marketplace solutions",
    icon: ShoppingBag
  }
];

const IndustriesDropdown = ({ mobile = false }) => {
  if (mobile) {
    return (
      <div className="px-3 py-2">
        <div className="font-medium text-gray-700 mb-2">Industries</div>
        {industries.map((industry, index) => (
          <Link key={index} href={industry.path}>
            <a className="block px-4 py-2 text-sm text-gray-700 hover:text-primary">
              <div className="flex items-center gap-2">
                <industry.icon className="h-4 w-4" />
                {industry.name}
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
          Industries <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        {industries.map((industry, index) => (
          <DropdownMenuItem key={index}>
            <Link href={industry.path} className="w-full">
              <a className="flex items-start gap-3 p-2 w-full">
                <industry.icon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{industry.name}</div>
                  <p className="text-sm text-gray-500">{industry.description}</p>
                </div>
              </a>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default IndustriesDropdown;
