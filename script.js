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

document.getElementById('theme-switcher').addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', e.target.value);
});

const translations = {
  en: {
    theme: 'Theme', language: 'Language', about: 'About', services: 'Services', portfolio: 'Portfolio', testimonials: 'Testimonials', contact: 'Contact',
    heroHeadline: 'One Partner for Construction Execution + Data-Driven Business Decisions',
    heroSub: 'I help developers, contractors, business owners, property managers, small businesses, and homeowners deliver projects faster, reduce risk, and unlock profitable growth through practical construction expertise and analytics.',
    ctaConsult: 'Book a Consultation', ctaServices: 'Explore Services',
    introTitle: 'Professional Profile',
    introBody: 'I bridge construction delivery and analytics strategy: turning field-level complexity into measurable business outcomes. This platform is built to connect with hiring teams and new business partners who need execution, clarity, and results.',
    constructionSkills: 'Construction Skills', dataSkills: 'Data Analytics Skills',
    servicesTitle: 'Services for Teams and Owners', svcDev: 'Developers & Property Managers', svcDevDesc: 'Portfolio-level visibility, vendor accountability, capex control, and schedule confidence.',
    svcContractor: 'Contractors & Trades', svcContractorDesc: 'Field-to-office reporting, productivity analytics, bid support, and project controls.',
    svcBusiness: 'Business Owners & SMBs', svcBusinessDesc: 'Renovation/expansion planning, ROI-based decisions, and operational dashboards.',
    svcHome: 'Homeowners', svcHomeDesc: 'Project planning guidance, contractor evaluation support, and cost-risk transparency.',
    portfolioTitle: 'Portfolio Highlights', testimonialsTitle: 'Testimonials', contactTitle: 'Connect, Chat, and Schedule',
    aiBotTitle: 'AI Conversation Bot', aiBotText: 'Share your goals or role requirements below. The assistant can draft a direct outreach email.',
    generateMessage: 'Generate Outreach', scheduleTitle: 'Schedule a Meeting', scheduleText: 'Choose an online session or an in-person meeting.',
    bookOnline: 'Book Online Meeting', bookOffline: 'Request In-Person Meeting', socialTitle: 'Professional Links'
  },
  es: {
    theme: 'Tema', language: 'Idioma', about: 'Perfil', services: 'Servicios', portfolio: 'Portafolio', testimonials: 'Testimonios', contact: 'Contacto',
    heroHeadline: 'Un Socio para la Ejecución en Construcción + Decisiones de Negocio con Datos',
    heroSub: 'Ayudo a desarrolladores, contratistas, propietarios, administradores de propiedades, pequeñas empresas y propietarios de vivienda a ejecutar proyectos más rápido, reducir riesgos y generar crecimiento rentable.',
    ctaConsult: 'Agenda una Consulta', ctaServices: 'Explorar Servicios',
    introTitle: 'Perfil Profesional',
    introBody: 'Conecto la ejecución en construcción con la estrategia analítica para transformar la complejidad del campo en resultados medibles. Esta plataforma conecta con equipos de contratación y socios de negocio que buscan resultados.',
    constructionSkills: 'Habilidades de Construcción', dataSkills: 'Habilidades de Analítica de Datos',
    servicesTitle: 'Servicios para Equipos y Propietarios', svcDev: 'Desarrolladores y Administradores', svcDevDesc: 'Visibilidad del portafolio, control de proveedores, control de inversión y confianza en cronogramas.',
    svcContractor: 'Contratistas y Oficios', svcContractorDesc: 'Reportes de campo a oficina, analítica de productividad, apoyo en licitaciones y control del proyecto.',
    svcBusiness: 'Propietarios y PYMES', svcBusinessDesc: 'Planificación de renovación/expansión, decisiones basadas en ROI y tableros operativos.',
    svcHome: 'Propietarios de Vivienda', svcHomeDesc: 'Guía de planificación, apoyo para evaluar contratistas y transparencia en costo-riesgo.',
    portfolioTitle: 'Logros del Portafolio', testimonialsTitle: 'Testimonios', contactTitle: 'Conecta, Conversa y Agenda',
    aiBotTitle: 'Bot de Conversación IA', aiBotText: 'Comparte tus objetivos o requisitos. El asistente puede redactar un correo de contacto directo.',
    generateMessage: 'Generar Mensaje', scheduleTitle: 'Agendar Reunión', scheduleText: 'Elige una sesión en línea o una reunión presencial.',
    bookOnline: 'Reservar Reunión en Línea', bookOffline: 'Solicitar Reunión Presencial', socialTitle: 'Enlaces Profesionales'
  }
};

document.getElementById('lang-switcher').addEventListener('change', (e) => {
  const lang = e.target.value;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key] || el.textContent;
  });
});

document.getElementById('chat-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const prompt = document.getElementById('chat-input').value.trim();
  const out = document.getElementById('chat-output');
  if (!prompt) {
    out.textContent = 'Please enter a message to generate outreach text.';
    return;
  }
  out.textContent = `Draft outreach:\n\nHello,\n\nThank you for reaching out regarding: "${prompt}".\nI would be glad to discuss how my construction and analytics background can support your goals.\n\nBest regards,\nYour Name\nLinkedIn: https://www.linkedin.com/in/your-profile`;
});
