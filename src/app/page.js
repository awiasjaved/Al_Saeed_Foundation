import Image from "next/image";
import FooterEnd from "./Footer/FooterEnd";
import VillasRoom from "./Villas/Page";
import BgVedio from "./Vedio/BgVedio";
import Flowers from "./ShopNow/Flowers";
import Circle from "./slider/page"
import Model from "./models/Page";
export default function Home() {
  return (
    <>
    <BgVedio /> 
    <Circle/>
     <VillasRoom />
     <Model/>
      <Flowers/>
      <FooterEnd />
 
     
    </>
  );
}
