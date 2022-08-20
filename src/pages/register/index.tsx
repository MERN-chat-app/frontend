import {
  Card,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CommonInput from "../../components/customInput";

const registerForm = [
  { label: "Username", type: "text", name: "username" },
  { label: "Email", type: "email", name: "email" },
  { label: "Password", type: "password", name: "password" },
  { label: "Re-password", type: "password", name: "re-password" },
];

function Register() {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#131324",
      }}
    >
      <Card
        sx={{ width: "500px", padding: "20px", backgroundColor: "#00000076" }}
      >
        <Typography
          component={"h3"}
          variant={"h3"}
          sx={{ textAlign: "center", color: "#ffffff" }}
        >
          Register
        </Typography>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "40px 20px",
          }}
        >
          {registerForm.map((el, i) => (
            <CommonInput
              key={i}
              label={el.label}
              type={el.type}
              name={el.name}
            />
          ))}
        </FormControl>
      </Card>
    </Container>
  );
}

export default Register;
