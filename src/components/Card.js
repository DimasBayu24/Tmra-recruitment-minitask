import React, { useEffect, useState } from "react";
import file from '../assets/img/file.png'
import tractor from '../assets/img/tractor.png'
import check from '../assets/img/check.png'
const Card = ({text, number, logo}) => {
  
 
    return (
        <>
           <div className="w-full sm:w-4/12" >
                <div className="mx-4 my-5 bg-white px-6 py-4" style={{borderRadius: 20}} >
                    <div className="flex row justify-between items-center" >
                    <p className="text-19 sm:text-19" >{number}</p>
                    <img src={logo == "file" ? file : logo == "check" ? check : tractor} />
                    </div>
                    <p className="pt-3 text-blue-gray-400 text-20 sm:text-20" >{text}</p>
                </div>
           </div>
        </>
    );
}

export default Card;