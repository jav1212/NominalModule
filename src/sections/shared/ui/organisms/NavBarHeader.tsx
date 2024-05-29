'use client';

import Image from "../atoms/Image";
import NavBarUserCard from "../molecules/NavBarUserCard";


const NavBarHeader = () => {
    return (
        <div className="flex flex-col justify-center gap-3 h-[40%] w-[90%]">
            <Image/>
            <NavBarUserCard/>
        </div>
    )
}

export default NavBarHeader;