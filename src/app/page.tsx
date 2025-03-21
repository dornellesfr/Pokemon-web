"use client";
import LoadingCardPokemon from "@/components/general/LoadingCardPokemon";
import PokemonCard from "@/components/general/PokemonCard";
import { useGetPokemons } from "@/features/hooks/useGetPokemons";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [limit, _] = useState(9);
  const [offset, setOffset] = useState(0);

  const { data: pokemons, isLoading } = useGetPokemons({ limit, offset });

  useEffect(() => {
    const offsetSaved = localStorage.getItem("offset-pokemon");
    if (offsetSaved) {
      setOffset(Number(offsetSaved));
    }
  }, []);

  function handleOffsetNext() {
    const currentOffset = offset + limit;
    setOffset(currentOffset);
    localStorage.setItem("offset-pokemon", JSON.stringify(currentOffset));
  }

  function handleOffsetPreview() {
    const currentOffset = offset - limit;
    if (currentOffset < 0) {
      setOffset(0);
      localStorage.setItem("offset-pokemon", JSON.stringify(0));
    } else {
      setOffset(currentOffset);
      localStorage.setItem("offset-pokemon", JSON.stringify(currentOffset));
    }
  }

  function goToFirstPage() {
    setOffset(0);
    localStorage.setItem("offset-pokemon", JSON.stringify(0));
  }

  return (
    <Stack
      sx={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Box
        component="img"
        src={"/pokemon_logo.svg"}
        alt="Descrição da imagem"
        sx={{
          width: "50%",
          maxWidth: "50%",
          height: "auto",
          borderRadius: 2,
          padding: "0 0 20px 0",
        }}
      />

      <Stack
        sx={{
          bgcolor: "#FBFBF8",
          borderRadius: "4px",
          width: "65%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ textAlign: "center", padding: "15px" }}>
          Conheça e se encante com os pokemons!
        </Typography>

        <Divider flexItem />

        {isLoading
          ? Array.from({ length: 5 }).map((_, i: number) => (
              <LoadingCardPokemon key={i} />
            ))
          : pokemons?.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                isLoading={isLoading}
              />
            ))}
        <Stack
          sx={{
            width: "100%",
            padding: "20px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NavigateBeforeIcon
            onClick={handleOffsetPreview}
            sx={{
              fontSize: "30px",
              ":hover": {
                cursor: offset === 0 ? "not-allowed" : "pointer",
                color: offset === 0 ? "#d3d3d3" : "#1976d2",
              },
            }}
          />
          <Button onClick={goToFirstPage}>Página inicial</Button>
          <NavigateNextIcon
            onClick={handleOffsetNext}
            sx={{
              fontSize: "30px",
              ":hover": {
                cursor: "pointer",
                color: "#1976d2",
              },
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
