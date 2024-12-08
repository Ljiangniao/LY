import { AppProps } from 'next/app';
import Header from'@/component/Header.tsx';
import '@/style/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;