import Link from 'next/link';
import logoLink from '../../../public/veggievision.png';
import Image from 'next/image';

export default function SearchHeader() {
  return (
    <header className="h-24 flex text-center justify-center items-center rounded-b-3xl bg-veggievision-bg">
      <Link href="/">
        <Image width={240} src={logoLink} alt="logo" />
      </Link>
    </header>
  );
}
