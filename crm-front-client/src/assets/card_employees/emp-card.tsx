import * as React from "react";


const Emp_card = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
    {...props}
  >
    <circle
      cx="27"
      cy="27"
      r="26"
      fill="url(#pattern0_258_2066)"
      stroke="white"
      strokeWidth="2"
    />
    <defs>
      <pattern
        id="pattern0_258_2066"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_258_2066" transform="scale(0.00390625)" />
      </pattern>
      <image
        id="image0_258_2066"
        width="256"
        height="256"
        xlinkHref="/your-image-path.jpg" // или data:image/png;base64,...
      />
    </defs>
  </svg>
);

export default Emp_card;


