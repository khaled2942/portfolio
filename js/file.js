(function () {
    'use strict';

    /* ——— Translation Dictionary ——— */
    const I18N = {
        en: {
            'meta.title': 'Khaled Omrani - Portfolio',
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.portfolio': 'Portfolio',
            'nav.contact': 'Contact',
            'nav.lang': 'العربية',
            'home.hello': "Hello, It's Me",
            'home.name': 'Khaled Omrani',
            'home.im': "And I'm a",
            'home.p': "I'm a passionate web developer with expertise in creating clean, responsive, and user-friendly websites. I enjoy bringing ideas to life in the browser.",
            'home.btn': 'Download CV',
            'about.heading': 'About <span>Me</span>',
            'about.sub': 'Frontend Developer',
            'about.p': 'I specialize in building responsive web applications and interactive user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I aim to create seamless digital experiences. My goal is to continuously learn and adopt new technologies to improve my craft and deliver high-quality solutions.',
            'about.btn': 'Read More',
            'services.heading': 'My <span>Services</span>',
            'services.web.title': 'Web Development',
            'services.web.text': 'Building responsive and modern user interfaces using the latest web technologies to ensure optimal performance and user experience.',
            'services.web.btn': 'Read More',
            'services.design.title': 'UI/UX Design',
            'services.design.text': 'Creating intuitive and stunning designs focused on user experience, ensuring that every interaction is meaningful and engaging.',
            'services.design.btn': 'Read More',
            'services.app.title': 'App Development',
            'services.app.text': 'Developing seamless and robust mobile applications that provide excellent functionality and aesthetics on multiple devices.',
            'services.app.btn': 'Read More',
            'portfolio.heading': 'Latest <span>Projects</span>',
            'portfolio.view': 'Open',
            'portfolio.p1.title': 'Web Design',
            'portfolio.p1.text': 'Custom website layouts focused on modern aesthetics and responsiveness.',
            'portfolio.p2.title': 'UI/UX Design',
            'portfolio.p2.text': 'Precision interfaces and usability schemes crafted for optimal workflow.',
            'portfolio.p3.title': 'Web Development',
            'portfolio.p3.text': 'Robust backend services and api rails paired with custom clients.',
            'portfolio.p4.title': 'App Design',
            'portfolio.p4.text': 'Interactive dashboard heroes, metrics, and trailers scaled to modern tablet viewports.',
            'portfolio.p5.title': 'Web Design',
            'portfolio.p5.text': 'Creative micro-portfolios with high contrast prismatic styling pass.',
            'portfolio.p6.title': 'Web Development',
            'portfolio.p6.text': 'Single page layers leveraging clean 3D perspective shifts on hover state.',
            'contact.heading': 'Contact <span>Me!</span>',
            'contact.name': 'Full Name',
            'contact.email': 'Email Address',
            'contact.phone': 'Mobile Number',
            'contact.subject': 'Email Subject',
            'contact.message': 'Your Message',
            'contact.send': 'Send Message',
            'footer.copyright': 'Copyright &copy; 2026 by Khaled Omrani | All Rights Reserved.'
        },
        ar: {
            'meta.title': 'خالد عمراني - معرض الأعمال',
            'nav.home': 'الرئيسية',
            'nav.about': 'من أنا',
            'nav.services': 'خدماتي',
            'nav.portfolio': 'أعمالي',
            'nav.contact': 'اتصل بي',
            'nav.lang': 'English',
            'home.hello': 'مرحباً، أنا',
            'home.name': 'خالد عمراني',
            'home.im': 'وأنا نعمل كـ',
            'home.p': 'أنا مطور ويب شغوف ولدي خبرة في إنشاء مواقع ويب نظيفة وسريعة الاستجابة وسهلة الاستخدام. أستمتع بتحويل الأفكار إلى واقع ملموس في المتصفح.',
            'home.btn': 'تحميل السيرة الذاتية',
            'about.heading': 'نبذة <span>عني</span>',
            'about.sub': 'مطور واجهات أمامية',
            'about.p': 'أنا متخصص في بناء تطبيقات الويب المستجيبة وواجهات المستخدم التفاعلية. مع أساس قوي في لغات HTML و CSS وجافا سكريبت، أهدف إلى خلق تجارب رقمية سلسة. هدفي هو التعلم المستمر واعتماد تقنيات جديدة لتحسين مهارتي وتقديم حلول عالية الجودة.',
            'about.btn': 'اقرأ المزيد',
            'services.heading': 'خدماتي <span>المميزة</span>',
            'services.web.title': 'تطوير الويب',
            'services.web.text': 'بناء واجهات مستخدم حديثة وسريعة الاستجابة باستخدام أحدث تقنيات الويب لضمان الأداء الأمثل وتجربة مستخدم متميزة.',
            'services.web.btn': 'اقرأ المزيد',
            'services.design.title': 'تصميم الواجهات UI/UX',
            'services.design.text': 'إنشاء تصميمات بديهية ورائعة تركز على تجربة المستخدم، مما يضمن أن يكون كل تفاعل هادفاً وجذاباً.',
            'services.design.btn': 'اقرأ المزيد',
            'services.app.title': 'تطوير التطبيقات',
            'services.app.text': 'تطوير تطبيقات جوال سلسة وقوية توفر وظائف وجماليات ممتازة على أجهزة متعددة.',
            'services.app.btn': 'اقرأ المزيد',
            'portfolio.heading': 'أحدث <span>المشاريع</span>',
            'portfolio.view': 'افتح',
            'portfolio.p1.title': 'تصميم ويب',
            'portfolio.p1.text': 'تخطيطات مواقع ويب مخصصة تركز على الجماليات الحديثة وسرعة الاستجابة.',
            'portfolio.p2.title': 'تصميم الواجهات',
            'portfolio.p2.text': 'واجهات دقيقة ومخططات سهولة الاستخدام صُممت لتناسب سير العمل الأمثل.',
            'portfolio.p3.title': 'تطوير الويب',
            'portfolio.p3.text': 'خدمات خلفية قوية ومسارات واجهة برمجة تطبيقات مقترنة بواجهات عملاء مخصصة.',
            'portfolio.p4.title': 'تصميم تطبيقات',
            'portfolio.p4.text': 'لوحات تحكم تفاعلية ومقاييس ومقاطع دعائية تمتد عبر شاشات الأجهزة اللوحية الحديثة.',
            'portfolio.p5.title': 'تصميم ويب',
            'portfolio.p5.text': 'ملفات تعريفية إبداعية ذات نمط لوني منشوري عالي التباين.',
            'portfolio.p6.title': 'تطوير الويب',
            'portfolio.p6.text': 'طبقات واجهة مستخدم تستغل انتقالات المنظور ثلاثية الأبعاد النظيفة عند التمرير.',
            'contact.heading': 'اتصل <span>بي!</span>',
            'contact.name': 'الاسم الكامل',
            'contact.email': 'البريد الإلكتروني',
            'contact.phone': 'رقم الهاتف',
            'contact.subject': 'عنوان الرسالة',
            'contact.message': 'رسالتك',
            'contact.send': 'إرسال الرسالة',
            'footer.copyright': 'حقوق الطبع والنشر &copy; 2026 بواسطة خالد عمراني | جميع الحقوق محفوظة.'
        }
    };

    const LANG_KEY = 'portfolio-lang';
    let typedInstance = null;

    function getLang() {
        return localStorage.getItem(LANG_KEY) || 'en';
    }

    function initTyped(lang) {
        if (typedInstance) {
            typedInstance.destroy();
        }
        const strings = lang === 'ar'
            ? ['مطور واجهات أمامية', 'مصمم واجهات المستخدم', 'مطور ويب']
            : ['Frontend Developer', 'UI/UX Designer', 'Web Developer'];
        
        typedInstance = new Typed('.multiple-text', {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    function applyLang(lang) {
        const pack = I18N[lang] || I18N.en;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem(LANG_KEY, lang);

        // Content translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key && pack[key]) {
                el.innerHTML = pack[key];
            }
        });

        // Placeholders translations
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key && pack[key]) {
                el.placeholder = pack[key];
            }
        });

        // Value translations (e.g. inputs)
        document.querySelectorAll('[data-i18n-value]').forEach(el => {
            const key = el.getAttribute('data-i18n-value');
            if (key && pack[key]) {
                el.value = pack[key];
            }
        });

        // Recreate typed instance
        initTyped(lang);
    }

    function initLang() {
        const btn = document.querySelector('[data-lang-toggle]');
        if (!btn) return;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            applyLang(getLang() === 'en' ? 'ar' : 'en');
        });
        applyLang(getLang());
    }

    /* ——— Sticky Navbar & Scroll Spy ——— */
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });
    }

    window.addEventListener('scroll', () => {
        const top = window.scrollY;

        sections.forEach(sec => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    const targetLink = document.querySelector('header nav a[href*=' + id + ']');
                    if (targetLink) {
                        targetLink.classList.add('active');
                    }
                });
            }
        });

        if (header) {
            header.classList.toggle('sticky', top > 100);
        }

        // Close menu on link click
        if (menuIcon && navbar) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });

    /* ——— Hero Cursor Parallax Shape Motion ——— */
    function initHeroMotion() {
        const shell = document.querySelector('[data-hero-motion]');
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!shell || reduced) return;

        shell.addEventListener('mousemove', (e) => {
            const r = shell.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            shell.style.setProperty('--hx', (x * 35).toFixed(1) + 'px');
            shell.style.setProperty('--hy', (y * 28).toFixed(1) + 'px');
        });

        shell.addEventListener('mouseleave', () => {
            shell.style.setProperty('--hx', '0px');
            shell.style.setProperty('--hy', '0px');
        });
    }

    /* ——— Section Reveal Observer ——— */
    function initScrollReveal() {
        const blocks = document.querySelectorAll('.section--reveal');
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!blocks.length) return;

        if (reduced) {
            blocks.forEach(el => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        });

        blocks.forEach(el => observer.observe(el));
    }

    /* ——— Initialize Components on Load ——— */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initLang();
            initHeroMotion();
            initScrollReveal();
        });
    } else {
        initLang();
        initHeroMotion();
        initScrollReveal();
    }
})();