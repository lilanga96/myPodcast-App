import React from 'react';
import Carousel from './carousel';

const LandingPage = () => {

  const carouselItems = [
    { id: 1, title: 'Show 1', image:  "https://content.production.cdn.art19.com/images/d4/06/1f/5b/d4061f5b-c6d1-4304-b9d7-5e793455243a/4668ed2834f6117f83f68b2659a413f9ebad11c32f4ba8e8c6b68c9c1f36917a7a348171298899e1bbe7c8732a4397a5ef31699bca6be8347e12c361aa04827e.jpeg" },
    { id: 2, title: 'Show 2', image:  "https://content.production.cdn.art19.com/images/ea/bd/50/e1/eabd50e1-4f51-4bb0-b8ba-ae02fae59ffe/b1c64fa8376a10fc02357609b132d08706c95273f14b001927cfeecc290aac884c18c8202c2c30b70314ebc5296bf6ec93664ec56c1dc10f971f1afc5a73860c.jpeg"},
    { id: 3, title: 'Show 3', image: "https://content.production.cdn.art19.com/images/b3/37/52/bb/b33752bb-585a-47dc-a431-3aef17aacd66/b68b3e4a2e030d4f7ac3a518f4872e2f2985d04a130064bfb41034afe3c15824adafcbd488ce90463876b5b20bc589ead5c8c87b1c614a409d3affe444b2a0e0.jpeg"},
  ];

  return (
    <div>
      <h1>Welcome to My Podcast App</h1>
      <h2>Shows you may like</h2>
      <Carousel carouselItems={carouselItems} />
    
    </div>
  );
};

export default LandingPage;
