import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {MenuUl, MenuItem, Link} from './styled.index';
import {useSelector} from 'react-redux';

const SideBarMenu = () => {
  const MenuItems = useSelector((state) => state.menuManagement.menu);
  const selected = useSelector((state) => state.menuManagement.SelectedItem);
  return (
    <MenuUl>
      {MenuItems &&
        MenuItems.map((menuItem, index) => (
          <MenuItem selected={selected} key={index}>
            <Link href="#">{menuItem}</Link>
          </MenuItem>
        ))}
    </MenuUl>
  );
};

export default SideBarMenu;
