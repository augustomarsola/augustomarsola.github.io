import type { NextPage } from "next";
import Head from "next/head";
import { HomeHeader } from "./components/HeaderHome";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Augusto Marsola | Front End Developer</title>
      </Head>
      <HomeHeader />
      <div>
        Amostra de Conteudo
        <p>Tipo esse</p>
        <h1>E esse</h1>
      </div>
    </>
  );
};

export default Home;
