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
    <div className="my-4 rounded-3xl bg-white" onClick={handleClick}>
      <Image
        src={image}
        alt={title}
        width={320}
        height={320}
        className="rounded-3xl"
      />
      <div className="py-4 px-4 w-80 cursor-pointer hover:underline">
        <h1 className="text-xl cursor-pointer py-2 font-biryani">{title}</h1>
        <h2 className="font-biryani text-sm">{usedIngredients ?? ''}</h2>
      </div>
    </div>
  );
}
