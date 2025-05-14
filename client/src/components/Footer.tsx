import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronRight, Linkedin, Youtube } from 'lucide-react';
import companyLogo from '@/images/xlnc_logo.png';
import Logo from '@/images/logo/footer_crw_logo.png';
import Logo1 from '@/images/logo/xlncacademy_logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#00487a] py-12">
      <div className="container mx-auto px-6">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {/* Company Logo Section */}
          <div>
            <img
              src={companyLogo}
              alt="XLNC logo"
              className="w-48 h-auto"
            />
          </div>

          {/* Our Company Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Our Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About us', href: '/about' },
                { label: 'Industries', href: '/industries' },
                { label: 'Blogs', href: '/blogs' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-white group-hover:text-gray-200" />
                  <a href={item.href} className="text-white hover:text-gray-200 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Robotic Process Automation", href: "/services" },
                { name: "Electronic Data Interchange", href: "/services" },
                { name: "Gen AI", href: "/services" },
                { name: "Website Development", href: "/service/website-development" },
                { name: "IT Staff Augmentation", href: "/services" },
                { name: "Digital Marketing", href: "/service/social-media" },
                { name: "Cybersecurity", href: "/services" },
                { name: "Independent Q/A Testing", href: "/services" },
              ].map((service, index) => (
                <li key={index} className="flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-white group-hover:text-gray-200" />
                  <a href={service.href} className="text-white hover:text-gray-200 transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Our Brands</h4>
            <div className="space-y-4">
              {[
                { logo: Logo, alt: "careerunway logo", href: "https://www.careerunway.com/" },
                { logo: Logo1, alt: "xlncacademy logo", href: "https://www.xlncacademy.com/" },
              ].map((brand, index) => (
                <a
                  key={index}
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  <Card className="overflow-hidden w-48 bg-white">
                    <CardContent className="p-2">
                      <img src={brand.logo} alt={brand.alt} className="w-full h-auto" />
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-30" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm text-center md:text-left">
            Copyright © {new Date().getFullYear()} - <strong>XLNC Technologies</strong>. All Rights Reserved
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-white text-sm">Follow us on LinkedIn</span>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-white hover:text-white hover:bg-white/10 transition-colors"
            >
              <a
                href="https://in.linkedin.com/company/xlnc-academy-international-pvt-ltd-xaipl-"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit XLNC Technologies on LinkedIn"
              >
                <Linkedin className="h-10 w-10" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-white hover:text-white hover:bg-white/10 transition-colors"
            >
              <a
                href="https://www.youtube.com/@XLNCTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit XLNC Technologies on YouTube"
              >
                <Youtube className="h-10 w-10" />
              </a>
            </Button>
          </div>     
           </div>
      </div>
    </footer>
  );
};

export default Footer;