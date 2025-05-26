import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronRight, Linkedin, Youtube } from 'lucide-react';
import companyLogo from '@/images/xlnc_logo.png';
import Logo from '@/images/logo/footer_crw_logo.png';
import Logo1 from '@/images/logo/xlncacademy_logo.jpg';

interface DataItem {
  _id: string;
  name: string;
  url: string;
}

const Footer = () => {
  // State for services and form
  const [services, setServices] = useState<DataItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', url: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = 'http://localhost:5000';

  // Fetch services from backend
  const fetchServices = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/data-items`);
      if (response.data && Array.isArray(response.data)) {
        setServices(response.data.reverse());
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      setErrorMsg('Failed to load services');
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await axios.post(`${API_BASE_URL}/api/data-items`, formData);
      if (response.status === 200 || response.status === 201) {
        setSuccessMsg('Service added successfully!');
        setFormData({ name: '', url: '' });
        setShowForm(false);
        await fetchServices(); // Refresh the list
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        setErrorMsg(error.response?.data?.message || 'Failed to add service');
      } else {
        setErrorMsg('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#00487a] py-12">
      <div className="container mx-auto px-6">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {/* Company Logo Section */}
          <div>
            <img src={companyLogo} alt="XLNC logo" className="w-48 h-auto" />
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
              {services.map((service) => (
                <li key={service._id} className="flex items-center group">
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
              {showForm ? 'Cancel' : 'Add Service'}
            </Button>

            {showForm && (
              <form onSubmit={handleSubmit} className="mt-4 space-y-3 bg-white p-4 rounded-lg">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Service Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                    Service URL
                  </label>
                  <input
                    type="url"
                    id="url"
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {errorMsg && (
                  <div className="text-red-500 text-sm">{errorMsg}</div>
                )}
                {successMsg && (
                  <div className="text-green-600 text-sm">{successMsg}</div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-[#00487a] text-white hover:bg-[#003a62]"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Service'}
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