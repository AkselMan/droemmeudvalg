import localFont from "next/font/local";
import "./globals.css";
import { Calistoga, Lora } from "next/font/google"



export const metadata = {
  title: "Drømmeudvalget",
  description: "Lavet som del af Aksel fra 2.K Drømmeudvalg ansøgning 2024.",
};

const calistoga = Calistoga({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-calistoga"
});
const lora = Lora({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-lora"
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <body
        className={`${calistoga.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
