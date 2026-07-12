const translations = {
    en: {
        title: "SVVB | Links",
        username: "SomeoneVeryVeryBored",
        bio: "Aspiring to be the most famous person in the world.",
        langText: "عربي"
    },
    ar: {
        title: "SVVB | روابط",
        username: "SomeoneVeryVeryBored",
        bio: "أطمح لأكون الشخص الأكثر شهرة في العالم.",
        langText: "English"
    }
};

const elements = {
    username: document.getElementById('username'),
    bio: document.getElementById('bio'),
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
    elements.bio.textContent = translations[lang].bio;
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
    elements.bio.style.opacity = '0';
    elements.username.style.opacity = '0';
    
    setTimeout(() => {
        updateLanguage(currentLang);
        // Fade in text
        elements.bio.style.opacity = '1';
        elements.username.style.opacity = '1';
    }, 200);
});
