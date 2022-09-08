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
            <h1 className="text-4xl text-center">Log in</h1>
            <p className="text-contrast-500 text-center">
              Log in to your Zoran account.
            </p>
          </div>
          <form action="">
            <fieldset disabled={false} className="mt-lg space-y-md">
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
                <div className="flex justify-between mt-lg">
                  <label htmlFor="password">Password</label>
                  <Link href="/auth/forgot-password">
                    <a className="text-sm link">Forgot your password?</a>
                  </Link>
                </div>
                <PasswordInput
                  id="password"
                  autoComplete="current-password"
                  className={classNames('py-xs text-lg', {
                    'border border-error-500': !!errors.password,
                  })}
                  {...register('password')}
                />
                <div className="mt-2xs mb-sm">
                  <Fade show={!!errors.password}>
                    <div className="text-xs text-error-500">
                      {errors.password?.message}
                    </div>
                  </Fade>
                </div>
              </div>
              <button className="btn btn--primary w-full" disabled={false}>
                Connexion
              </button>
            </fieldset>

            <p className="text-contrast-500 text-sm text-center mt-md">
              Are you new?{' '}
              <Link href="/auth/signup">
                <a className="link">Sign up</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
