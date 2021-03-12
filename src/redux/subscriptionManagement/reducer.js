import {createReducer} from '@reduxjs/toolkit';
import {
  GET_SUBSCRIPTIONS_ERROR,
  GET_SUBSCRIPTIONS_REQUEST,
  GET_SUBSCRIPTIONS_SUCCESS,
  SUBSCRIBE_ERROR,
  SUBSCRIBE_REQUEST,
  SUBSCRIBE_SUCCESS,
  UNSUBSCRIBE_ERROR,
  UNSUBSCRIBE_REQUEST,
  UNSUBSCRIBE_SUCCESS,
} from './types';
import {convertDataToArray} from './utils';

const defaultState = {
  subscriptions: null,
  isLoading: true,
  error: null,
};

const getSubscriptionsRequest = (state, action) => {
  return {
    ...state,
    subscriptions: null,
    isLoading: true,
    error: null,
  };
};

const getSubscriptionsSuccess = (state, {payload}) => {
  return {
    ...state,
    subscriptions: convertDataToArray(payload),
    isLoading: false,
  };
};

const getSubscriptionsError = (state, action) => {
  return {
    ...state,
    isLoading: false,
  };
};

const subscribeRequest = (state, {payload}) => {
  return {
    ...state,
    subscriptions: state.subscriptions.map((subscribe) => ({
      ...subscribe,
      isLoading: subscribe.name === payload ? true : subscribe.isLoading,
    })),
  };
};

const subscribeSuccess = (state, {payload}) => {
  return {
    ...state,
    subscriptions: state.subscriptions.map((subscribe) => {
      let temp = {};
      const mathes = subscribe.name === payload.name;

      if (mathes)
        temp = {
          ...payload.subscribe,
        };

      return {
        ...subscribe,
        ...temp,
        isLoading: mathes ? false : subscribe.isLoading,
      };
    }),
  };
};

const subscribeError = (state, {payload}) => {
  return {
    ...state,
    subscriptions: state.subscriptions.map((subscribe) => ({
      ...subscribe,
      isLoading: subscribe.name === payload ? false : subscribe.isLoading,
    })),
  };
};

const unsubscribeRequest = (state, {payload}) => {
  return {
    ...state,
    subscriptions: state.subscriptions.map((subscribe) => ({
      ...subscribe,
      isLoading: subscribe.name === payload ? true : subscribe.isLoading,
    })),
  };
};

const unsubscribeSuccess = (state, {payload}) => {
  return {
    ...state,
    subscriptions: state.subscriptions.map((subscribe) => {
      let temp = {};
      const mathes = subscribe.name === payload.name;

      if (mathes)
        temp = {
          ...payload.subscribe,
        };

      return {
        ...subscribe,
        ...temp,
        isLoading: mathes ? false : subscribe.isLoading,
      };
    }),
  };
};

const unsubscribeError = (state, {payload}) => {
  return {
    ...state,
    subscriptions: state.subscriptions.map((subscribe) => ({
      ...subscribe,
      isLoading: subscribe.name === payload ? false : subscribe.isLoading,
    })),
  };
};

const subscriptionManagementReducer = createReducer(defaultState, {
  [GET_SUBSCRIPTIONS_REQUEST]: getSubscriptionsRequest,
  [GET_SUBSCRIPTIONS_SUCCESS]: getSubscriptionsSuccess,
  [GET_SUBSCRIPTIONS_ERROR]: getSubscriptionsError,
  [SUBSCRIBE_REQUEST]: subscribeRequest,
  [SUBSCRIBE_SUCCESS]: subscribeSuccess,
  [SUBSCRIBE_ERROR]: subscribeError,
  [UNSUBSCRIBE_REQUEST]: unsubscribeRequest,
  [UNSUBSCRIBE_SUCCESS]: unsubscribeSuccess,
  [UNSUBSCRIBE_ERROR]: unsubscribeError,
});

export default subscriptionManagementReducer;
