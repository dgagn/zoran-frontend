import React, { forwardRef, useState } from 'react';
import Hide from './icons/hide';
import View from './icons/view';
import classNames from 'classnames';

const PasswordInput = forwardRef(({ id, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        ref={ref}
        {...props}
        id={id}
        type={showPassword ? 'text' : 'password'}
        placeholder={props.placeholder ?? ''}
        className={classNames('w-full !pr-28', props.className)}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="full-ring rounded-lg p-3xs absolute -translate-y-1/2 top-1/2 right-0 pr-xs"
      >
        {showPassword ? (
          <div className="text-sm flex space-x-xs items-center">
            <Hide className="stroke-contrast-500" />
            <span className="w-[52px] text-contrast-500">Hide</span>
          </div>
        ) : (
          <div className="text-sm flex space-x-xs items-center">
            <View className="stroke-contrast-500" />
            <span className="w-[52px] text-contrast-500">Show</span>
          </div>
        )}
      </button>
    </div>
  );
});

export default PasswordInput;
