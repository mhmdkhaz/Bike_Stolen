import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    textAlign: 'right',
    "&::placeholder": {
      color: theme.palette.text.secondary,
      opacity: 0.7
    },
    color: theme.palette.text.primary, 
    borderRadius: "14px !important",
    height: "0.7rem",
  },
  "& label": {
    color: theme.palette.primary.main, 
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      // borderColor: theme.palette.origin.main,
    },
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    // borderColor: theme.palette.origin.main,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "14px",
    // borderColor: theme.palette.text.main,
  },
  "& .MuiFormHelperText-root": {
    textAlign: "right",
    direction: "rtl", 
    marginRight: "8px", 
  },
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      // borderColor: theme.palette.origin.main,
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      // borderColor: theme.palette.origin.main,
    },
  },
}));
