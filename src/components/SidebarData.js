import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import { MdRestaurant, MdLocalHotel } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { WiDayLightning } from "react-icons/wi";
import { BiWine } from "react-icons/bi";

export  const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text',
    },
    {
        title: 'City',
        path: '/city',
        icon: <ImIcons.ImOffice/>,
        cName: 'nav-text',
    },
    {
        title: 'MostVisited',
        path: '/mostVisited',
        icon: <ImIcons.ImUsers/>,
        cName: 'nav-text',
    },
    {
        title: 'Restaurants',
        path: '/restaurants',
        icon: <MdRestaurant/>,
        cName: 'nav-text',
    },
    {
        title: 'Hotels',
        path: '/hotels',
        icon: <MdLocalHotel/>,
        cName: 'nav-text',
    },
    {
        title: 'Shopping',
        path: '/shopping',
        icon: <FaShoppingCart/>,
        cName: 'nav-text',
    },
    {
        title: 'Cafes',
        path: '/cafes',
        icon: <IoIcons.IoIosCafe/>,
        cName: 'nav-text',
    },
    {
        title: 'Bars',
        path: '/bars',
        icon: <BiWine/>,
        cName: 'nav-text',
    },
    {
        title: 'Weather',
        path: '/weather',
        icon: <WiDayLightning/>,
        cName: 'nav-text',
    }
]



