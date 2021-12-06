import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { data } from "../constants/appConstants";
import BrandListComp from "../components/BrandListComp";

const BrandList: React.FC<any> = () => {
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Select Your Car Brand Below
          </Typography>
        </Container>
      </Box>
      <BrandListComp data={data} />
    </main>
  );
};

export default BrandList;
