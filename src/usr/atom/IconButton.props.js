import PropTypes from 'prop-types';

export const IconButtonTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  color: PropTypes.oneOf([
    '', 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled'
  ]),
  edge: PropTypes.oneOf([
    '', 'start', 'end'
  ]),
  size: PropTypes.oneOf([
    'medium', 'small'
  ]),
};
