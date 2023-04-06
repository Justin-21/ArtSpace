import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { RiCompassDiscoverFill } from 'react-icons/ri'
//----IMPORT ICON
import { MdNotifications, MdHelpCenter } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'

//INTERNAL IMPORT
import Style from './NavBar.module.css'
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index'
import { Button } from '../componentsindex'
import images from '../../img'
import { useRouter } from 'next/router'
import { TbChartBubble } from 'react-icons/tb'

const NavBar = () => {
  //----USESTATE COMPONNTS
  const [discover, setDiscover] = useState(false)
  const [help, setHelp] = useState(false)
  const [notification, setNotification] = useState(false)
  const [profile, setProfile] = useState(false)
  const [openSideMenu, setOpenSideMenu] = useState(false)

  const openDiscover = () => {
    if (!discover) {
      setDiscover(true)
      setHelp(false)
      setNotification(false)
      setProfile(false)
    } else {
      setDiscover(false)
    }
  }
  const openHelpcenter = () => {
    if (!help) {
      setDiscover(false)
      setHelp(true)
      setNotification(false)
      setProfile(false)
    } else {
      setHelp(false)
    }
  }

  const openNotification = () => {
    if (!notification) {
      setNotification(true)
      setDiscover(false)
      setHelp(false)
      setProfile(false)
    } else {
      setNotification(false)
    }
  }

  const openProfile = () => {
    if (!profile) {
      setProfile(true)
      setHelp(false)
      setDiscover(false)
      setNotification(false)
    } else {
      setProfile(false)
    }
  }

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true)
    } else {
      setOpenSideMenu(false)
    }
  }

const router = useRouter()
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* LEFT SECTION */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <a href='/'>
              {/* <TbChartBubble size={50}/> */}
              <Image
                src={images.icon3}
              />
            </a>
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type='text' placeholder='Search NFT' />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* DISCOVER MENU */}
            <div onClick={() => openDiscover()}>
              <RiCompassDiscoverFill className={Style.notify} size={30} />
            </div>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <div onClick={() => openHelpcenter()}>
              <MdHelpCenter className={Style.notify} size={30} />
            </div>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              size={30}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            <Button
              btnName='Create'
              handleClick={() => router.push('/uploadNFT')}
            />
          </div>

          {/* USER PROFILE */}

          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt='Profile'
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* MENU BUTTON */}

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDBAR CPMPONE/NT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  )
}

export default NavBar
