import Image from "next/image";
import { AnimatedText } from "./CustomElements";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";

const TotalUser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView]);

  const hiddenVariant = {
    opacity: 0,
    y: -25,
  };

  const visibleVariant = {
    opacity: 1,
    y: 0,
  };
  return (
    <div className="flex items-center justify-center overflow-hidden pt-[100vh]">
      <div className="absolute z-20 w-screen">
        {/* Container Hero */}
        <div className="flex items-center justify-center gap-36 ">
          {/* LOLLLL */}
          <div className="flex flex-row items-center justify-center gap-5">
            <motion.img
              src={"Logo_TUMemesan.svg"}
              alt="Logo_TUMemesan.svg"
              width={85}
              height={85}
              className="fill-amber-400"
              whileInView={{ scale: 1.1 }}
            />
            <div className="flex flex-col" ref={ref}>
              <span className="relative">
                <AnimatedText
                  text="500+ Orang"
                  durationText={0.025}
                  delay={0}
                  containerStyle="text-[#FFF7F2] font-semibold text-[27.5px]"
                  animationControl={animationControls}
                  hiddenValue={{ ...hiddenVariant }}
                  visibleValue={{ ...visibleVariant }}
                />
              </span>
              <span className="relative">
                <AnimatedText
                  text="pernah memesan"
                  durationText={0.025}
                  delay={0.25}
                  containerStyle="text-[#FFF7F2] font-extralight text-[17.5px]"
                  animationControl={animationControls}
                  hiddenValue={{ ...hiddenVariant }}
                  visibleValue={{ ...visibleVariant }}
                />
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-5">
            <motion.img
              src={"Logo_TUPuas.svg"}
              alt="Logo_TUPuas.svg"
              width={85}
              height={85}
              whileInView={{ scale: 1.1 }}
            />
            <div className="flex flex-col" ref={ref}>
              <span className="relative">
                <AnimatedText
                  text="500+ Orang"
                  durationText={0.025}
                  delay={0}
                  containerStyle="text-[#FFF7F2] font-semibold text-[27.5px]"
                  animationControl={animationControls}
                  hiddenValue={{ ...hiddenVariant }}
                  visibleValue={{ ...visibleVariant }}
                />
              </span>
              <span className="relative">
                <AnimatedText
                  text="puas dengan KSC"
                  durationText={0.025}
                  delay={0.25}
                  containerStyle="text-[#FFF7F2] font-extralight text-[17.5px]"
                  animationControl={animationControls}
                  hiddenValue={{ ...hiddenVariant }}
                  visibleValue={{ ...visibleVariant }}
                />
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            <motion.img
              src={"Logo_TULapangan.svg"}
              alt="Logo_TULapangan.svg"
              width={85}
              height={85}
              whileInView={{ scale: 1.1 }}
            />
            <div className="flex flex-col" ref={ref}>
              <span className="relative">
                <AnimatedText
                  text="3 Lapangan"
                  durationText={0.025}
                  delay={0}
                  containerStyle="text-[#FFF7F2] font-semibold text-[27.5px]"
                  animationControl={animationControls}
                  hiddenValue={{ ...hiddenVariant }}
                  visibleValue={{ ...visibleVariant }}
                />
              </span>
              <span className="relative">
                <AnimatedText
                  text="yang tersedia"
                  durationText={0.025}
                  delay={0.25}
                  containerStyle="text-[#FFF7F2] font-extralight text-[17.5px]"
                  animationControl={animationControls}
                  hiddenValue={{ ...hiddenVariant }}
                  visibleValue={{ ...visibleVariant }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* BACKROUND IMAGE */}
      <div className="h-[30vh] w-full overflow-hidden bg-red-600">
        <div className="absolute z-10 h-[30vh] w-screen overflow-hidden bg-[#E9883A] opacity-75"></div>
        <Image
          src={"/bgTotalPengguna.jpg"}
          width={1000}
          height={1000}
          alt="bgTotalPengguna"
          className="h-screen w-screen blur-[5px]"
        />
      </div>
      {/* END OF BACKROUND IMAGE */}
    </div>
  );
};

export default TotalUser;
