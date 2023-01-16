import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const GameInfo = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 700,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    autoplay: true,
  };
  return (
    <StyledSlider {...settings}>
      <div>
        <img src=""  alt='게임 설명'/>
      </div>
      <div>
        <img src=""  alt='게임 설명'/>
      </div>
      <div>
        <img src=""  alt='게임 설명'/>
      </div>
    </StyledSlider>
  );
};

export default GameInfo;

const StyledSlider = styled(Slider)`
  width: 100%;

  img {
    width: 100%;
    height: 300px;
  }

  .slick-prev {
    left: 2vw;
    z-index: 90;
    cursor: pointer;
    &::before {
      color: black;
    }
  }

  .slick-next {
    right: 2vw; // 100vw;
    cursor: pointer;
    &::before {
      color: black;
    }
  }
`;