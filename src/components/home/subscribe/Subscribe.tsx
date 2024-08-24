import { Box, Typography } from "@mui/material";
import Image from "next/image";
import whiteBullDog from "@/assets/images/home/whiteBullDog.svg";
import TextFieldWithButton from "./TextFieldWithButton";

export default function Subscribe() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "primary.light",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 600,
        borderRadius: 10,
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",
        position: "relative",
        flexDirection: { xs: "column-reverse", sm: "row" },
      }}
    >
      <Box sx={{ position: "relative", width: 200, height: 200 }}>
        <Image
          src={whiteBullDog}
          alt="a picture of white bulldog"
          layout="fill"
          objectFit="cover"
        />
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-500%, -40%) rotate(-45deg)",
            color: "primary.light",
            fontSize: 40,
            animation: "fade 2s infinite",
            animationDelay: "0s",
          }}
        >
          |
        </Typography>

        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-170%, -60%) rotate(-10deg)",
            color: "primary.light",
            fontSize: 40,
            animation: "fade 2s infinite",
            animationDelay: "0.2s",
          }}
        >
          |
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(110%, -60%) rotate(15deg)",
            color: "primary.light",
            fontSize: 40,
            animation: "fade 2s infinite",
            animationDelay: "0.4s",
          }}
        >
          |
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(400%, -40%) rotate(45deg)",
            color: "primary.light",
            fontSize: 40,
            animation: "fade 2s infinite",
            animationDelay: "0.6s",
          }}
        >
          |
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
          mt: { xs: 2, sm: 0 },
        }}
      >
        <Typography sx={{ marginY: "auto", fontSize: 30, marginX: 2 }}>
          Get Offers Straight <br /> To Your Inbox!
        </Typography>
        <TextFieldWithButton />
      </Box>
    </Box>
  );
}
