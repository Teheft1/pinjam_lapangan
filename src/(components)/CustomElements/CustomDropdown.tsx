import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CustomDropdownProps } from "types";

const CustomDropdown = ({
  placeholder,
  containerStyle,
  list,
  iconLink,
  width,
  height,
  iconElement,
  type,
}: CustomDropdownProps) => {
  const [dropClick, setDropClick] = useState(false);
  const [counter, setCounter] = useState(0);
  const [itemSelected, setItemSelected] = useState(
    "Pilih lapangan yang diinginkan",
  );

  return (
    <div className="w-fit cursor-pointer">
      <motion.div
        className={containerStyle}
        onClick={() => setDropClick(!dropClick)}
      >
        {/* Check is Calendar or not? if Calendar, using div with "tanngal pemesanan" */}
        {type == "calendar" ? (
          <div className="flex h-full flex-col items-start pt-1">
            <h1 className="text-[14px] font-medium text-[#816F64]">
              Tanggal Pemesanan
            </h1>
            <p className="select-none text-[20px]">{placeholder}</p>
          </div>
        ) : (
          <p className="select-none text-[20px]">
            {type == "dropdown" ? itemSelected : placeholder}
          </p>
        )}

        {/* Check is using CustomIcon or not? (custom = two icon or more) */}
        {iconLink ? (
          <img src={iconLink} alt="Icon" className="select-none" />
        ) : (
          iconElement?.()
        )}
      </motion.div>
      {/* Dropdown List */}
      <div className="absolute z-20">
        {list?.map((item) => (
          <motion.div
            whileHover={{
              scale: 1.05,
              backgroundColor: "#FE770B",
              color: "#F6F5F3",
            }}
            onClick={() => {
              if (type == "dropdown") {
                setItemSelected(item);
                setDropClick(!dropClick);
              } else if (type == "counter") {
                console.log(counter);
                setCounter(counter + 1);
              } else {
                console.log("Type not found");
              }
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`h-[${height}px] w-[${width}px] mb-2 flex items-center justify-start rounded-[8px] bg-[#F6F5F3] pl-[20px] text-[17px] font-medium text-[#FE770B] ${dropClick ? "block" : "hidden"}`}
          >
            <div className="absolute z-10">
              <p className="select-none">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
