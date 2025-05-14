import { FC, useState } from "react";  // Add useState import
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

// Updated interface definitions
interface SubMenuItem {
  name: string;
  path: string;
  description: string;
}

interface MenuItem {
  name: string;
  path?: string;
  description?: string;
  subtext?: string;
  subItems?: SubMenuItem[];
}

// Updated menu structure
const menuItems: MenuItem[] = [
  {
    name: "Website Development",
    path: "/service/website-development",
    description: "Professional website development services"
  },
  {
    name: "Digital Marketing",
    description: "Boost  your online presence with our digital solutions",
    subItems: [
      { name: "Blogging", path: "/service/blogging", description: "Professional content creation and management" },
      { name: "SEO", path: "/service/seo", description: "Search engine optimization services" },
      { name: "Social Media Marketing", path: "/service/social-media", description: "Strategic social media solutions" },
      { name: "Performance Marketing", path: "/service/performance", description: "Data-driven marketing campaigns" },
      { name: "Reputation Management", path: "/service/reputation", description: "Online reputation management" },
      { name: "Newsletters", path: "/service/newsletters", description: "Email marketing solutions" }
    ]
  }
];

// Define props interface
interface ProductsDropdownProps {
  mobile?: boolean;
  scrolled?: boolean;
}

// TypeScript-safe component
const ProductsDropdown: FC<ProductsDropdownProps> = ({ mobile = false, scrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = scrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-gray-200";

  if (mobile) {
    return (
      <div className="px-3 py-2">
        <div className={`font-medium ${textColor} mb-2`}>Products</div>
        {menuItems.map((item) => (
          <div key={item.name}>
            {item.path ? (
              <Link href={item.path}>
                <a className={`block px-4 py-2 text-sm ${textColor}`}>{item.name}</a>
              </Link>
            ) : (
              <>
                <div className={`px-4 py-2 text-sm font-medium ${textColor}`}>{item.name}</div>
                <div className="pl-6">
                  {item.subItems?.map((subItem) => (
                    <Link key={subItem.path} href={subItem.path}>
                      <a className={`block px-4 py-2 text-sm ${textColor}`}>{subItem.name}</a>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <DropdownMenuTrigger asChild>
          <button 

            className={`text-sm font-medium relative inline-flex items-center after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${textColor}`}
          >

            Products <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80">
          {menuItems.map((item) => 
            item.path ? (

              <DropdownMenuItem key={item.name} className="w-full">
                <Link href={item.path} className="w-full">

                  <a className="block w-full whitespace-normal">
                    <div className="font-medium text-gray-900">{item.name}</div>
                    {item.description && (
                      <p className="text-sm text-gray-500">{item.description}</p>
                    )}
                  </a>
                </Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuSub key={item.name}>


                <DropdownMenuSubTrigger className="w-full">
                  <div className="block w-full whitespace-normal">
                    <div className="font-medium text-gray-900">{item.name}</div>
                    {item.description && (
                      <p className="text-sm text-gray-500">{item.description}</p>
                    )}
                  </div>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-80">
                  {item.subItems?.map((subItem) => (

                    <DropdownMenuItem key={subItem.path} className="w-full">
                      <Link href={subItem.path} className="w-full">

                        <a className="block w-full whitespace-normal">
                          <div className="font-medium text-gray-900">{subItem.name}</div>
                          <p className="text-sm text-gray-500">{subItem.description}</p>
                        </a>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            )
          )}
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default ProductsDropdown;