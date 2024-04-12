import { Box, Button } from "@mui/material";
import FooterMenu from "../shared/FooterMenu";
import { Link } from "react-router-dom";
const Funds = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", minHeight: "100vh" }}>
        <h1>404</h1>
        <Link to={"/login"}>
          <Button variant="outlined" disableRipple>
            Log out!
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          textAlign: "right",
          position: "sticky",
          bottom: "0px",
        }}
      >
        <FooterMenu activeIconName={"Funds"} />
      </Box>
    </>
  );
};

export default Funds;
