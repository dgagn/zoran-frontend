import React from 'react';

function Hide(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const title = props.title || 'hide';

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
          stroke={fill}
          className={props.className}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5,8 c0-1.657,1.343-3,3-3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d=" M11,8c0,1.657-1.343,3-3,3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="1"
          x2="15"
          y1="15"
          y2="1"
        />
      </g>
    </svg>
  );
}

export default Hide;
