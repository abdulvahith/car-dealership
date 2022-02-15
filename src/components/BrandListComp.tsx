import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { CarsBrand } from "../container/types";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

interface BrandListCompType {
  data: CarsBrand[];
}

const ImageRendered: React.FC<any> = ({ imgUrl, name }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      {!imgLoaded && (
        <Skeleton variant="rectangular" width={360} height={540} />
      )}
      <CardMedia
        component="img"
        image={imgUrl}
        alt={name}
        sx={
          imgLoaded
            ? { width: "360px", height: "540px", display: "block" }
            : { display: "none" }
        }
        onLoad={() => setImgLoaded(true)}
      />
    </>
  );
};

const BrandListComp: React.FC<BrandListCompType> = ({ data }) => {
  let navigate: NavigateFunction = useNavigate();

  return (
    <Container sx={{ py: 12 }} maxWidth="lg" data-testid="car-detail-container">
      <Grid container spacing={2}>
        {data.map((car: any) => (
          <Grid
            item
            key={car.id}
            xs={12}
            md={4}
            data-testid={`car-detail-item${car.name}`}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ImageRendered
                imgUrl={`https://source.unsplash.com/${car.image}`}
                name={car.name}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{ color: "#12505b" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {car.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    navigate(`car-list/${car.id}`, { replace: true });
                  }}
                >
                  {`View All The Cars From ${car.name}`}
                  <NavigateNextIcon fontSize="large" sx={{ mr: 4 }} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BrandListComp;
