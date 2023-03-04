import './globals.css';
import { Work_Sans, Biryani, Arsenal } from 'next/font/google';

export const metadata = {
  title: 'veggievision',
  description: 'in your area',
};

const workSans = Work_Sans({
  variable: '--font-work-sans',
  display: 'swap',
  subsets: ['latin', 'vietnamese'],
});

const biryani = Biryani({
  variable: '--font-biryani',
  display: 'swap',
  subsets: ['latin'],
  weight: ['300'],
});

const arsenal = Arsenal({
  variable: '--font-arsenal',
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${biryani.variable} ${arsenal.variable}`}
    >
      <body className="font-arsenal">{children}</body>
    </html>
  );
}
