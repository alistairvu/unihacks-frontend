import './globals.css';

export const metadata = {
  title: 'BLACKRED',
  description: 'in your area',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
