import {createReducer} from '@reduxjs/toolkit';
import {GET_MENU_ITEMS} from './types';

const defaultState = {
  menu: [
    'Бонусы',
    'Подкаст',
    'Поиск',
    'Новости',
    'Исполнители',
    'Жанры',
    'Сборники',
    'Радио',
    'Добавить трек',
    'Мобильное приложение',
    'Наши вакансии',
  ],
};

const getMenuItems = (state, action) => {
  return {
    ...state,
  };
};

const menuManagementReducer = createReducer(defaultState, {
  [GET_MENU_ITEMS]: getMenuItems,
});

export default menuManagementReducer;
