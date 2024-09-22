// Constantes y variables globales
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

console.log("Script is running");

// Funciones de menú móvil
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Función para cambiar el tema
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// Función para alternar el menú desplegable
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Función para cambiar el idioma
function changeLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  localStorage.setItem('preferredLanguage', lang);
}

// Función para manejar el cambio de idioma
function handleLanguageChange(event) {
  event.preventDefault();
  const lang = event.currentTarget.getAttribute('data-lang');
  changeLanguage(lang);
  toggleDropdown();
}

// Función para aplicar el idioma guardado
function applyStoredLanguage() {
  const storedLang = localStorage.getItem('preferredLanguage');
  if (storedLang) {
    changeLanguage(storedLang);
  }
}

// Event Listeners
hamburger.addEventListener("click", mobileMenu);
document.querySelectorAll(".nav-link").forEach((n) => n.addEventListener("click", closeMenu));
toggleSwitch.addEventListener("change", switchTheme, false);

// Aplicar tema guardado
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);
if (currentTheme === "dark") {
  toggleSwitch.checked = true;
}

// Cerrar menú desplegable al hacer clic fuera
window.onclick = function (event) {
  if (!event.target.matches('.button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Manejar clics en los enlaces de proyectos
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded");
  const cards = document.querySelectorAll('.card[data-href]');
  console.log("Found " + cards.length + " cards with data-href");

  cards.forEach(card => {
    console.log("Adding click listener to card with href: " + card.dataset.href);
    card.style.cursor = 'pointer';
    card.addEventListener('click', function () {
      console.log("Card clicked, navigating to: " + this.dataset.href);
      const currentLang = localStorage.getItem('preferredLanguage') || 'spanish';
      window.location.href = `${this.dataset.href}?lang=${currentLang}`;
    });
  });

  // Aplicar idioma guardado
  applyStoredLanguage();

  // Agregar listeners para cambio de idioma
  document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', handleLanguageChange);
  });

  // Verificar parámetro de idioma en la URL
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');
  if (lang) {
    changeLanguage(lang);
  }
});

