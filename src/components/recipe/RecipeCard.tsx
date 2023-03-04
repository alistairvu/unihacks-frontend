import Image from 'next/image';

type RecipeCardProps = {
  id: number;
  title: string;
  image: string;
};

export default function RecipeCard({ id, title, image }: RecipeCardProps) {
  return (
    <div className="my-4 rounded-md bg-white">
      <Image src={image} alt={title} width={320} height={320} />
      <h1 className="text-xl py-2 px-2 w-80">{title}</h1>
    </div>
  );
}
