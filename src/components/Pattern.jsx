export default function Pattern() {
  const rows = [
    { label: 'Mode', value: 'Online CBT' },
    { label: 'Total Questions', value: '180 MCQs' },
    { label: 'Total Marks', value: '720' },
    { label: 'Duration', value: '3 Hours' },
    { label: 'Correct Answer', value: '+4 Marks' },
    { label: 'Wrong Answer', value: '–1 Mark' },
    { label: 'Language', value: 'English' },
    { label: 'Qualifying Score', value: '50%+' },
  ];

  const subjects = [
    { name: 'Physics', detail: '45 Qs · 180 Marks', width: '25%' },
    { name: 'Chemistry', detail: '45 Qs · 180 Marks', width: '25%' },
    { name: 'Biology – Botany', detail: '45 Qs · 180 Marks', width: '25%' },
    { name: 'Biology – Zoology', detail: '45 Qs · 180 Marks', width: '25%' },
  ];

  return (
    <section id="pattern" className="bg-white">
      <div className="section-inner">
        <span className="section-tag">Exam Details</span>
        <h2 className="section-title">Examination Pattern</h2>
        <p className="section-desc mb-12">
          NEET-aligned. No extra prep needed. Just show up and perform.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Exam Format Table */}
          <div className="border-2 border-sky rounded-2xl overflow-hidden">
            <div className="bg-navy-light px-6 py-3.5 font-bold text-sm text-white tracking-wide">📋 Exam Format</div>
            {rows.map((r) => (
              <div key={r.label} className="flex justify-between px-6 py-3 border-b border-sky last:border-0 text-sm even:bg-sky">
                <span className="text-muted">{r.label}</span>
                <span className="font-bold text-navy">{r.value}</span>
              </div>
            ))}
          </div>

          {/* Subject-wise Distribution */}
          <div>
            <h3 className="text-[16px] font-bold text-navy mb-5">Subject-wise Distribution</h3>
            <div className="space-y-4">
              {subjects.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-[13px] mb-1">
                    <span className="text-navy font-semibold">{s.name}</span>
                    <span className="text-muted">{s.detail}</span>
                  </div>
                  <div className="h-2 bg-sky rounded overflow-hidden">
                    <div className="h-full rounded bg-gradient-to-r from-[#111] to-red" style={{ width: s.width }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-sky rounded-xl p-4 mt-2">
              <div className="text-[13px] font-bold text-navy mb-1.5">📖 Syllabus</div>
              <div className="text-[13px] text-muted leading-relaxed">
                NCERT Class 11 & 12 for Physics, Chemistry (Organic + Inorganic + Physical), and Biology (Botany + Zoology). Difficulty level similar to NEET UG.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
