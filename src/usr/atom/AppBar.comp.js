import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBarNative from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { AppBarTypes } from './AppBar.props';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBar = (props) => {
  const { title, left, right, titleSpacing, color } = props;
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBarNative color={color}  position="static">
        <Toolbar>
          <div>
            {left}
          </div>
          <Typography style={{ marginLeft: titleSpacing }} className={classes.title} variant="h6" noWrap>
            {title}
          </Typography>
          <div>
            {right}
          </div>
        </Toolbar>
      </AppBarNative>
    </div>
  );
}

AppBar.propTypes = AppBarTypes;

AppBar.defaultProps = {
  left: <span />,
  title: 'Mejik Art',
  right: <span />,
  titleSpacing: 5,
  color: 'primary'
}

export default AppBar