import { Box,  InputAdornment, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../shared/PrimaryButton";
import { Link } from "react-router-dom";
import CancelButton from "../shared/CancelButton";

interface ISignUpNextScreenProps {}
const SignUpNextScreen: React.FC<ISignUpNextScreenProps> = ({}) => {
  return (
    <>
      <Stack minHeight={"100vh"} spacing={2} textAlign={"center"} padding={2}>
        <Stack pt={4} spacing={4} textAlign={"left"}>
          <Typography variant="h2" fontWeight={600} color={"#6b9080"}>
            Logo
          </Typography>
          <Typography variant="h4" fontWeight={600}>
            Sign Up
          </Typography>
        </Stack>
        <TextField
          sx={{ background: "white" }}
          placeholder="Phone"
          fullWidth
        ></TextField>
        <TextField
          sx={{ background: "white" }}
          placeholder="OTP"
          autoComplete="none"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <CancelButton variant="text" sx={{fontWeight: '600'}}>Send</CancelButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          sx={{ background: "white" }}
          placeholder="Email ID"
          fullWidth
        ></TextField>
        <TextField
          sx={{ background: "white" }}
          placeholder="Invite Code (Optional)"
          fullWidth
        ></TextField>

        <PrimaryButton variant="contained" href="/">
          Sign Up
        </PrimaryButton>
      </Stack>
      <Box display={"flex"} justifyContent={"center"} pb={2}>
        <Typography variant="body1" fontWeight={600}>
          Already have an account?
        </Typography>
        &nbsp;
        <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>
          <Typography color={"#6b9080"} variant="body1" fontWeight={600}>
            Log in
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default SignUpNextScreen;
