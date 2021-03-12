import PropTypes from 'prop-types';
import SubscriptionManagement from '../../components/SubscriptionManagement';
import {StyledSubscriptions, StyledSubscriptionsTitle} from './styled.index';

const Subscriptions = (props) => {
  return (
    <StyledSubscriptions {...props}>
      <StyledSubscriptionsTitle>Управление подпиской</StyledSubscriptionsTitle>
      <SubscriptionManagement />
    </StyledSubscriptions>
  );
};

Subscriptions.propTypes = {
  className: PropTypes.string,
};

export default Subscriptions;
