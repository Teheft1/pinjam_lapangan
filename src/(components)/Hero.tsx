import {
  MainHero,
  Event,
  TotalUser,
  ListLapangan,
  PesanLapangan,
} from "~/(components)";

const Hero = () => {
  return (
    <div>
      <MainHero />
      <Event />
      <TotalUser />
      <ListLapangan />
      <PesanLapangan />
    </div>
  );
};

export default Hero;
