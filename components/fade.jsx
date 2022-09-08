import { Transition } from '@headlessui/react';
import React, { Fragment, ReactNode } from 'react';

function Fade({ children, show }) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0"
      enterTo="transform opacity-100"
      leave="transition ease-in duration-100"
      leaveFrom="transform opacity-100"
      leaveTo="transform opacity-0"
      show={show}
    >
      {children}
    </Transition>
  );
}

export default Fade;
