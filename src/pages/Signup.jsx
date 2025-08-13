import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [role, setRole] = useState('Student');
  const [theme, setTheme] = useState('dark');
  const navigate = useNavigate();

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please agree to the Terms & Conditions');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u) => u.email === email)) {
      alert('Email already registered');
      return;
    }
    const newUser = { firstName, lastName, email, password, role };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  const handleGoogleSignup = () => {
    // Google OAuth redirect URL
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=${encodeURIComponent('YOUR_REDIRECT_URI')}&response_type=code&scope=email%20profile`;
    window.location.href = googleAuthUrl;
  };

  const handleAppleSignup = () => {
    // Apple OAuth redirect URL
    const appleAuthUrl = `https://appleid.apple.com/auth/authorize?client_id=YOUR_APPLE_CLIENT_ID&redirect_uri=${encodeURIComponent('YOUR_REDIRECT_URI')}&response_type=code%20id_token&scope=name%20email&response_mode=form_post`;
    window.location.href = appleAuthUrl;
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      {/* Light/Dark Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full shadow-md hover:scale-105 transition duration-200"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--text-color)',
          }}
        >
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        </button>
      </div>

      <div
        className="w-full max-w-4xl mt-6 mb-6 sm:mt-8 sm:mb-8 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row transform transition-all duration-300 hover:shadow-[0_0_20px_var(--color-primary)]"
        style={{ backgroundColor: 'var(--card-bg)' }}
      >
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="https://th.bing.com/th/id/OIP.QKEwEVJlylLFZ4L75yhLPAHaEb?w=303&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Signup Background"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, var(--color-bg-dark), var(--color-primary)/0.3)',
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-3xl sm:text-4xl font-extrabold opacity-90"
              style={{ color: 'var(--text-color)' }}
            >
              Join Us Today
            </h1>
          </div>
        </div>

        {/* Right Form Section */}
        <div
          className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center"
          style={{ backgroundColor: 'var(--card-bg)' }}
        >
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight"
            style={{ color: 'var(--text-color)' }}
          >
            Create an Account
          </h2>
          <p className="mb-8 text-base sm:text-lg" style={{ color: 'var(--color-muted)' }}>
            Already have an account?{' '}
            <a
              href="/login"
              className="font-medium transition duration-200 hover:underline"
              style={{ color: 'var(--color-primary)' }}
            >
              Log in
            </a>
          </p>
          <form className="space-y-6" onSubmit={handleSignup}>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-300"
                style={{
                  backgroundColor: 'var(--color-card-bg-dark)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-color)',
                  '--tw-ring-color': 'var(--color-primary)',
                }}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-300"
                style={{
                  backgroundColor: 'var(--color-card-bg-dark)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-color)',
                  '--tw-ring-color': 'var(--color-primary)',
                }}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-300"
                style={{
                  backgroundColor: 'var(--color-card-bg-dark)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-color)',
                  '--tw-ring-color': 'var(--color-primary)',
                }}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-300"
                style={{
                  backgroundColor: 'var(--color-card-bg-dark)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-color)',
                  '--tw-ring-color': 'var(--color-primary)',
                }}
                required
              />
            </div>
            <div className="flex gap-4">
              <label
                className="flex items-center text-sm sm:text-base"
                style={{ color: 'var(--color-muted)' }}
              >
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={role === 'Student'}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2 h-4 w-4 focus:ring-2"
                  style={{
                    borderColor: 'var(--border-color)',
                    '--tw-ring-color': 'var(--color-primary)',
                  }}
                />
                Student
              </label>
              <label
                className="flex items-center text-sm sm:text-base"
                style={{ color: 'var(--color-muted)' }}
              >
                <input
                  type="radio"
                  name="role"
                  value="University"
                  checked={role === 'University'}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2 h-4 w-4 focus:ring-2"
                  style={{
                    borderColor: 'var(--border-color)',
                    '--tw-ring-color': 'var(--color-primary)',
                  }}
                />
                University
              </label>
            </div>
            <label
              className="flex items-center text-sm sm:text-base"
              style={{ color: 'var(--color-muted)' }}
            >
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mr-2 h-4 w-4 rounded focus:ring-2"
                style={{
                  borderColor: 'var(--border-color)',
                  '--tw-ring-color': 'var(--color-primary)',
                }}
                required
              />
              I agree to the Terms & Conditions
            </label>
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-lg transition duration-300 transform hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--text-color)',
                '--tw-ring-color': 'var(--color-primary-dark)',
                '--tw-ring-offset-color': 'var(--bg-color)',
              }}
            >
              Create Account
            </button>
            <p
              className="text-center text-sm sm:text-base"
              style={{ color: 'var(--color-muted)' }}
            >
              Or register with{' '}
              <button
                onClick={handleGoogleSignup}
                className="inline-block mx-2 transition duration-200 transform hover:scale-110"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/google.svg"
                  alt="Google"
                  className="w-6 h-6 fill-current"
                  style={{ color: 'var(--text-color)', opacity: 0.8 }}
                />
              </button>{' '}
              <button
                onClick={handleAppleSignup}
                className="inline-block mx-2 transition duration-200 transform hover:scale-110"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/apple.svg"
                  alt="Apple"
                  className="w-6 h-6 fill-current"
                  style={{ color: 'var(--text-color)', opacity: 0.8 }}
                />
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;