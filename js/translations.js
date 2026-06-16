const translations = {
    es: {
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.skills": "Habilidades",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",
        "about.title": "Victor Carmen Miguel",
        "about.subtitle": "Ingeniero en Sistemas Computacionales | Backend Developer",
        "about.description": "Soy un desarrollador apasionado por la creación de soluciones eficientes y escalables. Me especializo en desarrollo backend empleando APIs, bases de datos y servicios desplegados en la nube, aplicando buenas prácticas de desarrollo y seguridad.",
        "about.interests": "<strong>Actualmente me encuentro en búsqueda de un nuevo reto laboral y a su vez también estoy abierto a colaborar en proyectos.</strong>",
        "about.download_cv": "Descargar CV",
        "skills.title": "Habilidades y Tecnologías",
        "skills.languages": "Lenguajes",
        "skills.frameworks": "Frameworks",
        "skills.databases": "Base de Datos",
        "skills.technologies": "Tecnologías",
        "projects.title": "Proyectos",
        "projects.project1.title": "Prototipo de Comercio Web",
        "projects.project1.desc": "Sistema de tienda electrónica con carrito de compras desarrollado como prototipo para demostrar funcionalidades básicas de comercio electrónico, haciendo uso de un API REST.",
        "projects.project2.title": "Web Para Administrar un Intercambio de Regalos Familiar",
        "projects.project2.desc": "Aplicación web para organizar un intercambio de regalos familiar. Cada participante se registra con su nombre y contrasena, y después del sorteo puede consultar de forma privada a quien le toca regalar.",
        "projects.tech_title": "Tecnologías",
        "projects.code": "Código",
        "projects.demo": "Demo",
        "contact.title": "Contacto Profesional",
        "contact.email": "Email",
        "contact.github": "GitHub",
        "contact.linkedin": "Linkedin",
        "footer.copyright": "© 2026 Victor Carmen Miguel"
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About Me",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "about.title": "Victor Carmen Miguel",
        "about.subtitle": "Computer Systems Engineer | Backend Developer",
        "about.description": "I am a developer who is passionate about creating efficient and scalable solutions. I specialize in backend development using APIs, databases and services deployed in the cloud, applying good development and security practices.",
        "about.interests": "<strong>Currently I am looking for a new job challenge and I'm also open to collaborate on projects.</strong>",
        "about.download_cv": "Download Resume",
        "skills.title": "Skills and Technologies",
        "skills.languages": "Languages",
        "skills.frameworks": "Frameworks",
        "skills.databases": "Databases",
        "skills.technologies": "Technologies",
        "projects.title": "Projects",
        "projects.project1.title": "E-Commerce Web Prototype",
        "projects.project1.desc": "E-Commerce system with shopping cart developed as a prototype to demonstrate basic e-commerce functionalities, making use of a REST API.",
        "projects.project2.title": "Website to Manage a Family Gift Exchange",
        "projects.project2.desc": "Web app to organize a family gift exchange. Each participant registers with their name and password, and after the draw they can privately consult who is their turn to give away.",
        "projects.tech_title": "Tech Stack",
        "projects.code": "Code",
        "projects.demo": "Demo",
        "contact.title": "Professional Contact",
        "contact.email": "Email",
        "contact.github": "GitHub",
        "contact.linkedin": "Linkedin",
        "footer.copyright": "© 2026 Victor Carmen Miguel"
    }
};

function changeLanguage(lang) {
    if (!translations[lang]) return;

    // Save preference
    localStorage.setItem('language', lang);

    // Update text content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if strict text only or HTML
            if (element.innerHTML.includes('<') && key === 'about.interests') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update CV Link
    const linkCv = document.getElementById('btn-cv');
    if (linkCv) {
        if (lang === 'es') {
            linkCv.href = './extras/VictorCM_CV.pdf';
        } else {
            linkCv.href = './extras/VictorCM_resume.pdf';
        }
    }

    // Update button visual state if needed (optional)
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'es';
    // If saved lang is not 'es' (default in HTML), apply it.
    if (savedLang !== 'es') {
        changeLanguage(savedLang);
    }

    // Bind click event to toggle button
    const btn = document.getElementById('lang-toggle');
    const btnMobile = document.getElementById('lang-toggle-mobile');

    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = localStorage.getItem('language') || 'es';
            const newLang = currentLang === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
            updateButtonText(newLang);
        });
    }

    if (btnMobile) {
        btnMobile.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = localStorage.getItem('language') || 'es';
            const newLang = currentLang === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
            updateButtonText(newLang);
        });
    }

    updateButtonText(savedLang);
});

function updateButtonText(lang) {
    const btn = document.getElementById('lang-toggle');
    const btnMobile = document.getElementById('lang-toggle-mobile');
    const text = lang === 'es' ? 'EN' : 'ES'; // Show the *other* language options or current? Usually "Show EN" means switch to EN.
    // Let's make it show the target language.
    // actually common pattern is showing current language or a flag.
    // User asked for a button to change to English.
    // Let's make it toggle: if ES, show "English", if EN, show "Español".

    if (btn) btn.textContent = lang === 'es' ? 'English' : 'Español';
    if (btnMobile) btnMobile.textContent = lang === 'es' ? 'English' : 'Español';
}
