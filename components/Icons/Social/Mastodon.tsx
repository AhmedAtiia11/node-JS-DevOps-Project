import type { FC, SVGProps } from 'react';

const Mastodon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#2B90D9"
        fillRule="evenodd"
        d="M14.296 15.244c2.506-.3 4.688-1.843 4.963-3.254.432-2.223.396-5.424.396-5.424 0-4.338-2.843-5.61-2.843-5.61C15.38.298 12.918.021 10.363 0h-.064c-2.556.02-5.016.298-6.45.956 0 0-2.842 1.272-2.842 5.61l-.003.828c-.004.8-.008 1.687.015 2.613.103 4.243.778 8.425 4.7 9.463 1.81.48 3.363.58 4.613.51 2.268-.125 3.542-.809 3.542-.809l-.075-1.646s-1.621.512-3.441.45c-1.804-.063-3.708-.195-4-2.41a4.54 4.54 0 0 1-.04-.62s1.77.432 4.014.535c1.372.063 2.659-.08 3.966-.236Zm2.007-3.088V6.903c0-1.074-.274-1.927-.823-2.558-.566-.631-1.308-.955-2.228-.955-1.065 0-1.872.41-2.405 1.228l-.518.87-.519-.87C9.277 3.8 8.47 3.39 7.405 3.39c-.92 0-1.662.324-2.228.955-.549.631-.822 1.484-.822 2.558v5.253h2.08V7.057c0-1.075.453-1.62 1.358-1.62 1 0 1.501.647 1.501 1.927v2.79h2.07v-2.79c0-1.28.5-1.927 1.5-1.927.905 0 1.357.545 1.357 1.62v5.1h2.082Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Mastodon;
