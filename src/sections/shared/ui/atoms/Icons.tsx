import { Icon, SvgIconProps, SxProps, Theme } from '@mui/material';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

interface IIconsProps {
    name: string;
    className?: string;
    sx?: SxProps<Theme> | undefined;
}

const IconsMap: { [key: string]: React.ComponentType<SvgIconProps> } = {
    'dashboard': SpaceDashboardOutlinedIcon,
    'payroll': MonetizationOnOutlinedIcon,
    'employees': PeopleAltOutlinedIcon,
    'help': HelpOutlineOutlinedIcon,
    'settings': SettingsOutlinedIcon
}

const Icons = ({ name, className, sx }: IIconsProps) => {
    const IconComponent = IconsMap[name];
    if (!IconComponent) {
        return <></>;
    }
    return (
        <IconComponent sx={sx} className=" flex justify-center items-center"/>
    )
}

export default Icons