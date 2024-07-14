export const outerBoxStyles = {
  display: "flex",
  flexDirection: {
    xs: "column", // mobile devices
    sm: "row", // tablets and up
  },
  height: "100vh",
  overflow: "hidden",
  // justifyContent: "center",
};

export const innerBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  p: 4,
  justifyContent: {
    sm: "center", // tablets and up
  },
  mt: {
    xs: 3,
    sm: 0,
  },
  width: {
    sm: "50%",
  },
};

export const iconBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const typographyHiStyles = {
  color: "primary.main",
  fontSize: 30,
  fontWeight: "bold",
};

export const typographyInfoStyles = {
  color: "primary.main",
};

export const formContainerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  mt: 2,
  width: "100%",
};

export const textFieldStyles = {
  "& fieldset": {
    borderColor: "primary.main",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "primary.main",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary.main",
    },
  },
};

export const buttonSubmitStyles = {
  "&:hover": {
    backgroundColor: "primary.dark",
  },
  "&:active": {
    backgroundColor: "primary.dark",
  },
  bgcolor: "primary.dark",
  py: 1 / 2,
  px: 4,
  my: 1 / 2,
  color: "primary.light",
  borderRadius: 3,
};
