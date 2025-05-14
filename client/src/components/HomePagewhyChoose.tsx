import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import img1 from "@/images/Home Page Why Choose Us/Comprehensive IT Solutions.jpg"
import img2 from "@/images/Home Page Why Choose Us/Advanced Technology & Platforms.jpg"
import img3 from "@/images/Home Page Why Choose Us/Customer-First Approach.jpg"
import img4 from "@/images/Home Page Why Choose Us/Innovative Digital Solutions.jpg"
import img5 from "@/images/Home Page Why Choose Us/Comprehensive IT Solutions.jpg"
import img6 from "@/images/Home Page Why Choose Us/A Team of Experts.jpg"
export interface BenefitItem {
    title: string
    description: string
    imageUrl: string
}

export interface SEOBenefitsSectionProps {
    heading?: string
    benefits?: BenefitItem[]
    className?: string
    itemsPerView?: number
}

const defaultBenefits: BenefitItem[] = [
    {
        title: "Comprehensive IT Solutions",
        description: "We focus on optimizing business operations, selecting the right technologies, and integrating efficient resources to deliver cost-effective, high-impact solutions that accelerate results.",
        imageUrl: img1
    },
    {
        title: "Advanced Technology & Platforms",
        description: "Leveraging the latest frameworks, protocols, and database technologies, we specialize in desktop, mobile, and cloud-based development, ensuring performance, security, and scalability.",
        imageUrl: img2
    },
    {
        title: "Customer-First Approach",
        description: "Customer success is at the core of everything we do. We align our solutions with your business goals, ensuring exceptional quality, seamless service, and long-term value in every engagement.",
        imageUrl: img3
    },
    {
        title: "Innovative Digital Solutions",
        description: "From content-managed websites and eCommerce platforms to web apps, hosting, and maintenance, we provide tailored, end-to-end digital solutions that support business growth.",
        imageUrl: img4
    },
    {
        title: "Seamless User Experience (UX)",
        description: "We prioritize usability, personalization, and intuitive design to enhance user interactions, creating engaging digital experiences that drive engagement and conversions.",
        imageUrl: img5
    },
    {
        title: "A Team of Experts",
        description: "Our diverse team of designers, engineers, and strategists brings technical expertise and strategic insight to help businesses establish a powerful digital presence and achieve their IT goals.",
        imageUrl: img6
    }
]

export function HomePagewhyChoose({
    heading = "Why Choose Us",
    benefits = defaultBenefits,
    className,
    itemsPerView = 3,
}: SEOBenefitsSectionProps) {
    return (
        <section className={cn("py-0 px-4 mb-4 overflow-hidden", className)}>
            <div className="container mx-auto">
                <div className="text-black py-0 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-3xl md:text-2xl font-bold mb-8 text-center">{heading}</h1>
                    </div>
                </div>
                <div className="relative min-h-[200px]">
                    <Carousel
                        className="w-full max-w-full"
                        opts={{
                            align: "start",
                            slidesToScroll: 1,
                        }}
                    >
                        <CarouselContent className="-ml-4">
                            {benefits.map((benefit, index) => (
                                <CarouselItem key={index} className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3">
                                    <BenefitCard benefit={benefit} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center mt-8 gap-4">
                            <CarouselPrevious className="relative static h-10 w-10 border-gray-600 bg-gray-800 hover:bg-gray-700 hover:text-white text-white disabled:bg-gray-600 disabled:border-none" />
                            <CarouselNext className="relative static h-10 w-10 border-gray-600 bg-gray-800 hover:bg-gray-700 hover:text-white text-white disabled:bg-gray-600 disabled:border-none" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

function BenefitCard({ benefit }: { benefit: BenefitItem }) {
    return (
        <Card className="h-[450px] border border-gray-200 hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden">
            <div className="h-[200px] w-full overflow-hidden">
                <img
                    src={benefit.imageUrl}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <CardContent className="p-6 flex flex-col items-start text-left h-[250px]">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
            </CardContent>
        </Card>
    )
}