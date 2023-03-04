import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.RECIPE_API}`;
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const json = await res.json();

  console.log(json);
  console.log(process.env);

  return NextResponse.json({
    link: json.sourceUrl,
  });
}
