/* Multilingual Translation System */
const translations = {
    RU: {
        sub: "Архитектура & Пространственный Дизайн",
        enter: "Исследовать",
        navShowcase: "Проекты",
        navAbout: "Обо мне",
        navPort: "Портфолио",
        navContact: "Контакты",
        
        titleShowcase: "Проекты, которые я создаю",
        subShowcase: "Автоматическая смена каждые 10 секунд. Нажмите на изображение для просмотра и скачивания.",
        
        modalQuestion: "Хотите скачать это изображение в полном разрешении?",
        btnDownload: "Скачать",
        btnCancel: "Отмена",
        
        titleAbout: "Об Архитекторе",
        bioName: "Астрадымова Дарья",
        bioMeta: "21 год • Челябинск, Россия • Архитектор",
        bio1: "Здравствуйте! Меня зовут Астрадымова Дарья. Я учусь на архитектора и параллельно работаю в проектной сфере. Мне нравится визуальная эстетика, архитектура, фотография, одежда и создание контента.",
        bio2: "Люблю красивые детали, необычные сочетания и когда у вещей есть характер. По характеру я достаточно самостоятельная, амбициозная и любопытная, люблю учиться новому и разбираться во всём сама.",
        
        titlePort: "Авторские Чертёжные Работы и Эскизы",
        subPort: "Масштабные детализированные чертежи, графические эскизы и планировочные решения",
        p1T: "Загородный Коттедж (Клаузура)",
        p1D: "Полный генеральный план, фасады, разрезы и поэтажная планировка с открытой террасой.",
        p2T: "Творческий Процесс & Ручная Подача",
        p2D: "Акварельная визуализация, светотеневая проработка элементов и ручные эскизные проработки пространственных композиций.",
        p3T: "Архитектурный Детализм",
        p3D: "Проработка узлов конструкции, текстурирование материалов и поиск гармоничного взаимодействия света с формой зданий.",
        
        titleContact: "Контакты",
        contactSub: "Открыта к новым архитектурным проектам, консультациям и сотрудничеству"
    },
    UZ: {
        sub: "Arxitektura & Makon Dizayni",
        enter: "Tanishish",
        navShowcase: "Loyihalar",
        navAbout: "Men haqimda",
        navPort: "Portfolio",
        navContact: "Kontaktlar",
        
        titleShowcase: "Men yaratayotgan loyihalar",
        subShowcase: "Har 10 soniyada avtomatiik almashadi. Rasmni to'liq ko'rish va yuklab olish uchun ustiga bosing.",
        
        modalQuestion: "Ushbu rasmni to'liq sifatda yuklab olishni xohlaysizmi?",
        btnDownload: "Yuklab olish",
        btnCancel: "Bekor qilish",
        
        titleAbout: "Arxitektor Haqida",
        bioName: "Astradymova Darya",
        bioMeta: "21 yosh • Chelyabinsk, Rossiya • Arxitektor",
        bio1: "Salom! Mening ismim Astradymova Darya. Men arxitektorlik yo'nalishida tahsil olaman va parallel ravishda loyihalash sohasida ishlayman. Menga vizual estetika, arxitektura, fotografiya va kontent yaratish yoqadi.",
        bio2: "G'aroyib detal va uyg'unliklarni xush ko'raman. Harakterim bo'yicha mustaqil, ambitsioz va izlanuvchanman, har bir narsani o'zim mukammal o'rganishni yoqtiraman.",
        
        titlePort: "Mualliflik Chizmalari va Eskizlar",
        subPort: "Katta hajmdagi batafsil chizmalar, grafik eskizlar va rejalashtirish yechimlari",
        p1T: "Shahar Tashqarisidagi Kottej",
        p1D: "Bosh reja (genplan), fasadlar, kesimlar va ochiq terrassa bilan qavatlar rejalashtiruvi.",
        p2T: "Ijodiy Jarayon va Qo'lda Chizish",
        p2D: "Akvarel vizualizatsiyasi va loyiha yechimlarining qo'lda chizilishi.",
        p3T: "Arxitekturaviy Detallar",
        p3D: "Konstruktiv tugunlarni va materiallar teksturasini chuqur ishlab chiqish.",
        
        titleContact: "Kontaktlar",
        contactSub: "Yangi arxitekturaviy loyihalar va hamkorlik uchun ochiqman"
    },
    EN: {
        sub: "Architecture & Spatial Design",
        enter: "Explore Studio",
        navShowcase: "Projects",
        navAbout: "About Me",
        navPort: "Portfolio",
        navContact: "Contacts",
        
        titleShowcase: "Projects I am Creating",
        subShowcase: "Auto-switches every 10 seconds. Click any image to view in full size & download.",
        
        modalQuestion: "Do you want to download this high-resolution image?",
        btnDownload: "Download",
        btnCancel: "Cancel",
        
        titleAbout: "About the Architect",
        bioName: "Darya Astradymova",
        bioMeta: "21 y.o. • Chelyabinsk, Russia • Architect",
        bio1: "Hello, my name is Darya Astradymova. I am studying architecture while working in the design industry. I love visual aesthetics, architecture, photography, fashion, and content creation.",
        bio2: "I appreciate beautiful details and unique combinations. Ambitious, independent, and curious, I always strive to master new skills independently.",
        
        titlePort: "Architectural Drawings & Sketches",
        subPort: "Large-scale detailed blueprints, graphic sketches, and floor plans",
        p1T: "Countryside Cottage Project",
        p1D: "Master plan, facades, structural sections, and floor layouts with terrace.",
        p2T: "Creative Process & Manual Drafting",
        p2D: "Watercolor visualization and manual graphics techniques.",
        p3T: "Architectural Detailment",
        p3D: "Structural node design and texture harmony optimization.",
        
        titleContact: "Get in Touch",
        contactSub: "Open for architectural commissions and creative collaborations"
    }
};

