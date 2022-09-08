import React from 'react';

function View(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const title = props.title || 'view';

  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g
        fill={secondaryfill}
        stroke={secondaryfill}
        className={props.className}
        strokeMiterlimit="10"
        strokeWidth="1"
      >
        <path
          d="M0.5,8 c0,0,3-5.5,7.5-5.5S15.5,8,15.5,8s-3,5.5-7.5,5.5S0.5,8,0.5,8z"
          fill="none"
          className={props.className}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="8"
          cy="8"
          fill="none"
          r="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default View;
