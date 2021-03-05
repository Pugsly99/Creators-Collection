import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SideBarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover: #252831;
  border-left: 4px solid #632ce4
  cursor: pointer;
`;

const SidebarLabel = styled.span`

`;

const SubMenu = ({ item }) => {
  return (
    <>
      <SideBarLink to={item.path}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SideBarLink>
    </>
  )
}

export default SubMenu;