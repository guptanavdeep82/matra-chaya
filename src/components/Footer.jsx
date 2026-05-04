export default function Footer() {
  return (
    <footer className="bg-navy pt-14 pb-7 px-[5vw] text-white/50 border-t-[3px] border-gold">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 mb-10">
          {/* Brand */}
          <div className="max-w-[280px]">
            <div className="flex items-center gap-3 mb-3.5">
              <img src="/asset/logos.png" alt="Matrachaya Foundation" className="w-[72px] h-[72px] bg-[#123f70] border-2 border-gold rounded-[10px] object-cover" />
              <div>
                <div className="font-serif text-lg font-bold text-white leading-tight">Matrachaya Foundation</div>
                <div className="text-[11px] text-gold-light font-semibold tracking-[1.5px] uppercase">MNMSE 2026</div>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed mb-4">
              Empowering meritorious students to access world-class medical education abroad through structured scholarship support, counselling, and guidance.
            </p>
            <div className="text-[13px] leading-[1.9]">
              📧 <a href="mailto:info@matrachayafoundation.org" className="text-gold-light no-underline">info@matrachayafoundation.org</a>
              <br />
              📧 <a href="mailto:mnmse2026@matrachayafoundation.org" className="text-gold-light no-underline">mnmse2026@matrachayafoundation.org</a>
              <br />
              📞 Helpline: 1800-XXX-XXXX (Toll Free)
              <br />
              🌐 <a href="#" className="text-gold-light no-underline">www.matrachayafoundation.org</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[1.2px] mb-3.5">Quick Links</h4>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {['About MNMSE', 'Scholarship Slabs', 'Partner Universities', 'Exam Calendar', 'Eligibility', 'Apply Now'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-white/55 no-underline hover:text-gold-light transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[1.2px] mb-3.5">Resources</h4>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {['Exam Syllabus (PDF)', 'Sample Question Paper', 'University List 2026', 'NMC Recognition Guide', 'MBBS Abroad FAQs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-white/55 no-underline hover:text-gold-light transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[1.2px] mb-3.5">Legal</h4>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {['Terms & Conditions', 'Privacy Policy', 'Refund Policy', 'Grievance Portal', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-white/55 no-underline hover:text-gold-light transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-wrap justify-between items-center text-xs gap-2.5">
          <span>© 2026 Matrachaya Charitable Trust. All rights reserved. | A registered not-for-profit organisation.</span>
          <span>
            MNMSE 2026 | <a href="#" className="text-gold-light no-underline">Results on 30 June 2026</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
