import { Variant, VariantLabels, Variants } from "framer-motion";

export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
}

export interface AnimatedTextProps {
  text: string;
  containerStyle?: string;
  durationText: number;
  parentStyle?: string;
  delay?: number;
  ref?: any;
  animationControl?: any;
  hiddenValue: any;
  visibleValue: any;
}

export interface CustomCardProps {
  title: string;
  date: string;
  organizer: string;
  desc: string;
  linkImg: string;
  i: number;
  hiddenValue: any;
  visibleValue: any;
  ref?: any;
  animationControl?: any;
  whileHoverStyle?: any;
}
