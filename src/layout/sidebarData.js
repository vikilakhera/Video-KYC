import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillHome/>,
    },
    {
        title: "Scheduled KYC",
        path: "/scheduled-kyc",
        icon: <FaIcons.FaEnvelopeOpen/>,
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <AiIcons.AiFillSetting />
    },
    {
        title: "User Management",
        path: "/user-management",
        icon: <FaIcons.FaUserEdit />
    }
];