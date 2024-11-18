import Image from "next/image"
import style from '/styles/Card.module.css'
import Link from "next/link"



export default function Card({ pokemon }) {
    return (
        <>
            <div className={style.cardPokemon}>
                <Image className={style.pokemonImage} src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemon.id}.gif`} width={50} height={100} alt={pokemon.name} />

                <h3>{pokemon.name}</h3>
                <Link className={style.btn} href={`/pokemon/${pokemon.id}`}> Detalhes </Link>
                
                
            </div>
        </>
    )
}