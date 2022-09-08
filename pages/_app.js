import 'aos/dist/aos.css';
import '../styles/main.scss';
import { QueryCache, QueryClient } from 'react-query';
import {useEffect, useState} from 'react';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import AOS from 'aos';

Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeError', NProgress.done);
Router.events.on('routeChangeComplete', NProgress.done);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 750,
      easing: 'ease-out-quart',
    });
  }, []);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({}),
      })
  );

  return <Component {...pageProps} />;
}

export default MyApp;
