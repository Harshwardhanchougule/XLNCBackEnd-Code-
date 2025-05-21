import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronRight, Linkedin, Youtube } from 'lucide-react';
import companyLogo from '@/images/xlnc_logo.png';
import Logo from '@/images/logo/footer_crw_logo.png';
import Logo1 from '@/images/logo/xlncacademy_logo.jpg';
import axios from 'axios';

const Footer = () => {
  // State for services and form
  const [services, setServices] = useState<{ name: string; url: string }[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', url: '' });

  // Fetch services from backend
  useEffect(() => {
    fetch('/api/addServices')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  // Handle form input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/addServices', form);

      if (response.status === 201 || response.status === 200) {
        setServices([...services, response.data]);
        setForm({ name: '', url: '' });
        setShowForm(false);
        alert('Service added successfully!');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Server error:', error.response?.data);
        alert(error.response?.data?.message || 'Failed to add service');
      } else {
        console.error('Error:', error);
        alert('An unexpected error occurred');
      }
    }
  };

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
              {services.map((service, index) => (
                <li key={index} className="flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-white group-hover:text-gray-200" />
                  <a
                    href={service.url}
                    className="text-white hover:text-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              className="mt-2 bg-white text-[#00487a] hover:bg-gray-200"
              onClick={() => setShowForm(!showForm)}
            >
              Add Service
            </Button>
            {showForm && (
              <form onSubmit={handleSubmit} className="mt-4 space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Service Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1 rounded"
                />
                <input
                  type="text" // <-- Change here from "url" to "text"
                  name="url"
                  placeholder="Service URL"
                  value={form.url}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1 rounded"
                />
                <Button type="submit" className="bg-[#00487a] text-white w-full">
                  Save
                </Button>
              </form>
            )}
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