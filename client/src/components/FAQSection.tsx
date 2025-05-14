import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Mail, Phone } from 'lucide-react';

// FAQ item type definition
export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  list?: string[];
  footer?: string;
  contacts?: {
    email: string;
    phones: {
      india: string;
      usa: string;
    }
  };
};

// Props interface for the FAQ component
interface FAQSectionProps {
  title?: string;
  faqs?: FAQItem[];
  className?: string;
  bgColor?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    id: "1",
    question: "What is XLNC Technologies' vision?",
    answer: "Our vision is 'to build a brand that is a recognized name across the industries of education, Technologies and Recruitment consulting for providing niche solutions by adopting AI, ML and Robotics.' Moreover, we envision businesses leveraging innovation and digital transformation to enhance efficiency, security, and growth."
  },
  {
    id: "2",
    question: "What services does XLNC Technologies offer?",
    answer: "XLNC Technologies provides a comprehensive suite of technology solutions to help businesses thrive, including:",
    list: [
      "Robotic Process Automation (RPA)",
      "EDI (Electronic Data Interchange)",
      "Gen AI (Generative Artificial Intelligence)",
      "Artificial Intelligence & Machine Learning (AI & ML)",
      "Web & Mobile App Development",
      "Cybersecurity & Security Analysis",
      "Independent QA & Testing"
    ],
    footer: "And many more advanced solutions.."
  },
  {
    id: "3",
    question: "Which industries does XLNC Technologies cater to?",
    answer: "We offer customized digital solutions across a diverse range of industries, including:",
    list: [
      "Financial Services",
      "Logistics",
      "IT & Consulting",
      "Manufacturing",
      "Online Gaming",
      "Real Estate",
      "Healthcare",
      "E-commerce & Retail",
      "Education & E-learning",
      "Media & Entertainment",
      "HR"
    ]
  },
  {
    id: "4",
    question: "Why choose XLNC Technologies as your IT service provider?",
    answer: "Choosing XLNC Technologies means embracing strategic innovation, tailored solutions, and bulletproof security for a fail-safe digital transformation. We prioritize a people-first approach, ensuring seamless adoption and hands-on support. With global expertise and customer-focused solutions, we help businesses stay ahead and lead with confidence."
  },
  {
    id: "5",
    question: "How can I connect with XLNC Technologies?",
    answer: "You can contact us directly at:",
    contacts: {
      email: "enquiries@xlnctechnologies.com",
      phones: {
        india: "+91 9892836061",
        usa: "+1 478 412 4167"
      }
    }
  }
];

const FAQSection = ({
  title = "Frequently Asked Questions",
  faqs = defaultFaqs,
  className = "",
  bgColor = "bg-[#f8fafc]"
}: FAQSectionProps) => {
  return (
    <section className={`py-8 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-white rounded-lg shadow-md"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline">
                  <h3 className="text-xl font-medium text-left">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="pt-2">
                    <p className="text-gray-700 text-base mb-4">{faq.answer}</p>
                    
                    {faq.list && (
                      <ul className="space-y-2 mb-4 text-base text-gray-700">
                        {faq.list.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {faq.footer && (
                      <p className="text-gray-600 italic mt-2 text-base">{faq.footer}</p>
                    )}
                    
                    {faq.contacts && (
                      <div className="space-y-3 mt-6 bg-gray-50 p-4 rounded-lg text-base">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-gray-600" />
                          <a 
                            href={`mailto:${faq.contacts.email}`}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                          >
                            {faq.contacts.email}
                          </a>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-gray-600" />
                            <a 
                              href={`tel:${faq.contacts.phones.india}`}
                              className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                              India: {faq.contacts.phones.india}
                            </a>
                          </div>
                          <div className="flex items-center gap-3 ml-8">
                            <a 
                              href={`tel:${faq.contacts.phones.usa}`}
                              className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                              USA: {faq.contacts.phones.usa}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
