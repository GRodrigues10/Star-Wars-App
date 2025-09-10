import "./globals.css";
import StyleRegistry from "./lib/registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyleRegistry>{children}</StyleRegistry>
      </body>
    </html>
  );
}
