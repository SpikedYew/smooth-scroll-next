"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  //   useMotionValueEvent,
} from "framer-motion";
import { FiMapPin } from "react-icons/fi";

import { useRef } from "react";

import { useDragControls } from "framer-motion";

//https://images.unsplash.com/photo-1742314591445-bfacc47276e3?q=80&w=3437&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

//Adding smooth scroll ( Lenis )
import ReactLenis from "lenis/react";

export default function ParallaxScrollMine() {
  const ref = useRef(null);
  //start end - is when we want it to log (track the scrollProgress, and end start is when it finishes (viewport))
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start end`, `end end`],
  });

  const y = useTransform(scrollYProgress, [0, 0.7], [-400, 200]);
  const x = useTransform(scrollYProgress, [0.8, 1], [-200, 200]);

  const opacity = useTransform(scrollYProgress, [0.65, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale}) translateX(${x}px)`;

  // controls.start(event, { snapToCursor: true });
  return (
    <>
      <ReactLenis root>
        {/* <motion.div
          drag
          dragListener={true}
          dragControls={controls}
          className=" top-0 w-20 h-20 bg-amber-50 absolute z-100"
        ></motion.div> */}
        <div
          ref={ref}
          className="h-[2000px] flex items-center justify-center overflow-hidden"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1742314591445-bfacc47276e3?q=80&w=3437&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[400px] sticky top-0"
            style={{
              opacity,
              transform,
            }}
          />
        </div>
      </ReactLenis>
    </>
  );
}
// import * as motion from "framer-motion";

// "use client";
// import { motion } from "framer-motion";
// import type { Variants } from "framer-motion";

// export default function ScrollTriggered() {
//   return (
//     <div style={container}>
//       {food.map(([emoji, hueA, hueB], i) => (
//         <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
//       ))}
//     </div>
//   );
// }

// interface CardProps {
//   emoji: string;
//   hueA: number;
//   hueB: number;
//   i: number;
// }

// function Card({ emoji, hueA, hueB, i }: CardProps) {
//   const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

//   return (
//     <motion.div
//       className={`card-container-${i}`}
//       style={cardContainer}
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{ amount: 0.8 }}
//     >
//       <div style={{ ...splash, background }} />
//       <motion.div style={card} variants={cardVariants} className="card">
//         {emoji}
//       </motion.div>
//     </motion.div>
//   );
// }

// const cardVariants: Variants = {
//   offscreen: {
//     y: 300,
//   },
//   onscreen: {
//     y: 50,
//     rotate: -10,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

// /**
//  * ==============   Styles   ================
//  */

// const container: React.CSSProperties = {
//   margin: "100px auto",
//   maxWidth: 500,
//   paddingBottom: 100,
//   width: "100%",
// };

// const cardContainer: React.CSSProperties = {
//   overflow: "hidden",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   position: "relative",
//   paddingTop: 20,
//   marginBottom: -120,
// };

// const splash: React.CSSProperties = {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
// };

// const card: React.CSSProperties = {
//   fontSize: 164,
//   width: 300,
//   height: 430,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   borderRadius: 20,
//   background: "#f5f5f5",
//   boxShadow:
//     "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
//   transformOrigin: "10% 60%",
// };

// /**
//  * ==============   Data   ================
//  */

// const food: [string, number, number][] = [
//   ["🍅", 340, 10],
//   ["🍊", 20, 40],
//   ["🍋", 60, 90],
//   ["🍐", 80, 120],
//   ["🍏", 100, 140],
//   ["🫐", 205, 245],
//   ["🍆", 260, 290],
//   ["🍇", 290, 320],
// ];
