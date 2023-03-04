import RecipeCard from '~/components/recipe/RecipeCard';

async function getRecipes(ingredient: string) {
  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.RECIPE_API}&ingredients=${ingredient}`;
  const res = await fetch(url);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const json = await res.json();

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
      <div className="rounded-t-2xl bg-green-400 mt-2 flex flex-col items-center">
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
  );
}
