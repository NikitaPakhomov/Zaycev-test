import {useState} from 'react';
import PropTypes from 'prop-types';
import SubscriptionInfo from './SubscriptionInfo';
import SubscriptionLoader from './SubscriptionLoader';
import {
  StyledSubscription,
  StyledSubscriptionButton,
  StyledSubscriptionContent,
  StyledSubscriptionHidden,
  StyledSubscriptionHighContrast,
  StyledSubscriptionIcon,
  StyledSubscriptionName,
} from './styled.index';

const Subscription = ({
  Icon,
  name,
  expiresAt,
  autoPaymentStatus,
  autoPaymentEnable,
  price,
  href,
  isLoading,
  hoverNodeOnCancel,
  hoverNodeOnEnable,
  onSubscribeClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverToggle = () => {
    setIsHovered(!isHovered);
  };

  if (isLoading) {
    return <SubscriptionLoader />;
  }

  return (
    <StyledSubscription
      isHovered={
        isHovered &&
        !!(autoPaymentStatus ? hoverNodeOnCancel : hoverNodeOnEnable)
      }
    >
      <StyledSubscriptionContent>
        <StyledSubscriptionIcon as={Icon} />
        <StyledSubscriptionName>
          <p>Способ оформления</p>
          <StyledSubscriptionHighContrast>
            {name}
          </StyledSubscriptionHighContrast>
        </StyledSubscriptionName>
        <SubscriptionInfo
          isHovered={isHovered}
          hoverNodeOnCancel={hoverNodeOnCancel}
          hoverNodeOnEnable={hoverNodeOnEnable}
          expiresAt={expiresAt}
          autoPaymentStatus={autoPaymentStatus}
          price={price}
        />
      </StyledSubscriptionContent>
      {autoPaymentEnable ? (
        <StyledSubscriptionButton
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (onSubscribeClick) {
              onSubscribeClick();
              e.preventDefault();
            }
          }}
          onMouseOver={hoverToggle}
          onMouseOut={hoverToggle}
          type={autoPaymentStatus ? 'danger' : 'warning'}
        >
          {autoPaymentStatus
            ? 'Отключить автопродление'
            : 'Включить автопродление'}
        </StyledSubscriptionButton>
      ) : (
        <StyledSubscriptionHidden />
      )}
    </StyledSubscription>
  );
};

Subscription.propTypes = {
  Icon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  expiresAt: PropTypes.number.isRequired,
  autoPaymentStatus: PropTypes.bool.isRequired,
  autoPaymentEnable: PropTypes.bool.isRequired,
  price: PropTypes.number,
  href: PropTypes.string,
  isLoading: PropTypes.bool,
  hoverNodeOnCancel: PropTypes.node,
  hoverNodeOnEnable: PropTypes.node,
  onSubscribeClick: PropTypes.func,
};

export default Subscription;
