import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Eye, Smartphone, ChartColumnIncreasing , Loader, AppWindow } from "lucide-react"
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
        title: "Optimized for Mobile Users",
        description: "Flawless performance on all screen sizes ensures your content looks great and functions perfectly on every device.",
        icon: <Smartphone  className="h-10 w-10" />,
    },
    {
        title: "Improved Page Load Speed",
        description: "Faster sites mean better rankings and engagement, leading to improved user experience and conversion rates.",
        icon: <Loader  className="h-10 w-10" />,
    },
    {
        title: "Higher Google Search Rankings",
        description: "Mobile-first indexing and optimized performance ensure better visibility in search results.",
        icon: <Search  className="h-10 w-10" />,
    },
    {
        title: "Increased User Retention",
        description: "Engaging and interactive UI/UX keeps visitors hooked and coming back for more.",
        icon: <AppWindow  className="h-10 w-10" />,
    },
    {
        title: "Reduced Bounce Rate",
        description: "A seamless browsing experience encourages longer visits and deeper engagement with your content.",
        icon: <Eye  className="h-10 w-10" />,
    },
    {
        title: "Future-Proof Design",
        description: "Scalable architecture that adapts to new trends and technologies, ensuring long-term success.",
        icon: <ChartColumnIncreasing  className="h-10 w-10" />,
    }
]
export function NewsBenefitsSection({
    heading = "Benefits of Our SEO Services",
    benefits = defaultBenefits,
    className,
    itemsPerView = 3,
}: SEOBenefitsSectionProps) {
    return (
        <section className={cn("py-0 px-4 mb-4", className)}>
            <div className="container mx-auto">
                <div className="text-black py-0 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-3xl md:text-2xl font-bold mb-8 text-center">{heading}</h1>
                    </div>
                </div>
                <div className="relative min-h-[200px]">
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
                            <CarouselPrevious className="relative static  h-10 w-10 border-gray-600 bg-[#004879] hover:bg-gray-700 hover:text-white text-white disabled:bg-[#6592b2] disabled:border-none" />
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
        <Card className="h-[350px] bg-[#004879] text-white border-none">
            <CardContent className="p-6 flex flex-col items-start text-left h-full">
                <div className="mb-4 text-white scale-125">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
            </CardContent>
        </Card>
    )
}
