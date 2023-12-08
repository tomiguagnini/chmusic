import { sidebarLinks } from "../../constants";
import { INavLink } from "../../types";
import { useLocation, NavLink, Link } from "react-router-dom";
import logo from "@/assets/image0.jpeg";
import { LogOut } from "lucide-react";
import { useAuth } from "@/context/Auth";

const SidebarLeft = () => {
    const { pathname } = useLocation();
    const {logout} = useAuth()
    
    return (
        <nav className="bg-dark-3 px-6">
            <div className="flex flex-col gap-1 sm:h-full">

                <div className="flex items-center mt-6">
                    <img
                        src={logo}
                        height={70}
                        width={70}
                        className="rounded-full"
                    />
                    <Link to="/" className="p-4 text-3xl">
                        CH Beats
                    </Link>
                </div>
                
                <ul className="flex flex-col gap-4 mt-9">
                    {sidebarLinks.map((link: INavLink) => {
                        const isActive = pathname === link.route;
                        return (
                            <li
                                key={link.label}
                                className={`leftsidebar-link group ${
                                    isActive && "bg-primary-500"
                                }`}
                            >
                                <NavLink
                                    to={link.route}
                                    className="flex gap-4 items-center p-4"
                                >
                                    <img
                                        src={link.imgURL}
                                        alt={link.label}
                                        height={24}
                                        width={24}
                                        className={`group-hover:invert-white ${
                                            isActive && "invert-white"
                                        }`}
                                    />
                                    {link.label}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                
                <div className="flex gap-2 mt-auto mb-3 cursor-pointer p-4" onClick={()=> logout()}>
                    <p className="text-red" >Logout</p>
                    <LogOut color="#B82C1D" />
                </div>

            </div>
        </nav>
    );
};

export default SidebarLeft;
