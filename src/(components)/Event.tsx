import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { AnimatedText } from "./CustomElements";
import { CustomCard } from "./CustomElements";
import Image from "next/image";

const Event = () => {
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

  const whileHoverCard = {
    scale: 1.125,
    rotate: "1deg",
    color: "#FE770B",
    textDecoration: "underline",
    // transition: { duration: 0.25 },
  };

  const listCard = [
    {
      id: 1,
      title: "Bagi bagi takjil",
      desc: "Kebraon Sprot Centre mengadakan bagi bagi takjil selama di bulan suci Romadhon. acara tersebut dilaksanakan didepan KSC tersebut. ",
      date: "10 Maret 2024",
      organizer: "Anggota KSC",
      linkImg: "/bagiTakjil.jpg",
    },
    {
      id: 2,
      title: "Bagi bagi takjil",
      desc: "Kebraon Sprot Centre mengadakan bagi bagi takjil selama di bulan suci Romadhon. acara tersebut dilaksanakan didepan KSC tersebut. ",
      date: "10 Maret 2024",
      organizer: "Anggota KSC",
      linkImg: "/bagiTakjil.jpg",
    },
    {
      id: 3,
      title: "Bagi bagi takjil",
      desc: "Kebraon Sprot Centre mengadakan bagi bagi takjil selama di bulan suci Romadhon. acara tersebut dilaksanakan didepan KSC tersebut. ",
      date: "10 Maret 2024",
      organizer: "Anggota KSC",
      linkImg: "/bagiTakjil.jpg",
    },
  ];

  return (
    <div>
      <div className="absolute z-20 mt-[100vh] h-screen">
        <div className="flex w-screen flex-col items-center justify-center pt-[7.5%]">
          <motion.h1
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animationControls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center text-[64px] font-bold text-[#1F140D]"
          >
            <span className="text-[#FE770B]">EVENT</span> KEBRAON SPROT CENTRE
          </motion.h1>

          <AnimatedText
            text="ini adalah serangkaian acara yang sudah dan akan dilakukan oleh pihak"
            durationText={0.015}
            containerStyle="text-[#1F140D] font-light text-[25px]"
            ref={ref}
            animationControl={animationControls}
            hiddenValue={hiddenVariant}
            visibleValue={{ opacity: 1, y: 0 }}
          />
          <AnimatedText
            text="KEBRAON SPROT CENTRE."
            durationText={0.025}
            delay={1}
            containerStyle="text-[#FE770B] font-semibold text-[25px]"
            ref={ref}
            animationControl={animationControls}
            hiddenValue={{ ...hiddenVariant }}
            visibleValue={{ ...visibleVariant }}
          />

          <div className="flex flex-row items-center justify-between gap-20">
            <Image
              src={"/btnNextPage.svg"}
              width={50}
              height={50}
              alt="Next Page Button"
              className="transition-all duration-200 ease-in-out hover:rotate-45 hover:scale-125"
            />
            <motion.div
              transition={{ staggerChildren: 1 }}
              className="mt-[5vh] flex gap-11"
            >
              {listCard.map((card, index) => (
                <CustomCard
                  key={card.id}
                  whileHoverStyle={{ ...whileHoverCard }}
                  i={index}
                  hiddenValue={{ ...hiddenVariant }}
                  visibleValue={{ ...visibleVariant }}
                  animationControl={animationControls}
                  title={card.title}
                  desc={card.desc}
                  date={card.date}
                  organizer={card.organizer}
                  linkImg={card.linkImg}
                  ref={ref}
                />
              ))}
            </motion.div>
            <Image
              src={"/btnNextPage.svg"}
              width={50}
              height={50}
              alt="Next Page Button"
              className="rotate-180 transition-all duration-200 ease-in-out hover:rotate-[225deg] hover:scale-125"
            />
          </div>
          {/* Container Card */}
        </div>
      </div>
      {/* BACKROUND IMAGE */}
      <div className="pt-[100vh]">
        <div className="absolute z-0">
          <Image
            src={"/bgPattern_1.png"}
            width={2000}
            height={2000}
            alt="bgPattern_1"
            className="h-screen w-screen opacity-[.07] blur-[4px]"
          />
        </div>
      </div>
      {/* END OF BACKROUND IMAGE */}
    </div>
  );
};

export default Event;
