import { GetStaticProps } from "next";
import Head from "next/head";
import Prismic from '@prismicio/client';

import { getPrismicClient } from "../../services/prismic";
import styles from './styles.module.scss';

export default function Posts (){
    return (
        <>
        <Head>
            <title>Posts | Ignews</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="#">
                    <time> 13 de setembro de 2021</time>
                    <strong>Algoritmos e Programação </strong>
                    <p> O termo algoritmo pode ser visto desde o  século IX. Foi nesta época que um cientista, astrônomo e matemático persa usou pela primeira vez o termo para indicar  regras de operações aritméticas utilizando algarismos indoarábicos.</p>
                </a>

                <a href="#">
                    <time> 13 de setembro de 2021</time>
                    <strong>Algoritmos e Programação </strong>
                    <p> O termo algoritmo pode ser visto desde o  século IX. Foi nesta época que um cientista, astrônomo e matemático persa usou pela primeira vez o termo para indicar  regras de operações aritméticas utilizando algarismos indoarábicos.</p>
                </a>

                <a href="#">
                    <time> 13 de setembro de 2021</time>
                    <strong>Algoritmos e Programação </strong>
                    <p> O termo algoritmo pode ser visto desde o  século IX. Foi nesta época que um cientista, astrônomo e matemático persa usou pela primeira vez o termo para indicar  regras de operações aritméticas utilizando algarismos indoarábicos.</p>
                </a>

            </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps= async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type','po')
    ], {
        fetch: ['title', 'content'],
        pageSize: 100,
    })
    console.log(JSON.stringify(response,null,2))
    return{
        props: {}
    }
}