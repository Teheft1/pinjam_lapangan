import Image from "next/image";
import { CustomCardProps } from "types";
import { motion } from "framer-motion";

const CustomCard = ({
  title,
  date,
  desc,
  organizer,
  linkImg,
  hiddenValue,
  visibleValue,
  i,
  ref,
  animationControl,
  whileHoverStyle,
}: CustomCardProps) => {
  const DefaultAnimation = {
    hidden: {
      ...hiddenValue,
    },
    visible: {
      ...visibleValue,
    },
  };
  return (
    <div ref={ref}>
      <motion.div
        // whileHover={whileHoverStyle & {transition: { duration: 0.25 }}
        initial={DefaultAnimation.hidden}
        animate={animationControl || "visible"}
        transition={{ duration: 0.25, delay: 0.25 * i }}
        ref={ref}
        variants={DefaultAnimation}
        className="mx-auto flex h-[40vh] w-[17.5vw] flex-col rounded-md bg-[#FCF8F5] pt-1 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.15)]"
      >
        <div className="mx-auto mt-3 flex h-[60%] w-[95%] flex-col justify-center overflow-hidden rounded-xl bg-red-500">
          <div className=" w-[50rem] bg-green-400">
            <Image
              src={linkImg}
              width={500}
              height={500}
              alt="bagi Takjil"
              className="rounded-xl bg-cover"
            />
          </div>
        </div>
        <div className="px-[3.5%] pt-2">
          <div className="flex flex-row justify-between text-xs font-medium text-[#FFBE0A]">
            <p>{date}</p>
            <p>{organizer}</p>
          </div>
          <div className="text-justify text-[26px] font-bold text-[#FE770B]">
            <h1>{title}</h1>
          </div>
          <div className="text-justify text-[12px] font-extralight text-[#1F140D]">
            <p>{desc} </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomCard;
