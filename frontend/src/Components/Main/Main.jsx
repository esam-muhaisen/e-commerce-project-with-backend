import {
  Box,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@emotion/react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import Dialog from "@mui/material/Dialog";
import { Close } from "@mui/icons-material";
import ProuductDetails from "./ProuductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
const Main = () => {
  const [open, setOpen] = React.useState(false);
  const allProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";

const [myData, setmyData] = useState(allProductsAPI)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [alignment, setAlignment] = React.useState("left");
  const theme = useTheme();
  const handleAlignment = (event, newValue) => {
    setAlignment(newValue)
    setmyData(newValue);
  };


  const { data, error, isLoading } = useGetproductByNameQuery(
    myData
  );

  if(error){
    return(
      <Typography variant="h6">
      {error.
// @ts-ignore
      message}
    </Typography>
    )

  }
  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography variant="body1" fontWeight={300}>
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={myData}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233,69,96,0.5) !important",
              color: "#e94560",
              backgroundColor: "initial !important",
            },
          }}
        >
          <ToggleButton
            // @ts-ignore
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value={allProductsAPI}
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>
          <ToggleButton
            // @ts-ignore
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value={menCategoryAPI}
            aria-label="centered"
          >
            MEN category
          </ToggleButton>
          <ToggleButton
            // @ts-ignore
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value={womenCategoryAPI}
            aria-label="right aligned"
          >
            Women category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {isLoading
          ? "loading..."
          : data.data.map((item) => {
              return (
                <Card
                  key={item.id}
                  sx={{
                    maxWidth: 333,
                    mt: 6,
                    ":hover .MuiCardMedia-root": {
                      rotate: "1deg",
                      scale: "1.1",
                      transition: "0.35s",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 277 }}
                    image={`${item.attributes.productimage.data[0].attributes.url}`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography gutterBottom variant="h6" component={"div"}>
                        {item.attributes.productTitle}
                      </Typography>
                      <Typography variant="subtitle1" component={"p"}>
                        ${item.attributes.productprice}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {item.attributes.productdescraption}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      onClick={handleClickOpen}
                      sx={{ textTransform: "capitalize" }}
                      size="large"
                    >
                      <AddShoppingCartOutlinedIcon
                        sx={{ mr: 1 }}
                        fontSize="small"
                      />
                      add to cart
                    </Button>

                    <Rating
                      precision={0.5}
                      name="read-only"
                      value={item.attributes.productRating}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.5s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
        >
          <Close />
        </IconButton>
        <ProuductDetails />
      </Dialog>
    </Container>
  );
};

export default Main;
