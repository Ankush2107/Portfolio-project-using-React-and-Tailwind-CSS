import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets";

const activeClassName = "relative before:content-['*'] before:-top-4 before:left-1/2 before:-ml-1 before:absolute before:text-amber-400";

function Header() {
  return (
    <header className="grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-black border-2 bg-white">

       <Link to='/' className="flex align-middle justify-center py-4 border-black border-r-2"><img src={logo} alt="logo" height='15' width='137'/></Link>

       <Link to='/contact' className="md:col-start-3 border-black md:border-l-2 flex gap-2 items-center justify-center tsxt-lg bg-yellow-300 hover:bg-yellow-500 ease-in-out duration-100">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
        Lets talk
       </Link>


       <nav className="col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 border-t-2 border-black md:border-t-0 flex items-center justify-center">
          <ul className="flex gap-6 max-w-sm overflow-auto snap-always">
            <li>
              <NavLink to='/' className={({isActive}) => isActive ? activeClassName : undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive}) => isActive ? activeClassName : undefined}>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={({isActive}) => isActive ? activeClassName : undefined}>Contact</NavLink>
            </li>
          </ul>
       </nav>
    </header>
  )
}

export default Header;
