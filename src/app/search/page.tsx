import RecipeCard from '~/components/recipe/RecipeCard';
import { capitalizeFirstLetter } from '~/utils/string';
import Image from 'next/image';
import SadCarrotIcon from '~/components/icons/SadCarrotIcon';
import styles from './background.module.css';

export const dynamic = 'force-dynamic';

async function getHeaderPhoto(ingredient: string) {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${ingredient}&per_page=1&client_id=${process.env.UNSPLASH_ACCESS_KEY}&orientation=landscape`;
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const json = await res.json();

  if (json.results.length == 0) {
    return '';
  }

  return json.results[0].urls.raw;
}

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
    usedIngredients: e.usedIngredients[0].original,
  }));
}

async function getDescription(ingredient: string) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${ingredient}`;
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const json = await res.json();
  return json.extract;
}

export default async function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const data = await getRecipes((searchParams?.query as string) ?? '');
  const headerPhoto = await getHeaderPhoto(
    (searchParams?.query as string) ?? 'vegetable'
  );
  const description = await getDescription(
    (searchParams?.query as string) ?? 'vegetable'
  );

  return (
    <div className="bg-veggievision-bg">
      {data.length > 0 ? (
        <>
          <Image
            src={headerPhoto + '&w=720&w=480'}
            height={480}
            width={720}
            alt={(searchParams?.query as string) ?? 'vegetable'}
          />

          <div className="z-10 top-32 bg-veggievision-bg">
            <div className="px-4 pb-4">
              <h1 className={`my-4 font-bold text-4xl font-title`}>
                <span className={`${styles.halfBackground}`}>
                  {capitalizeFirstLetter((searchParams?.query as string) ?? '')}
                </span>
              </h1>

              <h2 className="pb-4 font-biryani">{description}</h2>

              <a
                href={`https://en.wikipedia.org/wiki/${
                  (searchParams?.query as string) ?? 'vegetables'
                }`}
                className="underline font-biryani"
              >
                Learn more
              </a>
            </div>

            <div className="rounded-t-2xl bg-veggievision-green mt-2">
              <h1 className="text-left p-4 text-veggievision-bg text-4xl italic font-arsenal">
                Recipes
              </h1>
              <div className="flex flex-col items-center">
                {data.map((element: any) => (
                  <RecipeCard
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    image={element.image}
                    usedIngredients={element.usedIngredients}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="h-screen bg-veggievision-green absolute top-0 w-screen">
          <div className="py-2 px-2 bg-veggievision-bg rounded-md text-black mx-2 mt-64 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl">Sorry!</h1>
            <h2>
              We could not find any results for {searchParams?.query as string}{' '}
            </h2>
            <SadCarrotIcon className="w-36 h-36" />
          </div>
        </div>
      )}
    </div>
  );
}
