import type { LucideIcon } from "lucide-react"
import { FeatureCard, type FeatureCardProps } from "./feature-card"

export interface FeatureCardItem extends Omit<FeatureCardProps, "icon"> {
  icon: LucideIcon
}

interface FeatureCardGridProps {
  features: FeatureCardItem[]
}

export function FeatureCardGrid({ features }: FeatureCardGridProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            color={feature.color}
            animationClass={feature.animationClass}
          />
        ))}
      </div>
    </div>
  )
}

