import { AppProps } from 'next/app';
import Header from'@/component/Header.tsx'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;