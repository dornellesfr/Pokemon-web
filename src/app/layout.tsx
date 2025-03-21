import BackgroundImage from "@/components/general/BackgroundImage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Pokemon website",
  description: "Jeito divertido de visualizar seus pokemons!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="pt-br">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <body>
          <BackgroundImage />
          <CssBaseline />
          {children}
        </body>
      </html>
    </Providers>
  );
}
