import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Subscription from './Subscription';
import SubscriptionLoader from './Subscription/SubscriptionLoader';
import {
  StyledSubscriptionManagement,
  StyledSubscriptionManagementDescription,
  StyledSubscriptionManagementParagraph,
} from './styled.index';
import {ReactComponent as AppStoreSvg} from 'assets/app-store.svg';
import {ReactComponent as YandexSvg} from 'assets/yandex.svg';
import {ReactComponent as BonusSvg} from 'assets/bonus.svg';
import {ReactComponent as HuaweiSvg} from 'assets/huawei.svg';
import {ReactComponent as PlayMarketSvg} from 'assets/play-market.svg';
import {
  getSubscriptions,
  subscribe,
  unsubscribe,
} from 'redux/subscriptionManagement/actions';

const SubscriptionManagement = () => {
  const dispatch = useDispatch();
  const {subscriptions, isLoading} = useSelector(
    (state) => state.subscriptionManagement
  );

  useEffect(() => {
    dispatch(getSubscriptions());
  }, [dispatch]);

  const subscriptionHandler = ({name, auto_payment_status}) => {
    switch (name) {
      case 'yandex':
        return {
          name: 'Yandex Кассы',
          href: '',
          icon: YandexSvg,
          hoverNodeOnCancel: null,
          hoverNodeOnEnable: null,
          onSubscribeClick: () =>
            dispatch(
              auto_payment_status ? unsubscribe('yandex') : subscribe('yandex')
            ),
        };
      case 'ios':
        return {
          name: 'App Store',
          href: 'https://apps.apple.com/ru/app/id1469360017',
          icon: AppStoreSvg,
          hoverNodeOnCancel: (
            <>
              <StyledSubscriptionManagementParagraph>
                При нажатии откроется инструкция{' '}
              </StyledSubscriptionManagementParagraph>
              <StyledSubscriptionManagementParagraph>
                по отмене подписки в App Store
              </StyledSubscriptionManagementParagraph>
            </>
          ),
          hoverNodeOnEnable: (
            <>
              <StyledSubscriptionManagementParagraph>
                При нажатии откроется инструкция{' '}
              </StyledSubscriptionManagementParagraph>
              <StyledSubscriptionManagementParagraph>
                по продлению подписки в App Store
              </StyledSubscriptionManagementParagraph>
            </>
          ),
          onSubscribeClick: null,
        };
      case 'android':
        return {
          name: 'Google Play Market',
          href: 'https://x2hf3.app.goo.gl/androidApp',
          icon: PlayMarketSvg,
          hoverNodeOnCancel: (
            <>
              <StyledSubscriptionManagementParagraph>
                При нажатии откроется доступ к отмене{' '}
              </StyledSubscriptionManagementParagraph>
              <StyledSubscriptionManagementParagraph>
                подписки в Google Play Market
              </StyledSubscriptionManagementParagraph>
            </>
          ),
          hoverNodeOnEnable: (
            <>
              <StyledSubscriptionManagementParagraph>
                При нажатии откроется Google Play Market, где можно{' '}
              </StyledSubscriptionManagementParagraph>
              <StyledSubscriptionManagementParagraph>
                самостоятельно продлить подписку приложения Zaycev.net
              </StyledSubscriptionManagementParagraph>
            </>
          ),
          onSubscribeClick: null,
        };
      case 'bonus':
        return {
          name: 'Подарок от Zaycev.net',
          href: '',
          icon: BonusSvg,
          hoverNodeOnCancel: null,
          hoverNodeOnEnable: null,
          onSubscribeClick: null,
        };
      case 'huawei':
        return {
          name: 'App Gallery',
          href:
            'https://appgallery.huawei.com/#/app/C101567849?appId=C101567849&source=appshare&subsource=C101567849',
          icon: HuaweiSvg,
          hoverNodeOnCancel: (
            <>
              <StyledSubscriptionManagementParagraph>
                При нажатии откроется доступ к отмене{' '}
              </StyledSubscriptionManagementParagraph>
              <StyledSubscriptionManagementParagraph>
                подписки в App Gallery
              </StyledSubscriptionManagementParagraph>
            </>
          ),
          hoverNodeOnEnable: (
            <>
              <StyledSubscriptionManagementParagraph>
                При нажатии откроется App Gallery, где можно{' '}
              </StyledSubscriptionManagementParagraph>
              <StyledSubscriptionManagementParagraph>
                самостоятельно продлить подписку приложения Zaycev.net
              </StyledSubscriptionManagementParagraph>
            </>
          ),
          onSubscribeClick: null,
        };
      default:
        return {
          name: '',
          icon: null,
          hoverNodeOnCancel: null,
          hoverNodeOnEnable: null,
          onSubscribeClick: null,
        };
    }
  };

  if (isLoading) {
    return (
      <StyledSubscriptionManagement>
        <SubscriptionLoader />
      </StyledSubscriptionManagement>
    );
  }

  return (
    <StyledSubscriptionManagement>
      {subscriptions.filter(
        (subscription) => subscription.auto_payment_status === true
      ).length > 1 ? (
        <StyledSubscriptionManagementDescription>
          <p>
            Вы оформили несколько подписок с автопродлением. Вы можете оставить
            автопродление одной, на выбор.
          </p>
          <p>
            Эта подписка будет действовать на всех устройствах после
            авторизации.
          </p>
        </StyledSubscriptionManagementDescription>
      ) : null}
      {subscriptions.map((subscription) => {
        const additional = subscriptionHandler(subscription);

        return (
          <Subscription
            key={subscription.id}
            href={additional.href}
            Icon={additional.icon}
            name={additional.name}
            hoverNodeOnCancel={additional.hoverNodeOnCancel}
            hoverNodeOnEnable={additional.hoverNodeOnEnable}
            expiresAt={subscription.expires_at}
            autoPaymentEnable={subscription.auto_payment_enable}
            autoPaymentStatus={subscription.auto_payment_status}
            onSubscribeClick={additional.onSubscribeClick}
            isLoading={subscription.isLoading}
            price={169}
          />
        );
      })}
    </StyledSubscriptionManagement>
  );
};

export default SubscriptionManagement;
