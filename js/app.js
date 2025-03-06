// Seleccionamos e botón de cambio de tema
const themeToggle = document.getElementById('theme-toggle');

// Verificamos si hay un tema guardado en localStorage
const currentTheme = localStorage.getItem('theme');

// Si hay un tema guardado, lo aplicamos
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
      themeToggle.textContent = '🌞';
    }
}

// Escuchamos el evento de cambio de estado del botón
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Guardamos el tema en localStorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '🌞';
    } else {
        localStorage.setItem('theme', '');
        themeToggle.textContent = '🌙';
    }
});
