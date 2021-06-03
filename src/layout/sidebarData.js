import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillHome/>,
    },
    {
        title: "Generate Case",
        path: "/generate-case",
        icon: <FaIcons.FaEnvelopeOpen/>,
    },
    {
        title: "Arbitrations",
        path: "/arbitrations",
        icon: <IoIcons.IoIosPaper />
    },
    {
        title: "Mediations",
        path: "/mediations",
        icon: <FaIcons.FaEnvelopeOpenText />,
    },
    {
      title: "Conciliations",
      path: "/conciliations",
      icon: <FaIcons.FaBookmark />,
    },
    {
        title: "Claims",
        path: "/claims",
        icon: <AiIcons.AiOutlineGift />,
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <FaIcons.FaRegUser />,
    },
    {
        title: "Judgement & Orders",
        path: "/judgement-orders",
        icon: <FaIcons.FaFirstOrder />,
    },
    {
        title: "Contact Us",
        path: "/contact",
        icon: <FaIcons.FaPhone />
    }
];