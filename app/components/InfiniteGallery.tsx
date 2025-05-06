"use client";
import { motion } from "framer-motion";
import ReactLenis from "lenis/react";

export default function InfiniteGallery() {
  return (
    <>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "easeInOut" }}
        className="w-screen h-screen flex items-center justify-center fixed text-9xl font-bold z-2 tracking-tighter"
      >
        INFINITE SCROLL
      </motion.div>
      <ReactLenis root options={{ infinite: true, lerp: 0.01 }}>
        <div className="max-w-screen h-[300vh]  grid grid-cols-3 gap-3 px-0 py-12 overflow-hidden">
          {[...Array(21)].map((_, i) => (
            <motion.img
              key={i}
              src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Orbiting satellite"
              className="w-full rounded-xl object-cover"
              loading="lazy"
              style={
                {
                  // transform: `translateX(${(i % 5) * 100}px)`, // offset every image a bit more
                }
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      </ReactLenis>
    </>
  );
}