// Objeto de traducciones
const translations = {
  english: {
    "body.my": "Hello, I'm Miguel Ángel Arenas Quintana",
    "hero.greeting": "Designer & Frontend Developer",
    "hero.description": "I'm passionate about designing and coding simple and elegant experiences. I enjoy turning complex ideas into intuitive solutions.",
    "nav.changeLanguageProject": "PROJECTS",
    "nav.changeLanguageTecnology": "TECHNOLOGIES/TOOLS",
    "nav.changeLanguageAbout me": "ABOUT ME",
    "nav.changeLanguageAbout for": "ACADEMIC TRAINER",
    "nav.changeLanguageAbout lab": "WORK EXPERIENCE",
    "nav.changeLanguage": "Change Language",
    "body.banner": "My projects done at: Technological University of Escuinapa",
    "body.cvingles": "DOWNLOAD CV IN ENGLISH",
    "body.cvespanol": "DOWNLOAD CV IN SPANISH",
    "body.repositorio": "Repository of Theses and Stay Reports (UTESC)",
    "body.adivina": "Guess The Song (Game)",
    "body.idiomas": "Language center (UTESC)",
    "body.xclothes": "Xclothes (Clothing Store)",
    "body.biblioteca": "Web Library",
    "body.Tecnologias/Herramientas/Lenguajes": "Technologies, Tools and Programming Languages",
    "body.Diseñador": "Designer",
    "body.cosasquedisfruto": "Things I enjoy designing:",
    "body.cosas": "UX, UI, Web, Apps, Logos, Illustrations",
    "body.Herramientas": "Design tools",
    "body.dev": "Frontend developer",
    "body.lenguajes": "idioms",
    "body.Frameworks": "Design frameworks",
    "body.Sobre mi": "About me",
    "body.Sobre mi descripcion": "Frontend Developer & Passionate Student from Escuinapa, Sinaloa, Mexico. I blend creativity and technology to create captivating web experiences.",
    "body.Especialidades": "Specialties",
    "body.EspecialidadesDesc1": "🚀 Performance Optimization",
    "body.EspecialidadesDesc2": "🎨 Intuitive Interface Development",
    "body.Aspiraciones": "Aspirations",
    "body.AspiracionesDesc": "I aspire to contribute to the technological advancement of my region and beyond, creating innovative web solutions that enhance users' digital experiences. My goal is to always stay at the forefront, continuously learning new technologies and methodologies in the world of front-end development.",
    // Breadcrumb
    "pags.inicio": "Home",
    // PáginaReporsitorio
    "repositorio.Repositorio": "Repository of Theses and Stay Reports (UTESC)",
    // PáginaCentroDeIdiomas
    "centro.Centrodeidiomas": "Language center (UTESC)",
    "quiz.quizteam": "Quizz-Team (Trivia Game)",
    "body.tecnico": "Programming Technician",
    "body.tecnicosuperior": "Higher University Technician",
    "body.graduacion1": "Graduation year: 2020",
    "body.graduacion2": "Graduation year: 2023",
    "body.practicas": "Professional Internships",
    "body.duracion": "Duration: 4 months",
    "body.desc": "Professional internship at the Technological University of Escuinapa.",





  },

  spanish: {
    "body.my": "Hola, soy Miguel Ángel Arenas Quintana",
    "hero.greeting": "Diseñador Y Desarrollador frontend",
    "hero.description": "Me apasiona diseñar y codificar experiencias simples y elegantes. Disfruto convertir ideas complejas ensoluciones intuitivas.",
    "nav.changeLanguageProject": "PROYECTOS",
    "nav.changeLanguageTecnology": "TECNOLOGÍAS/HERRAMIENTAS",
    "nav.changeLanguageAbout me": "SOBRE MI",
    "nav.changeLanguageAbout for": "FORMACIÓN ACADÉMICA",
    "nav.changeLanguageAbout lab": "EXPERIENCIA LABORAL",
    "nav.changeLanguage": "Cambiar Idioma",
    "body.banner": "Mis proyectos hechos en:Universidad Tecnológica de Escuinapa",
    "body.cvingles": "DESCARGAR CV EN INGLÉS",
    "body.cvespanol": "DESCARGAR CV EN ESPAÑOL",
    "body.repositorio": "Repositorio de Tesis y Memorias de Estadías (UTESC)",
    "body.adivina": "Adivina La Canción (Juego)",
    "body.idiomas": "Centro de Idiomas (UTESC)",
    "body.xclothes": "Xclothes (Tienda de Ropa)",
    "body.biblioteca": "Biblioteca Web",
    "body.Tecnologias/Herramientas/Lenguajes": "Tecnologías, Herramientas y Lenguajes de programación",
    "body.Diseñador": "Diseñador",
    "body.cosasquedisfruto": "Cosas que disfruto diseñando:",
    "body.cosas": "UX, UI, Web, Apps, Logos, Ilustraciones",
    "body.Herramientas": "Herramientas de diseño",
    "body.dev": "Desarrollador frontend",
    "body.lenguajes": "Lenguajes",
    "body.Frameworks": "Frameworks de diseño",
    "body.Sobre mi": "Sobre mi",
    "body.Sobre mi descripcion": "Desarrollador Frontend & Estudiante apasionado de Escuinapa, Sinaloa, México. Fusiono creatividad y tecnología para crear experiencias web cautivadoras.",
    "body.Especialidades": "Especialidades",
    "body.EspecialidadesDesc1": "🚀 Optimización de Rendimiento",
    "body.EspecialidadesDesc2": "🎨 Desarrollo de Interfaces Intuitivas",
    "body.Aspiraciones": "Aspiraciones",
    "body.AspiracionesDesc": "Aspiro a contribuir al avance tecnológico de mi región y más allá, creando soluciones web innovadoras que mejoren la experiencia digital de los usuarios. Mi meta es estar siempre a la vanguardia, aprendiendo constantemente nuevas tecnologías y metodologías en el mundo del desarrollo frontend.",
    // breadcrumb
    "pags.inicio": "Inicio",

    // PáginaReporsitorio
    "repositorio.Repositorio": "Repositorio de Tesis y Memorias de Estadías (UTESC)",
    // PáginaCentroDeIdiomas
    "centro.Centrodeidiomas": "Centro de Idiomas (UTESC)",
    "quiz.quizteam": "Quizz-Team (Juego de Trivia)",
    "body.tecnico": "Técnico en Programación",
    "body.tecnicosuperior": "Técnico Superior Universitario",
    "body.graduacion1": "Año de graduación: 2020",
    "body.graduacion2": "Año de graduación: 2023",
    "body.practicas": "Prácticas Profesionales",
    "body.duracion": "Duración: 4 meses",
    "body.desc": "Prácticas profesionales en la Universidad Tecnológica de Escuinapa.",








  }
};