import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Next Auth Boilerplate</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
