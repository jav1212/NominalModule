import Avatar from "../atoms/Avatars"
import Image from "../atoms/Image"
import Typography from "../atoms/Typography"

const NavBarUserCard = () => {
    return (
        <div className=" flex w-[85%] gap-2 p-[6px] border rounded" style={{ 'borderColor':'#eeeeee'}}>
            <Avatar/>
            <div>
                <Typography label="Robert Fox" className=" text-black font-bold text-sm"/>
                <Typography label="HR Professional" className=" text-[#a7a7a7] font-medium text-xs"/>
            </div>
        </div>
    )
}

export default NavBarUserCard