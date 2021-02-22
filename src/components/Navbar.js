import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from "./SidebarData";
import { IconContext } from 'react-icons';
import './Navbar.css';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        let cloneSidebar = sidebar;
        setSidebar(!cloneSidebar);
    }
    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <IconContext.Provider value={{color: '#fff'}}>
            <nav className={sidebar ? "nav-menu active" : "nav-menu passive"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="nav-toggle">
                        <Link to="#" className="close-bar">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item,index) => {
                        return <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
