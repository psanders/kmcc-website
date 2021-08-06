import '../styles/globals.css';

import { AppWrapper } from '@context/AppContext';
import Footer from '@components/Footer.js';
import Head from 'next/head';
import Masthead from '@components/Masthead.js';
import { useEffect } from 'react';

const _baseUrl = process.env.BASE_URL;

function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head>
        <title>Kaffeine Minds</title>
        <meta name="description" content="Kaffeine Minds is coffee developed for developers by developers" />
        <meta property="og:title" content="Kaffeine Minds" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${_baseUrl}images/kaffeine-minds.jpg`} />
        <link rel="icon" href="/favicon.ico?r=31241" sizes="any" />
      </Head>
      <Masthead />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </AppWrapper>
  )
}

export default App
