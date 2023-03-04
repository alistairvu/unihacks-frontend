'use client';

import Image from 'next/image';

type RecipeCardProps = {
  id: number;
  title: string;
  image: string;
  usedIngredients?: string;
};

export default function RecipeCard({
  id,
  title,
  image,
  usedIngredients,
}: RecipeCardProps) {
  const handleClick = async () => {
    const res = await fetch(`/api/recipeInfo?id=${id}`);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    const json = await res.json();

    if (json.link != undefined) {
      window.location.href = json.link;
    }
  };

  return (
    <div className="my-4 rounded-md bg-white" onClick={handleClick}>
      <Image src={image} alt={title} width={320} height={320} />
      <div className="py-2 px-2 w-80 cursor-pointer hover:underline">
        <h1 className="text-xl cursor-pointer underline">{title}</h1>
        <h2>{usedIngredients ?? ''}</h2>
      </div>
    </div>
  );
}
