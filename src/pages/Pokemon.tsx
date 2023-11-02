import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import pokeball from "../assets/assets/pokeball.png";
import styles from "./pokemon.module.css";
import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import { waitFor } from "../utils/utils";
import LoadingScreen from "../components/LoadingScreen";

const Pokemon = ()=>{
    const [pokemon, SetPokemon] = useState<PokemonDetails>();
    const [isLoading, setLoading]= useState(false);
    const {name}= useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        async function getPokemon() {
            setLoading(true);
            await waitFor(1000);
            const fetchedPokemon= await fetchPokemon(name as string);
            SetPokemon(fetchedPokemon);
            setLoading(false);
        }
        getPokemon();
    },[name]
    )

    if (isLoading || !pokemon) {
        return <LoadingScreen/>
      }

    return(
        <>
            <button className={styles.pokeballButton} onClick={()=>navigate(-1)}>
                <img src={pokeball} alt="pokeball.png" className={styles.pokeballImg}/> 
                Go Back
            </button>
            <div className={styles.pokemon}>
                <main className={styles.pokemonInfo}>
                    <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
                    <div>Numero: {pokemon?.id}</div>
                    <div><img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt="" /></div>
                    <div>Hp: {pokemon?.hp}</div>
                    <div>Attack: {pokemon?.attack}</div>
                    <div>Defense {pokemon?.defense}</div>
                </main>
            </div> 
            <Footer />
        </>
    );
};

export default Pokemon;
