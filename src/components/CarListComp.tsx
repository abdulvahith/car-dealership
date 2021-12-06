import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Cars } from "../container/types";
import { CardWrapper } from "./style";

interface BrandListCompType {
  carDetails: Cars[];
  setShowSuccess: (input: boolean) => void;
}

const CarListComp: React.FC<BrandListCompType> = ({
  carDetails,
  setShowSuccess,
}) => {
  return (
    <>
      {carDetails &&
        carDetails.map((car: any) => {
          return (
            <CardWrapper key={car.id}>
              <CardMedia
                component="img"
                sx={{ width: 400, height: 300 }}
                image={`https://source.unsplash.com/${car.image}`}
                alt={car.name}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="h1"
                    variant="h5"
                    align="left"
                    color="teal"
                    gutterBottom
                  >
                    {car.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    align="left"
                    component="div"
                  >
                    Price: &#x20B9; {car.price}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    align="left"
                  >
                    Type: {car.type}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    align="left"
                  >
                    Speed: &#x20B9; {car.speed}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    align="left"
                  >
                    CC: &#x20B9; {car.cc}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    align="left"
                  >
                    Fuel Type: &#x20B9; {car.fuelType}
                  </Typography>
                </CardContent>
                <Grid>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ marginRight: "10px" }}
                    id="buy"
                    data-testid="buy-now"
                    value="Buy-Now"
                    onClick={() => setShowSuccess(true)}
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="contained"
                    id="contact"
                    onClick={() => setShowSuccess(true)}
                  >
                    Contact Support
                  </Button>
                </Grid>
              </Box>
            </CardWrapper>
          );
        })}
    </>
  );
};

export default CarListComp;
