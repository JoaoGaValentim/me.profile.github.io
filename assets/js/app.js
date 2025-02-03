(function (window, document) {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    const darkElements = document.querySelectorAll('.dark');
    const darkContentElements = document.querySelectorAll('.dark__content');
    const buttons = document.querySelectorAll('.button');

    const toggle = theme => {
        if (theme === 'light') {
            darkElements.forEach(el => {
                el.classList.remove('dark');
                el.classList.add('light');
            });
            darkContentElements.forEach(el => {
                el.classList.remove('dark__content');
                el.classList.add('light__content');
            });
            buttons.forEach(button => {
                button.style.backgroundColor = 'var(--primary-color-light)';
                button.style.color = 'var(--font-color-light)';
            });

            // Atualiza o ícone diretamente após a troca
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeToggle.classList.remove('dark');
        }

        if (theme === 'dark') {
            darkElements.forEach(el => {
                el.classList.remove('light');
                el.classList.add('dark');
            });
            darkContentElements.forEach(el => {
                el.classList.remove('light__content');
                el.classList.add('dark__content');
            });
            buttons.forEach(button => {
                button.style.backgroundColor = 'var(--primary-color-dark)';
                button.style.color = 'var(--font-color-dark)';
            });

            // Atualiza o ícone diretamente após a troca
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeToggle.classList.add('dark');
        }
    };

    function setTheme(theme) {
        toggle(theme);
        localStorage.setItem('theme', theme);
    }

    document.addEventListener('DOMContentLoaded', () => {
        themeToggle.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            toggle(newTheme); // Troca imediatamente
            setTheme(newTheme);
            window.location.reload();
        });

        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    });
})(window, document);
