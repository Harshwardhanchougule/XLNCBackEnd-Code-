import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PromotionalBanner = ({
  title1 = "",
  title = "Discover the power of AI-driven blogging with Webware's Rivi Intelligence",
  buttonText = "Book a Demo",
  backgroundColor = "#F15A29",
  textColortitle1 = "#0c0a09",
  textColor = "#1A1A1A",
  onButtonClick = () => { },
}) => {
  return (
    <Card className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 border-0 shadow-lg overflow-hidden w-full p-0">
      <CardContent
        className="p-6 flex flex-col md:flex-row items-center justify-center gap-6 min-h-[]"
      >
        <div className="flex flex-col gap-3 flex-1 text-left">
          {title1 && (
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight"
              style={{ color: textColortitle1 }}
            >
              {title1}
            </h2>
          )}
          <h2
            className="text-xl md:text-2xl font-bold tracking-tight"
            style={{ color: textColor }}
          >
            {title}
          </h2>
        </div>
        <div className="flex-shrink-0 self-center">
          <Button
            variant={'secondary'}
            size="lg"
            className="bg-[#0d59de] hover:bg-[#0d59de]/80 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 whitespace-nowrap"
            onClick={() => window.location.href = '/contact'}
          >
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromotionalBanner;