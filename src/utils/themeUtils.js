export const applyTheme = (darkMode) => {
  const root = document.documentElement;

  const vars = darkMode
    ? {
        '--background-color': '#1E293B',
        '--text-color': '#FFFFFF',
        '--border-color': '#D1D5DB',
        '--navbar-bg': 'linear-gradient(to right, #1E293B, #1D4ED8)',
        '--button-primary': '#1D4ED8',
        '--button-accent': '#FBBF24',
        '--input-border': '#D1D5DB',
        '--input-text': '#000000',
        '--dropdown-bg': '#2D3748',
        '--dropdown-text': '#FFFFFF',
      }
    : {
        '--background-color': '#F9FAFB',
        '--text-color': '#1E293B',
        '--border-color': '#9CA3AF',
        '--navbar-bg': 'linear-gradient(to right, #F9FAFB, #1D4ED8)',
        '--button-primary': '#1D4ED8',
        '--button-accent': '#FBBF24',
        '--input-border': '#9CA3AF',
        '--input-text': '#1E293B',
        '--dropdown-bg': '#FFFFFF',
        '--dropdown-text': '#1E293B',
      };

  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};
