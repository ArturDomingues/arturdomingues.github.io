// Theme Toggle Functionality
(function() {
  // Get theme from localStorage or default to dark
  const getTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark'; // Default to dark mode
  };

  // Apply theme to document
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
    updateToggleButton(theme);
  };

  // Update toggle button icon
  const updateToggleButton = (theme) => {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      // Use sun for light mode, moon for dark mode
      const icon = theme === 'dark' ? '☀️' : '🌙';
      const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      toggleBtn.innerHTML = `<span aria-hidden="true">${icon}</span><span class="sr-only">${label}</span>`;
      toggleBtn.setAttribute('aria-label', label);
      toggleBtn.setAttribute('title', label);
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  // Initialize theme on page load
  const initTheme = () => {
    const theme = getTheme();
    applyTheme(theme);
    
    // Add event listener to toggle button
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  };

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();
