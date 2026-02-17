import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex items-center justify-center h-20 w-full sticky top-0 shadow-[0_10px_20px_rgba(0,0,0,0.2)] backdrop-blur-md bg-white/80 z-[999]">
            <div className="flex items-center justify-between w-full px-8 max-w-[1600px] sm:px-4">

                {/* Logo */}
                <Link to="/" className="flex items-center justify-center h-full px-5 -mt-1">
                    <img src="/ais.jpg" alt="AIS Logo" className="h-[70px] w-auto object-contain" />
                </Link>

                {/* Hamburger Toggle Button  */}
                <button
                    className="hidden max-[880px]:block bg-transparent border-none cursor-pointer p-[10px] z-[10]"
                    onClick={handleToggle}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-[25px] h-[3px] my-[5px] mx-auto bg-black transition-all duration-300 ease-in-out
                        ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
                    />
                    <span className={`block w-[25px] h-[3px] my-[5px] mx-auto bg-black transition-all duration-300 ease-in-out
                        ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <span className={`block w-[25px] h-[3px] my-[5px] mx-auto bg-black transition-all duration-300 ease-in-out
                        ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
                    />
                </button>


                <ul className={`
                    list-none m-0 p-0
                    flex flex-row items-center gap-6
                    max-[880px]:flex-col max-[880px]:items-start max-[880px]:gap-7
                    max-[880px]:fixed max-[880px]:h-screen max-[880px]:w-[250px]
                    max-[880px]:top-0 max-[880px]:right-0
                    max-[880px]:py-20 max-[880px]:px-6
                    max-[880px]:bg-[#074173]
                    max-[880px]:shadow-[0_10px_10px_rgba(0,0,0,0.5)]
                    max-[880px]:backdrop-blur-md
                    max-[880px]:transition-transform max-[880px]:duration-300
                    max-[880px]:${menuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {
                        [
                            { to: '/about',   label: 'About Us' },
                            { to: '/members', label: 'Top Board' },
                            { to: '/events',  label: 'Events' },
                            { to: '/contact', label: 'Contact Us' },
                            { to: '/join',    label: 'Join Us' },
                        ]

                            .map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `text-[#162530] text-[1.3rem] font-medium
                                    px-5 py-[3px] rounded-[20px] border-2 border-transparent
                                    transition-all duration-700 ease-in-out whitespace-nowrap no-underline
                                    hover:bg-[rgba(188,212,229,0.8)] hover:border-white
                                    max-[480px]:text-[1.2rem] max-[480px]:px-[15px]
                                    ${isActive ? 'bg-[rgba(188,212,229,0.8)]' : ''}`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
