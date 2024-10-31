// Función para guardar el nombre en una cookie y mostrar el saludo
function guardarNombre() {
    const nombre = document.getElementById('nombreUsuario').value;
    if (nombre) {
        document.cookie = "nombreUsuario=" + encodeURIComponent(nombre) + "; path=/; max-age=31536000"; // Guarda la cookie por un año
        mostrarSaludo();
    }
}

// Función para mostrar el saludo si el nombre está guardado en una cookie
function mostrarSaludo() {
    const cookies = document.cookie.split('; '); // Divide las cookies en un array
    let nombre = ''; 

    // recorre cada cookie para encontrar la que tenga el nombre del usuario y decodificamos su valor.

    cookies.forEach(cookie => {
        const [clave, valor] = cookie.split('='); //clave = nombre de la cookie y valor = valor de la cookie
        if (clave === 'nombreUsuario') {
            nombre = decodeURIComponent(valor); //asigna a nombre el valor de la cookie
        }
    });

    const saludo = document.getElementById('saludo');
    if (nombre) {
        saludo.textContent = `¡Bienvenido de nuevo, ${nombre}!`;
    } else {
        saludo.textContent = "¡Bienvenido! Por favor, introduce tu nombre.";
    }
}

// Función para guardar el tema en una cookie.
function guardarCookieTema() {
    const tema = document.getElementById('tema').value;
    document.cookie = "tema=" + tema + "; path=/; max-age=31536000"; // Guarda la cookie por un año
    aplicarTema();
}

// Función para aplicar el tema según la cookie
function aplicarTema() {
    const cookies = document.cookie.split('; '); 
    let tema = 'modo-claro';  // Valor por defecto

    cookies.forEach(cookie => {
        const [clave, valor] = cookie.split('=');
        if (clave === 'tema') {
            tema = valor; //asigna a tema el valor de la cookie
        }
    });

    document.body.className = tema; // Aplica el tema
    document.getElementById('tema').value = tema; // Actualiza el select
}

// Cargar tema al iniciar
document.addEventListener("DOMContentLoaded", () => {
    aplicarTema();
});

// Función para guardar el idioma en una cookie
function guardarCookieIdioma() {
    const idioma = document.getElementById('idioma').value;
    document.cookie = "idioma=" + idioma + "; path=/; max-age=31536000"; // Guarda la cookie por un año
}

// Función para restablecer todas las cookies
function restablecerPreferencias() {
    document.cookie = "nombreUsuario=; max-age=0; path=/"; // Borra la cookie 
    document.cookie = "tema=; max-age=0; path=/"; //borra la cookie
    document.cookie = "idioma=; max-age=0; path=/"; //borra la cookie
    mostrarSaludo();
    aplicarTema();
    document.getElementById('idioma').value = "es";
    document.getElementById('nombreUsuario').value = "";
}

//Memoriza y aplica las preferencias del usuario cada vez que visita la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarSaludo();
    aplicarTema();
});
