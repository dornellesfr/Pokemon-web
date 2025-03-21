"use client";
import { Button } from "@mui/material";
import { useParams } from "next/navigation";

export default function Home() {
  const { id } = useParams();

  return <Button>{id}</Button>;
}
