import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/photos/logo.jpg";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import { AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { MdComputer } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [homeActive, setHomeActive] = useState(false);
    const [showFeeDropdown, setShowFeeDropdown] = useState(false);
    const [showCourseAndBatchDropdown, setShowCourseAndBatchDropdown] = useState(false);
    const [showAboutUsDropdown, setShowAboutUsDropdown] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
        if (!menuActive && window.innerWidth < 1080) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    const handleMenuItemClick = () => {
        setMenuActive(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 120) {
            setHomeActive(true);
        } else {
            setHomeActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (<>
     
        <div className={`${styles.home} ${homeActive ? styles.active : ""}`}>
            <nav className={styles.mainNavbar}>
                <div className={styles.navLogo}>
                  <a href="/"> <img src={logo} alt="Infinite Eduverse Logo" className={styles.logo} /></a> 
                    <div className={styles.navText}>
                        <h1>FloodAi</h1>
                        <h3>IIT Gandhinagar</h3>
                    </div>
                </div>
                <ul className={`${styles.navList} ${menuActive ? styles.active : ""}`}>
            <li
                onMouseEnter={() => setShowCourseAndBatchDropdown(true)}
                onMouseLeave={() => setShowCourseAndBatchDropdown(false)}
            >
                <NavLink
                    to=""
                  
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                Home
                </NavLink>
                {showCourseAndBatchDropdown && (
                    <div className={styles.dropdown}>
                        <NavLink
                            to="/course&batch"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            JEE Advanced
                        </NavLink>
                        <NavLink
                            to="/course&batch"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            JEE Main
                        </NavLink>
                        <NavLink
                            to="/course&batchneet"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            NEET UG
                        </NavLink>
                    </div>
                )}
            </li>
            <li>
                <NavLink
                    to="/admission"
                    onClick={handleMenuItemClick && handleMenuToggle}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    HydroGNN
                </NavLink>
            </li>
            <li
                onMouseEnter={() => setShowFeeDropdown(true)}
                onMouseLeave={() => setShowFeeDropdown(false)}
            >
                <NavLink
                    to={"/feeAndScholarship/feeStructure"}
                 
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                   Surat Flood
                </NavLink>
                {showFeeDropdown && (
                    <div className={styles.dropdown}>
                        <NavLink
                            to=""
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Riverine Flood
                        </NavLink>
                        <NavLink
                            to=""
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Surat 2006 Flood
                        </NavLink>
             
                    </div>
                )}
            </li>
            <li>
                <NavLink
                    to="/gallery"
                    onClick={handleMenuItemClick && handleMenuToggle}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Gallery
                </NavLink>
            </li>

            <li  onMouseEnter={() => setShowAboutUsDropdown(true)}
                 onClick={() => setShowAboutUsDropdown(true)}
                onMouseLeave={() => setShowAboutUsDropdown(false)}>
                <NavLink
                    to="/directorsandteachers"
                   
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    About Us
                </NavLink>
              
                {showAboutUsDropdown && (
                    <div className={styles.dropdown}>
                        <NavLink
                            to="/aboutUs/infiniteEduVerse"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Infinite EduVerse
                        </NavLink>
                        <NavLink
                            to="/directorsandteachers"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Director's
                        </NavLink>
                        <NavLink
                            to="/aboutUs/ourMotivation"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Our Motivation
                        </NavLink>
                        </div>
                )}
            </li>
      

            <li>
                <NavLink
                    to="/result"
                    onClick={handleMenuItemClick && handleMenuToggle}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Results
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/blog"
                    onClick={handleMenuItemClick && handleMenuToggle}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Blogs
                </NavLink>
            </li>
           </ul>
                <div className={styles.menuBtn} onClick={handleMenuItemClick && handleMenuToggle}>
                    {menuActive ? (
                        <AiOutlineMenuUnfold style={{ height: "50px", width: "100px"}} />
                    ) : (
                        <AiOutlineMenuFold style={{ height: "50px", width: "100px"}} />
                    )}
                </div>
            </nav>
        </div></>
    );
};

export default NavBar;
