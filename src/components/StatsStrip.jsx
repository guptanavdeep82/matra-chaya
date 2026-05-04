export default function StatsStrip() {
  const stats = [
    { num: '50+', label: 'Partner Universities' },
    { num: '8', label: 'Countries' },
    { num: '100%', label: 'Top Achievers' },
    { num: '₹99', label: 'Application Fee Only' },
  ];

  return (
    <div className="bg-navy border-y border-white/10 py-10">
      <div className="w-full px-[5vw] grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-sans text-[clamp(32px,3.5vw,48px)] font-bold text-white mb-1">
              {s.num.includes('₹') ? (
                <>
                  ₹{s.num.replace('₹', '')}
                </>
              ) : (
                s.num
              )}
            </div>
            <div className="text-[13px] text-white/70 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
