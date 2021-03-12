import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    MenuUl,
    MenuItem
  } from './styled.index';

  const arr=["Бонусы","Подкаст","Поиск","Новости","Исполнители","Жанры","Сборники","Радио","Добавить трек","Мобильное приложение","Наши вакансии"]
const SideBarMenu = () => {
    return <MenuUl>
        {arr.map(menuItem =><MenuItem>{menuItem}</MenuItem>)}          
    </MenuUl>;
}

export default SideBarMenu;
