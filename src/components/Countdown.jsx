import { useState, useEffect } from 'react';

function pad(n) {
  return n.toString().padStart(2, '0');
}

export default function Countdown() {
  const target = new Date('2026-06-10T23:59:59');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  const blocks = [
    { num: pad(days), label: 'Days' },
    { num: pad(hrs), label: 'Hours' },
    { num: pad(mins), label: 'Mins' },
    { num: pad(secs), label: 'Secs' },
  ];

  return (
    <div className="bg-navy-light border-y border-white/10 py-12">
      <div className="max-w-[1200px] mx-auto px-[5vw] flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-white/60 text-sm font-semibold tracking-wide uppercase">
          Registration Closes In
        </span>

        <div className="flex items-center gap-2 md:gap-3">
          {blocks.map((b, i) => (
            <div key={b.label} className="flex items-center gap-2 md:gap-3">
              <div className="bg-white rounded-xl px-4 py-3 min-w-[64px] text-center shadow-lg">
                <div className="font-mono text-xl md:text-2xl font-bold text-navy">{b.num}</div>
                <div className="text-[10px] text-muted font-semibold uppercase tracking-wider">{b.label}</div>
              </div>
              {i < blocks.length - 1 && (
                <span className="text-white/40 text-xl font-bold">:</span>
              )}
            </div>
          ))}
        </div>

        <a
          href="#register"
          className="inline-block bg-red text-white text-[13px] font-bold px-5 py-2.5 rounded-lg no-underline shadow-lg shadow-red/20 hover:bg-red-light transition"
        >
          Register Now →
        </a>
      </div>
    </div>
  );
}
