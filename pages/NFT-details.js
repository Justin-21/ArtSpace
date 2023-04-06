import React from "react";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";
import Style from '../styles/NFT=details.module.css'
const NFTDetails = () => {
  return (
    <div className={Style}>
      <NFTDetailsPage />
      <Category />
    </div>
  );
};

export default NFTDetails;
