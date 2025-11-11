import React from 'react'
import { FaWhatsapp, FaCopyright, FaFacebook, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaSnapchat } from 'react-icons/fa6';


function Footer() {
  return (
    <footer id="mainfoot" className="flex flex-col gap-6 mt-16 w-full p-10">
        <div className="flex md:flex-row flex-col justify-between w-full">
          <div>
            <h4 className="text-2xl font-bold">JOIN THE COMMINUTY.</h4>
            <p className="text-xl">
              You will Receive All the information regarding the next drops.
            </p>
          </div>
          <div className="form">
            {" "}
            <input type="text" placeholder="Email Address" className=" text-xl font-semibold pl-6 w-[300px] h-[40px] rounded-md border-2 border-black" />
            <button className="bg-black h-[40px] text-white pl-5 pr-5 rounded-md font-bold">
              SUBSCRIBE{" "}
              <i className="" ></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl font-bold">FOLLOW US</h4>
          <div className="flex gap-5">
            <a href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-3xl" /></a>
            <a href='https://www.instagram.com/richfitstore.ng?igsh=NG5wYTc1c2V1MHBs&utm_source=qr'><i className="text-3xl"><FaInstagram/></i></a>
            <a href='https://www.tiktok.com/@richfitstore?_r=1&_d=emi31abiechk1f&sec_uid=MS4wLjABAAAApMHBRCaSCsNkl8fkCKJXvU3St80qBObhD94kLqy6xcWAudpQCBJKYPkPsxHxLi22&share_author_id=7447142546512200710&sharer_language=en&source=h5_m&u_code=ehimcgb62mb131&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=81CC8B1F-2D75-4966-AB1B-8B58AF375B43&user_id=7447142546512200710&sec_user_id=MS4wLjABAAAApMHBRCaSCsNkl8fkCKJXvU3St80qBObhD94kLqy6xcWAudpQCBJKYPkPsxHxLi22&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233'><i className="text-3xl"><FaTiktok/></i></a>
            <a href='https://www.snapchat.com/add/richfitstore?share_id=f_SZ5DJNSTyXUZxWDlm7aw&locale=en_NG'><i className="text-3xl"><FaSnapchat/></i></a>
            <a href="https://facebook.com/richfitstore" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-3xl" /></a>
            <a href='https://x.com/richfitstore?s=21'><i className='text-3xl'><FaTwitter/></i></a>
          </div>
        </div>
        


        <div className="copyright" >
          <p className="flex items-center text-xl">
            <i className=""><FaCopyright/></i>
            2025 RichFit All Rights Reserved
          </p>
        </div>
      </footer>
  )
}

export default Footer