import Link from 'next/link';

export default function HomeHeader() {
  return (
    <header className="h-24 flex text-center justify-center items-center bg-green-400 rounded-b-3xl">
      <Link href="/">
        <h1 className="font-bold text-4xl">veggievision</h1>
      </Link>
    </header>
  );
}
