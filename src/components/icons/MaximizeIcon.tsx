import React from 'react';

/**
 * MaximizeIcon component
 * Icon design by https://www.svgrepo.com/author/vmware/
 * Licensed under the MIT license
 */

export const MaximizeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    fill="currentColor" // Uses current text color for styling
    width="20" // Default size
    height="20"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className} // Allow Tailwind classes
    {...props}
  >
    <title>Resize Up</title>
    <path
      className="clr-i-outline clr-i-outline-path-1"
      d="M19,4a1,1,0,0,0,0,2h9.59l-9.25,9.25a1,1,0,1,0,1.41,1.41L30,7.41V17a1,1,0,0,0,2,0V4Z"
    />
    <path
      className="clr-i-outline clr-i-outline-path-2"
      d="M4,19a1,1,0,0,1,2,0v9.59l9.25-9.25a1,1,0,1,1,1.41,1.41L7.41,30H17a1,1,0,0,1,0,2H4Z"
    />
    <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
  </svg>
);
