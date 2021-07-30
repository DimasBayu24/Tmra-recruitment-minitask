import React, { useEffect, useState } from "react";
import pic from '../assets/img/pic.jpg'
import { useLocation } from 'react-router-dom';
import Header from '../components/Header'
const Screen2 = () => {
  
    const location = useLocation();

    return (
        <div className="w-full h-auto  background-screen" >
        <Header />
        <div className="flex flex-row">
            <div className="w-3/12" />
            <div className="px-5 flex flex-col my-5 items-center w-6/12 bg-white" >
         <a>{location.state.name}</a>
         <a>{location.state.start} - {location.state.end} </a>
         <a>{location.state.target}</a>
         <a>
         Description:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </a>
            <img style={{width: 512}} src={pic} />
            <div className="flex flex-row">
            <img style={{width: 128}} src={pic} />
            <img style={{width: 128}} src={pic} />
            </div>
        </div>
            <div className="w-3/12" />
        </div>

      
           </div>
    );
}

export default Screen2;