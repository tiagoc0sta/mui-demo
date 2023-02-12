import React from 'react';
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toollbar,
  Toolbar,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Container } from '@mui/system';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container
            maxWidth='sm'
            sx={{
              backgroundColor: 'gray',
            }}
          >
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Photo album
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptates explicabo ullam iusto sequi nostrum expedita voluptate
              obcaecati dolor numquam!
            </Typography>
            <div>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
