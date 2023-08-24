import SearchBar from "../components/home/SearchBar";
import Card from "../components/pokemon/Card";
import { Pokemon } from "../types";

export default async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await res.json();
  return (
    <main>
      <SearchBar />
      {data.results.map((ele : Pokemon) => (
        <Card key={ele.name} />
      ))}
    </main>
  );
}
