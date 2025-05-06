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

//Adding smooth scroll ( Lenis )
import ReactLenis from "lenis/react";

export const SmoothScrollLenis = () => {
  return (
    <div className="bg-zinc-950>">
      {/*Lerp gives you how lenis is smooth */}
      <ReactLenis root options={{ lerp: 0.05, infinite: false }}>
        <Hero />
        <Schedule />
        {/* <BackgroundSwitch /> */}
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      className="relative w-full "
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      {/* When it is in relative it will only go down as long as it hits something else, thats crazy */}
      {/* <div className="h-[50vh] bg-gray-50 sticky top-0"></div> */}
      <CenterImage />
      <ParallaxImage />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-50/0 to-zinc-950"></div>
    </div>
  );
};

const CenterImage = () => {
  //ScrollY - absolute value in number 1500 pixels down the screen
  //scrollYprogess is from 0-1 hey you are 70% down the screen :D
  // const {scrollY, scrollYProgess} = useScroll();

  // We also need one more hook that is useTransform so it deosn't cause react to re-render

  const { scrollY } = useScroll();

  //1. from what we want to start
  //2. [ array from 0 to when? pixel vise]
  //3. what effect will happen, will it be opacity, or translateX or Y idk whatever you want :D
  const opacity = useTransform(scrollY, [0, SECTION_HEIGHT + 500], [1, 0]);
  //   const scale = useTransform(scrollY, [200, SECTION_HEIGHT], [1, 0.1]);
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "80%"]
  );

  // Tthis values ain't numbers, we need to add another thing for it to be a number if we want to use it as a number. It is useMotionTemplate

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [0, 25]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [100, 75]);

  //It gives us a template string where we can drop this motion values, and we can then drop it into clipPath
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        opacity,
        // scale: scale,
        clipPath,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize,
      }}
    />
  );
};

const ParallaxImage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  //scrollYprogress percentage from 0-1
  //scrollY out value for eg 0-1500px

  //we need to use reactRef
  const ref = useRef(null);
  //start end - is when we want it to log (track the scrollProgress, and end start is when it finishes (viewport))
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.65, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  //this hook is to listen to changes in MotionValue in real time without useEffect

  //this was only to listen and test
  //   useMotionValueEvent(scrollYProgress, "change", (latest) =>
  //     console.log(latest)
  //   );

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      style={{ opacity, transform }}
      className={className}
    />
  );
};

// Copied

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>
      <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
      <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
      <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
      <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
      <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
      <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
      <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
    </section>
  );
};

const ScheduleItem = ({
  title,
  date,
  location,
}: {
  title: string;
  date: string;
  location: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
