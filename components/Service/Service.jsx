import React from 'react'
import { MdBrowseGallery } from 'react-icons/md'

//INTERNAL IMPORT
import Style from './Service.module.css'
const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Browse the marketplace</h3>
          <p>
            Explore and discover unique digital assets with our user-friendly
            interface.
          </p>
        </div>
        <div className={Style.service_box_item}>
          {/* <MdBrowseGallery /> */}
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Select your favorite NFT</h3>
          <p>View details and verify authenticity before making a purchase.</p>
        </div>
        <div className={Style.service_box_item}>
          {/* ;<MdBrowseGallery /> */}
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Make a purchase or bid</h3>
          <p>Buy with your cryptocurrency wallet or make a bid in an auction</p>
        </div>
        <div className={Style.service_box_item}>
          {/* ;<MdBrowseGallery /> */}
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Manage your NFTs</h3>
          <p>
            Securely store, resell, and monitor the value of your digital
            assets.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Service
