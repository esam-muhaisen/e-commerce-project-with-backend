import React, { Children } from "react";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const data = [
  {
    icon: <ElectricBoltIcon style={{fontSize:"35px"}} />,
    title: "Fast Delivery",
    subTitle: "Start from $10",
  },
  {
    icon: <CreditScoreOutlinedIcon  style={{fontSize:"35px"}}/>,
    title: "Money Guarantee",
    subTitle: "7 Days Back",
  },
  {
    icon: <WorkspacePremiumOutlinedIcon  style={{fontSize:"35px"}}/>,
    title: "365 Days",
    subTitle: "For free return",
  },
  {
    icon: <AccessAlarmOutlinedIcon  style={{fontSize:"35px"}}/>,
    title: "Payment",
    subTitle: "Secure system",
  },
];
const IconSection = () => {
  const theme = useTheme();

  return (
    <Container >
      <Stack
      sx={{bgcolor: theme.palette.mode === "dark"?"#000":"#fff",mt:1.2}}
        divider={useMediaQuery('(min-width:900px)')?<Divider orientation="vertical" flexItem />:null}
        direction={"row"}
        flexWrap="wrap"
        alignItems={"center"}
      >
        {data.map((item) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                width: 200,
                alignItems: "center",
                gap: 3,
                justifyContent: "center",
                py: 1,
              }}
              key={item.title}
            >
              {item.icon}
              <Box>
                <Typography variant="body1">{item.title}</Typography>
                <Typography
                  sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
                  variant="body1"
                >
                  {item.subTitle}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
};

export default IconSection;
