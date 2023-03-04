import Image from 'next/image';
import RecipeLink from './RecipeLink';

type RecipeCardProps = {
  id: number;
  title: string;
  image: string;
};

export default function RecipeCard({ id, title, image }: RecipeCardProps) {
  return (
    <div className="my-4 rounded-md bg-white">
      <Image src={image} alt={title} width={320} height={320} />
      <RecipeLink id={id} title={title} />
    </div>
  );
}
