import { sidebarLinks } from "../../constants";
import { INavLink } from "../../types";
import { useLocation, NavLink, Link } from "react-router-dom";

const SidebarLeft = () => {
    const { pathname } = useLocation();
    return (
        <nav className="leftsidebar">
            <div className="flex flex-col gap-11 h-screen">
                <Link to='/' className="p-4 text-2xl">CH Music</Link>
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
