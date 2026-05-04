export default function Process() {
  const steps = [
    { num: '🌐', title: 'Visit Portal', desc: 'Go to matrachayafoundation.org & click Apply' },
    { num: '👤', title: 'Create Account', desc: 'Register with mobile & email via OTP' },
    { num: '📝', title: 'Fill Form', desc: 'Enter academic, NEET & personal details' },
    { num: '📎', title: 'Upload Docs', desc: 'PDF/JPG — all required documents' },
    { num: '💳', title: 'Pay INR 99', desc: 'UPI / Net Banking / Card — quick & easy', badge: 'Only ₹99' },
    { num: '🎯', title: 'Book Slot', desc: 'Choose your preferred date in the June window' },
  ];

  return (
    <section className="bg-navy">
      <div className="section-inner">
        <span className="section-tag !text-gold-light !border-white/10 !bg-white/5">How to Apply</span>
        <h2 className="section-title light">Registration in 6 Easy Steps</h2>
        <p className="section-desc light mb-12">
          The entire process is online and takes less than 15 minutes.
        </p>
        <div className="flex flex-col lg:flex-row gap-0 mt-14 relative">
          {/* connecting line - hidden on mobile */}
          <div
            className="hidden lg:block absolute top-9 left-9 right-9 h-[3px] z-0"
            style={{ background: 'linear-gradient(90deg,#111,#d72638,#e8a020,#111)' }}
          />
          {steps.map((s) => (
            <div key={s.title} className="flex-1 text-center relative z-10 px-2 mb-6 lg:mb-0">
              <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-sky flex items-center justify-center mx-auto mb-3.5 text-[22px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition hover:bg-red hover:border-red hover:shadow-[0_8px_24px_rgba(215,38,56,0.3)]">
                {s.num}
              </div>
              {s.badge && (
                <div className="inline-block bg-red text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mb-2">
                  {s.badge}
                </div>
              )}
              <div className="text-[13px] font-bold text-white mb-1">{s.title}</div>
              <div className="text-xs text-white/70">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
