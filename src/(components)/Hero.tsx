import {
  MainHero,
  Event,
  TotalUser,
  ListLapangan,
  PesanLapangan,
} from "~/(components)";
import { useState } from "react";

const Hero = () => {
  const [fieldData, setFieldData] = useState<object | null>(null);
  const handleFieldData = (data: object) => {
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
