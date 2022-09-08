import React, { useEffect } from 'react';
import Head from 'next/head';
import Font from './font';

function Layout({ children, title = 'Zoran' }) {
  useEffect(() => {
    document.body.classList.add('dark');
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        />
        <meta name="description" content="Zoran" />
        <meta charSet="utf-8" />
        <Font />
        <title>{title}</title>
      </Head>
      <div className="relative">{children}</div>
    </>
  );
}

export default Layout;
