import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimatedText, CustomCardLapangan } from "./CustomElements";
import { api } from "~/utils/api";
import { on } from "events";

const ListLapangan = ({ onPesan }: { onPesan: (data: object) => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationControls = useAnimation();
  const { data: sintetis } = api.data.getlapbysintetis.useQuery();
  const { data: hardfloor } = api.data.getlapbyHardfloor.useQuery();
  const { data: badminton } = api.data.getlapbybadminton.useQuery();

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
    scale: 1.05,
    rotate: "1deg",
    color: "#FE770B",
  };

  return (
    <div ref={ref} className="">
      <div className="absolute z-20 mt-[5%] flex h-screen w-screen flex-col items-center">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 45 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animationControls}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center text-[64px] font-bold text-[#1F140D]"
        >
          <span className="text-[#FE770B]">List</span> Lapangan
        </motion.h1>
        <AnimatedText
          text="Kebraon memiliki 3 jenis lapangan yang berbeda!"
          durationText={0.015}
          containerStyle="text-[#1F140D] font-light text-[25px]"
          ref={ref}
          animationControl={animationControls}
          hiddenValue={hiddenVariant}
          visibleValue={{ opacity: 1, y: 0 }}
        />
        {/* List Card */}
        <div className="mt-20 flex flex-row gap-32">
          <CustomCardLapangan
            namaLapangan="Badminton"
            slot={badminton?.length}
            i={0}
            linkHref="#"
            onPesan={onPesan}
            desc={() => (
              <p className="text-[12px]">
                Terdapat{" "}
                <span className="text-[#FE770B]">lapangan badminton</span> yang
                nyaman dengan{" "}
                <span className="text-[#FE770B]">skor counter </span>
                di samping lapangan untuk{" "}
                <span className="text-[#FE770B]">
                  mempermudah pengguna dalam menghitung skor.
                </span>
              </p>
            )}
            linkImg="/lapBadminton.jpg"
            listHarga={() => (
              <ul className="text-[14px] font-light text-[#1F140D]">
                <li>Member 06:00 - 24:00 Rp. 130.000 / Bulan</li>
                <li>Visitor 06:00 - 24:00 Rp. 12.500 / Jam</li>
                <li>Jam 06:00 - 16:00 Rp. 10.000 / Jam</li>
              </ul>
            )}
            hiddenValue={{ ...hiddenVariant }}
            visibleValue={{ ...visibleVariant }}
            animationControl={animationControls}
            ref={ref}
            whileHoverStyle={whileHoverCard}
          />
          <CustomCardLapangan
            namaLapangan="Futsal Sintetis"
            slot={sintetis?.length}
            i={1}
            linkHref="#"
            ref={ref}
            onPesan={onPesan}
            desc={() => (
              <p className="text-[12px]">
                Terdapat <span className="text-[#FE770B]">lapangan futsal</span>{" "}
                yang nyaman dengan lantai yang berlapis{" "}
                <span className="text-[#FE770B]">rumput sintetis </span>
                yang membuat permainan{" "}
                <span className="text-[#FE770B]">lebih asik.</span>
              </p>
            )}
            linkImg="/lapFSintetis.jpg"
            listHarga={() => (
              <ul className="text-[14px] font-light text-[#1F140D]">
                <li>Jam 06:00 - 16:00 Rp. 60.000 / Jam (PROMO)</li>
                <li>Jam 16:00 - 24:00 Rp. 105.000 / Jam</li>
              </ul>
            )}
            hiddenValue={{ ...hiddenVariant }}
            visibleValue={{ ...visibleVariant }}
            animationControl={animationControls}
            whileHoverStyle={whileHoverCard}
          />
          <CustomCardLapangan
            namaLapangan="Futsal Hardfloor"
            slot={hardfloor?.length}
            i={2}
            linkHref="#"
            ref={ref}
            onPesan={onPesan}
            desc={() => (
              <p className="text-[12px]">
                Terdapat <span className="text-[#FE770B]">lapangan futsal</span>{" "}
                yang nyaman dengan{" "}
                <span className="text-[#FE770B]">lantai yang nyaman </span>
                digunakan untuk bermain futsal dan sepak bola.{" "}
              </p>
            )}
            linkImg="/lapFHardfloor.jpg"
            listHarga={() => (
              <ul className="text-[14px] font-light text-[#1F140D]">
                <li>Jam 06:00 - 16:00 Rp. 35.000 / Jam (PROMO)</li>
                <li>Jam 16:00 - 24:00 Rp. 70.000 / Jam</li>
              </ul>
            )}
            hiddenValue={{ ...hiddenVariant }}
            visibleValue={{ ...visibleVariant }}
            animationControl={animationControls}
            whileHoverStyle={whileHoverCard}
          />
        </div>
      </div>
      {/* BACKROUND IMAGE */}
      <div className="absolute z-0">
        <Image
          src={"/bgPattern_1.png"}
          width={2000}
          height={2000}
          alt="bgPattern_1"
          className="h-screen w-screen opacity-[.07] blur-[4px]"
        />
      </div>
      {/* END OF BACKROUND IMAGE */}
    </div>
  );
};

export default ListLapangan;
