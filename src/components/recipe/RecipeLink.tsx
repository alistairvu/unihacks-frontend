'use client';

type RecipeLinkProps = {
  id: number;
  title: string;
};

export default function RecipeLink({ id, title }: RecipeLinkProps) {
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
    <h1 className="text-xl py-2 px-2 w-80" onClick={handleClick}>
      {title}
    </h1>
  );
}
