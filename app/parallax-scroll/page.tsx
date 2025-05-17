"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";
import Lenis from "lenis";
import { MotionValue } from "framer-motion";

import Image from "next/image";
import styles from "../page.module.css";

const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "13.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
];

export default function Parallax() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.spacer}>
        Tutorial Link: https://www.youtube.com/watch?v=VhXemORYup8
      </div>
      <div
        ref={container}
        className={`${styles.gallery} flex items-center justify-center`}
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}

const Column = ({
  images,
  y = 0,
}: {
  images: string[];
  y: MotionValue<number> | number;
}) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {" "}
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={"/" + src} fill alt="image" />
          </div>
        );
      })}
    </motion.div>
  );
};
// to finish

// https://www.youtube.com/watch?v=VhXemORYup8
