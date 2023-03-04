'use client';

import { useState } from 'react';
import HomeImageUpload from './HomeImageUpload';
import Image from 'next/image';
import HomeSearch from './HomeSearch';
import Link from 'next/link';

export default function HomeBody() {
  const [uploadImage, setUploadImage] = useState<null | File>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<null | string>(null);

  const handleUpload = async () => {
    setIsLoading(true);
    if (uploadImage != null) {
      console.log('sending...');

      const buffer = await uploadImage.arrayBuffer();

      const response = await fetch('/api/detect', {
        method: 'POST',
        body: JSON.stringify({
          image: Buffer.from(buffer).toJSON(),
        }),
      });

      const json = await response.json();
      console.log(json);
      setPrediction(json.vegetable);
    }
    setIsLoading(false);
  };

  return (
    <div className="mt-36 flex flex-col justify-center items-center text-center bg-veggievision-bg/75 rounded-xl p-4 mx-4">
      {uploadImage ? (
        <>
          <Image
            src={URL.createObjectURL(uploadImage)}
            alt="image"
            width={360}
            height={360}
          />
          {isLoading ? (
            <h1>loading...</h1>
          ) : prediction ? (
            <>
              <h1>it is a {prediction}</h1>
              <Link href={`/search?query=${prediction}`}>learn more</Link>
            </>
          ) : (
            <button
              className="w-36 py-4 rounded-lg bg-veggievision-green text-center text-xl font-bold mt-10"
              onClick={handleUpload}
            >
              send
            </button>
          )}
        </>
      ) : (
        <>
          <HomeSearch />
          <p className="my-10 font-bold text-2xl">or</p>
          <HomeImageUpload setUploadImage={setUploadImage} />
        </>
      )}
    </div>
  );
}
