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



    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', () => {
            const code = button.parentElement.querySelector('code').textContent;
            navigator.clipboard.writeText(code);
            
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        });
    });
    
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        const sections = document.querySelectorAll('.doc-section');
        
        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            section.style.display = text.includes(value) ? 'block' : 'none';
        });
    });
});

