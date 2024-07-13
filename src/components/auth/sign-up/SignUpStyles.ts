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
  gap: 1,
  width: "100%",
  flexDirection: "column",
  mt: 1,
};

export const inputBoxStyles = {
  display: "flex",
  gap: 1,
  width: "100%",
};
