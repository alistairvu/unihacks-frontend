import Link from 'next/link';
import LogoIcon from '../icons/LogoIcon';
import logoLink from '../../../public/veggievision.png';
import Image from 'next/image';

export default function HomeHeader() {
  return (
    <header className="h-24 flex text-center justify-center items-center  rounded-b-3xl bg-veggievision-green">
      <Link href="/">
        {/* <h1 className="font-bold text-4xl">veggievision</h1>
      
         */}

        <Image width={240} src={logoLink} alt="logo" />
      </Link>
    </header>
  );
}
