import { NavLink } from "react-router-dom";

export default function NavigationBar(){
    return(
        <div className="flex flex-row justify-between items-center px-4 py-3 font-primary shadow-md">
            <span className="text-lg font-bold text-[#4F4F4F]">APP LOGO</span>
            <div className="flex flex-row justify-start items-center gap-4 text-sm font-medium text-[#4F4F4F]">
                <NavLink to="/">DASHBOARD</NavLink>
                <NavLink to="/createads">CREATE ADS</NavLink>
            </div>
        </div>
    )
}