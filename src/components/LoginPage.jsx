import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';

const API_BASE = 'http://localhost:8000';
const OTP_API = 'https://webhook.whatapi.in/webhook/695bae0269936b8bb87c3abc';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginMobile, setLoginMobile] = useState('');
  const [loginOtp, setLoginOtp] = useState('');
  const [enteredLoginOtp, setEnteredLoginOtp] = useState('');
  const [loginOtpLoading, setLoginOtpLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: '', text: '' });

  const sendLoginOtp = async () => {
    if (!loginMobile) { setMsg({ type: 'error', text: 'Please enter mobile number' }); return; }
    if (loginMobile.length !== 10) { setMsg({ type: 'error', text: 'Mobile number must be 10 digits' }); return; }
    setLoginOtpLoading(true);
    const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
    try {
      const res = await fetch(`${OTP_API}?number=91${loginMobile}&otp=${randomOtp}`);
      if (res.ok) {
        setLoginOtp(randomOtp);
        setMsg({ type: 'success', text: 'OTP sent to your WhatsApp!' });
      } else {
        setMsg({ type: 'error', text: 'Failed to send OTP. Please try again.' });
      }
    } catch (err) {
      setMsg({ type: 'error', text: 'Failed to send OTP. Please try again.' });
    }
    setLoginOtpLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg({ type: '', text: '' });
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile: loginMobile, otp: enteredLoginOtp }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('loggedInStudent', JSON.stringify(data.student));
        navigate('/dashboard');
      } else {
        setMsg({ type: 'error', text: data.message || 'Login failed' });
      }
    } catch (err) {
      setMsg({ type: 'error', text: 'Server error. Please try again later.' });
    }
    setLoading(false);
  };

  return (
    <section id="login" className="relative overflow-hidden bg-navy min-h-screen flex items-center justify-center py-20">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 w-full px-[5vw] max-w-2xl">
        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy to-navy-light p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">🎓</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Student Login</h2>
            <p className="text-white/70 text-sm">Login to access your dashboard</p>
          </div>

          {/* Form */}
          <div className="p-8 md:p-10">
            {msg.text && (
              <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {msg.text}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-3">Mobile Number</label>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-medium">+91</span>
                    <input
                      type="text"
                      value={loginMobile}
                      onChange={(e) => setLoginMobile(e.target.value)}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className="w-full pl-12 pr-4 py-4 border-2 border-sky rounded-xl text-base text-text font-sans bg-white focus:border-navy focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={sendLoginOtp}
                    disabled={loginOtpLoading}
                    className="px-6 py-4 bg-red text-white border-0 rounded-xl text-sm font-bold cursor-pointer transition hover:bg-red-light disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {loginOtpLoading ? 'Sending...' : 'Send OTP'}
                  </button>
                </div>
              </div>

              {loginOtp && (
                <div className="mb-6">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-3">WhatsApp OTP</label>
                  <input
                    type="text"
                    value={enteredLoginOtp}
                    onChange={(e) => setEnteredLoginOtp(e.target.value)}
                    placeholder="Enter 4-digit OTP"
                    maxLength={4}
                    className="w-full px-4 py-4 border-2 border-sky rounded-xl text-base text-text font-sans bg-white focus:border-navy focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] outline-none transition text-center text-xl font-bold tracking-widest"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !loginOtp}
                className="w-full py-4 bg-red text-white border-0 rounded-xl text-base font-bold font-sans cursor-pointer transition hover:bg-red-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(215,38,56,0.3)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Logging in...' : 'Login to Dashboard →'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted mb-4">New student?</p>
              <a
                href="#register"
                className="inline-block px-8 py-3 bg-navy text-white text-sm font-bold rounded-xl no-underline hover:bg-navy-light transition"
              >
                Register Now
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-sky">
              <div className="text-xs text-muted leading-relaxed">
                <p className="mb-2">📌 Login with the mobile number you registered with</p>
                <p>🔒 Your data is secure with us</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <a href="#home" className="text-white/60 text-sm no-underline hover:text-white transition">
            ← Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
