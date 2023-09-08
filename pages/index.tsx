import type { NextPage } from "next";
import Head from "next/head";
import { HomeHeader } from "./components/home/HeaderHome";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Augusto Marsola | Front End Developer</title>
      </Head>
      <HomeHeader />
    </>
  );
};

export default Home;
