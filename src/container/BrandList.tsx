import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { data } from "../constants/appConstants";
import BrandListComp from "../components/BrandListComp";
import debounce from "lodash.debounce";

const BrandList: React.FC<any> = () => {
  const [searchInput, setSearchInput] = useState("");
  const [listData, setListData] = useState([...data]);

  const onChangeRef = useRef({
    onChange: debounce((searchTerm: string) => {
      const searchResp = data.filter((carDetail) =>
        carDetail.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setListData(searchResp);
    }, 500),
  });

  const handleSearch = (e: any) => {
    setSearchInput(e.target.value);
    onChangeRef.current.onChange(e.target.value);
  };

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
          <TextField
            onChange={handleSearch}
            value={searchInput}
            fullWidth
            label="Search your car here"
            data-testid="search-box"
          />
        </Container>
      </Box>
      <BrandListComp data={listData} />
    </main>
  );
};

export default BrandList;
