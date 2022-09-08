import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../components/layout';
import classNames from 'classnames';
import Fade from '../../components/fade';
import Link from 'next/link';
import PasswordInput from '../../components/password-input';
import Figure from '../../components/figure';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: 'onTouched',
  });

  return (
    <Layout>
      <Figure />
      <div className="container max-w-xl grid items-center min-h-screen p-lg relative">
        <div>
          <div className="text-component">
            <h1 className="text-4xl text-center">Start now</h1>
            <p className="text-contrast-500 text-center">
              Already have an account?{' '}
              <Link href="/auth/login">
                <a className="link">Login</a>
              </Link>
            </p>
          </div>
          <form action="">
            <fieldset disabled={false} className="mt-lg space-y-md">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full !py-xs !text-base"
                  placeholder="Enter your name"
                  {...register('name')}
                />
                <Fade show={!!errors.first_name}>
                  <div className="text-xs mt-3xs text-error-500">
                    {errors.first_name?.message}
                  </div>
                </Fade>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className={classNames('w-full text-lg', {
                    'border border-error-500': !!errors.email,
                  })}
                  autoComplete="email"
                  placeholder="Enter your email"
                  autoFocus={true}
                  {...register('email')}
                />
                <Fade show={!!errors.email}>
                  <div className="text-xs mt-2xs text-error-500">
                    {errors.email?.message}
                  </div>
                </Fade>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <PasswordInput
                  id="password"
                  autoComplete="current-password"
                  className={classNames('py-xs text-lg', {
                    'border border-error-500': !!errors.password,
                  })}
                  {...register('password')}
                />
                <div className="mt-2xs mb-sm">
                  <p className="text-xs text-contrast-500">
                    Minimum 8 characters.
                  </p>
                  <Fade show={!!errors.password}>
                    <div className="text-xs text-error-500">
                      {errors.password?.message}
                    </div>
                  </Fade>
                </div>
              </div>
              <button className="btn btn--primary w-full" disabled={false}>
                Sign up
              </button>
            </fieldset>

            <p className="text-contrast-500 text-sm text-center mt-md">
              Already have an account?{' '}
              <Link href="/auth/login">
                <a className="link">Log in</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
