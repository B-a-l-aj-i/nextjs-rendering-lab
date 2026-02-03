import Image from "next/image";

type PokeAPIListResponse = {
  results: { name: string; url: string }[];
};

export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="p-6">
        <h1>Server Side Rendering</h1>
        <p className="mt-4 text-red-600">
          Failed to load Pokémon. Please try again later.
        </p>
      </div>
    );
  }

  const data: PokeAPIListResponse = await res.json();
  const images = data.results;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Server Side Rendering</h1>
      <p className="text-xl text-gray-500 mt-4 mb-4">
        This page is rendered on the server side. where it fetches the data from
        the API and renders the page.
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
      <div className="flex items-start gap-12">
        <Image
          src="/ssr.png"
          alt="Server Side Rendering"
          width={1000}
          height={1000}
          className="mt-10"
        />
        <div className="flex flex-col gap-4">
          <div className="rounded-lg p-4 mt-5">
            <p className="text-2xl font-bold text-gray-900 mb-6">
              How to verify if this page is SSR-ed
            </p>
            <p className="text-xl text-gray-900">
              Run{" "}
              <code className="bg-gray-200/50 px-1.5 py-0.5 rounded">
                build command
              </code>
              . In the build output, find this route:
            </p>
            <ul className="text-xl text-gray-900 mt-2 list-disc list-inside space-y-1">
              <li>
                <strong>○ Static</strong> → SSG (Static Site Generation)
              </li>
              <li>
                <strong>ƒ Dynamic</strong> → SSR (Server-Side Rendering)
              </li>
            </ul>
          </div>
          <Image
            src="/ssr-output.png"
            alt="Server Side Rendering Output"
            width={580}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
