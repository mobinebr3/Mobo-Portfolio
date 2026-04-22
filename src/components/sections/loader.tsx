import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { BlurFade } from "../ui/blur-fade";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [showCloud, setShowCloud] = useState(false);

  useEffect(() => {
    // Start cloud animation after logo is visible (1 second)
    const cloudTimer = setTimeout(() => {
      setShowCloud(true);
    }, 1000);

    // Complete after cloud exits (1s + 1.5s = 2.5s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(cloudTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Premium easing curve - luxury motion
  const luxuryEase: [number, number, number, number] = [0.6, 0, 0.2, 1];

  return (
    <div className=" overflow-hidden bg-black   ">
      <div
        className="fixed inset-0 overflow-hidden rounded-3xl w-[98%]   mt-2  mx-auto max-h-[97dvh]"
        style={{ backgroundColor: "#fafafa" }}>
        {/* Logo - stays visible, gets covered by cloud */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: showCloud ? 0 : 1 }}
          transition={{ duration: 0.3, delay: showCloud ? 0.5 : 0 }}>
          <BlurFade
            delay={0.1}
            duration={0.8}
            offset={8}
            direction="up"
            blur="8px"
            inView={true}>
            <h1
              className="text-[clamp(3.5rem,12vw,10rem)] font-light  text-primary tracking-[-0.03em]  leading-[0.95] select-none"
              style={{
                fontFamily:
                  ' -apple-system, BlinkMacSystemFont, "Helvetica Now", "Helvetica Neue", sans-serif',
                fontWeight: 300,
              }}>
              Mobin Ebrahimi
            </h1>
          </BlurFade>
        </motion.div>

        {/* Cloud blob - covers logo and exits */}
        {showCloud && (
          <motion.div
            className="absolute inset-0 overflow-hidden z-20"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: luxuryEase, delay: 0.3 }}>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ y: "120%" }}
              animate={{ y: "-120%" }}
              transition={{
                duration: 1.5,
                ease: luxuryEase,
              }}>
              <svg
                viewBox="0 0 800 1200"
                className="w-full h-full fill-primary"
                preserveAspectRatio="xMidYMid slice"
                style={{
                  width: "100vw",
                  height: "200vh",
                  minHeight: "200vh",
                }}>
                {/* Organic blob shape with soft edges */}
                <motion.path
                  d="M 0 400 
                   C 100 380, 150 360, 250 370
                   C 350 380, 400 390, 500 370
                   C 600 350, 650 360, 750 370
                   C 800 375, 800 380, 800 400
                   L 800 800
                   C 750 810, 700 820, 600 810
                   C 500 800, 450 790, 350 800
                   C 250 810, 150 820, 50 810
                   C 0 808, 0 805, 0 800
                   Z"
                  initial={{
                    scale: 1.2,
                    y: 0,
                  }}
                  animate={{
                    scale: [1.2, 1.5, 1.3],
                    y: [0, -20, -100],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: luxuryEase,
                  }}
                  style={{ transformOrigin: "center" }}
                />

                {/* Secondary blob for more organic feel */}
                <motion.path
                  d="M 0 450
                   C 120 440, 180 430, 280 445
                   C 380 460, 420 450, 520 440
                   C 620 430, 680 445, 780 450
                   C 800 452, 800 455, 800 460
                   L 800 750
                   C 720 755, 640 765, 540 758
                   C 440 750, 380 745, 280 753
                   C 180 760, 100 768, 20 760
                   C 0 758, 0 755, 0 750
                   Z"
                  fill="#0a0a0a"
                  opacity={0.7}
                  initial={{
                    scale: 1.3,
                    y: 50,
                  }}
                  animate={{
                    scale: [1.3, 1.6, 1.4],
                    y: [50, -10, -80],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: luxuryEase,
                    delay: 0.05,
                  }}
                  style={{ transformOrigin: "center" }}
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
