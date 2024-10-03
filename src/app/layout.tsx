import { Providers } from './providers'
import { fonts } from './fonts'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunset Quiz",
  description: "Online quiz application, developed by 'sunset-arcade'",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr" className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
