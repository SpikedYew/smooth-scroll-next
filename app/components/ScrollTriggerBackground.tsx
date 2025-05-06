"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ReactLenis from "lenis/react";

//Scroll Trigger Background Switch
export const BackgroundSwitch = () => {
  const [image, setImage] = useState(2);
  return (
    <ReactLenis root>
      <div className="relative h-[800vh]">
        {/* Sticky wrapper */}
        <div className="sticky top-0 h-screen w-full overflow-hidden ">
          <div
            className={`w-[80vw] h-[80vh] mx-auto my-auto img1 ${
              image === 1 ? "img1-active" : ""
            }`}
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          >
            <p className="absolute z-2  flex items-center justify-center h-full w-full text-9xl font-bold tracking-tighter uppercase opacity-70">
              EVEN
            </p>
          </div>
          <div
            className={`w-[80vw] h-[80vh] mx-auto my-auto img2 ${
              image === 2 ? "img2-active" : ""
            }`}
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          >
            <p className="absolute z-2  flex items-center justify-center h-full w-full text-9xl font-bold tracking-tighter uppercase opacity-70">
              SEE
            </p>
          </div>
          <div
            className={` w-[80vw] h-[80vh] mx-auto my-auto img3 ${
              image === 3 ? "img3-active" : ""
            }`}
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          >
            <p className="absolute z-2  flex items-center justify-center h-full w-full text-9xl font-bold tracking-tighter uppercase opacity-70">
              MORE
            </p>
          </div>
        </div>

        {/* Scroll trigger sections */}
        <motion.div
          // viewport={{ once: false, amount: 0.6 }}
          onViewportEnter={() => setImage(2)}
          className="h-[200vh] flex items-center text-2xl ml-24 z-10 relative mr-24"
        >
          <motion.p
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, type: "easeInOut" }}
          >
            Aliquam egestas lacinia arcu. Etiam ornare sit amet libero in
            tempus. Cras consequat molestie facilisis. Curabitur dictum
            vulputate dolor efficitur aliquam. Duis vel eros purus. Duis
            dignissim lacinia ex et dictum. Ut in nunc feugiat velit finibus
            egestas.
          </motion.p>
        </motion.div>
        <motion.div
          // viewport={{ once: false, amount: 0.6 }}
          onViewportEnter={() => setImage(1)}
          className="h-[200vh] flex items-center text-2xl ml-24 z-10 relative mr-24"
        >
          <motion.p
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, type: "easeInOut" }}
          >
            In eleifend aliquet nisl, in vestibulum enim congue ultricies.
            Suspendisse tempor orci ut massa sollicitudin fermentum. Cras sapien
            eros, lobortis sed leo ut, dapibus facilisis massa. Sed a turpis ut
            dolor iaculis dictum. Aenean porta nunc ut mi facilisis auctor.
            Praesent non erat ut lectus venenatis rutrum. Mauris tempor eros
            eget velit posuere, commodo sodales quam finibus. Donec nec ex a
            diam mattis congue. Suspendisse luctus luctus lacinia. Aliquam vitae
            pellentesque justo. Praesent sit amet mauris risus. Vivamus lacinia
            dui a justo convallis, sed tincidunt enim posuere. Nulla lorem
            ligula, lobortis et magna quis, eleifend tincidunt dolor. Vestibulum
            aliquet faucibus nibh, vel suscipit lorem tincidunt et. Sed tempus
            lectus porta, scelerisque lectus id, auctor dui.
          </motion.p>
        </motion.div>
        <motion.div
          // viewport={{ once: false, amount: 0.6 }}
          onViewportEnter={() => setImage(3)}
          className="h-[200vh] flex items-center text-2xl ml-24 z-10 relative mr-24"
        >
          <motion.p
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, type: "easeInOut" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            nibh augue. Proin leo justo, feugiat nec dui ut, euismod faucibus
            ligula. Sed bibendum tellus ante, id mattis lorem sagittis eu. Fusce
            dolor orci, volutpat sit amet justo quis, venenatis vehicula metus.
            Curabitur eleifend diam vel arcu scelerisque, vitae auctor erat
            mollis. Nam convallis eu nibh sed volutpat. Duis ullamcorper sem
            eget nunc lobortis faucibus. Fusce eget pulvinar massa, et vulputate
            libero.
          </motion.p>
        </motion.div>
      </div>
    </ReactLenis>
  );
};
