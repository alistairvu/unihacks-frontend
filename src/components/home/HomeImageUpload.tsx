import { SetStateAction } from 'react';
import CameraIcon from '../icons/CameraIcon';

type HomeImageUploadProps = {
  setUploadImage: (value: SetStateAction<File | null>) => void;
};

export default function HomeImageUpload({
  setUploadImage,
}: HomeImageUploadProps) {
  return (
    <>
      <label
        htmlFor="image-upload"
        className="w-36 h-36 rounded-lg bg-green-400 text-center flex justify-center items-center cursor-pointer"
      >
        <CameraIcon className="w-24 h-24" />
      </label>

      <input
        type="file"
        name="image"
        id="image-upload"
        accept="image/*"
        className="hidden"
        onChange={(e) =>
          setUploadImage(e.target.files ? e.target.files[0] : null)
        }
      />

      <h1 className="mt-4 text-xl font-bold italic">
        select or scan <br />
        your vegetable to begin
      </h1>
    </>
  );
}
