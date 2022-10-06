import type { AppProps } from 'next/app';
import '@styles/tailwind.css';
import MainLayout from '@layout/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
