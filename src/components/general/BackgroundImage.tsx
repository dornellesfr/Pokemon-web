import { Box } from "@mui/material";

export default function BackgroundImage() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/pokemon_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "blur(5px)",
        zIndex: -1,
      }}
    />
  );
}
