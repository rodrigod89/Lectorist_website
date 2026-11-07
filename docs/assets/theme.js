(() => {
  const storageKey = 'lectorist-site-theme';
  const root = document.documentElement;

  try {
    if (localStorage.getItem(storageKey) === 'dark') {
      root.dataset.theme = 'dark';
    }
  } catch {
    // Theme selection still works for this page when storage is unavailable.
  }

  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.site-header nav');
    if (!nav) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path /></svg><span></span>';
    const icon = button.querySelector('path');
    const label = button.querySelector('span');

    function updateButton() {
      const dark = root.dataset.theme === 'dark';
      label.textContent = dark ? 'Light mode' : 'Dark mode';
      icon.setAttribute('d', dark
        ? 'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z'
        : 'M20.9 13.35A9 9 0 0 1 10.65 3.1 9 9 0 1 0 20.9 13.35Z');
    }

    updateButton();
    button.addEventListener('click', () => {
      const dark = root.dataset.theme !== 'dark';
      root.dataset.theme = dark ? 'dark' : 'light';
      updateButton();

      try {
        localStorage.setItem(storageKey, root.dataset.theme);
      } catch {
        // Keep the current page in the selected theme.
      }
    });
    nav.append(button);
  });
})();
