import "./globals.css";

export const metadata = {
  title: "BrightMind Digital | AI Agents & Web Design | Hastings, East Sussex",
  description: "AI agents and web design for small and medium businesses in Hastings and East Sussex.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
