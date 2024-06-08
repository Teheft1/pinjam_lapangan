import { motion, Variants } from "framer-motion";
import { AnimatedTextProps } from "types";

const AnimatedText = ({
  text,
  containerStyle,
  durationText,
  parentStyle,
  delay,
  ref,
  animationControl,
  hiddenValue,
  visibleValue,
}: AnimatedTextProps) => {
  const DefaultAnimation = {
    hidden: {
      ...hiddenValue,
    },
    visible: {
      ...visibleValue,
    },
  };

  return (
    <p className={parentStyle} ref={ref}>
      <motion.span
        transition={{ staggerChildren: durationText, delayChildren: delay }}
        initial="hidden"
        animate={animationControl ?? "visible"}
        className={containerStyle}
      >
        {text.split("").map((char) => (
          <motion.span key={char} variants={DefaultAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </p>
  );
};

export default AnimatedText;
