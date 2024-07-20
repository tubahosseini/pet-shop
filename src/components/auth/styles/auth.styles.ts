export const outerBoxStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  height: "100vh",
  overflow: "hidden",
};

export const innerBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "start",
  width: {
    sm: "50%",
  },
  px: { xs: 4, md: 14 },
  mt: { xs: 2, sm: 14 },
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
  mb: 2,
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
  mb: {
    xs: 1,
    sm: 2,
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
  mt: 1,
  color: "primary.light",
  borderRadius: 3,
};

export const imageBoxStyles = {
  position: "absolute",
  bottom: 0,
  mt: 2,
  width: {
    xs: "250px",
    sm: "380px",
  },
  height: {
    xs: "115px",
    sm: "135px",
    md: "200px",
  },
};

export const ChangeAuthContainer = {
  width: {
    xs: "100%",
    sm: "50%",
  },
  bgcolor: "primary.main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: {
    xs: "start",
    sm: "center",
  },
  position: {
    xs: "fixed",
    sm: "relative",
  },
  bottom: 0,
  p: 1,
  height: {
    xs: 190,
    sm: "auto",
  },
  borderTopLeftRadius: {
    xs: 80,
    sm: 0,
  },
  borderTopRightRadius: {
    xs: 80,
    sm: 0,
  },
  borderBottomLeftRadius: {
    xs: 0,
    sm: 80,
  },
};

export const changeAuthButtonStyles = {
  "&:hover": {
    backgroundColor: "primary.dark",
  },
  "&:active": {
    backgroundColor: "primary.dark",
  },
  bgcolor: "primary.dark",
  py: 1 / 2,
  px: 4,
  m: 1 / 2,
  color: "primary.light",
  borderRadius: 3,
};

export const mobileStepperStyles = {
  maxWidth: 400,
  flexGrow: 1,
  position: "fixed",
  bottom: { xs: 200, sm: 100 },
};
