import HomeHeader from '~/components/home/HomeHeader';
import HomeBody from '../components/home/HomeBody';

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-home-background">
      <HomeHeader />
      <HomeBody />
    </div>
  );
}
