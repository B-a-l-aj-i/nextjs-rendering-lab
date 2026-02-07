import Image from "next/image";

type Pokemon = {
    name: string;
    url: string;
};

async function getPokemon() {
    const limit = Math.floor(Math.random() * 20) + 1;
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
        { cache: "no-store" },
    );
    const json = await res.json();
    return json.results as Pokemon[];
}

export default async function RSC() {
    const data = await getPokemon();

    return (
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
    );
}