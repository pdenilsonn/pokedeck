import Image from "next/image";
import style from '/styles/About.module.css';

export default function About() {
    return (
        <>
            <div className={style.about}>
                <h1>Sobre o projeto</h1>
                <div className={style.content}>
                    <p> Esse é um projeto voltado para estudos. Esse é o meu primeiro contato com o framework Next.js.<br></br>
                    PokeNext simula uma versão web de um dispositivo de um desenho animado muito famoso chamado Pokémon. A pokedex é um dispositivo usado para catalogar Pokémons, como se fosse uma espécie de dicionário/wikipédia </p>
                    <Image className={style.image} src="/images/charmander.png" width="150" height="150" alt="Pokémon Charizard" />
                </div>
            </div>
        </>
    )
}