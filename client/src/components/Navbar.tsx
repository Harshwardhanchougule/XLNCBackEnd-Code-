"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import usa_flag from "@/images/usa_flag.png"
import logo from "@/images/xlnc_logo.png";
import { useAuth } from '../pages/AuthContext';
import { useLocation } from "wouter";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const [, setLocation] = useLocation();

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

  const handleLogout = () => {
    logout();
    setLocation('/login');
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Industries", path: "/industries" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isAuthenticated) {
    return null; // Don't show navbar if not authenticated
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 xl:px-8"> {/* Updated container width */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-xl font-bold ${isScrolled ? "text-gray-800 dark:text-white" : "text-white"
              }`}>
              <img src={logo} alt="XLNC Technologies Logo" className="w-auto h-12 lg:h-16 xl:h-18" /> {/* Updated logo size */}
            </span>
          </Link>

          {/* Desktop Navigation and Contact Us Button */}
          <div className="hidden lg:flex items-center xl:space-x-10 lg:space-x-6"> {/* Updated spacing */}
            <nav className="flex items-center xl:space-x-8 lg:space-x-6"> {/* Updated spacing */}
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-medium transition-colors ${isScrolled
                    ? "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-white hover:text-gray-200"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  href="/AdminDashboard"
                  className={`font-medium transition-colors ${isScrolled
                    ? "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-white hover:text-gray-200"
                    }`}
                >
                  Admin Dashboard
                </Link>
              )}
            </nav>
            <a
              href="tel:+14784124416"
              className={`flex items-center transition-colors whitespace-nowrap ${isScrolled
                  ? "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  : "text-white hover:text-gray-200"
                }`}
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm xl:text-base">+1 478 412 416</span>
              <img src={usa_flag} alt="USA Flag" className="h-4 w-4 xl:h-5 xl:w-5 ml-2" />
            </a>
            <Button asChild variant={"default"} className="xl:px-6 lg:px-4">
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
              onClick={toggleMenu}
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
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  href="/AdminDashboard"
                  className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Admin Dashboard
                </Link>
              )}
            </div>

            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>

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