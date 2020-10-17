import React from 'react';
import IconButtonNative from '@material-ui/core/IconButton';

import { IconButtonTypes } from './IconButton.props';

const IconButton = (props) => {

  const { onClick, icon, color, size } = props

  return (
    <IconButtonNative size={size} color={color} onClick={onClick}>
      {icon}
    </IconButtonNative>
  );
}

IconButton.propTypes = IconButtonTypes;

IconButton.defaultProps = {
  icon: <span />,
  color: 'inherit',
  size: 'medium'
}

export default IconButton