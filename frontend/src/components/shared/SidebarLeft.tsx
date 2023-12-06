import { sidebarLinks } from "../../constants";
import { INavLink } from "../../types";
import { useLocation, NavLink, Link } from "react-router-dom";
import logo from "@/assets/image0.jpeg";

const SidebarLeft = () => {
    const { pathname } = useLocation();
    return (
        <nav className="leftsidebar">
            <div className="flex flex-col gap-11 h-screen">
                <div className="flex items-center">
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
                <ul className="flex flex-col gap-4">
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
            </div>
        </nav>
    );
};

export default SidebarLeft;
