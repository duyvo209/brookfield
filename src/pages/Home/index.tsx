import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/images/banner1.jpeg";
import Banner2 from "../../assets/images/banner2.jpeg";
import Banner3 from "../../assets/images/banner3.jpeg";
import Banner4 from "../../assets/images/banner4.jpeg";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          <div>
            <img src={Banner1} alt="" />
          </div>
          <div>
            <img src={Banner2} alt="" />
          </div>
          <div>
            <img src={Banner3} alt="" />
          </div>
          <div>
            <img src={Banner4} alt="" />
          </div>
        </Slider>
        <Box
          style={{
            width: "100%",
            paddingLeft: "15px",
            paddingRight: "15px",
            marginTop: "10px",
            maxWidth: "1140px",
          }}
        >
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            CÔNG TY TNHH TM RỒNG BAY PHƯỢNG MÚA - NHÀ PHÂN PHỐI BROOKFIELD TẠI
            VIỆT NAM
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Home;
