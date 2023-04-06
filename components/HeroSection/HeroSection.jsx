import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter()
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Where Art Meets🍀 Blockchain.</h1>
          <p >
            Discover a world of unique digital assets, from art to collectibles, all verified on the blockchain for authenticity. Join us in the exciting world of NFTs!
          </p>
          <Button handleClick={()=> router.push('/searchPage')} btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
