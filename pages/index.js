import Layout from '../components/layout';
import Header from '../components/header';
import React from 'react';
import Figure from '../components/figure';
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Figure />
      <Header />
      <div className="container">
        <section className="grid lg:grid-cols-2 gap-lg min-h-screen items-center">
          <div className="text-component article pt-3xl lg:pt-lg">
            <h1 data-aos="fade-down">Successful and easy bitcoin trading</h1>
            <p className="text-contrast-500" data-aos="fade-down" data-aos-delay="150">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              aliquid asperiores autem dolore enim eum hic inventore iste iure,
              laboriosam modi mollitia nam obcaecati pariatur quaerat quod
              sapiente tenetur, vitae!
            </p>
            <div className="flex space-x-sm mt-lg" data-aos="fade-down" data-aos-delay="150">
              <Link href="/auth/signup">
                <button className="btn btn--primary">Start now</button>
              </Link>
              <button className="btn">How it works</button>
            </div>
          </div>
          <div className="relative">
            <span className="overflow-hidden bg-radial-gradient pointer-events-none absolute opacity-0 dark:opacity-[.15] top-[-30%] right-[-50%] h-[640px] w-[640px] pulse" />
            <span className="overflow-hidden bg-radial-gradient-secondary pointer-events-none absolute opacity-0 dark:opacity-[.15] top-[20%] right-[20%] h-[640px] w-[640px] pulse" />
            <img src="/bitcoin.png" alt="bitcoin" data-aos="fade-up" data-aos-delay="150"/>
          </div>
        </section>
      </div>

      <section className="container mt-lg pb-lg">
        <p className="text-primary-500">Pricing.</p>
        <h2 className="mb-2xl">Find the right price for you</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg rounded">
          <div className="shadow-lg p-lg bg-contrast-100/50" data-aos="fade-down" data-aos-delay="0">
            <p className="font-bold text-lg mb-sm">One-Eighth</p>
            <p className="h4">
              $<span className="h3">3 253.13</span>
            </p>
            <p className="mt-sm">Buy 1/8 of a Bitcoin as a option.</p>
            <p className="text-sm text-contrast-400 mt-md">Prices are in CAD</p>
            <hr className="border-contrast-200 my-md" />
            <button className="btn btn--primary w-full">Buy now</button>
          </div>
          <div data-aos-delay="150" data-aos="fade-down" className="shadow-lg p-lg bg-primary-100/20 border border-primary-500 rounded">
            <p className="font-bold text-lg mb-sm">One-Quarter</p>
            <p className="h4">
              $<span className="h3">6 506.27</span>
            </p>
            <p className="mt-sm">Buy 1/4 of a Bitcoin as a option.</p>
            <p className="text-sm text-contrast-400 mt-md">Prices are in CAD</p>
            <hr className="border-contrast-200 my-md" />
            <button className="btn btn--primary w-full">Buy now</button>
          </div>
          <div data-aos-delay="300" data-aos="fade-down" className="shadow-lg p-lg bg-contrast-100/50 rounded">
            <p className="font-bold text-lg mb-sm">Haft</p>
            <p className="h4">
              $<span className="h3">13 012.54</span>
            </p>
            <p className="mt-sm">Buy 1/2 of a Bitcoin as a option.</p>
            <p className="text-sm text-contrast-400 mt-md">Prices are in CAD</p>
            <hr className="border-contrast-200 my-md" />
            <button className="btn btn--primary w-full">Buy now</button>
          </div>
          <div data-aos-delay="450" data-aos="fade-down" className="shadow-lg p-lg bg-contrast-100/50 rounded">
            <p className="font-bold text-lg mb-sm">Full</p>
            <p className="h4">
              $<span className="h3">26 025.07</span>
            </p>
            <p className="mt-sm">
              Buy a full Bitcoin as a option. blah blah blah.
              <br />
            </p>
            <p className="text-sm text-contrast-400 mt-md">Prices are in CAD</p>
            <hr className="border-contrast-200 my-md" />
            <button className="btn btn--primary w-full">Buy now</button>
          </div>
        </div>
      </section>

      <footer className="container relative overflow-hidden mt-4xl">
        <div className="grid lg:grid-cols-2 gap-xl">
          <div>
            <h4>Menu</h4>
            <ul className="mt-sm space-y-xs">
              <li>Home</li>
              <li>Login</li>
              <li>Start now</li>
            </ul>
          </div>
          <div>
            <h4>Contact us</h4>
            <ul className="mt-sm space-y-xs">
              <li>
                <a href="">info@ovior.ca</a>
              </li>
              <li>
                <a href="">514-714-2923</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-2xl mb-sm border-contrast-100" />
        <p className="text-base mb-sm">
          © OVIOR 2022. Tous droits réservés. 9472-1909 Québec inc.
        </p>
      </footer>
    </Layout>
  );
}
