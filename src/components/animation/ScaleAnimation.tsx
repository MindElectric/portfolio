'use client'
import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

interface Props {
    children: React.ReactNode
}
export const ScaleAnimation = ({ children }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const shouldReduceMotion = useReducedMotion()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start center"],
    })

    const scale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [0.8, 1])
    const opacity = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [0.6, 1])

    return (
        <motion.div ref={ref}
            style={{
                scale: scale,
                opacity: opacity
            }}
            className="w-full relative">
            {children}
        </motion.div>
    )
}
