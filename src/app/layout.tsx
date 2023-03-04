import './globals.css';

export const metadata = {
  title: 'veggievision',
  description: 'in your area',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-veggievision-bg">{children}</body>
    </html>
  );
}
