'use client';

import NavBarBody from "../organisms/NavBarBody";
import NavBarFooter from "../organisms/NavBarFooter";
import NavBarHeader from "../organisms/NavBarHeader";

const NavBar = () => {
    return (
        <div
            className=" flex flex-col items-end justify-between h-[100%] w-[18%]" 
            style={{'borderRightColor':'#eeeeee', 'borderRightWidth':'1px'}}  >
            <NavBarHeader/>
            <NavBarBody/>
            <NavBarFooter/>
        </div>
    )
}

export default NavBar;