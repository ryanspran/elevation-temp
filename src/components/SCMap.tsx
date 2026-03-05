import upstateMap from "@/assets/upstate-map.png";

const SCMap = () => {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <img src={upstateMap} alt="Upstate South Carolina service area map" className="w-full h-auto" />
      {/* Animated glowing star overlay */}
      <div className="absolute" style={{ top: "38%", left: "52%" }}>
        <span className="absolute inline-flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/40 animate-ping" />
        <span className="absolute inline-flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_12px_4px_hsl(var(--gold)/0.5)]" />
      </div>
    </div>
  );
};

export default SCMap;
