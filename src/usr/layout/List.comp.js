import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListNative from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { gql, useLazyQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ListTypes } from './List.props';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const List = (props) => {
  const classes = useStyles();
  const { items, data } = props;
  const gqlQuery = data?.queryGraphql ? gql(data.queryGraphql) : "";
  const { itemValue } = data;
  const [getData, { loading, data: result }] = useLazyQuery(gqlQuery);
  let queryName = "";

  useEffect(() => {
    if (data.queryGraphql) {
      getData()
    }
  }, []);

  if (result) {
    queryName = Object.keys(result)[0]
  }
  console.log(itemValue)
  return (
    <ListNative className={classes.root}>
      {loading ? <CircularProgress style={{display: 'flex', alignSelf: 'center', marginTop: 50}} /> : null}
      {queryName ? result[queryName].map((item, index) => {
        const title = itemValue.title ? itemValue.title.split('.').reduce((o,i)=>o[i], item) : '';
        const subtitle = itemValue.subtitle ? itemValue.subtitle.split('.').reduce((o,i)=>o[i], item) : '';
        const avatarImage = itemValue.avatarImage ? itemValue.avatarImage.split('.').reduce((o,i)=>o[i], item) : '';
        return ( 
          <React.Fragment key={item?.id || index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={avatarImage} src={avatarImage} />
              </ListItemAvatar>
              <ListItemText
                primary={title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {subtitle}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
      )}) : items.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={item.avatar || item.title} src="#" />
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {item.subtitle}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </ListNative>
  );
}

List.propTypes = ListTypes;

List.defaultProps = {
  data: {
    query: ""
  },
  items: [
    {title: 'Ali Connors', subtitle: "Ali Connors, — I'll be in your neighborhood doing errands."},
    {title: 'Summer BBQ', subtitle: "Alex, — Wish I could come, but I'm out of town."},
    {title: 'Oui Oui', subtitle: "Sandra Adams, — — Do you have Paris recommendations? Have you ever."}
  ]
}

export default List