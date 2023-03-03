'use client';

import { useState } from 'react';
import HomeImageUpload from './HomeImageUpload';
import Image from 'next/image';

export default function HomeBody() {
  const [uploadImage, setUploadImage] = useState<null | File>(null);

  return (
    <div className="mt-36 flex flex-col justify-center items-center text-center">
      {uploadImage ? (
        <>
          <Image
            src={URL.createObjectURL(uploadImage)}
            alt="image"
            width={360}
            height={360}
          />
          <button className="w-36 py-4 rounded-lg bg-green-400 text-center text-xl font-bold mt-10">
            send
          </button>
        </>
      ) : (
        <HomeImageUpload setUploadImage={setUploadImage} />
      )}
    </div>
  );
}
