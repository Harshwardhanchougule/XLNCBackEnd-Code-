import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const industries = [
  "All Industries",
  "Accountant",
  "General Contractor",
  "Home Decor",
  "Healthcare",
  "Lawyers",
  "Mortgage Brokers",
  "Security",
  "Sales Marketing",
  "Windows Treatment",
  "Beauty Body Care",
  "Food Catering",
  "Home Inspectors",
  "HVAC",
  "Healing Wellness",
  "Print Shops",
  "Salons",
  "Sports",
  "Video Production"
];

const mockTemplates = {
  Accountant: [
    {
      name: "Modern Accounting Firm",
      image: "/templates/accountant-modern.png",
      description: "Clean, professional design for accounting services"
    },
    {
      name: "Tax Advisory Group",
      image: "/templates/accountant-tax.png",
      description: "Focused on tax services and financial planning"
    }
  ],
  Healthcare: [
    {
      name: "Medical Practice",
      image: "/templates/healthcare-practice.png",
      description: "Professional medical practice website"
    },
    {
      name: "Wellness Center",
      image: "/templates/healthcare-wellness.png",
      description: "Modern wellness center design"
    }
  ],
  Lawyers: [
    {
      name: "Law Firm",
      image: "/templates/law-firm.png",
      description: "Professional law firm website"
    },
    {
      name: "Legal Services",
      image: "/templates/legal-services.png",
      description: "Comprehensive legal services design"
    }
  ]
  // Add more industry templates as needed
};

const PortfolioSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [currentPage, setCurrentPage] = useState(0);

  // Get all templates for "All Industries" view
  const allTemplates = Object.values(mockTemplates).flat();

  // Get templates based on selected industry
  const displayTemplates = selectedIndustry === "All Industries" 
    ? allTemplates 
    : mockTemplates[selectedIndustry as keyof typeof mockTemplates] || [];

  const templatesPerPage = 3;
  const totalPages = Math.ceil(displayTemplates.length / templatesPerPage);

  const currentTemplates = displayTemplates.slice(
    currentPage * templatesPerPage,
    (currentPage + 1) * templatesPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const previousPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900">Our web design portfolio</h2>
              <p className="text-xl text-gray-600 mt-2">
                We design industry-specific high-converting websites for your business.<br />
                Check out some of our latest work.
              </p>
            </div>
            <div className="w-full md:w-64">
              <Select
                value={selectedIndustry}
                onValueChange={(value) => {
                  setSelectedIndustry(value);
                  setCurrentPage(0);
                }}
              >
                <SelectTrigger>
                  <SelectValue>{selectedIndustry}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTemplates.map((template, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    {/* Placeholder design for template preview */}
                    <div className="p-4">
                      <div className="h-4 w-24 bg-gray-200 rounded mb-4"></div>
                      <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{template.name}</h3>
                    <p className="text-gray-600 mt-2">{template.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {selectedIndustry === "All Industries" && totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={previousPage}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextPage}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;