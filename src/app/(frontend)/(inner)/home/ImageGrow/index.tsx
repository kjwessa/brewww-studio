"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const ImageGrow: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] w-full overflow-hidden rounded-md bg-brand-dark-bg px-2 py-2 text-white"
    >
      <div
        className="h-full w-full overflow-hidden rounded-xl bg-brand-dark-bg"
      >
        <motion.div 
          className="h-full w-full overflow-hidden"
          style={{ scale }}
        >
          <motion.div
            style={{
              position: 'relative',
              height: '100%',
              width: '100%',
              scale: imageScale
            }}
          >
            <Image
              src="/5f109d8acc3b4cf5ce8f9ebe_DSC04349-Edit.1920.jpg"
              alt="Background"
              fill
              className="object-cover"
              style={{
                objectPosition: "50% 30%",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGrow;
