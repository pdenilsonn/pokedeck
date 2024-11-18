
import style from '/styles/Home.module.css';

import Card from '/components/card';


export async function getStaticProps() {

  const url = 'https://pokeapi.co/api/v2/pokemon/'

  const maxPokemons = 200
  const result = await fetch(`${url}/?limit=${maxPokemons}`).then((res) => res.json()).then((data) => {

    data.results.forEach((item, index) => {
      item.id = index + 1
    })

    return {
      props: {
        pokemons: data.results,
      },
    }
  })
  return result
}



export default function Home({ pokemons }) {
  return (

    <>
      <div class="bg-white">

        <p>Vai papai</p>
      </div>
      <div class="flex justify-center align-middle">
        <div class="flex flex-wrap align-middle justify-center overflow-scroll gap-3 w-[70%] h-[70vh] overscroll-x-none ">
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>

      </div>
    </>


  );
}
