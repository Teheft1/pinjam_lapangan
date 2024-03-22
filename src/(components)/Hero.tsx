import Image from "next/image";
import { AdminLayout, Navbar, MainHero, Event } from "~/(components)";

const Hero = () => {
  return (
    <div>
      <MainHero />
      <Event />
    </div>
  );
};

export default Hero;
