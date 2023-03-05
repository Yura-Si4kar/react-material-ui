import React from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow:1
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: 'rgba(0,0,0,.3)'
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(9)
  }
}))

export default function App() {
  const classes = useStyles();

  return (
    <>
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu' className={classes.menuButton}>
              <MenuIcon/>
            </IconButton>
            <Typography variant='h6' className={classes.title}>Web Developer Blog</Typography>
            <Box mr={3}>
              <Button color='inherit' variant='outlined'>Log In</Button>
            </Box>
            <Button color='secondary' variant='contained'>Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>
    
      <main>
        <Paper className={classes.mainFeaturesPost} style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturePostContent}>
                  <Typography
                    component='h1'
                    variant='h3'
                    color='inherit'
                    gutterBottom
                  >
                    Web Developer Blog
                  </Typography>
                  <Typography
                    variant='h5'
                    color='inherit'
                    paragraph
                  >
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    In accumsan libero lectus, in condimentum
                    ligula imperdiet vel. Suspendisse ullamcorper,
                    neque eu pharetra condimentum, sapien augue.
                  </Typography>
                  <Button variant='contained' color='secondary'>
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
    </>
  )
}

