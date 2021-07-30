import React, { useEffect, useState } from "react";
import user from '../assets/img/user.png'
const Header = () => {
  
 
    return (
        <>
           <div className="flex row justify-between items-center bg-white px-2 py-1" >
            <a className="text-15">Fundraising App</a>
            <img style={{width: 56, height: 56}} src={user} />
           </div>
        </>
    );
}

export default Header;