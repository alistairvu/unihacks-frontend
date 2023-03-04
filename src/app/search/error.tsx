'use client';

import SadCarrotIcon from '~/components/icons/SadCarrotIcon';

export default function Error() {
  return (
    <div className="h-screen bg-veggievision-green absolute top-0 w-screen">
      <div className="py-2 px-2 bg-veggievision-bg rounded-md text-black mx-2 mt-64 flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">Sorry!</h1>
        <h2>We could not find any results.</h2>
        <SadCarrotIcon className="w-36 h-36" />
      </div>
    </div>
  );
}
