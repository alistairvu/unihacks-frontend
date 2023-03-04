import RecipeCard from '~/components/recipe/RecipeCard';
import { capitalizeFirstLetter } from '~/utils/string';

async function getRecipes(ingredient: string) {
  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.RECIPE_API}&ingredients=${ingredient}`;
  const res = await fetch(url);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const json = await res.json();
  console.log(process.env);

  return json.map((e: any) => ({
    id: e.id,
    title: e.title,
    image: e.image,
  }));
}

export default async function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let data = null;

  if (searchParams?.query) {
    data = await getRecipes(searchParams.query as string);
  }

  return (
    <div>
      <h1 className="p-4 font-bold text-3xl">
        {capitalizeFirstLetter((searchParams?.query as string) ?? '')}
      </h1>

      <div className="rounded-t-2xl bg-veggievision-green mt-2">
        <h1 className="text-left p-4 font-bold text-gray-500 text-3xl">
          Recipes
        </h1>
        <div className="flex flex-col items-center">
          {data &&
            data.map((element: any) => (
              <RecipeCard
                key={element.id}
                id={element.id}
                title={element.title}
                image={element.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
