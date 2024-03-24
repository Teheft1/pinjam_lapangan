import Image from "next/image";
import { CustomCardLapanganProps } from "types";
import { delay, motion } from "framer-motion";

const CustomCardLapangan = ({
  namaLapangan,
  desc,
  linkImg,
  listHarga,
  hiddenValue,
  visibleValue,
  i,
  ref,
  animationControl,
  whileHoverStyle,
  slot,
}: CustomCardLapanganProps) => {
  const DefaultAnimation = {
    hidden: {
      ...hiddenValue,
    },
    visible: (index: number) => ({
      transition: {
        delay: index * 0.25,
      },
      ...visibleValue,
    }),
  };
  return (
    <div ref={ref}>
      <motion.div
        variants={DefaultAnimation}
        initial="hidden"
        whileInView="visible"
        whileHover={whileHoverStyle}
        viewport={{ once: true }}
        custom={i}
        className="mx-auto flex h-[55vh] w-[17.5vw] flex-col rounded-md bg-[#FCF8F5] pt-1 shadow-[4px_4px_4px] shadow-[rgba(224,123,41,0.2)] "
      >
        <div className="flex flex-col items-center">
          <h1 className="text-[32px] font-bold text-[#1F140D]">Lapangan</h1>
          <h1 className="-mt-3 text-[32px] font-bold text-[#FE770B]">
            {namaLapangan}
          </h1>
        </div>
        <div className="mx-auto mt-3 flex h-[30%] w-[100%] flex-col justify-center overflow-hidden">
          <div className=" w-[50rem]">
            <Image
              src={linkImg}
              width={500}
              height={500}
              alt="idkLOL :v"
              className="bg-cover"
            />
          </div>
        </div>
        <div className="px-[3.5%] pt-2">
          <div className="font-regular text-justify text-[12px] text-[#1F140D]">
            {desc()}
          </div>
          <h1 className="my-2 text-[24px] font-bold text-[#FE770B]">
            List harga :
          </h1>
          {listHarga()}
          <h1 className="font-regular my-1 text-[22px] text-[#1F140D]">
            Slot: <span className="font-bold text-[#FE770B]">{slot}</span>/6
          </h1>
        </div>
        <a
          href="#"
          className="flex justify-end py-5 underline decoration-[#FFBE0A] decoration-2"
        >
          <h1 className="mr-5 font-semibold text-[#FFBE0A]">Pesan Sekarang!</h1>
        </a>
      </motion.div>
    </div>
  );
};

export default CustomCardLapangan;
