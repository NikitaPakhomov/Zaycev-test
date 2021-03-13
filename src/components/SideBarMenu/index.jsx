import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {MenuUl, MenuItem} from './styled.index';
import {useSelector} from 'react-redux';

const SideBarMenu = () => {
  const MenuItems = useSelector((state) => state.menuManagement.menu);
  return (
    <MenuUl>
      {MenuItems &&
        MenuItems.map((menuItem, index) => (
          <MenuItem key={index}>{menuItem}</MenuItem>
        ))}
    </MenuUl>
  );
};

export default SideBarMenu;
