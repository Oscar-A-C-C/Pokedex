import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../api/fetchPokemons";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Pokemon } from "../types/types.d";
import styles from "./pokemons.module.css";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";

const Pokemons = () => {
  const [isLoading, setLoading]= useState(false);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setLoading(true);
      await waitFor(2000);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setLoading(false);
    };
    fetchAllPokemons();
  }, []);

  if (isLoading || !pokemons) {
    return <LoadingScreen/>
  }

  const filterPokemons = pokemons?.slice(0, 151).filter((pokemon) =>{
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav className={styles.nav}>
          {filterPokemons?.slice(0, 151).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={styles.listItem}
              to={`/pokemon/${pokemon.name.toLowerCase()}`}
            >
              <img
                className={styles.listItemIcon}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={styles.listItemText}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
