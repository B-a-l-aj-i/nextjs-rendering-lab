"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Pokemon = {
  name: string;
  url: string;
};

export default function CSRPage() {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const limit = Math.floor(Math.random() * 20) + 1; // Random limit (1–20)
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json.results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p className="p-6 text-xl">Loading…</p>;
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-4xl font-bold">Client-Side Rendering (CSR)</h1>
        <p className="mt-4 text-red-600">
          Failed to load Pokémon. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Client-Side Rendering (CSR)</h1>

      <p className="text-xl text-gray-500 mb-6">
        This page renders entirely on the client. Data is fetched after
        JavaScript loads in the browser.
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {data.map((pokemon, index) => (
          <li
            key={pokemon.name}
            className="border border-gray-200 rounded-lg p-2 flex flex-col items-center gap-2"
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
              width={46}
              height={46}
            />
            <span className="capitalize">{pokemon.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
