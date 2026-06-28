
"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                        Travel With
                        <span className="text-orange-400"> Haider</span>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-8 text-white font-medium">
                    <li>
                        <a href="#home" className="hover:text-orange-400 transition">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#destinations" className="hover:text-orange-400 transition">
                            Destinations
                        </a>
                    </li>

                    <li>
                        <a href="#packages" className="hover:text-orange-400 transition">
                            Packages
                        </a>
                    </li>

                    <li>
                        <a href="#gallery" className="hover:text-orange-400 transition">
                            Gallery
                        </a>
                    </li>

                    <li>
                        <a href="#reviews" className="hover:text-orange-400 transition">
                            Reviews
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-orange-400 transition">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Book Now Button */}
                <a
                    href="#contact"
                    className="hidden lg:block bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full font-bold"
                >
                    Book Tour
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-black/90 text-white px-6 py-6">
                    <div className="flex flex-col gap-5">
                        <a href="#home">Home</a>
                        <a href="#destinations">Destinations</a>
                        <a href="#packages">Packages</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#reviews">Reviews</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

