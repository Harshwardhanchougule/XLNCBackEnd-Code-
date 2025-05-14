import Image from "next/image"
import { Check } from "lucide-react"
//client\src\images\SEO-Optimized Web Designs\Why Choose us.jpg
import ClientInteraction from '@/images/SEO-Optimized Web Designs/Why Choose us.jpg'

const features = [
  {
    title: "Results-Driven SEO Excellence",
    description:
      "We don't just aim for rankings—we drive real business growth. Our data-backed strategies have helped brands dominate search results, attract quality traffic, and boost conversions.",
  },
  {
    title: "Tailored Strategies for Your Success",
    description:
      "Your business is unique, and so is our SEO approach. We craft customized strategies that align with your industry, target audience, and long-term goals for maximum impact.",
  },
  {
    title: "100% Transparency & Insightful Reporting",
    description:
      "No jargon, no guesswork—just clear, detailed reports on your SEO performance. Track rankings, traffic, and ROI with full visibility into every optimization effort.",
  },
  {
    title: "Ongoing Optimization for Lasting Impact",
    description:
      "SEO isn't a one-time fix. We constantly refine strategies, analyze trends, and adapt to algorithm updates to keep your website competitive and ahead of the curve.",
  },
  {
    title: "Expert-Led SEO with a Dedicated Team",
    description:
      "Our team of SEO specialists brings years of expertise, industry insights, and innovative tactics to help your business outrank competitors and thrive in the digital landscape.",
  },
]
export function WhyChooseUs() {
  return (
    <section className="py-16 px-16 bg-[#f8fafc]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 md:mb-6">
        Why Choose Us? – SEO That Works, Strategies That Last 
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
              src={ClientInteraction}
              alt="SEO Team Meeting"
              className="w-full h-full object-cover rounded-lg"
              style={{ maxHeight: '1200px' }}
            />
          </div>
        </div>
      </div>
    </section>  )
}