import Link from 'next/link';
import logoLink from '../../../public/veggievision.png';
import Image from 'next/image';
import BackIcon from '../icons/BackIcon';

export default function SearchHeader() {
  return (
    <header className="h-24 flex text-center justify-between px-4 items-center rounded-b-3xl bg-veggievision-bg sticky top-0 z-30 w-full">
      <Link href="/">
        <BackIcon className="w-8 h-8 mt-2" />
      </Link>
      <Link href="/">
        <Image width={180} src={logoLink} alt="logo" />
      </Link>
    </header>
  );
}
