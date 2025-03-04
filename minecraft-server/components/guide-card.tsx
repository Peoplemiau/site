import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

interface GuideCardProps {
  title: string
  description: string
  image: string
  category: string
}

export default function GuideCard({ title, description, image, category }: GuideCardProps) {
  return (
    <div className="group bg-black border border-orange-800 rounded-lg overflow-hidden hover:border-orange-600 transition-all duration-300">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-orange-600 hover:bg-orange-700">{category}</Badge>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <Link href="#" className="inline-flex items-center text-orange-500 hover:text-orange-400 text-sm font-medium">
          Читать полностью <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

