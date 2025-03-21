"use client";
import { useGetPokemons } from "@/features/hooks/useGetPokemons";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [limit, setLimit] = useState(15);
  const [offset, setOffset] = useState(0);

  const { data: pokemons, isLoading } = useGetPokemons({ limit, offset });

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Image
          width={300}
          height={200}
          src={"/pokemon_logo.svg"}
          alt="pkemon-logo"
        />
      </Box>

      <Box bgcolor={"#FBFBF8"} borderRadius={"4px"}>
        {/* {pokemons?.map((pokemon, i) => (
          <Box key={`${pokemon.name}-${i}`}>
            <Typography>{pokemon.name}</Typography>
            <Typography>{pokemon.url}</Typography>
          </Box>
        ))} */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Foto</TableCell>
                <TableCell>Nome</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemons?.map((pokemon) => (
                <TableRow
                  key={pokemon.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {pokemon.name}
                  </TableCell>
                  <TableCell align="right">{pokemon.url}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
