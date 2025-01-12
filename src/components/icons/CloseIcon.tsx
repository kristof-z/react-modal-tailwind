import React from 'react';

/**
 * CloseIcon component
 * Icon design by https://www.svgrepo.com/author/krystonschwarze/
 */
export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    width="20" // Default size
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className} // Allow Tailwind classes
    {...props}
  >
    <g id="Menu / Close_MD">
      <path
        id="Vector"
        d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
        stroke="currentColor" // Uses the current text color
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
