import { useState } from 'react';

const API_BASE = 'http://localhost:8000';
const OTP_API = 'https://webhook.whatapi.in/webhook/695bae0269936b8bb87c3abc';
const states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Other'];
const countries = ['Kazakhstan','Uzbekistan','Russia','Kyrgyzstan','Timor Leste','Nepal','Bangladesh','Vietnam'];

export default function RegisterForm() {
  const [tab, setTab] = useState('register');
  const [showLogPass, setShowLogPass] = useState(false);
  const [registerStep, setRegisterStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  // Registration form state
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', mobile: '',
    city: '', state: '', academic_state: '', neet_status: '', neet_roll_number: '',
    father_name: '', mother_name: '', aadhar_number: '', date_of_birth: '',
    communication_address: '', pin_code: '', countries_preferred: [],
    aadhar_card: null, passport_photo: null, class_12_marksheet: null, neet_admit_card: null
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.files[0] }));
  };

  const handleCountryChange = (country) => {
    setForm(f => {
      const selected = f.countries_preferred.includes(country);
      if (!selected && f.countries_preferred.length >= 2) return f;
      return {
        ...f,
        countries_preferred: selected
          ? f.countries_preferred.filter((item) => item !== country)
          : [...f.countries_preferred, country],
      };
    });
  };

  const sendOtp = async () => {
    const mobile = form.mobile.replace(/\D/g, '');
    if (mobile.length < 10) {
      setMsg({ type: 'error', text: 'Please enter a valid mobile number before sending OTP.' });
      return;
    }
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setOtpLoading(true);
    setMsg({ type: '', text: '' });
    try {
      await fetch(`${OTP_API}?number=91${mobile.slice(-10)}&otp=${generatedOtp}`);
      setOtp(generatedOtp);
      setOtpVerified(false);
      setMsg({ type: 'success', text: 'OTP sent on WhatsApp. Please verify your mobile number.' });
    } catch (err) {
      setMsg({ type: 'error', text: 'Unable to send OTP. Please try again.' });
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

  const handleNextStep = () => {
    const requiredFields = ['first_name', 'last_name', 'email', 'mobile', 'city', 'state', 'academic_state', 'neet_status', 'neet_roll_number'];
    const hasEmptyField = requiredFields.some((field) => !form[field]);
    if (hasEmptyField) {
      setMsg({ type: 'error', text: 'Please fill all required details before continuing.' });
      return;
    }
    if (!otpVerified) {
      setMsg({ type: 'error', text: 'Please verify your mobile number with OTP before continuing.' });
      return;
    }
    setMsg({ type: '', text: '' });
    setRegisterStep(2);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      setMsg({ type: 'error', text: 'Please verify your mobile number with OTP before registration.' });
      return;
    }
    if (form.countries_preferred.length !== 2) {
      setMsg({ type: 'error', text: 'Please select exactly two preferred countries.' });
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
        setMsg({ type: 'success', text: data.message || 'Registration successful!' });
        setForm({ first_name: '', last_name: '', email: '', mobile: '', city: '', state: '', academic_state: '', neet_status: '', neet_roll_number: '', father_name: '', mother_name: '', aadhar_number: '', date_of_birth: '', communication_address: '', pin_code: '', countries_preferred: [], aadhar_card: null, passport_photo: null, class_12_marksheet: null, neet_admit_card: null });
        setRegisterStep(1);
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
              <form onSubmit={handleRegister}>
                {msg.text && (
                  <div className={`mb-4 p-3 rounded-lg text-sm font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {msg.text}
                  </div>
                )}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`flex-1 rounded-full py-2 text-center text-xs font-bold ${registerStep === 1 ? 'bg-navy text-white' : 'bg-sky text-muted'}`}>Step 1: Personal & NEET</div>
                  <div className={`flex-1 rounded-full py-2 text-center text-xs font-bold ${registerStep === 2 ? 'bg-navy text-white' : 'bg-sky text-muted'}`}>Step 2: Documents & Submit</div>
                </div>
                {registerStep === 1 && (
                  <>
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
                <div className="text-sm font-bold text-navy mt-5 mb-3">Academic / NEET Details</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">State</label>
                    <select name="academic_state" value={form.academic_state} onChange={handleChange} required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition">
                      <option value="">Select State</option>
                      {states.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">NEET Status</label>
                    <select name="neet_status" value={form.neet_status} onChange={handleChange} required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition">
                      <option value="">Select</option>
                      <option value="Qualified NEET UG 2026">Qualified NEET UG 2026</option>
                      <option value="Appeared / Result Awaited">Appeared / Result Awaited</option>
                      <option value="Qualified NEET UG 2025">Qualified NEET UG 2025</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">NEET Roll Number</label>
                    <input type="text" name="neet_roll_number" value={form.neet_roll_number} onChange={handleChange} placeholder="Enter NEET Roll No." required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                </div>
                <button type="button" onClick={handleNextStep} className="w-full py-3.5 bg-red text-white border-0 rounded-[10px] text-[15px] font-bold font-sans cursor-pointer transition hover:bg-red-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(215,38,56,0.3)] flex items-center justify-center gap-2">
                  Continue to Step 2 →
                </button>
                  </>
                )}
                {registerStep === 2 && (
                  <>
                <div className="text-sm font-bold text-navy mt-5 mb-3">Additional Details</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Father Name</label>
                    <input type="text" name="father_name" value={form.father_name} onChange={handleChange} placeholder="Father Name" required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Mother Name</label>
                    <input type="text" name="mother_name" value={form.mother_name} onChange={handleChange} placeholder="Mother Name" required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Aadhar Number</label>
                    <input type="text" name="aadhar_number" value={form.aadhar_number} onChange={handleChange} placeholder="Enter Aadhar Number" required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Date of Birth</label>
                    <input type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Communication Address</label>
                    <input type="text" name="communication_address" value={form.communication_address} onChange={handleChange} placeholder="Full Address" required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Pin Code</label>
                    <input type="text" name="pin_code" value={form.pin_code} onChange={handleChange} placeholder="Pin Code" required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                  </div>
                </div>
                <div className="text-sm font-bold text-navy mt-5 mb-3">Documents Upload</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  {[
                    ['aadhar_card', 'Aadhar Card'],
                    ['passport_photo', 'Passport Size Photo in white background'],
                    ['class_12_marksheet', 'Class 12 Marksheet'],
                    ['neet_admit_card', 'NEET Admit Card'],
                  ].map(([name, label]) => (
                    <div key={name}>
                      <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">{label}</label>
                      <input type="file" name={name} onChange={handleFileChange} required className="w-full px-3.5 py-2.5 border-[1.5px] border-sky rounded-lg text-sm text-text font-sans bg-white focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-navy mt-5 mb-3">Countries Preferred <span className="text-xs text-muted">(Select any two)</span></div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                  {countries.map((country) => (
                    <label key={country} className={`px-3 py-2 rounded-lg border-[1.5px] text-xs font-bold cursor-pointer ${form.countries_preferred.includes(country) ? 'bg-navy text-white border-navy' : 'bg-white text-text border-sky'}`}>
                      <input type="checkbox" checked={form.countries_preferred.includes(country)} onChange={() => handleCountryChange(country)} className="mr-1.5" />
                      {country}
                    </label>
                  ))}
                </div>
                <div className="text-xs text-muted leading-relaxed p-2.5 bg-sky rounded-lg mb-4">
                  By registering, you agree to Matrachaya Foundation&apos;s <a href="#" className="text-navy font-bold no-underline">Terms & Conditions</a> and <a href="#" className="text-navy font-bold no-underline">Privacy Policy</a>. Application fee of ₹99 to be paid after form submission.
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => { setMsg({ type: '', text: '' }); setRegisterStep(1); }} className="w-full py-3.5 bg-sky text-navy border-0 rounded-[10px] text-[15px] font-bold font-sans cursor-pointer transition hover:bg-[#dfeaf5]">
                    ← Back
                  </button>
                <button type="submit" disabled={loading} className="w-full py-3.5 bg-red text-white border-0 rounded-[10px] text-[15px] font-bold font-sans cursor-pointer transition hover:bg-red-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(215,38,56,0.3)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? 'Processing...' : 'Create Account & Apply →'}
                </button>
                </div>
                  </>
                )}
                <div className="text-center mt-3.5 text-[13px] text-muted">
                  Already registered? <a href="#" className="text-navy font-bold no-underline" onClick={(e) => { e.preventDefault(); setTab('login'); }}>Login here</a>
                </div>
              </form>
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
