import Image from "next/image";
import { CustomButtonProps } from "types";
import { motion } from "framer-motion";

const CustomButton = ({ title, containerStyle }: CustomButtonProps) => {
  return (
    <motion.button
      disabled={false}
      type={"button"}
      className={`${containerStyle}`}
      onClick={() => {}}
    >
      <span>{title}</span>
    </motion.button>
  );
};

export default CustomButton;
