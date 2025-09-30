import "./globals.css";

export const metadata = {
  title: "Rivintel Research",
  description: "Pioneering the future of intelligence, data, and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
