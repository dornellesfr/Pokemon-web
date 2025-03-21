import { Stack, Typography } from "@mui/material";

export default function CharacteristicsCard({
  type,
  data,
}: {
  type: string;
  data?: number | string;
}) {
  return (
    <Stack
      sx={{
        border: "1px solid #e7e7e7",
        padding: {
          xs: "5px",
          md: "15px",
        },
        borderRadius: "4px",
        flexDirection: "column",
        height: "auto",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "1.2rem",
            md: "1.5rempx",
          },
        }}
      >
        {data}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "0.8rem",
            md: "1.1rempx",
          },
        }}
      >
        {type.toLocaleUpperCase()}
      </Typography>
    </Stack>
  );
}
