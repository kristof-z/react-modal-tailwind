import React from 'react';

/**
 * MinimizeIcon component
 * Icon design by https://www.svgrepo.com/author/vmware/
 * Licensed under the MIT license
 */
export const MinimizeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    fill="currentColor"
    width="20"
    height="20"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
    {...props}
  >
    <title>Resize Down</title>
    <path
      className="clr-i-outline clr-i-outline-path-1"
      d="M32,15H22.41l9.25-9.25a1,1,0,0,0-1.41-1.41L21,13.59V4a1,1,0,0,0-2,0V17H32a1,1,0,0,0,0-2Z"
    />
    <path
      className="clr-i-outline clr-i-outline-path-2"
      d="M4,19a1,1,0,0,0,0,2h9.59L4.33,30.25a1,1,0,1,0,1.41,1.41L15,22.41V32a1,1,0,0,0,2,0V19Z"
    />
    <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
  </svg>
);
