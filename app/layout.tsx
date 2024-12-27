import Nav from "@/app/navbar/nav";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
