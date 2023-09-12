import { TfiAlignRight, TfiClose } from "react-icons/tfi"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navMenu } from "../../constant/constant";
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }
    return (
        <nav className="max-w-[1280px] mx-auto ">
            {/* nav container */}
            <div className="flex border border-blue-300 justify-between items-center mx-[1.5rem] my-[1.8rem] mx-auto w-[90%]">
                {/* Logo */}
                <div className="border border-blue-200">
                    <Link to="/" className="font-bai font-bold text-3xl">Deep Portfolio</Link>
                </div>
                {/* hamburger menu */}
                <div className="cursor-pointer border border-blue-200 sm:hidden " onClick={toggleMenu}>
                    {
                        isOpen ? <TfiAlignRight className="h-[1.25rem] w-[1.25rem] font-bold" /> : <TfiClose className="h-[1.25rem] w-[1.25rem] font-bold" />
                    }

                </div>
                {/* menu list  */}
                <ul className="border border-blue-200 flex justify-center hidden sm:flex gap-[2rem] items-center">
                    {
                        navMenu.map(({ title, link }, index) => {
                            return (
                                <li key={index} className="border border-blue-200 font-meri cursor-pointer">
                                    <NavLink to={link}>
                                        {title}

                                    </NavLink>

                                </li>
                            )
                        })
                    }
                </ul>

            </div>


        </nav>
    )
}
