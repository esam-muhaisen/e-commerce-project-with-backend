import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ProuductDetails = ({clickedProduct}) => {

const [toggleImage, setToggleImage] = useState(0)
const [alignment, setAlignment] = React.useState('left');

const handleAlignment = (event, newAlignment) => {
  if (newAlignment !== null) {
    setAlignment(newAlignment);
  }
};
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2,flexDirection:{xs:"column",sm:"row"} }}>
      <Box sx={{display:"flex"}}>
        <img width={400} src={clickedProduct.attributes.productimage.data[toggleImage].attributes.url} alt=""  />
      </Box>
      
      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">{clickedProduct.attributes.productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${clickedProduct.attributes.productprice}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.attributes.productdescraption}
        </Typography>
        <Stack direction={"row"} gap={1} my={2} justifyContent={{xs:"center",sm:"left"}}>

        <ToggleButtonGroup
        value={toggleImage}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
          ".Mui-selected": {
            border: "1px solid rgba(233,69,96,0.5) !important",
            borderRadius:"5px !important",
            opacity:"1",
            backgroundColor: "initial !important",
          }
        }}
      >
        


          {clickedProduct.attributes.productimage.data.map((item , index) => {
            return (
              <ToggleButton sx={{
                width:"110px",
                height:"110px",
                mx:1,
                p:"0",
                opacity:"0.5"
                
              }} key={item.id} value={index} aria-label="left aligned">
          
        
              <img
                style={{ borderRadius: 3 }}
                height={"100%"}
                width={"100%"}
                
                src={item.attributes.url}
                onClick={()=>setToggleImage(index)}
                alt=""
              />
            </ToggleButton>
            );
            
          })}


</ToggleButtonGroup>

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
