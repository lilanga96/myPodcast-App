import React from 'react';
import { Paper } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({ carouselItems }) => {
  return (
    <AutoPlaySwipeableViews interval={3000}>
      {carouselItems.map((item) => (
        <Paper key={item.id}>
          <img className='images' src={item.image} alt={item.title} />
        </Paper>
      ))}
    </AutoPlaySwipeableViews>
  );
};

export default Carousel;
