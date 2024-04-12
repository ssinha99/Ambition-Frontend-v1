import {
  Box,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";
import { Link } from "react-router-dom";
import SignUpNextScreen from "./SignUpNextScreen";

interface ISignUpProps {}
const SignUp: React.FC<ISignUpProps> = ({}) => {
  const [showNextScreen, setShowNextScreen] = useState<boolean>(false);
  return (
    <>
      {showNextScreen ? (
        <SignUpNextScreen />
      ) : (
        <>
          <Stack
            minHeight={"100vh"}
            spacing={2}
            textAlign={"center"}
            padding={2}
          >
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
              placeholder="Name"
              autoComplete="none"
              fullWidth
            ></TextField>
            <Select
              sx={{ background: "white", textAlign: "left" }}
              defaultValue={"Male"}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Female"}>Other</MenuItem>
            </Select>
            <TextField
              sx={{ background: "white" }}
              placeholder="Age"
              autoComplete="none"
              fullWidth
            ></TextField>

            <PrimaryButton variant="contained" onClick={() => setShowNextScreen(true)}>
              Next
            </PrimaryButton>
          </Stack>
          <Box display={"flex"} justifyContent={"center"} pb={2}>
            <Typography variant="body1" fontWeight={600}>
              Already have an account?
            </Typography>
            &nbsp;
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography color={"#6b9080"} variant="body1" fontWeight={600}>
                Log in
              </Typography>
            </Link>
          </Box>
        </>
      )}
    </>
  );
};

export default SignUp;
