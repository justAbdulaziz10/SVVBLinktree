const translations = {
    en: {
        title: "SVVB | Links",
        username: "SomeoneVeryVeryBored",
        langText: "ع"
    },
    ar: {
        title: "SVVB | روابط",
        username: "SomeoneVeryVeryBored",
        langText: "A"
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
    elements.langToggle.style.transform = 'scale(0.8)';
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

// Magnetic Hover Effect for Links
document.querySelectorAll('.link-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Gentle magnetic pull
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        // Reset position
        btn.style.transform = `translate(0px, 0px)`;
        // Restore transition for smooth return
        btn.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    btn.addEventListener('mouseenter', () => {
        // Remove transition during hover for instant magnetic tracking
        btn.style.transition = 'background-color 0.2s ease, color 0.2s ease';
    });
});
