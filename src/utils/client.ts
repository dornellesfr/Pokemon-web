import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

const restClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export { queryClient, restClient };
