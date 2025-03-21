"use client";
import CharacteristicsCard from "@/components/general/CharacteristicsCard";
import Sprites from "@/components/general/Sprites";
import { useGetPokemon } from "@/features/hooks/useGetPokemon";
import { Box, Divider, Skeleton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useParams } from "next/navigation";

export default function Home() {
  const { id } = useParams();

  const { data: pokemon, isLoading } = useGetPokemon(String(id));

  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          bgcolor: "#FBFBF8",
          width: "90%",
          height: "90vh",
          borderRadius: "4px",
          alignItems: "center",
          padding: "20px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#919191",
            borderRadius: "20px",
          },
        }}
      >
        {isLoading ? (
          <Skeleton variant="rectangular" height={"20px"} width={"150px"} />
        ) : (
          <Typography sx={{ fontSize: "25px" }}>
            {pokemon?.name?.toUpperCase()}
          </Typography>
        )}
        <Box
          component={"img"}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemon-img"
          sx={{
            width: "30%",
            maxWidth: "50%",
            height: "auto",
            borderRadius: 2,
            marginBottom: "20px",
          }}
        />
        <Divider flexItem />
        <Grid container spacing={2} sx={{ margin: 2 }}>
          <Grid size={{ xs: 12 }}>
            <CharacteristicsCard data={pokemon?.weight} type={"weight"} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CharacteristicsCard data={pokemon?.height} type={"height"} />
          </Grid>
          {pokemon?.types.map(({ type, slot }, index) => (
            <Grid size={{ xs: 12 }} key={`${slot}-${type}-${index}`}>
              <CharacteristicsCard
                data={type.name.toLocaleUpperCase()}
                type={`Type ${index + 1}`}
              />
            </Grid>
          ))}
          {pokemon?.abilities?.map(({ ability, slot }, index) => (
            <Grid size={{ xs: 12 }} key={`${slot}-${ability}-${index}`}>
              <CharacteristicsCard
                data={ability.name.toLocaleUpperCase()}
                type={`Ability ${index + 1}`}
              />
            </Grid>
          ))}
          <Grid size={{ xs: 6 }}>
            <Sprites img={pokemon?.sprites?.front_default} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Sprites img={pokemon?.sprites?.back_default} />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
