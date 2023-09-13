import React from "react";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img16 from "../../images/banner-16.jpg";
import img17 from "../../images/banner-17.jpg";
import img15 from "../../images/banner-15.jpg";
import img25 from "../../images/banner-25.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import IconSection from "./IconSection";
// import IconSection from "./IconSection";





const mySlider = [
  {
    text: "MEN",
    link: img15,
  },
  {
    text: "WOMEN",
    link: img25,
  },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Box sx={{pt:1}}>
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 1 }}>
      <Swiper
        loop={true}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {mySlider.map((item) => {
          return (
            <SwiperSlide key={item.link} className="parent-slider">
              <img src={item.link} alt="" />
              <Box
                sx={{
                  [theme.breakpoints.up("sm")]: {
                    position: "absolute",
                    left: "10%",
                    textAlign: "start",
                  },
                  [theme.breakpoints.down("sm")]: {
                    pt: 4,
                    pb: 6,
                  },
                }}
                //   sx={{  }}
              >
                <Typography sx={{ color: "#222" }} variant="h5">
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography
                  sx={{ color: "#222", fontWeight: "400", my: 1 }}
                  variant="h3"
                >
                  {item.text}
                </Typography>
                <Stack
                  sx={{ justifyContent: "center" }}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography color={"#333"} mr={1} variant="h4">
                    SALE UP TP
                  </Typography>
                  <Typography color={"#D23f57"} variant="h4">
                    30% OFF
                  </Typography>
                </Stack>
                <Typography
                  sx={{ color: "#000", fontWeight: 300, my: 1 }}
                  variant="body1"
                >
                  Get Free Shipping on orders over $99.00
                </Typography>
                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    "&:hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                    },
                  }}
                  variant="contained"
                >
                  SHOP NOW
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.7%" } }}>
        <Box sx={{ position: "relative", mt: "8px" }}>
          <img width={"100%"} src={img16} alt="" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={img17} width={"100%"} alt="" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              GAMING 4K
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              <Box> DESKTOP & </Box>
              <Box sx={{ mt: "4px" }}>LAPTOPS</Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
      
    </Container>

    <IconSection/>

    </Box>
  );
};

export default Hero;
