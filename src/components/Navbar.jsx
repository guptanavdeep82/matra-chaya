import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#about-org', label: 'About' },
    { href: '#scholarship', label: 'Scholarship' },
    { href: '#countries', label: 'Universities' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#eligibility', label: 'Eligibility' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-white/10 shadow-lg">
      <div className="w-full px-[5vw] py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 no-underline">
          <img src="/asset/logos.png" alt="Matrachaya Foundation" className="w-14 h-14 rounded-xl object-cover border-2 border-gold" />
          <div>
            <div className="font-serif text-lg font-bold text-white leading-tight">Matrachaya Foundation</div>
            <div className="text-[11px] font-bold tracking-widest text-white/60 uppercase">MNMSE 2026</div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[13px] font-bold text-white/80 no-underline hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#register"
              className="inline-block bg-red text-white text-[13px] font-bold px-5 py-2 rounded-lg no-underline hover:bg-red-light transition"
            >
              Apply Now
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy-light border-t border-white/10 px-[5vw] py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 text-sm font-bold text-white/80 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            className="block mt-2 text-center bg-red text-white text-sm font-bold px-5 py-2 rounded-lg no-underline"
            onClick={() => setMenuOpen(false)}
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}
