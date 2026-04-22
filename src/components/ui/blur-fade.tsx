import { useRef } from "react"
import {
  AnimatePresence,
  motion,

  useInView,

} from "motion/react"
import type {  MotionProps,
  UseInViewOptions,
  Variants, } from "motion/react"

type MarginType = UseInViewOptions["margin"]

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode
  className?: string
  variant?: Variants
  duration?: number
  delay?: number
  offset?: number
  direction?: "up" | "down" | "left" | "right"
  inView?: boolean
  inViewMargin?: MarginType
  blur?: string
}

const getBlurFadeVariants = (
  offset: number,
  direction: "up" | "down" | "left" | "right",
  blur: string
): Variants => {
  const isX = direction === "left" || direction === "right"
  const isPositive = direction === "down" || direction === "right"

  return {
    hidden: {
      opacity: 0,
      filter: `blur(${blur})`,
      ...(isX
        ? { x: isPositive ? offset : -offset }
        : { y: isPositive ? offset : -offset }),
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      ...(isX ? { x: 0 } : { y: 0 }),
    },
  }
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  ...props
}: BlurFadeProps) {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })
  const isInView = !inView || inViewResult

  const variants = variant || getBlurFadeVariants(offset, direction, blur)

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={variants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
