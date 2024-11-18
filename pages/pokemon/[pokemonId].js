import Image from "next/image"
import style from '../../styles/PokemonPage.module.css'

export const getStaticPaths = async () => {

    const url = 'https://pokeapi.co/api/v2/pokemon/'

    const maxPokemons = 100
    const res = await fetch(`${url}/?limit=${maxPokemons}`)
    const data = await res.json()

    //params
    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: false,
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId
    console.log(id)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return {
        props: { pokemon: data },
    }
}


export default function Pokemon({ pokemon }) {
    function tipoPokemon() {
        
    }
    return (
        <>
            <div>
                <div className={style.header}>
                    <h1 className={style.title}>{pokemon.name}</h1>
                    
                </div>
                <div className={style.container}>
                    <Image className={style.pokemonImage} src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemon.id}.gif`} width={50} height={100} alt={pokemon.name}></Image>

                    <div className={style.containerInfo}>
                        <div className={style.infoBloco}>
                            <h3>Tipo</h3>
                            <div>
                                {pokemon.types.map((item, index) => (
                                    <span key={index}>{item.type.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className={style.infoBloco}>
                            <h3> Altura </h3>
                            <p>{pokemon.height * 10} cm</p>
                        </div>
                        <div className={style.infoBloco}>
                            <h3> Peso </h3>
                            <p>{pokemon.weight / 10} Kg</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}