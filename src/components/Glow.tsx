export function Glow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[-1]">
      <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-blue/25 blur-[90px]" />
      <div className="absolute right-[-80px] top-60 h-72 w-72 rounded-full bg-brand-green/14 blur-[100px]" />
      <div className="absolute bottom-10 left-[-70px] h-72 w-72 rounded-full bg-brand-blue/15 blur-[90px]" />
      <div 
        className="absolute inset-0 opacity-[.06]" 
        style={{ 
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", 
          backgroundSize: "34px 34px" 
        }} 
      />
    </div>
  );
}
