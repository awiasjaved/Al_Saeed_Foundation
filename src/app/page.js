import Image from "next/image";
import FooterEnd from "./Footer/FooterEnd";
import VillasRoom from "./Villas/Page";
import BgVedio from "./Vedio/BgVedio";
import Flowers from "./ShopNow/Flowers";
import Circle from "./slider/page"
import Modal from "./Modal/Page";
import Subscribe from "./Subscribe/page"
export default function Home() {
  return (
    <>
    <BgVedio /> 
    <Circle/>
     <VillasRoom />
     <Modal/>
      <Flowers/>
       <Subscribe/>
      <FooterEnd />
 
     
    </>
  );
}
