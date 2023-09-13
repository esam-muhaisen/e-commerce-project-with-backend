import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import { AddShoppingCartOutlined } from "@mui/icons-material";

const ProuductDetails = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2,flexDirection:{xs:"column",sm:"row"} }}>
      <Box sx={{display:"flex"}}>
        <img width={400} src={img1} alt=""  />
      </Box>
      
      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">WOMENS FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $12.99
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          molestiae quam accusantium, magni necessitatibus incidunt tempore
          porro officia? Iure, ipsa. Libero rem, vero dolorum modi eveniet
          perferendis cupiditate dicta iure.
        </Typography>
        <Stack direction={"row"} gap={1} my={2} justifyContent={{xs:"center",sm:"left"}}>
          {[img1, img2].map((item) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                height={100}
                width={90}
                key={item}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProuductDetails;
