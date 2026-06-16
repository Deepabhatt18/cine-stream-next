import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "CineStream",
  description: "Popular movies, search aur favorites ek jagah",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}