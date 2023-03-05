'use client';

import { useState } from 'react';
import HomeImageUpload from './HomeImageUpload';
import Image from 'next/image';
import HomeSearch from './HomeSearch';
import HomeResults from './HomeResults';
import { Prediction } from '~/@types/types';

export default function HomeBody() {
  const [uploadImage, setUploadImage] = useState<null | File>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<null | Prediction>(null);

  const handleUpload = async () => {
    setIsLoading(true);
    if (uploadImage != null) {
      const formData = new FormData();
      formData.append('image', uploadImage);

      console.log({ uploadImage });

      const response = await fetch('https://cc66-34-87-8-183.ap.ngrok.io/', {
        method: 'POST',
        body: formData,
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Access-Control-Allow-Origin': '*',
        },
      });

      // console.log(response.ok);

      // const json = await response.json();
      // console.log(json);
      // setPrediction(json);

      console.log(response.ok);

      if (response.ok) {
        const json = await response.json();
        console.log(json);
        setPrediction(json);
      } else {
        setPrediction({
          success: false,
          error: 'something happened',
        });
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="mt-24 flex flex-col justify-center items-center text-center bg-veggievision-bg/75 rounded-xl p-4 mx-4">
      {uploadImage ? (
        <>
          <Image
            src={URL.createObjectURL(uploadImage)}
            alt="image"
            width={240}
            height={240}
          />
          {isLoading ? (
            <h1>loading...</h1>
          ) : prediction ? (
            <>
              <HomeResults prediction={prediction} />
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
