import Image from "next/image"
import { Check } from "lucide-react"
//client\src\images\SEO-Optimized Web Designs\Why Choose us.jpg
import imageWhy from "@/images/Reputation management/Why Reputation matters.jpg"
const features = [
  {
    title: "Purpose & Value of Our Service:",
    description:
      "We are in a digital world where 90% of consumers read online reviews before making decisions, your reputation is your most valuable asset. Our services help businesses build credibility, attract new customers, and foster trust, ensuring long-term growth.",
  },
  {
    title: "How XLNC Technologies Stands Out:",
    description:
      "Unlike generic reputation management tools, we combine AI-driven insights, proactive monitoring, and hands-on customer support to give you full control over your brand’s digital presence.",
  },
 
]
export function WhyChooseRMS() {
  return (
    <section className="py-16 px-16 bg-[#f8fafc]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-black mb-8 md:mb-12">
        Why Reputation Management Matters

        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Features */}
          <div className="space-y-6 order-2 md:order-1">
            <ul className="space-y-6 list-none p-0 m-0">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-sm bg-brand-yellow flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#2f2b2a]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 md:order-2 aspect-[3/2] flex items-center">
            <img
              src={imageWhy}
              alt="SEO Team Meeting"
              className="w-full h-full object-cover rounded-lg"
              style={{ maxHeight: '6000px' }}
            />
          </div>
        </div>
      </div>
    </section>
      )
}