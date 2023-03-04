import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEntries = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );

    console.log(formEntries.search);
    router.push(`/search?query=${formEntries.search}`);
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="search..."
          className="px-4 py-2 bg-green-200 text-black rounded-md"
        />
        <button
          className="ml-2 px-4 py-2 bg-green-400 font-bold text-black rounded-md"
          type="submit"
        >
          go
        </button>
      </form>
    </div>
  );
}
