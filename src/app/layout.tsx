import "./globals.css";
import StyleRegistry from "./lib/registry";


export const metadata = {
  title: "StarApp",
  description: "Uma enciclopédia online de Star Wars de filmes, séries, documentários e personagens.",
  icons: {
    icon: '/star_.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StyleRegistry>{children}</StyleRegistry>
      </body>
    </html>
  );
}
