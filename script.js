const translations = {
    en: {
        title: "SVVB | Links",
        username: "SomeoneVeryVeryBored",
        langText: "عربي"
    },
    ar: {
        title: "SVVB | روابط",
        username: "SomeoneVeryVeryBored",
        langText: "English"
    }
};

const elements = {
    username: document.getElementById('username'),
    langText: document.getElementById('lang-text'),
    langToggle: document.getElementById('lang-toggle')
};

// Detect language based on browser preference
const detectLanguage = () => {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.startsWith('ar') ? 'ar' : 'en';
};

let currentLang = detectLanguage();

const updateLanguage = (lang) => {
    document.documentElement.lang = lang;
    if (lang === 'ar') {
        document.body.classList.add('rtl');
        document.documentElement.dir = 'rtl';
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.dir = 'ltr';
    }

    document.title = translations[lang].title;
    elements.username.textContent = translations[lang].username;
    elements.langText.textContent = translations[lang].langText;
};

// Initialize language on load
updateLanguage(currentLang);

// Toggle Language Button
elements.langToggle.addEventListener('click', () => {
    // Add a small click animation
    elements.langToggle.style.transform = 'scale(0.9)';
    setTimeout(() => elements.langToggle.style.transform = '', 150);

    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Fade out text for smooth transition
    elements.username.style.opacity = '0';
    
    setTimeout(() => {
        updateLanguage(currentLang);
        // Fade in text
        elements.username.style.opacity = '1';
    }, 200);
});
