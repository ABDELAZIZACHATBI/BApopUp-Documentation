document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function setTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        themeSwitch.textContent = isDark ? '☀️' : '🌙';
    }

    setTheme(prefersDark.matches);

    themeSwitch.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        setTheme(!isDark);
    });

    const searchInput = document.querySelector('.search input');
    searchInput.addEventListener('input', function(e) {
        const value = e.target.value.toLowerCase();
    });
});


