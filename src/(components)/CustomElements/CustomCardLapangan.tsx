import Image from "next/image";
import { CustomCardLapanganProps } from "types";
import { delay, motion } from "framer-motion";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { on } from "events";
import { da } from "date-fns/locale";
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
  onPesan,
}: CustomCardLapanganProps) => {
  const router = useRouter();
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
  const { data: sintetis } = api.data.getlapbysintetis.useQuery();
  const { data: hardfloor } = api.data.getlapbyHardfloor.useQuery();
  const { data: badminton } = api.data.getlapbybadminton.useQuery();
  const handlePesan = () => {
    let data;
    // Here you can access the data of the specific card
    if (namaLapangan === "Badminton") {
      // console.log(badminton);
      data = badminton;
      // onPesan(badminton);
    }
    if (namaLapangan === "Futsal Sintetis") {
      // console.log(sintetis);
      data = sintetis;
      // onPesan(sintetis);
    }
    if (namaLapangan === "Futsal Hardfloor") {
      // console.log(hardfloor);
      data = hardfloor;
      // onPesan(hardfloor);
    }
    if (onPesan && data) {
      onPesan(data);
    }

    // console.log(namaLapangan);
    // console.log(desc());
    // console.log(listHarga());
    // console.log(slot);
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
          href="#pesanLapangan"
          className="flex justify-end py-5 underline decoration-[#FFBE0A] decoration-2"
        >
          <button
            className="mr-5 font-semibold text-[#FFBE0A]"
            onClick={handlePesan}
          >
            Pesan Sekarang!
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default CustomCardLapangan;