let currentLang = 'RU';

function switchLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    const t = translations[lang];
    
    // Intro & Nav
    const elIntroSub = document.getElementById('intro-sub');
    if(elIntroSub) elIntroSub.innerText = t.sub;
    
    const elEnterBtn = document.getElementById('enter-btn-text');
    if(elEnterBtn) elEnterBtn.innerText = t.enter;

    const elNavShowcase = document.getElementById('nav-showcase');
    if(elNavShowcase) elNavShowcase.innerText = t.navShowcase;
    
    const elNavAbout = document.getElementById('nav-about');
    if(elNavAbout) elNavAbout.innerText = t.navAbout;
    
    const elNavPort = document.getElementById('nav-portfolio');
    if(elNavPort) elNavPort.innerText = t.navPort;
    
    const elNavContact = document.getElementById('nav-contact');
    if(elNavContact) elNavContact.innerText = t.navContact;

    // Showcase Slider
    const elTitleShowcase = document.getElementById('title-showcase');
    if(elTitleShowcase) elTitleShowcase.innerText = t.titleShowcase;
    
    const elSubShowcase = document.getElementById('sub-showcase');
    if(elSubShowcase) elSubShowcase.innerText = t.subShowcase;

    // Modal
    const elModalQuestion = document.getElementById('modal-download-text');
    if(elModalQuestion) elModalQuestion.innerText = t.modalQuestion;
    
    const elBtnDownload = document.getElementById('modal-download-btn');
    if(elBtnDownload) elBtnDownload.innerText = t.btnDownload;
    
    const elBtnCancel = document.getElementById('modal-cancel-btn');
    if(elBtnCancel) elBtnCancel.innerText = t.btnCancel;

    // About Section
    const elTitleAbout = document.getElementById('title-about');
    if(elTitleAbout) elTitleAbout.innerText = t.titleAbout;
    
    const elBioName = document.getElementById('bio-name');
    if(elBioName) elBioName.innerText = t.bioName;
    
    const elBioMeta = document.getElementById('bio-meta');
    if(elBioMeta) elBioMeta.innerText = t.bioMeta;
    
    const elBio1 = document.getElementById('bio-text-1');
    if(elBio1) elBio1.innerText = t.bio1;
    
    const elBio2 = document.getElementById('bio-text-2');
    if(elBio2) elBio2.innerText = t.bio2;

    // Portfolio
    const elTitlePort = document.getElementById('title-portfolio');
    if(elTitlePort) elTitlePort.innerText = t.titlePort;
    
    const elSubPort = document.getElementById('sub-portfolio');
    if(elSubPort) elSubPort.innerText = t.subPort;
    
    const elP1T = document.getElementById('p1-title');
    if(elP1T) elP1T.innerText = t.p1T;
    
    const elP1D = document.getElementById('p1-desc');
    if(elP1D) elP1D.innerText = t.p1D;
    
    const elP2T = document.getElementById('p2-title');
    if(elP2T) elP2T.innerText = t.p2T;
    
    const elP2D = document.getElementById('p2-desc');
    if(elP2D) elP2D.innerText = t.p2D;
    
    const elP3T = document.getElementById('p3-title');
    if(elP3T) elP3T.innerText = t.p3T;
    
    const elP3D = document.getElementById('p3-desc');
    if(elP3D) elP3D.innerText = t.p3D;

    // Contacts
    const elTitleContact = document.getElementById('title-contact');
    if(elTitleContact) elTitleContact.innerText = t.titleContact;
    
    const elContactSub = document.getElementById('contact-sub');
    if(elContactSub) elContactSub.innerText = t.contactSub;
}

