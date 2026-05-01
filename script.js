const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    panels.forEach((p) => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
}

const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', e.target.value);
});

const translations = {
  en: {
    theme: 'Theme', language: 'Language', about: 'About', portfolio: 'Portfolio', testimonials: 'Testimonials', contact: 'Contact',
    introTitle: 'Professional Profile',
    introBody: 'I bridge construction delivery and analytics strategy: turning field-level complexity into measurable business outcomes. My portfolio is designed for recruiters, hiring managers, team members, vendors, and stakeholders who value practical execution and data-driven decision-making.',
    constructionSkills: 'Construction Skills', dataSkills: 'Data Analytics Skills', portfolioTitle: 'Portfolio Highlights',
    testimonialsTitle: 'Testimonials', contactTitle: 'Connect, Chat, and Schedule', aiBotTitle: 'AI Conversation Bot',
    aiBotText: 'Share your goals or role requirements below. The assistant can draft a direct outreach email.',
    generateMessage: 'Generate Outreach', scheduleTitle: 'Schedule a Meeting', scheduleText: 'Choose an online session or an in-person meeting.',
    bookOnline: 'Book Online Meeting', bookOffline: 'Request In-Person Meeting', socialTitle: 'Professional Links'
  },
  es: {
    theme: 'Tema', language: 'Idioma', about: 'Perfil', portfolio: 'Portafolio', testimonials: 'Testimonios', contact: 'Contacto',
    introTitle: 'Perfil Profesional',
    introBody: 'Conecto la ejecución en construcción con la estrategia analítica para transformar la complejidad del campo en resultados medibles. Este portafolio está diseñado para reclutadores, gerentes de contratación, equipos, proveedores y actores clave.',
    constructionSkills: 'Habilidades de Construcción', dataSkills: 'Habilidades de Analítica de Datos', portfolioTitle: 'Logros del Portafolio',
    testimonialsTitle: 'Testimonios', contactTitle: 'Conecta, Conversa y Agenda', aiBotTitle: 'Bot de Conversación IA',
    aiBotText: 'Comparte tus objetivos o requisitos del rol. El asistente puede redactar un correo de contacto directo.',
    generateMessage: 'Generar Mensaje', scheduleTitle: 'Agendar Reunión', scheduleText: 'Elige una sesión en línea o una reunión presencial.',
    bookOnline: 'Reservar Reunión en Línea', bookOffline: 'Solicitar Reunión Presencial', socialTitle: 'Enlaces Profesionales'
  }
};

const langSwitcher = document.getElementById('lang-switcher');
langSwitcher.addEventListener('change', (e) => {
  const lang = e.target.value;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key] || el.textContent;
  });
});

const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatOutput = document.getElementById('chat-output');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const prompt = chatInput.value.trim();
  if (!prompt) {
    chatOutput.textContent = 'Please enter a message to generate outreach text.';
    return;
  }

  chatOutput.textContent = `Draft outreach:\n\nHello,\n\nThank you for reaching out regarding: "${prompt}".\nI would be glad to discuss how my construction and analytics background can support your goals.\n\nBest regards,\nYour Name\nLinkedIn: https://www.linkedin.com/in/your-profile`;
});
