'use client'

import Typography from "../atoms/Typography"
import NavBarCompanyBanner from "../molecules/NavBarCompanyBanner"

const NavBarFooter = () => {
    return (
        <div className="flex flex-col h-[20%] w-[90%]">
            <Typography label="Powered by" className=" text-xs text-[#a7a7a7] font-bold"/>
            <NavBarCompanyBanner/>
        </div>
    )
}

export default NavBarFooter