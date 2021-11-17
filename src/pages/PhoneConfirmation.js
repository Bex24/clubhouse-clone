import React, {useState} from 'react'
import {Link} from "react-router-dom"
import style from "../style/phoneConfirm.module.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function PhoneConfirmation(){
    const [value, setvalue] = useState();
    return (
        <div className ={style.phoneConfirmContainer}>
            <Link exact to ="/" className= {style.backBtn}>
                <img src="/images/arrow.png" alt = "" />
            </Link>
            <h1>Enter your phone</h1>
            <PhoneInput 
            country="US"
            value={value}
            onChange={setvalue}
            />
            <p>By entering your number, you`re agreeing to our
               <span> Terms of Service and Privacy Policy. </span> Thanks !</p>
               <Link exact to ="/code_confirm" className ="primaryBtn d-flex align-items-center text-decoration-none ">
                   Next 
                   <img src = "/images/nextArrowIcon.svg" className = "ml-1" />
               </Link>
        </div>
    )
   
}
