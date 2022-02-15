import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "@mui/material";

const theme = createTheme();

const BrandList = lazy(() => import("./container/BrandList"));
const CarList = lazy(() => import("./container/CarList"));

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="relative"
        sx={{
          background: "#FF8C00",
        }}
      >
        <Toolbar>
          <Link underline="hover" href="/" color="black">
            <DirectionsCarIcon fontSize="large" sx={{ mr: 4 }} />
          </Link>
          <Typography variant="h6" color="inherit" noWrap>
            Car-Dealership
          </Typography>
        </Toolbar>
      </AppBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<BrandList />} />
          <Route path="car-list/:id" element={<CarList />} />
        </Routes>
      </Suspense>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Get In Touch
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          contact: cardealer@test.com
        </Typography>
      </Box>
    </ThemeProvider>
  </div>
);

export default App;
