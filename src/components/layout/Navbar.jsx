
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fotoperfil from '../../assets/fotoperfil-SuarezEmiliano.jpg';
import logo from '../../assets/logo.jpeg';

export default function Navbar() {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    return (
        <div className={`fixed top-0 w-full z-50 transition duration-300 ${isScrolled ? 'bg-solid-color' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img className="border-[#278136] border-2 rounded-full w-14 h-14" src={logo} alt="logo" />
                        <h2 className="text-[#278136] text-3xl lg:text-4xl font-bold italic cursor-pointer" style={{ textShadow: "2px 2px 2px black" }}>
                            ReFood
                        </h2>
                    </div>

                    <div className="flex items-center space-x-3">
                        <img className="border-[#278136] border-2 rounded-full w-12 h-12" src={fotoperfil} alt="fotoperfil" />
                    </div>
                </div>
            </div>
        </div>
    );
}