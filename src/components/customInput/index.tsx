import { TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

interface Props {
  label: string;
  type: string;
  name: string;
}

function CommonInput({ label, type, name }: Props) {
  return (
    <TextField
      label={label}
      type={type}
      name={name}
      size="medium"
      color={"secondary"}
      sx={{
        margin: "10px",
        borderRadius: "8px",
        color: "#fffff",
        border: "solid 2px #4e0eff",
      }}
      InputProps={{
        sx: {
          color: "white",
          outline: "none",
          "&.MuiOutlinedInput-root": {
            border: "none",
            "& .MuiOutlinedInput": {
              borderColor: "white",
            },
          },
        },
      }}
    ></TextField>
  );
}

export default CommonInput;
