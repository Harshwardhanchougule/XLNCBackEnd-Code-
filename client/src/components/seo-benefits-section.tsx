"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Users, Smartphone, BarChart3, Award, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export interface BenefitItem {
    title: string
    description: string
    icon: React.ReactNode
}

export interface SEOBenefitsSectionProps {
    heading?: string
    benefits?: BenefitItem[]
    className?: string
    itemsPerView?: number
}

const defaultBenefits: BenefitItem[] = [
    {
        title: "Increased Online Visibility",
        description: "Higher search rankings mean more potential customers find your business online.\nOptimized content ensures your website appears in relevant search results daily.\nStrategic keyword placement helps capture targeted traffic to your web pages.",
        icon: <Search className="h-10 w-10" />,
    },
    {
        title: "More Organic Traffic",
        description: "SEO-optimized content attracts relevant visitors without paying for advertisements.\nNatural search results build sustainable long-term growth for your web presence.\nQuality content creation helps establish authority in your specific market niche.",
        icon: <Users className="h-10 w-10" />,
    },
    {
        title: "Better User Experience",
        description: "A faster, mobile-friendly website keeps users engaged and reduces bounce rates.\nResponsive design ensures seamless browsing across all devices and screen sizes.\nOptimized page loading speeds create smooth navigation throughout your website.",
        icon: <Smartphone className="h-10 w-10" />,
    },
    {
        title: "Higher Conversion Rates",
        description: "SEO isn't just about traffic—it's about turning visitors into loyal customers.\nTargeted optimization helps attract users who are ready to make buying decisions.\nImproved user engagement leads to increased sales and business opportunities.",
        icon: <BarChart3 className="h-10 w-10" />,
    },
    {
        title: "Stronger Brand Authority",
        description: "Consistent content and high search rankings establish you as an industry leader.\nQuality backlinks from reputable sources enhance your domain's trustworthiness.\nRegular content updates demonstrate your expertise in your business segment.",
        icon: <Award className="h-10 w-10" />,
    },
    {
        title: "Cost-Effective Marketing",
        description: "SEO delivers long-term value without the high costs of traditional paid advertising.\nOrganic search results provide continuous traffic without per-click payment models.\nSustainable growth through natural search visibility saves marketing expenses.",
        icon: <DollarSign className="h-10 w-10" />,
    },
]
export function SEOBenefitsSection({
    heading = "Benefits of Our SEO Services",
    benefits = defaultBenefits,
    className,
    itemsPerView = 3,
}: SEOBenefitsSectionProps) {
    return (
        <section className={cn("py-4 px-4", className)}>
            <div className="container mx-auto">

                <div className="text-black py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">{heading}</h1>
                    </div>

                </div>                
                <div className="relative">
                    <Carousel
                        className="w-full"
                        opts={{
                            align: "start",
                            slidesToScroll: 1,
                        }}
                    >
                        <CarouselContent>
                            {benefits.map((benefit, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <BenefitCard benefit={benefit} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center mt-8 gap-4">
                            <CarouselPrevious className="relative static h-10 w-10 border-gray-600 bg-[#004879] hover:bg-gray-700 hover:text-white text-white disabled:bg-[#6592b2] disabled:border-none" />
                            <CarouselNext className="relative static h-10 w-10 border-gray-600 bg-[#004879] hover:bg-gray-700 hover:text-white text-white disabled:bg-[#6592b2] disabled:border-none" />


                        </div>          
                    </Carousel>        
                </div>
            </div>    
        </section>
    )
}

function BenefitCard({ benefit }: { benefit: BenefitItem }) {
    return (
        <Card className="h-full bg-[#004879] text-white border-none">
            <CardContent className="p-6 flex flex-col items-start text-left">
                <div className="mb-4 text-white scale-125">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>

                <p className="text-gray-300 text-lg ">{benefit.description}</p>
            </CardContent>

        </Card>
    )
}
