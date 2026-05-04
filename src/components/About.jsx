export default function About() {
  return (
    <section id="about-org" className="bg-white">
      <div className="section-inner">
        <span className="section-tag">Who We Are</span>
        <h2 className="section-title">
          About Matrachaya
          <br />
          Charitable Trust
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-14">
          <div>
            <p className="text-[15px] text-muted leading-[1.85] mb-4">
              Matrachhaya Charitable Trust is a not-for-profit organisation devoted to holistic community development. Our work spans across education, health, women empowerment, disaster relief, and livelihood generation, with special attention to gender equity and scientific literacy.
            </p>
            <p className="text-[15px] text-muted leading-[1.85] mb-6">
              Through MNMSE 2026, we extend our mission into the realm of medical education — believing that financial barriers should never stand between a meritorious student and a doctor&apos;s coat. Every scholarship we award is a life transformed, and a community strengthened.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {['📚 Education', '🏥 Health', '👩 Women Empowerment', '🌊 Disaster Relief', '💼 Livelihood Generation', '⚖️ Gender Equity', '🔬 Scientific Literacy'].map((tag) => (
                <div key={tag} className="bg-sky border border-sky rounded-full px-4 py-1.5 text-xs font-bold text-[#111] flex items-center gap-1.5">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <video
            controls
            className="rounded-[20px] overflow-hidden bg-navy-light aspect-video w-full border-[3px] border-[#222] shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:border-gold hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.3)] transition"
            poster=""
          >
            <source src="https://api.medicine.getmyuniversity.com/public/VID-20260430-WA0028.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
