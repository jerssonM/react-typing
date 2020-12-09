import PropTypes from 'prop-types';

export const propTypes = {
  customText: PropTypes.string,
  reloadText: PropTypes.func,
  reloadButtonPosition: PropTypes.oneOf(['flex-start', 'flex-end', 'center'])
};

export const defaultProps = {
  customText: undefined,
  reloadText: undefined,
  reloadButtonPosition: 'flex-end'
};
