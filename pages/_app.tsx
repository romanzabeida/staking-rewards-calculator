import 'bulma/css/bulma.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

export default MyApp;
