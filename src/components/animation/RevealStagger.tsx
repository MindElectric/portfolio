'use client'
import { motion } from 'framer-motion';

interface Props {
    children: React.ReactNode
    index: number
}

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },

}

export const RevealStagger = ({ children, index }: Props) => {
    return (
        <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.05 * index
                }
            }}
            viewport={{ once: true }}
            custom={index}
        >
            {children}
        </motion.div>
    )
}
