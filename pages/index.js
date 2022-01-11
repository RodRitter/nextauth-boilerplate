import Image from "next/image";
import styles from "../styles/Home.module.css";
import { server } from "../config";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Next Auth URL:
          <code className={styles.code}>{server}</code>
        </p>

        <div className={styles.grid}>
          <a href="/signin" className={styles.card}>
            <h2>Sign In &rarr;</h2>
            <p>
              Next Auth Login Screen:
              <code className={styles.code}>pages/signin.js</code>
            </p>
          </a>

          <a href="/verify" className={styles.card}>
            <h2>Email Verify &rarr;</h2>
            <p>
              Next Auth Email Verify Screen:
              <code className={styles.code}>pages/verify.js</code>
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
