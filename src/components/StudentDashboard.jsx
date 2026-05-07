import { useState } from 'react';

const API_BASE = 'http://localhost:8000';
const countries = ['Kazakhstan','Uzbekistan','Russia','Kyrgyzstan','Timor Leste','Nepal','Bangladesh','Vietnam'];

export default function StudentDashboard({ student, onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [form, setForm] = useState({
    countries_preferred: student?.countries_preferred || [],
    aadhar_card: null,
    passport_photo: null,
    class_12_marksheet: null,
    neet_admit_card: null,
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: '', text: '' });

  const handleFileChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.files[0] }));
  };

  const handleCountryChange = (country) => {
    setForm(f => {
      const selected = f.countries_preferred.includes(country);
      const newCountries = selected
        ? f.countries_preferred.filter((item) => item !== country)
        : [...f.countries_preferred, country];
      
      if (newCountries.length > 2) {
        setMsg({ type: 'error', text: 'Please select exactly 2 countries' });
        return f;
      }
      setMsg({ type: '', text: '' });
      return { ...f, countries_preferred: newCountries };
    });
  };

  const calculateProfileCompletion = () => {
    let completed = 0;
    const total = 5;
    
    if (form.countries_preferred.length === 2) completed++;
    if (form.aadhar_card) completed++;
    if (form.passport_photo) completed++;
    if (form.class_12_marksheet) completed++;
    if (form.neet_admit_card) completed++;
    
    return Math.round((completed / total) * 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg({ type: '', text: '' });

    if (form.countries_preferred.length !== 2) {
      setMsg({ type: 'error', text: 'Please select exactly 2 countries' });
      return;
    }

    const requiredFiles = ['aadhar_card', 'passport_photo', 'class_12_marksheet', 'neet_admit_card'];
    for (const file of requiredFiles) {
      if (!form[file]) {
        setMsg({ type: 'error', text: 'Please upload all required documents' });
        return;
      }
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('countries_preferred', JSON.stringify(form.countries_preferred));
    formData.append('aadhar_card', form.aadhar_card);
    formData.append('passport_photo', form.passport_photo);
    formData.append('class_12_marksheet', form.class_12_marksheet);
    formData.append('neet_admit_card', form.neet_admit_card);

    try {
      const res = await fetch(`${API_BASE}/api/students/${student.id}/documents`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setMsg({ type: 'success', text: 'Documents submitted successfully!' });
      } else {
        setMsg({ type: 'error', text: data.message || 'Submission failed' });
      }
    } catch (err) {
      setMsg({ type: 'error', text: 'Server error. Please try again later.' });
    }
    setLoading(false);
  };

  const completion = calculateProfileCompletion();
  const documentCompletion = Math.round(([
    form.aadhar_card,
    form.passport_photo,
    form.class_12_marksheet,
    form.neet_admit_card,
  ].filter(Boolean).length / 4) * 100);
  const scholarshipReadiness = Math.round((completion + 80) / 2);
  const profileItems = [
    ['Countries Selected', form.countries_preferred.length === 2],
    ['Aadhar Card', Boolean(form.aadhar_card)],
    ['Passport Photo', Boolean(form.passport_photo)],
    ['Class 12 Marksheet', Boolean(form.class_12_marksheet)],
    ['NEET Admit Card', Boolean(form.neet_admit_card)],
  ];
  const scholarshipBars = [
    ['Registration', 100],
    ['Profile', completion],
    ['Documents', documentCompletion],
    ['Scholarship Readiness', scholarshipReadiness],
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-navy via-navy-light to-sky/30">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <aside className="lg:w-72 bg-navy/95 border-b lg:border-b-0 lg:border-r border-white/10 p-5 lg:sticky lg:top-0 lg:h-screen">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-red/20 flex items-center justify-center text-2xl">🎓</div>
            <div>
              <p className="text-white font-bold leading-tight">{student?.first_name} {student?.last_name}</p>
              <p className="text-white/50 text-xs">Student Portal</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            <button type="button" onClick={() => setActiveTab('dashboard')} className={`text-left px-4 py-3 rounded-xl font-bold text-sm transition ${activeTab === 'dashboard' ? 'bg-red text-white shadow-lg shadow-red/20' : 'bg-white/5 text-white/75 hover:bg-white/10'}`}>
              📊 Dashboard
            </button>
            <button type="button" onClick={() => setActiveTab('profile')} className={`text-left px-4 py-3 rounded-xl font-bold text-sm transition ${activeTab === 'profile' ? 'bg-red text-white shadow-lg shadow-red/20' : 'bg-white/5 text-white/75 hover:bg-white/10'}`}>
              👤 Student Profile
            </button>
            <button type="button" onClick={onLogout} className="col-span-2 lg:col-span-1 text-left px-4 py-3 rounded-xl font-bold text-sm transition bg-white/5 text-white/75 hover:bg-red hover:text-white">
              🚪 Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 p-5 md:p-8 lg:p-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {activeTab === 'dashboard' ? 'Dashboard Overview' : 'Student Profile'}
              </h1>
              <p className="text-white/70">
                Welcome back, <span className="text-gold font-semibold">{student?.first_name} {student?.last_name}</span>
              </p>
            </div>

            {activeTab === 'dashboard' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Profile Completion</h3>
                    <div className="flex flex-col items-center">
                      <div className="relative w-40 h-40 mb-4">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="80" cy="80" r="70" stroke="#e2e8f0" strokeWidth="12" fill="none" />
                          <circle cx="80" cy="80" r="70" stroke={completion === 100 ? '#10b981' : '#d72638'} strokeWidth="12" fill="none" strokeDasharray={`${completion * 4.4} 440`} strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-bold text-navy">{completion}%</span>
                          <span className="text-xs text-muted">Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Profile Tasks</h3>
                    <div className="space-y-3">
                      {profileItems.map(([label, done]) => (
                        <div key={label} className="flex items-center justify-between gap-3">
                          <span className="text-sm text-text">{label}</span>
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${done ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                            {done ? 'Done' : 'Pending'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Scholarship Readiness</h3>
                    <div className="h-44 flex items-end gap-4 pt-4">
                      {scholarshipBars.map(([label, value]) => (
                        <div key={label} className="flex-1 flex flex-col items-center gap-2">
                          <div className="w-full h-32 bg-sky rounded-xl flex items-end overflow-hidden">
                            <div className="w-full bg-red rounded-xl transition-all" style={{ height: `${value}%` }} />
                          </div>
                          <span className="text-[10px] text-muted text-center leading-tight">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                  <h3 className="text-lg font-bold text-navy mb-5">Scholarship Progress Graph</h3>
                  <div className="space-y-5">
                    {scholarshipBars.map(([label, value]) => (
                      <div key={label}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-navy">{label}</span>
                          <span className="text-sm font-bold text-red">{value}%</span>
                        </div>
                        <div className="w-full h-3 bg-sky rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red to-gold rounded-full" style={{ width: `${value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'profile' && (
              <>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl mb-8">
                  <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
                    <span className="text-2xl">👤</span>
                    Your Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-gradient-to-br from-sky/50 to-sky/30 rounded-xl border border-sky/30">
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">Full Name</p>
                      <p className="font-semibold text-navy">{student?.first_name} {student?.last_name}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-sky/50 to-sky/30 rounded-xl border border-sky/30">
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">Email</p>
                      <p className="font-semibold text-navy">{student?.email}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-sky/50 to-sky/30 rounded-xl border border-sky/30">
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">Mobile</p>
                      <p className="font-semibold text-navy">{student?.mobile}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-sky/50 to-sky/30 rounded-xl border border-sky/30">
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">NEET Roll Number</p>
                      <p className="font-semibold text-navy">{student?.neet_roll_number}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-sky/50 to-sky/30 rounded-xl border border-sky/30">
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">NEET Status</p>
                      <p className="font-semibold text-navy">{student?.neet_status}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-sky/50 to-sky/30 rounded-xl border border-sky/30">
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">Academic State</p>
                      <p className="font-semibold text-navy">{student?.academic_state}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                  <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
                    <span className="text-2xl">📄</span>
                    Complete Your Profile
                  </h3>
                  {msg.text && (
                    <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                      {msg.text}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <label className="block text-sm font-bold text-navy mb-4 flex items-center gap-2">
                        <span className="text-xl">🌍</span>
                        Countries Preferred <span className="text-muted font-normal">(Select exactly 2)</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {countries.map((country) => (
                          <label key={country} className={`px-4 py-3 rounded-xl border-2 text-sm font-semibold cursor-pointer transition-all ${form.countries_preferred.includes(country) ? 'bg-navy text-white border-navy shadow-md' : 'bg-white text-text border-sky hover:border-navy hover:bg-sky/30'}`}>
                            <input type="checkbox" checked={form.countries_preferred.includes(country)} onChange={() => handleCountryChange(country)} className="mr-2" />
                            {country}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-bold text-navy mb-4 flex items-center gap-2">
                        <span className="text-xl">📤</span>
                        Documents Upload
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                          ['aadhar_card', 'Aadhar Card'],
                          ['passport_photo', 'Passport Size Photo (white background)'],
                          ['class_12_marksheet', 'Class 12 Marksheet'],
                          ['neet_admit_card', 'NEET Admit Card'],
                        ].map(([name, label]) => (
                          <div key={name} className="p-4 bg-sky/30 rounded-xl border-2 border-sky/50 hover:border-navy transition">
                            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">{label}</label>
                            <input type="file" name={name} onChange={handleFileChange} className="w-full px-4 py-3 border-2 border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-navy focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                            {form[name] && (
                              <p className="text-xs text-green-600 mt-2 font-medium">✓ {form[name].name}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button type="submit" disabled={loading} className="w-full py-4 bg-red text-white border-0 rounded-xl text-base font-bold font-sans cursor-pointer transition hover:bg-red-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(215,38,56,0.3)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? 'Submitting...' : 'Submit Documents →'}
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
