import Image from "../atoms/Image"
import Typography from "../atoms/Typography"

const NavBarCompanyBanner = () => {
    return (
        <div className=" flex items-center">
            <Image/>
            <Typography label="We Own The Code" className=" text-center text-xs font-bold"/>
        </div>
    )
}

export default NavBarCompanyBanner