function enterSite() {
    const intro = document.getElementById('intro-screen');
    if (intro) {
        intro.classList.add('hidden');
    }
}

/* --- SAKURA PETALS ANIMATION --- */
const canvas = document.getElementById('petals-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let petals = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Petal {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 8 + 5;
            this.speedY = Math.random() * 1.5 + 0.8;
            this.speedX = Math.random() * 0.8 - 0.4;
            this.angle = Math.random() * 360;
            this.spin = Math.random() * 0.02 - 0.01;
            this.opacity = Math.random() * 0.5 + 0.3;
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.angle += this.spin;
            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.beginPath();
            ctx.fillStyle = `rgba(240, 210, 215, ${this.opacity})`;
            ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < 35; i++) petals.push(new Petal());

    function animatePetals() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        petals.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animatePetals);
    }
    animatePetals();
}

/* --- 20-IMAGE SLIDER / CAROUSEL SYSTEM (10-SEC AUTO-ROTATE) --- */
const projectImages = [
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', title: 'Modern Villa Project #1' },
    { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', title: 'Residential Complex #2' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', title: 'Minimalist House Concept #3' },
    { src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80', title: 'Architectural Blueprint Layout #4' },
    { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80', title: 'Contemporary Living Space #5' },
    { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', title: 'Luxury Residence Villa #6' },
    { src: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80', title: 'Facade Lighting & Glass #7' },
    { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80', title: 'Spatial Interior Framing #8' },
    { src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80', title: 'Urban Cottage Concept #9' },
    { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80', title: 'Wooden & Concrete Texture #10' },
    { src: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80', title: 'Poolside Deck Architecture #11' },
    { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80', title: 'Panoramic Terrace Villa #12' },
    { src: 'https://images.unsplash.com/photo-1600566753086-290797616884?auto=format&fit=crop&w=1200&q=80', title: 'Monochrome Blueprint Visual #13' },
    { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80', title: 'Cantilever Structure #14' },
    { src: 'https://images.unsplash.com/photo-1600566752229-2319208039e1?auto=format&fit=crop&w=1200&q=80', title: 'High-Ceiling Interior #15' },
    { src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80', title: 'Eco-Friendly Pavilion #16' },
    { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', title: 'Landscape Integration #17' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', title: 'Glass Facade Design #18' },
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', title: 'Minimalist Courtyard #19' },
    { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', title: 'Architectural Masterpiece #20' }
];

let currentSlide = 0;
let slideInterval;
let selectedImageSrc = '';

function initSlider() {
    const wrapper = document.getElementById('slider-wrapper');
    const dotsContainer = document.getElementById('slider-dots');

    if (!wrapper || !dotsContainer) return;

    wrapper.innerHTML = '';
    dotsContainer.innerHTML = '';

    projectImages.forEach((item, index) => {
        // Slide item creation
        const slide = document.createElement('div');
        slide.className = `slide-item ${index === 0 ? 'active' : ''}`;
        slide.setAttribute('onclick', `openModal('${item.src}')`);

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;

        const caption = document.createElement('div');
        caption.className = 'slide-caption';
        caption.innerText = `${index + 1} / 20 — ${item.title}`;

        slide.appendChild(img);
        slide.appendChild(caption);
        wrapper.appendChild(slide);

        // Dot indicator creation
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('onclick', `goToSlide(${index})`);
        dotsContainer.appendChild(dot);
    });

    startAutoSlide();
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide-item');
    const dots = document.querySelectorAll('.dot');

    if (!slides.length) return;

    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
    resetAutoSlide();
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 10000); // 10 soniya
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

/* --- FULLSCREEN MODAL & DOWNLOAD SYSTEM --- */
function openModal(imageSrc) {
    selectedImageSrc = imageSrc;
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const downloadBtn = document.getElementById('modal-download-btn');

    if (modal && modalImg && downloadBtn) {
        modalImg.src = imageSrc;
        downloadBtn.href = imageSrc;
        downloadBtn.setAttribute('download', `Architectural_Project_${Date.now()}.jpg`);
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Modal darchadan tashqariga bosilsa yopilish
window.onclick = function(event) {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        closeModal();
    }
};

/* --- INITIALIZATION ON WINDOW LOAD --- */
window.onload = () => {
    initSlider();
};