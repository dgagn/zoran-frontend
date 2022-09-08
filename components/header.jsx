import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed z-30 w-full text-base transition duration-300 ease-in-out border-contrast-100/50 md:bg-opacity-90 ${
        !top && 'bg-bg shadow-sm border-b backdrop-blur-sm'
      } top-0`}
    >
      <div className="flex items-center">
        <div
          className={classNames(
            'cursor-pointer w-28 ml-px flex border-contrast-100/50 justify-center py-md',
            {
              'border-r': !top,
            }
          )}
        >
          <Link href="/">
            <strong>ZORAN</strong>
          </Link>
        </div>
        <div className="hidden md:flex space-x-md"></div>

        <div className="ml-auto pr-lg space-x-md items-center flex">
          <Link href="/auth/login">
            <a className="">Login</a>
          </Link>
          <Link href="/auth/signup">
            <button className="btn">Start now</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
