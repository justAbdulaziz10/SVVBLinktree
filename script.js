const translations = {
    en: {
        title: "SVVB | Links",
        langText: "ع",
        yt: "SUBSCRIBE TO MY YOUTUBE",
        tk: "I won't rot your brain, don't worry",
        ig: "Reels & More",
        gh: "My Projects",
        x: "My tweets",
        threads: "Same as X",
        letterboxd: "Love films ?",
        footer: "There are no rights, but let's pretend there are."
    },
    ar: {
        title: "SVVB | روابط",
        langText: "A",
        yt: "اشترك بقناتي!",
        tk: "ماراح ازيد تعفن دماغك لاتخاف",
        ig: "ريلز وكذا",
        gh: "مشاريعي",
        x: "تغريداتي",
        threads: "نفس اكس",
        letterboxd: "انزل عن اللي اتابعه",
        footer: "هو مافيه حقوق بس اعتبروها موجودة"
    }
};

const elements = {
    langText: document.getElementById('lang-text'),
    langToggle: document.getElementById('lang-toggle'),
    yt: document.getElementById('btn-yt'),
    tk: document.getElementById('btn-tk'),
    ig: document.getElementById('btn-ig'),
    gh: document.getElementById('btn-gh'),
    x: document.getElementById('btn-x'),
    threads: document.getElementById('btn-threads'),
    letterboxd: document.getElementById('btn-letterboxd'),
    footer: document.getElementById('footer-text'),
    translatables: [
        document.getElementById('btn-yt'),
        document.getElementById('btn-tk'),
        document.getElementById('btn-ig'),
        document.getElementById('btn-gh'),
        document.getElementById('btn-x'),
        document.getElementById('btn-threads'),
        document.getElementById('btn-letterboxd'),
        document.getElementById('footer-text')
    ]
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
    elements.langText.textContent = translations[lang].langText;
    elements.yt.textContent = translations[lang].yt;
    elements.tk.textContent = translations[lang].tk;
    elements.ig.textContent = translations[lang].ig;
    elements.gh.textContent = translations[lang].gh;
    elements.x.textContent = translations[lang].x;
    elements.threads.textContent = translations[lang].threads;
    elements.letterboxd.textContent = translations[lang].letterboxd;
    elements.footer.textContent = translations[lang].footer;
};

// Initialize language on load
updateLanguage(currentLang);

// Toggle Language Button
elements.langToggle.addEventListener('click', () => {
    // Add a small click animation
    elements.langToggle.style.transform = 'scale(0.8)';
    setTimeout(() => elements.langToggle.style.transform = '', 150);

    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Fade out text for translatable elements
    elements.translatables.forEach(el => el.style.opacity = '0');
    
    setTimeout(() => {
        updateLanguage(currentLang);
        // Fade in text
        elements.translatables.forEach(el => el.style.opacity = '1');
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
