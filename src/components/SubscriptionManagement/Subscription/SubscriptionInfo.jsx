import PropTypes from 'prop-types';
import {
  StyledSubscriptionHighContrast,
  StyledSubscriptionInfo,
} from './styled.index';

const SubscriptionInfo = ({
  expiresAt,
  autoPaymentStatus,
  price,
  isHovered,
  hoverNodeOnCancel,
  hoverNodeOnEnable,
}) => {
  const date = new Date(expiresAt);
  const outputDate =
    ['0' + date.getDate(), '0' + (date.getMonth() + 1)]
      .map((d) => d.slice(-2)) // only the last 2 digits are needed
      .join('.') + `.${date.getFullYear()}`;

  if (isHovered && autoPaymentStatus === true && hoverNodeOnCancel) {
    return (
      <StyledSubscriptionInfo isHovered={true}>
        <StyledSubscriptionHighContrast>
          {hoverNodeOnCancel}
        </StyledSubscriptionHighContrast>
      </StyledSubscriptionInfo>
    );
  }

  if (isHovered && autoPaymentStatus === false && hoverNodeOnEnable) {
    return (
      <StyledSubscriptionInfo isHovered={true}>
        <StyledSubscriptionHighContrast>
          {hoverNodeOnEnable}
        </StyledSubscriptionHighContrast>
      </StyledSubscriptionInfo>
    );
  }

  if (autoPaymentStatus) {
    return (
      <StyledSubscriptionInfo>
        <p>
          Следующий платёж{' '}
          <StyledSubscriptionHighContrast withMargin={true}>
            {outputDate}
          </StyledSubscriptionHighContrast>
        </p>
        <p>
          Спишется{' '}
          <StyledSubscriptionHighContrast withMargin={true}>
            {price} Р
          </StyledSubscriptionHighContrast>
        </p>
      </StyledSubscriptionInfo>
    );
  }

  return (
    <StyledSubscriptionInfo>
      Действует до{' '}
      <StyledSubscriptionHighContrast withMargin={true}>
        {outputDate}
      </StyledSubscriptionHighContrast>
    </StyledSubscriptionInfo>
  );
};

SubscriptionInfo.propTypes = {
  autoPaymentStatus: PropTypes.bool.isRequired,
  expiresAt: PropTypes.number.isRequired,
  isHovered: PropTypes.bool,
  price: PropTypes.number,
  hoverNodeOnCancel: PropTypes.node,
  hoverNodeOnEnable: PropTypes.node,
};

export default SubscriptionInfo;
