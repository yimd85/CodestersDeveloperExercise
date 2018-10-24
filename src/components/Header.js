import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core/';
import '../App.css';

type Props = {
  classes: Object
};

const styles = {
  root: {
    flexGrow: 1,
  }
};

function Header(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <AppBar
          position='relative'
          style={{backgroundColor: 'black'}}
        >
              <Typography color='inherit'>
                <img className='booImage' style={{right: '30px'}} src='https://i.imgur.com/FXDc82ls.png' alt='Boo the friendly ghost' />

                    <span className='headerText'>Boo's Boolean Mansion</span>

                <img className='booImage' style={{right: '30px'}} src='https://i.imgur.com/SSVPTq6s.png' alt='Boo the friendly ghost' />
              </Typography>
        </AppBar>
    </div>
  );
}


Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
