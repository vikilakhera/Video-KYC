import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";
import SubMenu from "./subMenu";
import Footer from "./footer";
import Profile from "./profile";
import { IconContext } from "react-icons/lib";
import Logo from "./img/logo.png";

const Nav = styled.div`
  background: #15171c;
  height: 65px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 10;
`;
  
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
  display: none;
  @media (max-width: 767px){
      display: block;
      margin-top: 15px;
      margin-right: 1rem;
  }
`;
  
const SidebarNav = styled.nav`
  background: black;
  background-size: cover;
  width: 250px;
  height: 100vh;
  display: block;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 11 !important;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  @media (max-width: 767px){
    left: ${({ sidebar }) => (sidebar ? "-100%" : "0")};
  }
  @media (min-width: 768px){
      left: 0;
  }
`;
  
const SidebarWrap = styled.div`
  width: 100%;
`;


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    const [activeSidebar, setActiveSidebar] = useState(0);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff"}}>
                <Nav>
                    <Profile/>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <span style={{display: "flex", borderBottom: "1px groove white", height: "66px"}}>
                        
                        <img src={Logo} alt="logo" style={{
                                width: "150px",
                                height: "40px",
                                margin: "1rem auto"
                            }} 
                        />

                        <NavIcon tp="#">
                            <AiIcons.AiOutlineClose size={20} onClick={showSidebar} />
                        </NavIcon>
                    </span>
                    <SidebarWrap>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} color={index === activeSidebar} setActiveSidebar={setActiveSidebar} sidebarNo={index}/>;
                        })}
                    </SidebarWrap>
                </SidebarNav>
                <Footer/>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;