import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('dark');
  const navigate = useNavigate();

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleGoogleLogin = () => {
    // Google OAuth redirect URL
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=${encodeURIComponent('YOUR_REDIRECT_URI')}&response_type=code&scope=email%20profile`;
    window.location.href = googleAuthUrl;
  };

  const handleAppleLogin = () => {
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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Login Background"
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
              Welcome Back
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
            Log In
          </h2>
          <p
            className="mb-8 text-base sm:text-lg"
            style={{ color: 'var(--color-muted)' }}
          >
            Don’t have an account?{' '}
            <a
              href="/signup"
              className="font-medium transition duration-200 hover:underline"
              style={{ color: 'var(--color-primary)' }}
            >
              Sign up
            </a>
          </p>
          <form className="space-y-6" onSubmit={handleLogin}>
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
              Log In
            </button>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleGoogleLogin}
                className="inline-block mx-2 transition duration-200 transform hover:scale-110"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/google.svg"
                  alt="Google"
                  className="w-6 h-6 fill-current"
                  style={{ color: 'var(--text-color)', opacity: 0.8 }}
                />
              </button>
              <button
                onClick={handleAppleLogin}
                className="inline-block mx-2 transition duration-200 transform hover:scale-110"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/apple.svg"
                  alt="Apple"
                  className="w-6 h-6 fill-current"
                  style={{ color: 'var(--text-color)', opacity: 0.8 }}
                />
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <a
              href="/forgot-password"
              className="text-sm sm:text-base transition duration-200 hover:underline"
              style={{ color: 'var(--color-muted)' }}
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;