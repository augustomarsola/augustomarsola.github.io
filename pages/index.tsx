import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { HomeHeader } from "./components/HomeHeader";

const Home: NextPage = () => {
  return (
    <>
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
