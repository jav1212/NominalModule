import { useState } from "react";
import Button from "../atoms/Button"
import Icons from '../atoms/Icons';
import {SxProps, Theme } from '@mui/material'

interface INavBarButtonProps extends React.ComponentProps<'button'> {
    label: string;
    iconName: string;
    iconSx?: SxProps<Theme> | undefined;
    iconClassName?: string;
    buttonClassName?:string;
  }

const NavBarButton = ({ label, iconClassName, iconSx ,iconName, buttonClassName, ...nativeProps }: INavBarButtonProps) => {
    const [isHovered, setIsHovered] = useState<Boolean>(false);

    return (
        <div className="flex h-10 items-center justify-between hover:cursor-pointer" onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className=" flex gap-3">
                <Icons name={iconName} className='p-0' sx={{color: isHovered ? "#004ED8" : '#000000', fontSize: isHovered ? 28 : 27, stroke: "#ffffff", strokeWidth: 0.5}}/>
                <Button label={label} className={(isHovered ? 'text-blue-700 font-bold' : ' text-black') + ' text-base'}/>
            </div>
            {isHovered ? <div className=" h-full bg-blue-700 rounded-sm animate-fadein " style={{width:'1.7px'}}></div>: <></>}
        </div>
    )
}

export default NavBarButton