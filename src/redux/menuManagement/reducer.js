import {createReducer} from '@reduxjs/toolkit';
import {GET_MENU_ITEMS} from './types';

const defaultState = {
  menu: [
    'Подкасты',
    'Новости',
    'Поиск',
    'Новинки',
    'Исполнители',
    'Жанры',
    'Сборники',
    'Радио',
    'Добавить трек',
    'Мобильное приложение',
    'Наши вакансии',
    'В мобильную версию',
  ],
  SelectedItem: '2',
};

const getMenuItems = (state = defaultState, action) => {
  return {
    ...state,
  };
};

const menuManagementReducer = createReducer(defaultState, {
  [GET_MENU_ITEMS]: getMenuItems,
});

export default menuManagementReducer;
