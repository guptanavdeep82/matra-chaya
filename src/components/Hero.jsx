export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
      {/* Diagonal gradient lines background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(244,196,48,0.15) 40px, rgba(244,196,48,0.15) 41px, transparent 41px, transparent 80px, rgba(255,224,102,0.08) 80px, rgba(255,224,102,0.08) 81px)',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-[5vw] w-full mx-auto pt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            Matrachaya National Medical Scholarship Examination &nbsp;|&nbsp; MNMSE 2026
          </span>
        </div>

        <h1 className="font-serif text-[clamp(48px,7.5vw,90px)] font-bold text-white leading-[1.08] mb-6">
          Your MBBS Dream.
          <br />
          <em className="text-gold">Fully Funded.</em>
        </h1>

        <p className="text-white/70 text-lg leading-relaxed max-w-[680px] mx-auto mb-10">
          India&apos;s most ambitious scholarship gateway for MBBS aspirants who deserve more than financial barriers.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-red text-white text-[15px] font-bold px-7 py-3 rounded-xl no-underline shadow-lg shadow-red/30 hover:bg-red-light hover:-translate-y-0.5 transition"
          >
            Apply Now <span>→</span>
          </a>
          <a
            href="#about-org"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 text-white text-[15px] font-bold px-7 py-3 rounded-xl no-underline hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
