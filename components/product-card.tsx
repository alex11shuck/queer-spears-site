"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProductCardProps {
  name: string
  flavor: string
  description: string
  imageSrc: string
  bgColor?: string
}

export function ProductCard({ name, flavor, description, imageSrc, bgColor = "bg-white" }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="rounded-lg shadow-lg overflow-hidden"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className={`relative aspect-square ${bgColor} p-4 flex items-center justify-center`}>
        <motion.div
          animate={isHovered ? { rotate: [0, -5, 5, -5, 5, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative"
        >
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </motion.div>
      </div>
      <div className={`p-6 ${bgColor}`}>
        <h3 className="font-display text-2xl mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-3">{flavor}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  )
}
