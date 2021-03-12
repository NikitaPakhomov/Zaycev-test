import dataFromServer from './dataFromServer';
import {
  GET_SUBSCRIPTIONS_ERROR,
  GET_SUBSCRIPTIONS_REQUEST,
  GET_SUBSCRIPTIONS_SUCCESS,
  SUBSCRIBE_REQUEST,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_ERROR,
  UNSUBSCRIBE_REQUEST,
  UNSUBSCRIBE_SUCCESS,
  UNSUBSCRIBE_ERROR,
} from './types';

const getSubscriptionsRequest = () => ({
  type: GET_SUBSCRIPTIONS_REQUEST,
});

const getSubscriptionsError = () => ({
  type: GET_SUBSCRIPTIONS_ERROR,
});

const getSubscriptionsSuccess = (subscriptionsObj) => ({
  type: GET_SUBSCRIPTIONS_SUCCESS,
  payload: subscriptionsObj,
});

export const getSubscriptions = () => {
  return async (dispatch) => {
    dispatch(getSubscriptionsRequest());

    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          dispatch(getSubscriptionsSuccess(dataFromServer));
        }, 1000);

        resolve();
      });
    } catch (e) {
      dispatch(getSubscriptionsError());
    }
  };
};

const subscribeRequest = (name) => ({
  type: SUBSCRIBE_REQUEST,
  payload: name,
});

const subscribeError = (name) => ({
  type: SUBSCRIBE_ERROR,
  payload: name,
});

const subscribeSuccess = (subscribe, name) => ({
  type: SUBSCRIBE_SUCCESS,
  payload: {subscribe, name},
});

export const subscribe = (name) => {
  return async (dispatch) => {
    dispatch(subscribeRequest(name));

    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          if (name === 'yandex') {
            dispatch(
              subscribeSuccess(
                {
                  app_id: '',
                  id: 2000,
                  expires_at: 1612882353927,
                  created_at: 1612882353927,
                  auto_payment_status: true,
                  auto_payment_enable: true,
                },
                name
              )
            );
          }
        }, 1000);

        resolve();
      });
    } catch (e) {
      dispatch(subscribeError(name));
    }
  };
};

const unsubscribeRequest = (name) => ({
  type: UNSUBSCRIBE_REQUEST,
  payload: name,
});

const unsubscribeError = (name) => ({
  type: UNSUBSCRIBE_ERROR,
  payload: name,
});

const unsubscribeSuccess = (subscribe, name) => ({
  type: UNSUBSCRIBE_SUCCESS,
  payload: {subscribe, name},
});

export const unsubscribe = (name) => {
  return async (dispatch) => {
    dispatch(unsubscribeRequest(name));

    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          if (name === 'yandex') {
            dispatch(
              unsubscribeSuccess(
                {
                  app_id: '',
                  id: 3000,
                  expires_at: 1612882353927,
                  created_at: 1612882353927,
                  auto_payment_status: false,
                  auto_payment_enable: true,
                },
                name
              )
            );
          }
        }, 1000);

        resolve();
      });
    } catch (e) {
      dispatch(unsubscribeError(name));
    }
  };
};
