import { useState } from 'react';

const API_BASE = 'https://matrachaya.studyintimorleste.com';
const OTP_API = 'https://webhook.whatapi.in/webhook/695bae0269936b8bb87c3abc';
const states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Other'];

export default function RegisterForm() {
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  // Registration form state
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', mobile: '',
    city: '', state: ''
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const sendOtp = async () => {
    if (!form.mobile) { setMsg({ type: 'error', text: 'Please enter mobile number' }); return; }
    if (form.mobile.length !== 10) { setMsg({ type: 'error', text: 'Mobile number must be 10 digits' }); return; }
    setOtpLoading(true);
    const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
    try {
      const res = await fetch(`${OTP_API}?number=91${form.mobile}&otp=${randomOtp}`);
      if (res.ok) {
        setOtp(randomOtp);
        setMsg({ type: 'success', text: 'OTP sent to your WhatsApp!' });
      } else {
        setMsg({ type: 'error', text: 'Failed to send OTP. Please try again.' });
      }
    } catch (err) {
      setMsg({ type: 'error', text: 'Failed to send OTP. Please try again.' });
    }
    setOtpLoading(false);
  };

  const verifyOtp = () => {
    if (enteredOtp && enteredOtp === otp) {
      setOtpVerified(true);
      setMsg({ type: 'success', text: 'Mobile number verified successfully.' });
    } else {
      setOtpVerified(false);
      setMsg({ type: 'error', text: 'Invalid OTP. Please check and try again.' });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      setMsg({ type: 'error', text: 'Please verify your mobile number with OTP before registration.' });
      return;
    }
    setLoading(true);
    setMsg({ type: '', text: '' });
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => formData.append(`${key}[]`, item));
      } else {
        formData.append(key, value);
      }
    });
    formData.append('mobile_otp_verified', '1');
    try {
      const res = await fetch(`${API_BASE}/api/register`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setMsg({ type: 'success', text: data.message || 'Registration successful! Please login to complete your application.' });
        setForm({ first_name: '', last_name: '', email: '', mobile: '', city: '', state: '' });
        setOtp('');
        setEnteredOtp('');
        setOtpVerified(false);
      } else {
        const errors = data.errors ? Object.values(data.errors).flat().join(' ') : (data.message || 'Registration failed');
        setMsg({ type: 'error', text: errors });
      }
    } catch (err) {
      setMsg({ type: 'error', text: 'Server error. Please try again later.' });
    }
    setLoading(false);
  };

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
            Register for
            <br />
            MNMSE 2026
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
          <div className="p-7">
              <form onSubmit={handleRegister}>
                {msg.text && (
                  <div className={`mb-4 p-3 rounded-lg text-sm font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {msg.text}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">First Name</label>
                    <input type="text" name="first_name" value={form.first_name} onChange={handleChange} placeholder="e.g. Priya" required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Last Name</label>
                    <input type="text" name="last_name" value={form.last_name} onChange={handleChange} placeholder="e.g. Sharma" required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Mobile Number {otpVerified ? '✅' : ''}</label>
                    <div className="flex gap-2">
                      <input type="tel" name="mobile" value={form.mobile} onChange={(e) => { handleChange(e); setOtpVerified(false); }} placeholder="+91 XXXXX XXXXX" required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                      <button type="button" onClick={sendOtp} disabled={otpLoading || otpVerified} className="px-3 py-2.5 bg-navy text-white rounded-lg text-xs font-bold disabled:opacity-60">{otpLoading ? 'Sending' : 'OTP'}</button>
                    </div>
                  </div>
                </div>
                {otp && !otpVerified && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Enter OTP</label>
                      <input type="text" value={enteredOtp} onChange={(e) => setEnteredOtp(e.target.value)} placeholder="Enter WhatsApp OTP" className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                    </div>
                    <div className="flex items-end">
                      <button type="button" onClick={verifyOtp} className="w-full py-2.5 bg-red text-white border-0 rounded-lg text-sm font-bold">Verify OTP</button>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">City</label>
                    <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="Enter City" required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">State</label>
                    <select name="state" value={form.state} onChange={handleChange} required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition">
                      <option value="">Select State</option>
                      {states.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="text-xs text-muted leading-relaxed p-2.5 bg-sky rounded-lg mb-4">
                  By registering, you agree to Matrachaya Foundation&apos;s <a href="#" className="text-navy font-bold no-underline">Terms & Conditions</a> and <a href="#" className="text-navy font-bold no-underline">Privacy Policy</a>. After registration, please login to the student panel to complete academic details, documents, and preferred countries.
                </div>
                <button type="submit" disabled={loading} className="w-full py-3.5 bg-red text-white border-0 rounded-[10px] text-[15px] font-bold font-sans cursor-pointer transition hover:bg-red-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(215,38,56,0.3)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? 'Processing...' : 'Register Now →'}
                </button>
                <div className="text-center mt-3.5 text-[13px] text-muted">
                  Already registered? <a href="/login" className="text-navy font-bold no-underline">Login here</a>
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}
