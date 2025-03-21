import { PokemonCardProps } from "@/interfaces/pokemonsApi";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function PokemonCard({ id, name, isLoading }: PokemonCardProps) {
  const router = useRouter();

  return (
    <>
      <Stack
        sx={{
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          onClick={() => {
            router.push(`/pokemon/${id}`);
          }}
          component="img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="Descrição da imagem"
          sx={{
            width: "60%",
            maxWidth: "70%",
            height: "auto",
            borderRadius: 2,
            transition: "width 0.3s ease-in-out",
            cursor: "pointer",
            ":hover": {
              width: "75%",
            },
          }}
        />
        <Typography>{name}</Typography>
        <Button
          onClick={() => {
            router.push(`/pokemon/${id}`);
          }}
        >
          Ver detalhes
        </Button>
      </Stack>
      <Divider flexItem />
    </>
  );
}
