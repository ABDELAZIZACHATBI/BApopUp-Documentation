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


document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.nav-section a');
    function setActiveLink() {
        menuLinks.forEach(link => {            
            link.classList.remove('active');      
            const pageName = link.getAttribute('href').split('/').pop();

            if (pageName === currentPage) {
                link.classList.add('active');
                
                const parentSection = link.closest('.nav-section');
                if (parentSection) {
                    parentSection.classList.add('open');
                }
            }
        });
    }

    setActiveLink();

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            menuLinks.forEach(l => l.classList.remove('active'));
            
            this.classList.add('active');
        });
    });

    const activeLink = document.querySelector('.nav-section a.active');
    if (activeLink) {
        activeLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    
});

