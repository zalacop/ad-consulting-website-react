import { useState } from "react";

function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
       <>
       <button
        onClick={toggleMenu}
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen}
       >
        <span className="sr-only">Toggle Menu</span>
        <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
            />
        </svg>
       </button>
        <div className="my-auto">
            <ul className="flex">
                <li className="ml-4 uppercase">About</li>
                <li className="ml-4 uppercase">Service</li>
                <li className="mx-4 uppercase">Portfolio</li>
            </ul>
        </div>
       </>
    )
}

export default Nav;