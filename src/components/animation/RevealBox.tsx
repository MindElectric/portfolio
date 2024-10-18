'use client'
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface RevealBoxProps {
    children: React.ReactNode
    width?: "w-full" | "100%"
}




export const RevealBox = ({ children, width }: RevealBoxProps) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    const slide = useAnimation()

    useEffect(() => {
        if (inView) {
            slide.start("visible")
        }
    }, [inView])
    return (
        <div ref={ref} className={`${width} overflow-hidden relative`}>
            <div>
                {children}
            </div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}

                initial="hidden"
                animate={slide}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute bg-primary top-0 bottom-0 left-0 right-0"
            >

            </motion.div>
        </div>
    )
}
