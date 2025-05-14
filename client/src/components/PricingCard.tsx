import { Check, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PricingCardProps {
  tier: string;
  price: string;
  features: {
    name: string;
    value: string | number | boolean;
  }[];
  popular?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

const PricingCard = ({ tier, price, features, popular, selected, onSelect }: PricingCardProps) => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const toggleFeature = (name: string) => {
    setExpandedFeature(expandedFeature === name ? null : name);
  };

  const isExpandableValue = (value: string | number | boolean) => {
    return typeof value === 'string' && value.length > 50;
  };

  return (
    <Card 
      className={cn(
        'cursor-pointer transition-all duration-200 h-full',
        'hover:border-primary/50',
        selected ? 'ring-2 ring-primary shadow-lg transform scale-[1.02]' : ''
      )}
      onClick={onSelect}
    >
      <CardHeader>
        <CardTitle className="text-center pb-4 border-b">
          <div className="mb-2">
            <span className="text-lg font-semibold">{tier}</span>
            {popular && <span className="ml-2 text-sm text-primary">(Popular)</span>}
          </div>
          <div className="text-3xl font-bold text-primary">{price}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-24 flex-shrink-0 text-sm font-medium text-gray-700">
                {feature.name}:
              </div>
              <div className="flex items-start gap-2 flex-1">
                {typeof feature.value === 'boolean' ? (
                  feature.value ? (
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  ) : (
                    <Minus className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                  )
                ) : isExpandableValue(feature.value) ? (
                  <div className="w-full">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFeature(feature.name);
                      }}
                      className="text-left w-full flex items-center justify-between text-sm text-gray-600 hover:text-gray-900"
                    >
                      <span className="flex-1 truncate">
                        {expandedFeature === feature.name ? 'Hide details' : 'Show details'}
                      </span>
                      {expandedFeature === feature.name ? (
                        <ChevronUp className="h-4 w-4 flex-shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="h-4 w-4 flex-shrink-0 ml-2" />
                      )}
                    </button>
                    {expandedFeature === feature.name && (
                      <div className="mt-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-sm">
                        {feature.value}
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-sm text-gray-600">{feature.value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
        <Button 
          className={cn(
            "w-full",
            selected ? "bg-primary" : "bg-primary/80 hover:bg-primary"
          )}
          onClick={(e) => {
            e.stopPropagation();
            onSelect?.();
          }}
        >
          {selected ? "Selected" : "Select Plan"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;