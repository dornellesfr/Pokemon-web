import { Divider, Skeleton, Stack } from "@mui/material";

export default function LoadingCardPokemon() {
  return (
    <Stack
      spacing={"5px"}
      sx={{
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{ width: "60%", height: { xs: 120, md: 200, lg: 300 } }}
      />
      <Skeleton variant="text" width="50%" height={30} animation="wave" />
      <Skeleton variant="text" width={80} height={25} animation="wave" />
      <Divider flexItem />
    </Stack>
  );
}
