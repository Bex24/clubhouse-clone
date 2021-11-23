import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineSetting } from 'react-icons/ai'
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import exploreStyle from "../style/explore.module.css"
import style from "../style/profile.module.css"

export default function Profile() {
    return (
        <>
        <div className ={style.profileContainer}>
            <div className = {exploreStyle.header}>
                <div className = {`${exploreStyle.head} text-end mb-0`}>
                    <Link to = "/home">
                        <img src= "/images/arrow.png" alt="" className={exploreStyle.arrow_icon}/>
                    </Link>
                    <div className = {style.actionBtn}>
                        <BsAt />
                        <BsUpload />
                        <AiOutlineSetting />
                    </div>
                </div>
            </div>
            <img src="/images/user-img.jpg" alt = "" className = {style.profile_image} />
            <h4>Iulian BECSENESCU</h4>
            <p>@IulianBex</p>
            <div className = {style.follow}>
                <p>
                    <span>0</span> followers
                </p>
                <p>
                    <span>51</span> following
                </p>
            </div>
            <button>Add a bio</button>
            <div className = "mb-4">
            <a href = "https://ro-ro.facebook.com/becsenescu.iulian" target="_blank">
                <button className = "mb-0">
                      <AiOutlineFacebook />Facebook
                </button></a>
                <a href = "https://www.instagram.com/iulian.bex/" target="_blank">
                <button className = "mb-0">
                    <AiOutlineInstagram />Instagram
                </button></a>
            </div>
            <div className = {style.nominated}>
                <img src = "/images/user-img.jpg" alt="" />
                <div>
                    <p>Joined 24-July-2021</p>
                    <p>
                        Nominated by <span>Roxana Popescu</span>
                    </p>
                </div>
            </div>
            <p>Member of</p>
            <button className = {style.addMember}>
                <BsPlus />
            </button>
        </div>
        </>
    )
}
