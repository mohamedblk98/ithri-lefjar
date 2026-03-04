const translations = {
    ar: {
        navHome: "الرئيسية",
        navWork: "أعمالي",
        heroTitle: "أهلاً، أنا <span class='highlight'>مصمم جرافيك</span>",
        heroDesc: "أحول الأفكار إلى واقع بصري ملموس.",
        heroBtn: "مشاهدة أعمالي",
        workTitle: "معرض <span class='highlight'>الأعمال</span>",
        project1: "هوية بصرية / Branding",
        project2: "سوشيال ميديا / Social Media",
        project3: "كتب / Books",
        project4: "شعارات / Logos",
        project5: "رتوشات صور / Retouches",
        cvTitle: "هل تريد معرفة المزيد عن مساري؟",
        cvDesc: "يمكنك تحميل سيرتي الذاتية كاملة بصيغة PDF.",
        cvBtnText: "تحميل الـ CV",
        waText: "تواصل معي",
        dir: "rtl"
    },
    en: {
        navHome: "Home",
        navWork: "My Work",
        heroTitle: "Hi, I'm a <span class='highlight'>Graphic Designer</span>",
        heroDesc: "Turning ideas into visual reality.",
        heroBtn: "View My Work",
        workTitle: "My <span class='highlight'>Portfolio</span>",
        project1: "Branding",
        project2: "Social Media",
        project3: "Books",
        project4: "Logos",
        project5: "Photo Retouching",
        cvTitle: "Want to know more about my journey?",
        cvDesc: "You can download my full resume in PDF format.",
        cvBtnText: "Download CV",
        waText: "Chat with me",
        dir: "ltr"
    },
    fr: {
        navHome: "Accueil",
        navWork: "Projets",
        heroTitle: "Salut, je suis <span class='highlight'>Designer Graphique</span>",
        heroDesc: "Transformer des idées en réalité visuelle.",
        heroBtn: "Voir mes projets",
        workTitle: "Mon <span class='highlight'>Portfolio</span>",
        project1: "Branding",
        project2: "Réseaux Sociaux",
        project3: "Livres",
        project4: "Logos",
        project5: "Retouches Photo",
        cvTitle: "Voulez-vous en savoir plus ?",
        cvDesc: "Vous pouvez télécharger mon CV complet en PDF.",
        cvBtnText: "Télécharger le CV",
        waText: "Contactez-moi",
        dir: "ltr"
    }
};

function changeLang(lang) {
    const data = translations[lang];
    const htmlTag = document.getElementById('main-html');

    // تغيير نصوص القائمة (باستخدام data-key كما في الـ HTML الخاص بك)
    document.querySelector('[data-key="nav-home"]').innerText = data.navHome;
    document.querySelector('[data-key="nav-work"]').innerText = data.navWork;

    // تغيير قسم الهيرو (بواسطة الـ ID)
    document.getElementById('hero-title').innerHTML = data.heroTitle;
    document.getElementById('hero-desc').innerText = data.heroDesc;
    document.getElementById('hero-btn').innerText = data.heroBtn;

    // تغيير قسم الأعمال
    document.getElementById('work-title').innerHTML = data.workTitle;
    
    // تحديث الأوفرلاي للصور (تم تصحيحها لتشمل كل المشاريع)
    const overlays = document.querySelectorAll('.overlay');
    overlays[0].innerText = data.project1;
    overlays[1].innerText = data.project2;
    overlays[2].innerText = data.project3;
    overlays[3].innerText = data.project4;
    overlays[4].innerText = data.project5;

    // قسم الـ CV
    document.getElementById('cv-title').innerText = data.cvTitle;
    document.getElementById('cv-desc').innerText = data.cvDesc;
    document.getElementById('cv-btn-text').innerText = data.cvBtnText;

    // زر الواتساب
    document.getElementById('wa-text').innerText = data.waText;

    // الاتجاه واللغة
    htmlTag.setAttribute('dir', data.dir);
    htmlTag.setAttribute('lang', lang);
    localStorage.setItem('selectedLang', lang);
}

// تشغيل اللغة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'ar';
    changeLang(savedLang);
});