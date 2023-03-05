import indefinite from 'indefinite';
import Link from 'next/link';
import { Prediction } from '~/@types/types';

type HomeResultsProps = {
  prediction: Prediction;
};

export default function HomeResults({ prediction }: HomeResultsProps) {
  const refreshPage = () => {
    location.reload();
  };

  if (!prediction.success) {
    return (
      <>
        <h1 className="text-2xl font-title">
          An error occurred: {prediction.error}
        </h1>

        <button
          className="w-36 py-4 rounded-lg bg-veggievision-green text-center text-xl font-bold mt-5"
          onClick={refreshPage}
        >
          try again
        </button>
      </>
    );
  }

  return (
    <>
      <h1 className="text-2xl font-title">
        This is {indefinite(prediction.vegetable.toLowerCase())}!
      </h1>

      <Link href={`/search?query=${prediction.vegetable}`}>
        <button className="w-36 py-4 rounded-lg bg-veggievision-green text-center text-xl mt-5">
          learn more
        </button>
      </Link>

      <p className="mt-4 underline" onClick={refreshPage}>
        try again
      </p>
    </>
  );
}
