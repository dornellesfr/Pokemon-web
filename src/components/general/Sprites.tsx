import { Box, Skeleton, Stack } from "@mui/material";

export default function Sprites({ img }: { img?: string | null }) {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
      {img ? (
        <Box
          component="img"
          src={img ?? ""}
          alt="front-pokemon"
          sx={{
            width: "80%",
            height: "auto",
            borderRadius: 2,
          }}
        />
      ) : (
        <Skeleton variant="rectangular" height={60} width={60} />
      )}
    </Stack>
  );
}
