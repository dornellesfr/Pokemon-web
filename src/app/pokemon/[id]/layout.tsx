import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { Metadata } from "next";

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
    <html lang="pt-br">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className="--font-roboto">{children}</body>
    </html>
  );
}
