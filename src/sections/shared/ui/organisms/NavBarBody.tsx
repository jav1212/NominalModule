'use client'
import Typography from "../atoms/Typography";
import NavBarButton from "../molecules/NavBarButton";

const NavBarBody = () => {
    return (
        <div className="flex flex-col h-full w-[90%] mt-5 ">
            <Typography label="General" className=" text-xs font-semibold text-[#a7a7a7]"/>
            <div className=" flex flex-col  mb-7">
                <NavBarButton label="Dasboard" iconName="dashboard"/>
                <NavBarButton label="Payroll" iconName="payroll" />
                <NavBarButton label="Employees" iconName="employees"/>
            </div>
            <Typography label="Others" className=" text-xs font-semibold text-[#a7a7a7]"/>
            <div className="flex flex-col">
                <NavBarButton label="Help Center" iconName="help"/>
                <NavBarButton label="Settings" iconName="settings"/>
            </div>
        </div>
    )
}

export default NavBarBody