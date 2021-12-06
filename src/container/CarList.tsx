import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { data } from "../constants/appConstants";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Link } from "@mui/material";
import { Cars, CarsBrand } from "./types";
import { Toastr, CarListHeader } from "./style";
import CarListComp from "../components/CarListComp";

const CarList: React.FC<any> = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState<Cars[]>([]);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  useEffect(() => {
    const res: CarsBrand = data.find((cars) => cars.id === id) as CarsBrand;
    setCarDetails(res?.carList);
  }, [id]);

  return (
    <>
      <div
        role="presentation"
        onClick={() => undefined}
        style={{
          position: "relative",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" href="/" color="black">
            <IconButton aria-label="Example">
              <NavigateBeforeIcon />
            </IconButton>
            <span
              style={{
                position: "absolute",
                top: "10px",
              }}
            >
              Select Brand
            </span>
          </Link>
        </Breadcrumbs>
      </div>
      {showSuccess && (
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() => setShowSuccess(false)}
        >
          <Toastr onClose={() => setShowSuccess(false)} severity="success">
            Our team will contact you soon!
          </Toastr>
        </Snackbar>
      )}

      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <CarListHeader variant="h4" align="left" color="text.primary">
          Select {id} car below
        </CarListHeader>
      </Box>
      <CarListComp carDetails={carDetails} setShowSuccess={setShowSuccess} />
    </>
  );
};

export default CarList;
