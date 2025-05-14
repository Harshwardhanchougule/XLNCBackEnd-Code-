import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

// FAQ item type definition
export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

// Props interface for the FAQ component
interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
  bgColor?: string;
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  faqs,
  className = "",
  bgColor = "bg-gray-50"
}: FAQSectionProps) => {
  return (
    <section className={`py-8 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12">
            {title}
          </h2>
        )}
        
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
                  <p className="text-gray-700 text-base" 
                     dangerouslySetInnerHTML={{ __html: faq.answer }} 
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>      </div>
    </section>
  );
};

export default FAQSection;