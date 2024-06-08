import { Variant, VariantLabels, Variants } from "framer-motion";
import { da } from "date-fns/locale";

export interface CustomButtonProps {
  title?: string;
  containerStyle?: string;
  placeholder?: string;
  content?: () => JSX.Element;
}

export interface CustomDropdownProps {
  placeholder?: string;
  containerStyle?: string;
  list?: Array<string>;
  iconLink?: string;
  iconElement?: () => JSX.Element;
  width?: number;
  height?: number;
  type: string; // dropdown | counter | date
  onItemSelected?: (item: string) => void;
}

export interface AnimatedTextProps {
  text: string;
  containerStyle?: string;
  durationText: number;
  parentStyle?: string;
  delay?: number;
  ref?: React.RefObject<HTMLParagraphElement>;
  animationControl?: object;
  hiddenValue: object;
  visibleValue: object;
}

export interface CustomCardProps {
  title: string;
  date: string;
  organizer: string;
  desc: string;
  linkImg: string;
  i: number;
  hiddenValue: object;
  visibleValue: object;
  ref: React.RefObject<HTMLParagraphElement>;
  animationControl: any;
  whileHoverStyle?: object;
}
interface FieldData {
  id_lapangan: number;
  nama_lapangan: string;
  jenis_lapangan: string | null;
  status_lapangan: number | null;
  harga: number;
  foto: string;
  created_by: string;
  created_at: Date;
  modified_by: string;
  modified_at: Date | null;
}

interface PesanLapanganProps {
  fieldData: FieldData[] | undefined;
}

export interface CustomCardLapanganProps {
  namaLapangan: string;
  desc: () => JSX.Element;
  linkImg: string;
  listHarga: () => JSX.Element;
  slot: number | undefined;
  linkHref: string;
  i?: number;
  hiddenValue?: object;
  visibleValue?: object;
  ref: React.RefObject<HTMLParagraphElement>;
  animationControl?: any;
  whileHoverStyle?: object;
  onPesan?: (data: FieldData[]) => void;
}
