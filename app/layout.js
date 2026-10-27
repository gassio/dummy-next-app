export const metadata = {
  title: "Dummy Next App",
  description: "A tiny demo for trying out Vercel deploys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
