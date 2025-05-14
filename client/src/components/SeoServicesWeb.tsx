import Image from "next/image"
import Link from "next/link"
import image1 from "@/images/Website/SEO-Optimized Web Designs.jpg"

interface SeoServicesWebProps {
    heading: string;
    imageUrl: string;
    imageAlt: string;
}

function SeoServicesWeb({ heading, imageUrl, imageAlt }: SeoServicesWebProps) {
    return (
        <section className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                                priority
                                quality={100}
                                placeholder="blur"
                                blurDataURL={imageUrl}
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-lg text-black font-bold max-w-prose">
                            {heading}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SeoServicesWeb;