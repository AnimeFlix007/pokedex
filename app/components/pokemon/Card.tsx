import { IPokemonType } from "@/app/types/Pokemon";
import { typeColor } from "@/app/utils/TypeColors";
import Image from "next/image";
import React from "react";

type Props = {
  pokemonName: string;
};

export default async function Card({ pokemonName }: Props) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
  const data: IPokemonType = await res.json();
  const typeName = data.types[0].type.name as keyof typeof typeColor;
  
  return (
    <div className="w-full max-w-sm bg-white border border-gray-500 rounded-lg">
      <div className="flex flex-col items-center pb-10">
        <div
          className={`flex flex-row justify-center items-center rounded w-full mb-4`}
          style={{
            borderBottomRightRadius: "50%",
            borderBottomLeftRadius: "50%",
            background:  typeColor[typeName]
          }}
        >
          {" "}
          <Image
            className="w-1/2 h-40 mb-3 rounded-full"
            src={data.sprites.front_default}
            alt={data.name}
            width={200}
            height={200}
          />
        </div>

        <h5 className="mb-1 text-xl font-medium text-gray-900">
          {data.name}
        </h5>
        <section className="flex flex-row items-center justify-center">
          {data.types.map((ability) => {
            const typeName = ability.type.name;
            const svgSource = `/images/types/${typeName}.svg`;
            return (
              <Image
                key={ability.slot}
                className="p-1 rounded-full mr-2"
                src={svgSource}
                alt={typeName}
                width={40}
                height={40}
              />
            );
          })}
        </section>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Favourite
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            View Detail
          </a>
        </div>
      </div>
    </div>
  );
}
