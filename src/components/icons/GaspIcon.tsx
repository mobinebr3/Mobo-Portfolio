export default function GsapLogo(props : any) {
  return (
    <svg viewBox="0 0 256 256" width="120" height="120" {...props}>
      <circle cx="128" cy="128" r="120" fill="#88CE02" />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        fontSize="80"
        fontFamily="Arial, Helvetica, sans-serif"
        fill="#0a1825"
        dy=".3em"
      >
        GSAP
      </text>
    </svg>
  );
}