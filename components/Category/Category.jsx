import React from 'react'
import Image from 'next/image'
import {AiFillAlipayCircle} from 'react-icons/ai'
//INTERNAL IMPORT
import Style from './Category.module.css'
import images from '../../img'

const Category = () => {
  const CategoryArray = [
    {
      title: 'Art',
      image: images.nft_image_2,
      capacity:7232
    },
    {
      title: 'Sports',
      image: images.sport,
      capacity:3473,
    },
    {
      title: 'Gaming',
      image: images.gaming,
      capacity:1922
    },
    {
      title: 'Music',
      image: images.music,
      capacity:2022
    },
    {
      title: 'Video',
      image: images.videoNFt,
      capacity:8823
    },
    {
      title: 'Real States',
      image: images.realEstate,
      capacity:3838
    },
  ]
  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={1 + 1}>
            <Image
              src={el.image}
              className={Style.category_box_img}
              alt='Background image'
              width={350}
              height={350}
              objectFit='cover'
            />

            <div className={Style.category_box_title}>
              <span>
                <AiFillAlipayCircle />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{el.title}</h4>
                <small>{el.capacity} NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
