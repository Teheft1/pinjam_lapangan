import {
  MainHero,
  Event,
  TotalUser,
  ListLapangan,
  PesanLapangan,
} from "~/(components)";
import { useState } from "react";

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

const Hero = () => {
  const [fieldData, setFieldData] = useState<FieldData[]>();
  const handleFieldData = (data: FieldData[]) => {
    setFieldData(data);
  };

  return (
    <div>
      <MainHero />
      <Event />
      <TotalUser />
      <ListLapangan onPesan={handleFieldData} />
      <PesanLapangan fieldData={fieldData} />
    </div>
  );
};

export default Hero;
