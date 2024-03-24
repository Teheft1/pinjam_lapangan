import { useEffect, useRef } from "react";
import { AnimatedText, CustomButton } from "./CustomElements";
import { useAnimation, useInView } from "framer-motion";

import Image from "next/image";

const MainHero = () => {
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
    transition: { duration: 1, ease: "easeInOut" },
  };

  const visibleVariant = {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  };

  return (
    <div className="">
      <div className="absolute z-50 mx-[12vw] h-screen pt-[7.5%]">
        <h1 className="text-[82px] font-semibold text-[#FFBE0A]">
          Kebraon Sprot
        </h1>
        <h1 className="-mt-7  text-[82px] font-semibold text-[#FFF7F2]">
          Centre (KSC)
        </h1>

        <span className="mt-6 text-[25px] font-extralight text-[#FFF7F2]">
          <AnimatedText
            text="Ciptakan latihan anda lebih berkesan dan bermakna bersama"
            durationText={0.015}
            parentStyle="w-[60%]"
            hiddenValue={hiddenVariant}
            visibleValue={visibleVariant}
          />
          <AnimatedText
            text="KEBRAON SPROT CENTRE."
            containerStyle="font-semibold text-[#FFBE0A]"
            durationText={0.05}
            hiddenValue={{ ...hiddenVariant }}
            visibleValue={{ ...visibleVariant }}
          />
          <AnimatedText
            text="Segera pesan dengan promo yang ada."
            durationText={0.015}
            hiddenValue={{ ...hiddenVariant }}
            visibleValue={{ ...visibleVariant }}
          />
        </span>

        <CustomButton
          title="Pesan Sekarang"
          containerStyle="bg-[#FE770B] text-[#FFF7F2] rounded-full mt-12 text-[15px] w-[175px] h-[40px] font-normal hover:scale-110 hover:text-[#FFF7F2] hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-transparent hover:border-2 hover:border-[#FFF7F2] box-border"
        />

        <AnimatedText
          text={`Jl. Kebraon II / 31 Surabaya.${" "}Telp. 031-766 0543`}
          containerStyle="text-[15px] font-light text-[#FFF7F2]"
          durationText={0.035}
          parentStyle="mt-52 "
          hiddenValue={{ ...hiddenVariant }}
          visibleValue={{ ...visibleVariant }}
        />
      </div>

      {/* BACKROUND IMAGE */}
      <div className="absolute z-[11] h-screen w-screen bg-gradient-to-r from-[#AFAFAF] to-[#FFFFFF] opacity-80 mix-blend-multiply"></div>
      <div className="absolute z-10 h-screen w-screen bg-gradient-to-r from-[#DC8F51] to-[#FFB87E] opacity-70"></div>
      <div className="absolute z-0">
        <Image
          src={"/bgHero.jpg"}
          width={1000}
          height={1000}
          alt="bgHero"
          className="h-screen w-screen blur-[3.5px]"
        />
      </div>
      {/* END OF BACKROUND IMAGE */}
    </div>
  );
};

export default MainHero;
