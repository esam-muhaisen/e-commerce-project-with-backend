import { ColorModeContext, useMode } from "./theme";
import Headermain from "./sections/Header/Headermain"
import { Box, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import HeroSection from "./sections/Hero/HeroSection";
import Mainsection from "./sections/Main/Mainsection";
import Footersection from "./sections/Footer/Footersection";
import ScrollToTop from "./Components/ScrollToTop";
import { motion } from "framer-motion"
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
  <ThemeProvider 
// @ts-ignore
  theme={theme}>
  <CssBaseline />

  {/* <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:5}} className="border">
    Esam Muhaisen
  </motion.div> */}
  
    <div className="App">
     <Headermain/>
     <Box bgcolor={theme.
// @ts-ignore
     palette.bg.main}>
     <HeroSection/>
     <Mainsection/>
     </Box>
     <Footersection/>


     <ScrollToTop/>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
