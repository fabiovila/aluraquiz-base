import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Quiz::
          {db.title}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <meta name="title" content="Quiz Porcentagem" />
        <meta name="description" content="Quiz sobre Porcentagem. Você tem 100% de certeza que conhece porcentagem?" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://porcentagem.vercel.app/" />
        <meta property="og:title" content="Quiz Porcentagem" />
        <meta property="og:description" content="Quiz sobre Porcentagem.Você tem 100% de certeza que conhece porcentagem?" />
        <meta property="og:image" content="/ogimg.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://porcentagem.vercel.app/" />
        <meta property="twitter:title" content="Quiz Porcentagem" />
        <meta property="twitter:description" content="Quiz sobre Porcentagem.Você tem 100% de certeza que conhece porcentagem?" />
        <meta property="twitter:image" content="/ogimg.jpg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
