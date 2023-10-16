/*
 * @Author: Wmengti 0x3ceth@gmail.com
 * @LastEditTime: 2023-07-31 19:44:18
 * @Description:
 */
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Customised-Strategy Telegram Trading Bot</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/Crypto1.png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
