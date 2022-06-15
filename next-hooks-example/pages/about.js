import Head from "next/head";
import styles from "../styles/Home.module.css";

function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to /About!</h1>
      </main>
    </div>
  );
}

export default About;