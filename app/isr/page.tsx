import Image from "next/image";
import CodeButton from "@/components/code-button";

type PokeAPIListResponse = {
  results: { name: string; url: string }[];
};

export const revalidate = 10; // Revalidate every 10 seconds

export default async function ISRPage() {
  // eslint-disable-next-line react-hooks/purity
  const limit = Math.floor(Math.random() * 20) + 1; // Random limit (1–20)

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );

  if (!res.ok) {
    return (
      <div className="p-6 relative">
        <CodeButton href="https://github.com/B-a-l-aj-i/nextjs-rendering-lab/blob/main/app/isr/page.tsx" />
        <h1 className="text-4xl font-bold">Incremental Static Regeneration</h1>
        <p className="mt-4 text-red-600">
          Failed to load Pokémon. Please try again later.
        </p>
      </div>
    );
  }

  const data: PokeAPIListResponse = await res.json();
  const images = data.results;

  return (
    <div className="p-6 relative">
      <CodeButton href="https://github.com/B-a-l-aj-i/nextjs-rendering-lab/blob/main/app/isr/page.tsx" />
      <h1 className="text-4xl font-bold mb-6">
        Incremental Static Regeneration (ISR)
      </h1>

      <p className="text-xl text-gray-500 mt-4 mb-6">
        This page is statically generated and cached. After{" "}
        <strong>10 seconds(approx)</strong> which can be configured, the next request triggers a background
        regeneration. Users always receive a static page, while fresh data is
        generated incrementally.
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {images.map(({ name }, index) => (
          <li
            key={name}
            className="border border-gray-200 rounded-lg p-2 flex flex-col items-center gap-2"
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={name}
              width={46}
              height={46}
            />
            <span className="font-medium capitalize">{name}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}
