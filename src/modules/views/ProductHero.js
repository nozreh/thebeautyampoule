import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3151&q=80';
  //'https://curology.com/static/header-lg@2x-37c31138e667063df9b60c24cc7551f7.jpg';

const styles = (theme) => ({
  
  background: {
    fontFamily: "Poppins, sans-serif",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
  },
  button: {
    fontFamily: "Poppins, sans-serif",
    minWidth: 200,
  },
  h5: {
    fontFamily: "Poppins, sans-serif",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    fontFamily: "Poppins, sans-serif",
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
       Glowing with You
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        The science to younger looking healthy skin starts from within.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/"
      >
        Order Now
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
