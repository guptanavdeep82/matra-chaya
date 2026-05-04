import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: 'Is NEET qualification mandatory to apply?', a: 'You must have appeared in or qualified NEET UG 2026. Students awaiting NEET results may also apply — final scholarship disbursement will require a NEET scorecard.' },
    { q: 'Can students from any state in India apply?', a: 'Yes. MNMSE 2026 is a Pan-India examination. Any Indian citizen who meets the academic eligibility criteria can apply, regardless of state or domicile.' },
    { q: 'How is the scholarship disbursed?', a: 'Scholarship amounts are deducted directly from the tuition fee payable to the partner university. You will receive a Scholarship Award Letter from Matrachaya Foundation.' },
    { q: 'Are the partner universities NMC recognized?', a: 'Yes. All 50 partner universities are on the NMC approved list and in the World Directory of Medical Schools (WDOMS), making your MBBS degree valid for practicing in India.' },
    { q: 'Can students from rural areas take the exam?', a: 'Yes! The exam is fully online and can be taken from home with a stable internet connection (minimum 2 Mbps), a laptop/desktop with webcam, and Google Chrome.' },
    { q: 'What happens after the result is declared?', a: 'Counselling begins from 5th July 2026. Eligible candidates will be called for document verification, followed by university preference selection. Offer letters are issued and scholarship is confirmed.' },
    { q: 'Will Matrachaya Foundation help with visa & travel?', a: 'Yes. Post counselling, the Foundation facilitates visa guidance, pre-departure orientation, and travel coordination support for selected candidates.' },
    { q: 'What is the application fee and why?', a: 'The application fee is just ₹99, covering platform, proctoring, and administration costs. This is the most affordable entry point to a life-changing scholarship opportunity.' },
  ];

  return (
    <section id="faq" className="bg-white">
      <div className="section-inner">
        <span className="section-tag">Got Questions?</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-12">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`border-2 border-sky rounded-xl overflow-hidden transition ${openIndex === i ? 'open' : ''}`}
            >
              <button
                className="w-full text-left px-5 py-4 font-bold text-sm text-navy cursor-pointer flex justify-between items-center gap-3 hover:bg-sky transition select-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {f.q}
                <span className={`text-xs text-red transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                className={`text-[13px] text-muted leading-relaxed bg-sky transition-all duration-300 ${
                  openIndex === i ? 'max-h-[200px] px-5 py-3.5' : 'max-h-0 px-5 py-0 overflow-hidden'
                }`}
              >
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
