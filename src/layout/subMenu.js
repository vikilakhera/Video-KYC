import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    background: ${({ color }) => (color ? "#fff" : "black")};
    color: ${({ color }) => (color ? "#fa626b" : "#e1e9fc")};
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 55px;
    text-decoration: none;
    font-size: 16px;
    border-left: ${({ color }) => (color ? "4px solid #fa626b" : "none")};

    &:hover {
        border-left: 4px solid #fa626b;
        cursor: pointer;
        color: #fa626b;
    }
    `;

const SidebarIcon = styled.span`
    background: ${({ color }) => (color ? "#fa626b" : "black")};
    padding: 4px 6px;
    border-radius: 5px;
    box-shadow: ${({ color }) => (color ? "0px 0px 7px 1px #fa626b" : "none")};
    font-size: 16px;

    &:hover{
        box-shadow: 0 0 7px 1px #fa626b;
    }
    `;

const SidebarLabel = styled.span`
    margin-left: 16px;
    `;

const DropdownLink = styled(Link)`
    background: #252831;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    
    &:hover {
      background: green;
      cursor: pointer;
    }
  `;

  const SubMenu = ({item, color, setActiveSidebar, sidebarNo}) => {
      const [subNav, setSubNav] = useState(false);

      const showSubNav = () => setSubNav(!subNav);

      return(
        <>
            <SidebarLink color={color} to={item.path}
            onClick={() => setActiveSidebar(sidebarNo)}>
                <div>
                    <SidebarIcon color={color}>{item.icon}</SidebarIcon>
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subNav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </SidebarLink>
            {subNav && 
                item.subNav.map((item, index) => {
                    return(
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
            })}
        </>
      );
  };

  export default SubMenu;