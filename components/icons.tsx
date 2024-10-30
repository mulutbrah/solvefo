type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="40" cy="40" r="40" fill="#F24E1E" />
      <circle cx="40" cy="120" r="40" fill="#A259FF" />
      <circle cx="120" cy="40" r="40" fill="#FF7262" />
      <circle cx="120" cy="120" r="40" fill="#1ABCFE" />
    </svg>
  ),
};
