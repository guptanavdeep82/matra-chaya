import { useState } from 'react';

export default function RegisterForm() {
  const [tab, setTab] = useState('register');
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showLogPass, setShowLogPass] = useState(false);

  const benefits = [
    { icon: '✅', text: 'Instant confirmation via SMS & email' },
    { icon: '📊', text: 'Live application status tracking dashboard' },
    { icon: '🔔', text: 'Admit card & result notifications' },
    { icon: '🏛️', text: 'Counselling slot booking through your login' },
    { icon: '📁', text: 'All documents stored in your secure profile' },
    { icon: '🎓', text: 'Scholarship award letter accessible post-result' },
  ];

  return (
    <section id="register" className="relative overflow-hidden bg-navy py-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10 w-full px-[5vw] grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Left info */}
        <div>
          <span className="section-tag !text-gold-light !border-white/10 !bg-white/5">Student Portal</span>
          <h2 className="section-title !text-white !mb-2">
            Register or
            <br />
            Login to Apply
          </h2>
          <p className="text-sm text-white/55 mb-0">
            Join thousands of NEET aspirants already registered for MNMSE 2026.
          </p>
          <ul className="list-none mt-7 space-y-0">
            {benefits.map((b) => (
              <li key={b.text} className="flex items-center gap-3 py-2.5 border-b border-white/10 text-sm text-white/85 last:border-0">
                <span className="w-7 h-7 rounded-md bg-red/25 flex items-center justify-center text-sm flex-shrink-0">{b.icon}</span>
                {b.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
          <div className="flex bg-sky">
            <button
              className={`flex-1 py-4 text-sm font-bold text-center cursor-pointer border-0 font-sans transition ${
                tab === 'register' ? 'text-navy border-b-[3px] border-red bg-white' : 'text-muted bg-transparent'
              }`}
              onClick={() => setTab('register')}
            >
              New Registration
            </button>
            <button
              className={`flex-1 py-4 text-sm font-bold text-center cursor-pointer border-0 font-sans transition ${
                tab === 'login' ? 'text-navy border-b-[3px] border-red bg-white' : 'text-muted bg-transparent'
              }`}
              onClick={() => setTab('login')}
            >
              Student Login
            </button>
          </div>

          <div className="p-7">
            {tab === 'register' ? (
              <div>
                <div className="flex gap-2.5 mb-5">
                  <button className="flex-1 py-2.5 border-[1.5px] border-sky rounded-lg text-[13px] font-semibold flex items-center justify-center gap-1.5 bg-white hover:border-[#111] hover:bg-sky transition cursor-pointer">
                    🔵 Continue with Google
                  </button>
                  <button className="flex-1 py-2.5 border-[1.5px] border-sky rounded-lg text-[13px] font-semibold flex items-center justify-center gap-1.5 bg-white hover:border-[#111] hover:bg-sky transition cursor-pointer">
                    📘 Continue with Facebook
                  </button>
                </div>
                <div className="flex items-center gap-3 mb-5 text-xs text-muted font-semibold">
                  <span className="flex-1 h-px bg-sky" />
                  or register with email
                  <span className="flex-1 h-px bg-sky" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">First Name</label>
                    <input type="text" placeholder="e.g. Priya" className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Last Name</label>
                    <input type="text" placeholder="e.g. Sharma" className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Email Address</label>
                    <input type="email" placeholder="you@example.com" className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Mobile Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">State</label>
                    <select className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition">
                      <option value="">Select State</option>
                      {['Andhra Pradesh','Assam','Bihar','Delhi','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Odisha','Punjab','Rajasthan','Tamil Nadu','Telangana','Uttar Pradesh','Uttarakhand','West Bengal','Other'].map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">NEET Status</label>
                    <select className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition">
                      <option value="">Select</option>
                      <option>Qualified NEET UG 2026</option>
                      <option>Appeared / Result Awaited</option>
                      <option>Qualified NEET UG 2025</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">NEET Roll Number</label>
                    <input type="text" placeholder="Enter NEET Roll No." className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Date of Birth</label>
                    <input type="date" className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Password</label>
                    <div className="relative">
                      <input type={showPass ? 'text' : 'password'} placeholder="Create password" className="w-full px-3.5 py-2.5 pr-11 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                      <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-0 text-muted text-[15px] cursor-pointer" onClick={() => setShowPass(!showPass)}>👁️</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Confirm Password</label>
                    <div className="relative">
                      <input type={showPass2 ? 'text' : 'password'} placeholder="Re-enter password" className="w-full px-3.5 py-2.5 pr-11 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                      <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-0 text-muted text-[15px] cursor-pointer" onClick={() => setShowPass2(!showPass2)}>👁️</button>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-muted leading-relaxed p-2.5 bg-sky rounded-lg mb-4">
                  By registering, you agree to Matrachaya Foundation&apos;s <a href="#" className="text-navy font-bold no-underline">Terms & Conditions</a> and <a href="#" className="text-navy font-bold no-underline">Privacy Policy</a>. Application fee of ₹99 to be paid after form submission.
                </div>
                <button className="w-full py-3.5 bg-red text-white border-0 rounded-[10px] text-[15px] font-bold font-sans cursor-pointer transition hover:bg-red-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(215,38,56,0.3)] flex items-center justify-center gap-2">
                  Create Account & Apply →
                </button>
                <div className="text-center mt-3.5 text-[13px] text-muted">
                  Already registered? <a href="#" className="text-navy font-bold no-underline" onClick={(e) => { e.preventDefault(); setTab('login'); }}>Login here</a>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex gap-2.5 mb-5">
                  <button className="flex-1 py-2.5 border-[1.5px] border-sky rounded-lg text-[13px] font-semibold flex items-center justify-center gap-1.5 bg-white hover:border-[#111] hover:bg-sky transition cursor-pointer">
                    🔵 Login with Google
                  </button>
                  <button className="flex-1 py-2.5 border-[1.5px] border-sky rounded-lg text-[13px] font-semibold flex items-center justify-center gap-1.5 bg-white hover:border-[#111] hover:bg-sky transition cursor-pointer">
                    📘 Login with Facebook
                  </button>
                </div>
                <div className="flex items-center gap-3 mb-5 text-xs text-muted font-semibold">
                  <span className="flex-1 h-px bg-sky" />
                  or login with credentials
                  <span className="flex-1 h-px bg-sky" />
                </div>
                <div className="mb-3.5">
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Email / Mobile / NEET Roll No.</label>
                  <input type="text" placeholder="Enter your email or mobile" className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                </div>
                <div className="mb-2">
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Password</label>
                  <div className="relative">
                    <input type={showLogPass ? 'text' : 'password'} placeholder="Enter your password" className="w-full px-3.5 py-2.5 pr-11 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-0 text-muted text-[15px] cursor-pointer" onClick={() => setShowLogPass(!showLogPass)}>👁️</button>
                  </div>
                </div>
                <div className="text-right mb-3.5">
                  <a href="#" className="text-[13px] text-navy font-semibold no-underline">Forgot Password?</a>
                </div>
                <div className="text-xs text-muted leading-relaxed p-2.5 bg-sky rounded-lg mb-4">
                  📌 Use the email/mobile you registered with. Your application ID is also accepted as login ID.
                </div>
                <button className="w-full py-3.5 bg-red text-white border-0 rounded-[10px] text-[15px] font-bold font-sans cursor-pointer transition hover:bg-red-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(215,38,56,0.3)] flex items-center justify-center gap-2">
                  Login to My Account →
                </button>
                <div className="text-center mt-3.5 text-[13px] text-muted">
                  New student? <a href="#" className="text-navy font-bold no-underline" onClick={(e) => { e.preventDefault(); setTab('register'); }}>Register here</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
