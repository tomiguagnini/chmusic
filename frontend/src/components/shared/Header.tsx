import { Link } from "react-router-dom"
import Kart from "./Cart"


function Header() {
  return (
    <div className="flex justify-between bg-dark-2 w-full h-16 items-center py-2 pr-5 fixed top-0">
        <Link to={'/'} className="text-3xl ml-2 ">CH Beats</Link>
        <Kart />
    </div>
  )
}

export default Header