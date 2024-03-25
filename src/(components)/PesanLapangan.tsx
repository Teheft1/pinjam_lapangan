import Image from "next/image";
import { CustomButton, CustomDropdown } from "./CustomElements";
import { useEffect, useState } from "react";
import { CustomDatePicker } from "./CustomElements";

const PesanLapangan = () => {
  const [counterDropdown, setCounterDropdown] = useState(0);
  const [counterLap, setCounterLap] = useState(0);
  const [counterJam, setCounterJam] = useState(0);

  return (
    <div className="mt-[100vh]">
      {/* Container All */}
      <div className="absolute z-20 box-border w-full px-[15vw]">
        <div className=" z-10 flex justify-center">
          <h1 className="text-[76px] font-bold text-[#FE770B]">
            Pesan <span className="text-[#1F140D]">Lapangan</span>
          </h1>
        </div>
        {/* Div Flex */}
        <div className="absolute z-50 flex">
          {/* Div Isi Pesan */}
          <div>
            {/* Step 1 */}
            <div className="mt-[5vh] w-auto">
              <p className="text-[22px] font-normal text-[#FE770B]">step 1</p>
              <h1 className="text-[44px] font-semibold text-[#1F140D]">
                Pilih Lapangan
              </h1>
            </div>
            {/* 1.1 njir */}
            <div className="mt-[2.5vh] flex gap-7">
              <CustomDropdown
                type="dropdown"
                list={[
                  "Lapangan Badminton",
                  "Lapangan Futsal Sintetis",
                  "Lapangan Futsal Hardfloor",
                ]}
                containerStyle="bg-[#F6F5F3] w-[469px] h-[71px] text-[#BCB0A9] flex rounded-[8px] items-center justify-between px-[20px] mb-3"
                iconLink="/dropDown_1.svg"
                width={469}
                height={71}
              />
              <CustomDropdown
                type="counter"
                containerStyle="bg-[#F6F5F3] w-[182px] h-[71px] text-[#BCB0A9] flex rounded-[8px] items-center justify-between px-[20px] mb-3"
                iconElement={() => (
                  <div className="flex flex-col gap-4">
                    <img
                      src="/dropDown_2.svg"
                      alt=""
                      className="rotate-180 hover:scale-110"
                      onClick={() => {
                        setCounterLap(counterLap + 1);
                      }}
                    />
                    <img
                      src="/dropDown_2.svg"
                      alt=""
                      className="hover:scale-110"
                      onClick={() => {
                        setCounterLap(counterLap - 1);
                      }}
                    />
                  </div>
                )}
                placeholder={
                  counterLap ? counterLap.toString() + " Lap." : "Jumlah Lap."
                } // if counter is 0, show counter.toString() else show "Jumlah Lap."
                width={182}
                height={71}
              />
              <CustomDropdown
                type="counter"
                containerStyle="bg-[#F6F5F3] w-[182px] h-[71px] text-[#BCB0A9] flex rounded-[8px] items-center justify-between px-[20px] mb-3"
                iconElement={() => (
                  <div className="flex flex-col gap-4">
                    <img
                      src="/dropDown_2.svg"
                      alt=""
                      className="rotate-180 hover:scale-110"
                      onClick={() => {
                        setCounterJam(counterJam + 1);
                      }}
                    />
                    <img
                      src="/dropDown_2.svg"
                      alt=""
                      className="hover:scale-110"
                      onClick={() => {
                        setCounterJam(counterJam - 1);
                      }}
                    />
                  </div>
                )}
                placeholder={
                  counterJam ? counterJam.toString() + " Jam" : "Total Jam."
                } // if counter is 0, show counter.toString() else show "Jumlah Lap."
                width={182}
                height={71}
              />
            </div>
            {/* 1.2 njir */}
            <div className="mt-2 w-fit">
              <CustomDatePicker />
            </div>
            {/* Step 2 */}
            <div className="mt-[5vh] w-auto">
              <p className="text-[22px] font-normal text-[#FE770B]">step 2</p>
              <h1 className="text-[44px] font-semibold text-[#1F140D]">
                Isi Biodata Anda
              </h1>
            </div>
            {/* 2.1 njir */}
            <div className="mb-3 mt-[2.5vh] flex h-[71px] w-[886px] flex-col rounded-[8px] bg-[#F6F5F3] text-[20px] font-medium text-[#1F140D]">
              <p className="absolute mt-1 pl-5 text-[14px] font-medium text-[#BCB0A9]">
                Kimi no Namaewa!
              </p>
              <input
                type="text"
                placeholder="Nopal Jurusan Redshift"
                className="focus:border-teal  box-border h-[71px] w-[886px] rounded-[8px] bg-transparent pl-5 focus:border-[3px] focus:border-[#FE770B] focus:outline-none focus:ring-0"
              />
            </div>
            <div className="mt-4 flex gap-9">
              <div className="mb-3 flex h-[71px] w-[398px] flex-col rounded-[8px] bg-[#F6F5F3] text-[20px] font-medium text-[#1F140D] ">
                <p className="absolute mt-1 pl-5 text-[14px] font-medium text-[#BCB0A9]">
                  No HP
                </p>
                <input
                  type="text"
                  placeholder="08xxxxxxxxxx"
                  className="focus:border-teal  box-border h-[71px] w-[398px] rounded-[8px] bg-transparent pl-5 focus:border-[3px] focus:border-[#FE770B] focus:outline-none focus:ring-0"
                />
              </div>
              <div className="mb-3 flex h-[71px] w-[453px] flex-col rounded-[8px] bg-[#F6F5F3] text-[20px] font-medium text-[#1F140D] ">
                <p className="absolute mt-1 pl-5 text-[14px] font-medium text-[#BCB0A9]">
                  Asal Kota
                </p>
                <input
                  type="text"
                  placeholder="Surabaya"
                  className="focus:border-teal  box-border h-[71px] w-[453px] rounded-[8px] bg-transparent pl-5 focus:border-[3px] focus:border-[#FE770B] focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            {/* Step 3 */}
            <div className="mt-[5vh] w-auto">
              <p className="text-[22px] font-normal text-[#FE770B]">step 3</p>
              <h1 className="text-[44px] font-semibold text-[#1F140D]">
                Lanjutkan Pembayaran Anda
              </h1>
            </div>
          </div>
          {/* Div Pesanan */}
          <div className="ml-28 mt-[7.5vh] h-[556px] w-[432px] rounded-[25px] bg-[#FEFCFB] px-10 pt-7 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="">
              <h1 className="text-[36px] font-bold text-[#FE770B]  ">
                Ringkasan
              </h1>
              {/* <img src="" alt="EEROR" /> */}
              <h1 className="py-7 text-[24px] font-medium text-[#1F140D]">
                Lapangan Futsal Sintetis
              </h1>
              {/* Rincian Pembayaran */}
              <div className="mr-9 flex flex-row justify-between">
                <div className="text-[14.8px] font-normal text-[#1F140D]">
                  <p>Harga Dasar</p>
                  <p>Total Jam</p>
                  <p>Jumlah Lapangan</p>
                </div>
                <div className="text-[14.8px] font-medium text-[#1F140D]">
                  <p>Rp.70.000</p>
                  <p>3 Jam</p>
                  <p>1 Lapangan</p>
                </div>
              </div>
              {/* Total */}
              <div className="mr-9 mt-36 flex flex-row justify-between text-[20px] font-normal text-[#1F140D]">
                <h1>Total</h1>
                <p>Rp.210.000</p>
              </div>
            </div>
            {/* Bayar Sekarang */}
            <div className="mt-3 flex h-[44px] w-[316px] items-center justify-center rounded-[10px] bg-[#FE770B]">
              <h1 className="text-[20px] font-bold text-[#FFF7F2]">
                Bayar Sekarang
              </h1>
            </div>
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
      </div>
      {/* END OF BACKROUND IMAGE */}
    </div>
  );
};

export default PesanLapangan;
