import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import HomePage from "./home/"
import Header from "@/components/header"

export default function Home() {
  return (
    <>
    <Header/>
<HomePage/>
    </>

  );
}
