import CameraIcon from '../icons/CameraIcon';

export default function HomeBody() {
  return (
    <div className="mt-36 flex flex-col justify-center items-center text-center">
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
      />

      <h1 className="mt-4 text-xl font-bold italic">
        scan your fruit <br />
        or vegetable to begin
      </h1>
    </div>
  );
}
