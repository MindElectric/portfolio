'use client'
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface RevealTextProps {
    children: React.ReactNode
    width?: "w-full" | "100%"
}

export const RevealText = ({ children, width }: RevealTextProps) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    const show = useAnimation()

    useEffect(() => {
        if (inView) {
            show.start("visible")
        }
    }, [inView])
    return (
        <div ref={ref} className={`${width} overflow-hidden relative`}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={show}
                transition={{ duration: 0.2, ease: "easeIn" }}
            >
                {children}
            </motion.div>
        </div>
    )
}
