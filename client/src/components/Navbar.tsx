"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import usa_flag from "@/images/usa_flag.png"
import logo from "@/images/xlnc_logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-xl font-bold ${isScrolled ? "text-gray-800 dark:text-white" : "text-white"}`}>
              <img src={logo} alt="XLNC Technologies Logo" className="w-auto h-12 sm:h-16" />
            </span>
          </Link>

          {/* Desktop Navigation and Contact Us Button */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <NavItem label="Services" href="/services" isScrolled={isScrolled} />
              <ProductsDropdown isScrolled={isScrolled} />
              <NavItem label="Industries" href="/industries" isScrolled={isScrolled} />
              <NavItem label="About Us" href="/about" isScrolled={isScrolled} />
              <NavItem label="Blogs" href="/blogs" isScrolled={isScrolled} />
              <NavItem label="Careers" href="/careers" isScrolled={isScrolled} />
            </nav>
            <a
              href="tel:+14784124416"
              className={`flex items-center transition-colors ${isScrolled
                ? "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                : "text-white hover:text-gray-200"
                }`}
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>+1 478 412 416</span>
              <img src={usa_flag} alt="USA Flag" className="h-4 w-4 sm:h-6 sm:w-6 ml-2" />
            </a>
            <Button asChild variant={"default"}>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <a
              href="tel:+14784124416"
              className={`flex items-center transition-colors ${isScrolled
                ? "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                : "text-white hover:text-gray-200"
                }`}
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="sr-only">+1 478 412 4167</span>
              <img src={usa_flag} alt="USA Flag" className="h-4 w-4 sm:h-6 sm:w-6 ml-2" />
            </a>
            <Button asChild size="sm" variant={"default"}>
              <Link href="/contact">Contact</Link>
            </Button>
            <button
              className={`p-2 rounded-md transition-colors ${isScrolled
                ? "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                : "text-white hover:bg-white/10"
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
        />

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`absolute top-0 right-0 w-[80%] max-w-sm bg-white dark:bg-gray-900 shadow-xl transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out overflow-y-auto h-screen`}
        >
          <div className="flex flex-col h-full z-100">
            <div className="flex-grow p-6 space-y-4">
              <MobileNavItem label="Services" href="/services" />
              <MobileProductsDropdown />
              <MobileNavItem label="Industries" href="/industries" />
              <MobileNavItem label="About Us" href="/about" />
              <MobileNavItem label="Blogs" href="/blogs" />
              <MobileNavItem label="Careers" href="/careers" />

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="tel:+14784124416"
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 478 412 416</span>
                  <img src={usa_flag} alt="USA Flag" className="h-4 w-4 sm:h-6 sm:w-6 ml-2" />
                </a>
                <div className="mt-8">
                  <Button asChild className="w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Desktop Navigation Item
function NavItem({ label, href, isScrolled }: { label: string; href: string; isScrolled: boolean }) {
  return (
    <Link
      href={href}
      className={`font-medium transition-colors ${isScrolled
        ? "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        : "text-white hover:text-gray-200"
        }`}
    >
      {label}
    </Link>
  )
}

// Desktop Products Dropdown
function ProductsDropdown({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="relative group">
      <button
        className={`flex items-center font-medium transition-colors ${isScrolled
          ? "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          : "text-white hover:text-gray-200"
          }`}
      >
        Products
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
        <div className="py-2 bg-white dark:bg-gray-800 backdrop-blur-xl rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
          <Link
            href="/service/website-development"
            className="block px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700/50"
          >
            <span className="font-medium text-gray-700 dark:text-gray-200">Website Development</span>
            <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">
              Professional website development services
            </span>
          </Link>
          <div className="relative group/nested">
            <Link
              href="#"
              className="flex items-center justify-between px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700/50"
              onClick={(e) => e.preventDefault()}
            >
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-200">Digital Marketing</span>
                <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Boost your online presence with our digital
                  solutions</span>
              </div>
              <ChevronDown className="h-6 w-6 group-hover/nested:rotate-[-90deg] transition-transform" />
            </Link>
            <div className="absolute left-full top-0 w-64 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
              <div className="py-2 ml-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
                <Link
                  href="/service/blogging"
                  className="block px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700/50"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-200">Blogging</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Professional content creation and management
                  </span>
                </Link>
                <Link
                  href="/service/seo"
                  className="block px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700/50"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-200">SEO</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Search engine optimization services</span>
                </Link>
                <Link
                  href="/service/social-media"
                  className="block px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700/50"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-200">Social Media Marketing</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Strategic social media solutions</span>
                </Link>
                <Link
                  href="/service/performance"
                  className="block px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700/50"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-200">Performance Marketing</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Data-driven marketing campaigns</span>
                </Link>
                <Link
                  href="/service/reputation"
                  className="block px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700/50"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-200">Reputation Management</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Online reputation management</span>
                </Link>
                <Link
                  href="/service/newsletters"
                  className="block px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700/50"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-200">Newsletters</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Email marketing solutions</span>
                </Link>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Mobile Navigation Item
function MobileNavItem({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {label}
    </Link>
  )
}

// Mobile Products Dropdown
function MobileProductsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDigitalMarketingOpen, setIsDigitalMarketingOpen] = useState(false)

  return (
    <div className="space-y-2">
      <button
        className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        Products
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
          <Link
            href="/service/website-development"
            className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <span className="font-medium">Website Development</span>
            <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">
              Professional website development services
            </span>
          </Link>

          <div className="space-y-2">
            <button
              className="flex items-center justify-between w-full py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-left"
              onClick={() => setIsDigitalMarketingOpen(!isDigitalMarketingOpen)}
            >
              <div>
                <span className="font-medium">Digital Marketing</span>
                <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Boost your online presence with our digital
                  solutions</span>
              </div>
              <ChevronDown
                className={`ml-1 h-3 w-3 transition-transform duration-300 ${isDigitalMarketingOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isDigitalMarketingOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                <Link
                  href="/service/blogging"
                  className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="font-medium">Blogging</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Professional content creation and management
                  </span>
                </Link>
                <Link
                  href="/service/seo"
                  className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="font-medium">SEO</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Search engine optimization services</span>
                </Link>
                <Link
                  href="/service/social-media"
                  className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="font-medium">Social Media Marketing</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Strategic social media solutions</span>
                </Link>
                <Link
                  href="/service/performance"
                  className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="font-medium">Performance Marketing</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Data-driven marketing campaigns</span>
                </Link>
                <Link
                  href="/service/reputation"
                  className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="font-medium">Reputation Management</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Online reputation management</span>
                </Link>
                <Link
                  href="/service/newsletters"
                  className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="font-medium">Newsletters</span>
                  <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">Email marketing solutions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



// import { useState, useEffect } from "react";
// import { Link, useLocation } from "wouter";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Phone } from "lucide-react";
// import ProductsDropdown from "./ProductsDropdown";
// import logo from "@/images/xlnc_logo.png";
// import usa_flag from "@/images/usa_flag.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [location] = useLocation();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrolled]);

//   const navItems = [
//     { href: "/services", label: "Services" },
//     { href: "#", label: "Products", isDropdown: true },
//     { href: "/industries", label: "Industries" },
//     { href: "/about", label: "About Us" },
//     { href: "/blogs", label: "Blogs" }
//   ];

//   const navClasses = scrolled
//     ? "bg-white/80 backdrop-blur-md shadow-md transition-all duration-300"
//     : "bg-transparent transition-all duration-300";

//   return (
//     <nav className={`fixed w-full z-50 ${navClasses} pt-.5`}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 sm:h-20">
//           <Link href="/" className="flex items-center space-x-2">
//             <img src={logo} alt="XLNC Technologies Logo" className="w-auto h-12 sm:h-16" />
//           </Link>
// <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
//             {navItems.map((item, index) => (
//               <div key={index} className="relative">
//                 {item.isDropdown ? (
//                   <ProductsDropdown scrolled={scrolled} />
//                 ) : (
//                   <Link href={item.href}>
//                     <a className={`text-sm font-medium relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
//                       location === item.href
//                         ? "text-primary"
//                         : scrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-gray-200"
//                     }`}>
//                       {item.label}
//                     </a>
//                   </Link>
//                 )}
//               </div>
//             ))}
//             <div className="flex items-center space-x-4 xl:space-x-6">
//               <div className={`hidden sm:flex items-center ${scrolled ? 'text-gray-700' : 'text-white'}`}>
//                 <Phone className="h-4 w-4 mr-2" />
//                 <span className="text-sm">+1 478 412 4167</span>
//                 <img src={usa_flag} alt="USA Flag" className="h-4 w-4 sm:h-6 sm:w-6 ml-2" />
//               </div>
//               <Button asChild className="text-sm">
//                 <Link href="/contact">Contact Us</Link>
//               </Button>
//             </div>
//           </div>
//           <Button
//             variant="ghost"
//             className={`lg:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </Button>
//         </div>
//         {isOpen && (
//           <div className="lg:hidden py-4 bg-white/80 backdrop-blur-md">
//             <div className="space-y-2">
//               {navItems.map((item, index) => (
//                 <div key={index} className="px-4">
//                   {item.isDropdown ? (
//                     <ProductsDropdown mobile />
//                   ) : (
//                     <Link href={item.href}>
//                       <a className="block py-2 text-base font-medium text-gray-700 hover:text-primary">
//                         {item.label}
//                       </a>
//                     </Link>
//                   )}
//                 </div>
//               ))}
//               <div className="px-4 py-3 space-y-3">
//                 <div className="flex items-center text-gray-700">
//                   <Phone className="h-4 w-4 mr-2" />
//                   <span className="text-sm">+1 478 412 4167</span>
//                   <img src={usa_flag} alt="USA Flag" className="h-4 w-4 ml-2" />
//                 </div>
//                 <Button className="w-full text-sm" asChild>
//                   <Link href="/contact">Contact Us</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;