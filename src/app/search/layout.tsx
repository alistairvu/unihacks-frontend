import SearchHeader from '~/components/search/SearchHeader';

export const metadata = {
  title: 'veggievision',
  description: 'in your area',
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SearchHeader />
        {children}
      </body>
    </html>
  );
}
