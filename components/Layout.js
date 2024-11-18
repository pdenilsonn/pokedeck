import Navbar from "./Navbar";
import Footer from "./Footer";

import style from "/styles/Home.module.css"
import Head from 'next/head';
import Link from "next/link";


export default function Layout({children}) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/pokeball.ico"></link>
                <title>PokeNext</title>
            </Head>
            <Navbar></Navbar>
            <main className="main-container">{children}</main>
            <Footer></Footer>
        </>
    )
}