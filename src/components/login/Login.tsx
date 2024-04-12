import { Box, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PrimaryButton from "../shared/PrimaryButton";

const Login = () => {
  return (
    <>
      <Stack minHeight={"100vh"} spacing={2} textAlign={"center"} padding={2}>
        <Stack pt={4} spacing={4} textAlign={"left"}>
          <Typography variant="h2" fontWeight={600} color={"#6b9080"}>
            Logo
          </Typography>
          <Typography variant="h4" fontWeight={600}>
            Login
          </Typography>
        </Stack>
        <TextField
          sx={{ background: "white" }}
          placeholder="Phone"
          autoComplete="none"
          fullWidth
        ></TextField>
        <TextField
          sx={{ background: "white" }}
          placeholder="Password"
          autoComplete="none"
          fullWidth
        ></TextField>
        <Box textAlign={"right"}>
          <Link to={"#"} style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="body2" fontWeight={600}>
              Forgot Password?
            </Typography>
          </Link>
        </Box>
        <PrimaryButton variant="contained" href="/">Login</PrimaryButton>
      </Stack>
      <Box
        display={"flex"}
        justifyContent={"center"}
        pb={2}
      >
        <Typography variant="body1" fontWeight={600}>
          Don't have an account?
        </Typography>
        &nbsp;
        <Link to={"/signup"} style={{ textDecoration: "none", color: "black" }}>
          <Typography color={"#6b9080"} variant="body1" fontWeight={600}>
            Sign up
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default Login;
