import SearchBar from "../components/home/SearchBar";
import Card from "../components/pokemon/Card";
import { Pokemon } from "../types";

export default async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await res.json();
  return (
    <main>
      <SearchBar />
      <section className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {data.results.map((ele : Pokemon) => (
          <Card key={ele.name} pokemonName={ele.name} />
        ))}
      </section>
    </main>
  );
}
