"use client";
import  { useState } from "react";
import AboutMe from "@/components/section/AboutMe";
import Contact from "@/components/section/contactme";
import Footer from "@/components/section/Footer";
import HomeHero from "@/components/section/heroSection";
import { Loader } from "@/components/section/loader";
import { PortfolioSection } from "@/components/section/MyPortofilo";

import { NavBar } from "@/components/section/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { MySkill } from "@/components/section/MySkill";


function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className=" overflow-hidden rounded-3xl  w-[98%]  mx-auto  mt-2 -4 bg-black">
      <div className="  ">
        <div
          id="page-scroll-container"
          className="max-h-[97dvh]   overflow-y-scroll overflow-x-hidden  scrollbar-hide bg-card!">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 1 }}
                exit={{ opacity: 1}}
                transition={{ duration: 0, ease: "easeOut" }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black max-h-[97dvh]">
                <Loader onComplete={() => setLoading(false)} />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.1, 1, 0.36, 1], // smooth ease-out
                }}
                className="w-full">
                <HomeHero />
                <AboutMe />
                <MySkill />
                <PortfolioSection />
                <Contact />
                <Footer />
                <motion.div>
                  <NavBar />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Home;
