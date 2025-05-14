import type { LucideIcon } from "lucide-react"

export interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
  animationClass?: string
}

export function FeatureCard({ title, description, icon: Icon, color, animationClass = "" }: FeatureCardProps) {
  // Map color string to background and lighter background colors
  const getBgColor = (color: string) => {
    const colorMap: Record<string, { bg: string; light: string }> = {
      blue: { bg: "bg-blue-600", light: "bg-blue-500" },
      pink: { bg: "bg-pink-600", light: "bg-pink-500" },
      "light-blue": { bg: "bg-blue-400", light: "bg-blue-400" },
      green: { bg: "bg-green-600", light: "bg-green-500" },
      purple: { bg: "bg-purple-600", light: "bg-purple-500" },
      orange: { bg: "bg-orange-600", light: "bg-orange-500" },
      red: { bg: "bg-red-600", light: "bg-red-500" },
      yellow: { bg: "bg-yellow-600", light: "bg-yellow-500" },
      indigo: { bg: "bg-indigo-600", light: "bg-indigo-500" },
      teal: { bg: "bg-teal-600", light: "bg-teal-500" },
    }

    return colorMap[color] || { bg: "bg-blue-600", light: "bg-blue-500" }
  }

  const { bg, light } = getBgColor(color)

  return (
    <div className="bg-white rounded-xl shadow-lg w-85 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
      <div className="flex flex-col items-center pt-4 pb-2 px-5 relative">
        <div
          className={`w-16 h-16 rounded-full ${bg} flex justify-center items-center mb-3 relative z-10 ${animationClass}`}
        >
          <Icon size={32} color="white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">{title}</h3>
      </div>
      <div className="px-6 pb-4 text-center">
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div
        className={`absolute top-0 left-0 w-32 h-32 ${light} rounded-full opacity-10 -translate-x-10 -translate-y-10`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-24 h-24 ${light} rounded-full opacity-10 translate-x-8 translate-y-8`}
      ></div>
    </div>
  )
}