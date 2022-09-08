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
            <h1 className="text-4xl text-center">Forgot your password?</h1>
            <p className="text-contrast-500 text-center mt-md">
              We will email you a password reset link that will allow you to
              choose a new one.
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
              <button className="btn btn--primary w-full" disabled={false}>
                Request a reset link
              </button>
            </fieldset>

            <p className="text-contrast-500 text-sm text-center mt-md">
              <Link href="/auth/signup">
                <a className="link">← Back to login</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
