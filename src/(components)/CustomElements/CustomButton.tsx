import Image from "next/image";
import { CustomButtonProps } from "types";
import { motion } from "framer-motion";

const CustomButton = ({
  title,
  containerStyle,
  placeholder,
  content,
}: CustomButtonProps) => {
  return (
    <motion.button
      disabled={false}
      type={"button"}
      className={containerStyle}
      onClick={() => {}}
    >
      <p>{title ?? placeholder}</p>
      {content && content()}
    </motion.button>
  );
};

export default CustomButton;
