import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../../public/veggievision.png';

export default function HomeHeader() {
  return (
    <header className="h-24 flex text-center justify-center items-center  rounded-b-3xl bg-veggievision-green">
      <Link href="/">
        {/* <h1 className="font-bold text-4xl">veggievision</h1>
      
         */}
        <Image src={logoImage} width={256} height={64} alt="logo" />
      </Link>
    </header>
  );
}
