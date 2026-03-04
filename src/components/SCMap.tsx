const SCMap = () => {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* South Carolina state silhouette */}
        <path
          d="M45,155 L55,145 L70,140 L85,130 L100,125 L115,118 L130,112 L145,108 L160,100 L175,95 L185,88 L200,82 L215,78 L225,72 L240,68 L255,62 L270,58 L280,55 L295,50 L310,48 L320,45 L335,42 L350,40 L365,38 L375,40 L390,45 L400,50 L410,58 L420,65 L430,72 L440,80 L448,90 L455,100 L462,112 L470,125 L478,140 L485,155 L490,165 L495,178 L498,190 L500,200 L502,212 L505,225 L510,240 L515,255 L518,265 L520,275 L518,285 L512,292 L505,298 L495,305 L485,310 L475,315 L465,318 L455,322 L440,325 L425,330 L410,332 L395,335 L380,336 L365,338 L350,340 L335,338 L320,335 L305,332 L290,328 L275,325 L260,320 L245,315 L230,310 L215,305 L200,298 L185,292 L170,285 L155,278 L140,270 L125,262 L110,255 L95,245 L82,238 L70,228 L60,218 L52,208 L48,198 L45,188 L43,175 L44,165 Z"
          className="fill-navy"
        />
        
        {/* Glowing marker for Greenville area - positioned in upstate SC */}
        <circle cx="180" cy="105" r="35" className="fill-gold/15" />
        <circle cx="180" cy="105" r="25" className="fill-gold/25" />
        <circle cx="180" cy="105" r="15" className="fill-gold/40" />
        <circle cx="180" cy="105" r="7" className="fill-gold" />
      </svg>
    </div>
  );
};

export default SCMap;
