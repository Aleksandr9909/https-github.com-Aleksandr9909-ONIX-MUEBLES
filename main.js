/* ============================================
   MUEBLES BA — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ====== TRANSLATIONS DATA ======
    const translations = {
        'es': {
            'nav_constructor': 'Diseño 3D',
            'nav_portfolio': 'Portafolio',
            'nav_about': 'Nosotros',
            'nav_contacts': 'Contacto',
            'hero_tag': 'Muebles de Lujo en Argentina',
            'hero_title': 'Muebles que<br><span class="hero__title-accent">crean espacio</span>',
            'hero_subtitle': 'Diseñamos y fabricamos muebles premium.<br>Diseño individual. Producción propia.',
            'btn_constructor': 'Diseño 3D',
            'btn_catalog': 'Ver Catálogo',
            'stat_years': 'años de exp.',
            'stat_projects': 'proyectos',
            'stat_warranty': 'garantía',
            'scroll_down': 'Desliza abajo',
            'tag_catalog': 'Nuestro surtido',
            'title_catalog': 'Categorías de muebles',
            'subtitle_catalog': 'Creamos muebles para cualquier espacio, combinando estética y practicidad.',
            'cat_bedroom': 'Dormitorios',
            'cat_bedroom_desc': 'Confort para tu descanso',
            'cat_wardrobe': 'Vestidores',
            'cat_wardrobe_desc': 'Sistemas de guardado',
            'cat_kitchen': 'Cocinas',
            'cat_kitchen_desc': 'Estilo y función',
            'cat_living': 'Living',
            'cat_living_desc': 'El centro de tu hogar',
            'cat_hallway': 'Recibidores',
            'cat_hallway_desc': 'La primera impresión',
            'cat_office': 'Oficinas',
            'cat_office_desc': 'Zonas de trabajo',
            'tag_innovations': 'Innovación',
            'title_constructor': 'Constructor 3D',
            'subtitle_constructor': 'Diseñá cómo se verán los muebles en tu casa. Elegí medidas, materiales y colores en tiempo real.',
            'ctrl_living': 'Living',
            'ctrl_bedroom': 'Dormitorio',
            'badge_3d_active': 'Modo 3D Activo',
            'lbl_material': 'Material:',
            'badge_demo': 'Demo interactiva',
            'cta_constructor_title': 'Iniciá el constructor 3D',
            'cta_constructor_desc': 'Elegí modelos y cambiá materiales al instante',
            'btn_launch_360': 'Ver en 360°',
            'tag_portfolio': 'Nuestros trabajos',
            'title_portfolio': 'Proyectos realizados',
            'filter_all': 'Todos',
            'filter_kitchen': 'Cocinas',
            'filter_bedroom': 'Dormitorios',
            'filter_living': 'Living',
            'tag_about': 'Sobre nosotros',
            'title_about': 'Artesanía y Calidad',
            'about_desc': 'Somos un taller en Buenos Aires dedicado a la creación de muebles únicos. Fusionamos técnicas tradicionales con tecnología moderna para lograr resultados excepcionales.',
            'tag_guarantees': 'Garantías',
            'title_guarantees': '¿Por qué elegirnos?',
            'guard_1_title': '5 años de garantía',
            'guard_1_desc': 'Aseguramos la durabilidad de cada pieza.',
            'guard_2_title': 'Entrega puntual',
            'guard_2_desc': 'Respetamos los plazos acordados.',
            'guard_3_title': 'Precios de fábrica',
            'guard_3_desc': 'Sin intermediarios, directo del taller.',
            'tag_contacts': 'Contacto',
            'title_contacts': '¿Tenés un proyecto?',
            'form_name': 'Tu nombre',
            'form_phone': 'Tu teléfono',
            'form_message': 'Contanos tu idea...',
            'btn_send': 'Enviar solicitud',
            'form_success': '¡Solicitud enviada!',
            'loading_3d': 'Cargando motor 3D...'
        },
        'en': {
            'nav_constructor': '3D Design',
            'nav_portfolio': 'Portfolio',
            'nav_about': 'About Us',
            'nav_contacts': 'Contacts',
            'hero_tag': 'Premium Furniture in Argentina',
            'hero_title': 'Furniture that<br><span class="hero__title-accent">creates space</span>',
            'hero_subtitle': 'We design and manufacture premium furniture.<br>Individual design. Own production.',
            'btn_constructor': '3D Constructor',
            'btn_catalog': 'View Catalog',
            'stat_years': 'years of exp.',
            'stat_projects': 'projects',
            'stat_warranty': 'warranty',
            'scroll_down': 'Scroll down',
            'tag_catalog': 'Our assortment',
            'title_catalog': 'Furniture Categories',
            'subtitle_catalog': 'We create furniture for any space, combining aesthetics and practicality.',
            'cat_bedroom': 'Bedrooms',
            'cat_bedroom_desc': 'Comfort for your rest',
            'cat_wardrobe': 'Wardrobes',
            'cat_wardrobe_desc': 'Storage systems',
            'cat_kitchen': 'Kitchens',
            'cat_kitchen_desc': 'Style and function',
            'cat_living': 'Living Rooms',
            'cat_living_desc': 'Center of your home',
            'cat_hallway': 'Hallways',
            'cat_hallway_desc': 'The first impression',
            'cat_office': 'Offices',
            'cat_office_desc': 'Work zones',
            'tag_innovations': 'Innovation',
            'title_constructor': '3D Constructor',
            'subtitle_constructor': 'Design how the furniture will look in your home. Choose sizes, materials, and colors in real-time.',
            'ctrl_living': 'Living Room',
            'ctrl_bedroom': 'Bedroom',
            'badge_3d_active': '3D Mode Active',
            'lbl_material': 'Material:',
            'badge_demo': 'Interactive Demo',
            'cta_constructor_title': 'Launch 3D Constructor',
            'cta_constructor_desc': 'Choose models and change materials in real-time',
            'btn_launch_360': 'Launch 360° View',
            'tag_portfolio': 'Our Works',
            'title_portfolio': 'Completed Projects',
            'filter_all': 'All',
            'filter_kitchen': 'Kitchens',
            'filter_bedroom': 'Bedrooms',
            'filter_living': 'Living Rooms',
            'tag_about': 'About Us',
            'title_about': 'Craftmanship & Quality',
            'about_desc': 'We are a Buenos Aires based workshop dedicated to creating unique furniture. We fuse traditional techniques with modern technology to achieve exceptional results.',
            'tag_guarantees': 'Guarantees',
            'title_guarantees': 'Why choose us?',
            'guard_1_title': '5 Year Warranty',
            'guard_1_desc': 'We ensure the durability of every piece.',
            'guard_2_title': 'On-time Delivery',
            'guard_2_desc': 'We respect agreed deadlines.',
            'guard_3_title': 'Factory Prices',
            'guard_3_desc': 'No intermediaries, direct from workshop.',
            'tag_contacts': 'Contacts',
            'title_contacts': 'Have a project?',
            'form_name': 'Your name',
            'form_phone': 'Your phone',
            'form_message': 'Tell us your idea...',
            'btn_send': 'Send Request',
            'form_success': 'Request sent!',
            'loading_3d': '3D Engine loading...'
        },
        'ru': {
            'nav_constructor': '3D Конструктор',
            'nav_portfolio': 'Портфолио',
            'nav_about': 'О нас',
            'nav_contacts': 'Контакты',
            'hero_tag': 'Премиальная мебель в Аргентине',
            'hero_title': 'Мебель, которая<br><span class="hero__title-accent">создаёт пространство</span>',
            'hero_subtitle': 'Проектируем и производим мебель премиум-класса.<br>Индивидуальный дизайн. Собственное производство.',
            'btn_constructor': '3D Конструктор',
            'btn_catalog': 'Смотреть каталог',
            'stat_years': 'лет опыта',
            'stat_projects': 'проектов',
            'stat_warranty': 'гарантия',
            'scroll_down': 'Листайте вниз',
            'tag_catalog': 'Наш ассортимент',
            'title_catalog': 'Категории мебели',
            'subtitle_catalog': 'Мы создаем мебель для любого пространства, сочетая эстетику и практичность.',
            'cat_bedroom': 'Спальные гарнитуры',
            'cat_bedroom_desc': 'Уют для вашего сна',
            'cat_wardrobe': 'Гардеробные',
            'cat_wardrobe_desc': 'Системы хранения',
            'cat_kitchen': 'Кухонные гарнитуры',
            'cat_kitchen_desc': 'Стиль и функциональность',
            'cat_living': 'Гостиные',
            'cat_living_desc': 'Центр вашего дома',
            'cat_hallway': 'Прихожие',
            'cat_hallway_desc': 'Первое впечатление',
            'cat_office': 'Офисы',
            'cat_office_desc': 'Рабочие зоны',
            'tag_innovations': 'Инновации',
            'title_constructor': '3D Конструктор',
            'subtitle_constructor': 'Спроектируйте мебель для вашего дома. Выбирайте размеры, материалы и цвета в реальном времени.',
            'ctrl_living': 'Гостиная',
            'ctrl_bedroom': 'Спальня',
            'badge_3d_active': '3D Режим активен',
            'lbl_material': 'Материал:',
            'badge_demo': 'Интерактивная демо',
            'cta_constructor_title': 'Запустить конструктор',
            'cta_constructor_desc': 'Выбирайте модели и меняйте материалы',
            'btn_launch_360': 'Просмотр 360°',
            'tag_portfolio': 'Наши работы',
            'title_portfolio': 'Выполненные проекты',
            'filter_all': 'Все',
            'filter_kitchen': 'Кухни',
            'filter_bedroom': 'Спальни',
            'filter_living': 'Гостиные',
            'tag_about': 'О компании',
            'title_about': 'Мастерство и Качество',
            'about_desc': 'Мы — мастерская в Буэнос-Айресе, создающая уникальную мебель. Мы объединяем классические техники и современные технологии для лучших результатов.',
            'tag_guarantees': 'Гарантии',
            'title_guarantees': 'Почему выбирают нас?',
            'guard_1_title': '5 лет гарантии',
            'guard_1_desc': 'Мы уверены в долговечности каждого изделия.',
            'guard_2_title': 'Сдача в срок',
            'guard_2_desc': 'Соблюдаем оговоренные дедлайны.',
            'guard_3_title': 'Цены от фабрики',
            'guard_3_desc': 'Без посредников, напрямую из цеха.',
            'tag_contacts': 'Контакты',
            'title_contacts': 'Есть проект?',
            'form_name': 'Ваше имя',
            'form_phone': 'Ваш телефон',
            'form_message': 'Опишите вашу идею...',
            'btn_send': 'Отправить заявку',
            'form_success': 'Заявка отправлена!',
            'loading_3d': '3D Engine загружается...'
        }
    };

    // ====== LANGUAGE SWITCHER LOGIC ======
    const langBtn = document.getElementById('langBtn');
    const langSwitcher = document.getElementById('langSwitcher');
    const currentLangText = document.getElementById('currentLang');
    const langOptions = document.querySelectorAll('.lang-switcher__dropdown button');

    function setLanguage(lang) {
        localStorage.setItem('preferred_lang', lang);
        currentLangText.textContent = lang.toUpperCase();
        document.documentElement.lang = lang;
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update active state in dropdown
        langOptions.forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });
    }

    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSwitcher.classList.toggle('active');
            const isActive = langSwitcher.classList.contains('active');
            langBtn.setAttribute('aria-expanded', isActive);
        });
    }

    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.dataset.lang;
            setLanguage(lang);
            langSwitcher.classList.remove('active');
            langBtn.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', () => {
        if (langSwitcher) {
            langSwitcher.classList.remove('active');
            if(langBtn) langBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Initialize Language
    const savedLang = localStorage.getItem('preferred_lang') || 'ru';
    setLanguage(savedLang);

    // ====== SIDE MENU ======
    const menuBtn = document.getElementById('menuBtn');
    const menuClose = document.getElementById('menuClose');
    const menuOverlay = document.getElementById('menuOverlay');
    const sideMenu = document.getElementById('sideMenu');

    function openMenu() {
        sideMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    menuBtn.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    // Close menu on link click
    document.querySelectorAll('.side-menu__link').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // ====== HEADER SCROLL EFFECT ======
    const header = document.getElementById('header');
    let lastScroll = 0;

    function handleScroll() {
        const scrollY = window.scrollY;

        // Add/remove scrolled class
        if (scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = scrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ====== SMOOTH SCROLL FOR ANCHOR LINKS ======
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
                const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ====== COUNTER ANIMATION (Hero Stats) ======
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        counters.forEach(counter => {
            if (counter.dataset.animated) return;

            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const start = performance.now();

            function easeOutCubic(t) {
                return 1 - Math.pow(1 - t, 3);
            }

            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeOutCubic(progress);
                const current = Math.floor(easedProgress * target);

                counter.textContent = current;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                    counter.dataset.animated = 'true';
                }
            }

            requestAnimationFrame(update);
        });
    }

    // Start counter when hero stats are in view
    const heroStats = document.querySelector('.hero__stats');
    if (heroStats) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(heroStats);
    }

    // ====== SCROLL REVEAL ANIMATIONS ======
    function initScrollReveal() {
        // Add .reveal to sections
        const revealElements = document.querySelectorAll(
            '.category-card, .constructor__feature, .guarantee-card, ' +
            '.portfolio__item, .about__badge, .about__visual, ' +
            '.contacts__detail, .section-header'
        );

        revealElements.forEach((el, i) => {
            el.classList.add('reveal');
            // Stagger delay based on position in grid
            el.style.transitionDelay = `${(i % 4) * 0.1}s`;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -60px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }

    initScrollReveal();

    // ====== PORTFOLIO FILTER ======
    const filterBtns = document.querySelectorAll('.portfolio__filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio__item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('portfolio__filter-btn--active'));
            btn.classList.add('portfolio__filter-btn--active');

            const filter = btn.dataset.filter;

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.type === filter) {
                    item.classList.remove('hidden');
                    // Re-trigger animation
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    requestAnimationFrame(() => {
                        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    });
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // ====== CONSTRUCTOR ROOM BUTTONS ======
    const roomBtns = document.querySelectorAll('.constructor__control-btn');
    roomBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            roomBtns.forEach(b => b.classList.remove('constructor__control-btn--active'));
            btn.classList.add('constructor__control-btn--active');
        });
    });

    // ====== CONTACT FORM ======
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('#contactSubmit');
            const originalText = submitBtn.innerHTML;

            // Simple validation
            const name = document.getElementById('contactName').value.trim();
            const phone = document.getElementById('contactPhone').value.trim();

            if (!name || !phone) {
                // Shake animation
                contactForm.style.animation = 'shake 0.5s ease';
                setTimeout(() => { contactForm.style.animation = ''; }, 500);
                return;
            }

            // Success state
            submitBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Заявка отправлена!
            `;
            submitBtn.style.background = 'var(--color-accent)';
            submitBtn.disabled = true;

            // Reset after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 3000);
        });
    }

    // ====== CSS SHAKE ANIMATION (inject) ======
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
            20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
    `;
    document.head.appendChild(shakeStyle);

    // ====== 3D CONSTRUCTOR ENGINE (Three.js) ======
    let scene, camera, renderer, controls, furniture;
    let is3DInitialized = false;

    function init3DConstructor() {
        if (is3DInitialized) return;

        const container = document.getElementById('three-container');
        if (!container) return;

        // Scene setup
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x141311);

        // Camera
        camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(5, 5, 8);

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);

        // Controls
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minDistance = 5;
        controls.maxDistance = 15;
        controls.maxPolarAngle = Math.PI / 2 - 0.1; // Don't go below floor

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const spotLight = new THREE.SpotLight(0xffffff, 0.8);
        spotLight.position.set(5, 10, 5);
        spotLight.castShadow = true;
        scene.add(spotLight);

        const pointLight = new THREE.PointLight(0xB8956A, 0.5);
        pointLight.position.set(-5, 5, -5);
        scene.add(pointLight);

        // Floor
        const floorGeo = new THREE.PlaneGeometry(20, 20);
        const floorMat = new THREE.MeshStandardMaterial({ 
            color: 0x1A1917,
            roughness: 0.8,
            metalness: 0.2
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        scene.add(floor);

        // Walls
        const wallMat = new THREE.MeshStandardMaterial({ color: 0x2C2C2A });
        
        const backWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMat);
        backWall.position.z = -5;
        backWall.position.y = 5;
        scene.add(backWall);

        const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMat);
        leftWall.rotation.y = Math.PI / 2;
        leftWall.position.x = -5;
        leftWall.position.y = 5;
        scene.add(leftWall);

        // Grid helper
        const grid = new THREE.GridHelper(20, 20, 0x333333, 0x222222);
        grid.position.y = 0.01;
        scene.add(grid);

        // Initial Furniture Model
        loadFurniture('living');

        animate3D();
        is3DInitialized = true;

        window.addEventListener('resize', onWindowResize);
    }

    function loadFurniture(type) {
        if (furniture) scene.remove(furniture);
        furniture = new THREE.Group();

        if (type === 'living') {
            // Simple sofa representation
            const base = new THREE.Mesh(
                new THREE.BoxGeometry(3, 0.6, 1.2),
                new THREE.MeshStandardMaterial({ color: 0xB8956A })
            );
            base.position.y = 0.3;
            base.castShadow = true;
            furniture.add(base);

            const back = new THREE.Mesh(
                new THREE.BoxGeometry(3, 0.8, 0.4),
                new THREE.MeshStandardMaterial({ color: 0xB8956A })
            );
            back.position.set(0, 0.7, -0.4);
            back.castShadow = true;
            furniture.add(back);

            const table = new THREE.Mesh(
                new THREE.BoxGeometry(1.2, 0.4, 0.8),
                new THREE.MeshStandardMaterial({ color: 0x4A4A46 })
            );
            table.position.set(0, 0.2, 1.5);
            table.castShadow = true;
            furniture.add(table);
        } else if (type === 'bedroom') {
            // Simple bed representation
            const frame = new THREE.Mesh(
                new THREE.BoxGeometry(2.2, 0.5, 3),
                new THREE.MeshStandardMaterial({ color: 0xB8956A })
            );
            frame.position.y = 0.25;
            frame.castShadow = true;
            furniture.add(frame);

            const headboard = new THREE.Mesh(
                new THREE.BoxGeometry(HEADBOARD_WIDTH, 1.5, 0.2), // Wait, fixed below
                new THREE.MeshStandardMaterial({ color: 0xB8956A })
            );
            headboard.position.set(0, 0.75, -1.4);
            headboard.castShadow = true;
            furniture.add(headboard);
        }

        scene.add(furniture);
    }
    const HEADBOARD_WIDTH = 2.2; // Minor fix for a missing variable

    function animate3D() {
        requestAnimationFrame(animate3D);
        if (controls) controls.update();
        if (renderer) renderer.render(scene, camera);
    }

    function onWindowResize() {
        const container = document.getElementById('three-container');
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    // Launch Constructor
    const launchBtn = document.getElementById('launchConstructor');
    const constructorUI = document.getElementById('constructorUI');
    const initialOverlay = document.getElementById('constructorInitialOverlay');

    if (launchBtn) {
        launchBtn.addEventListener('click', () => {
            initialOverlay.classList.add('hidden');
            constructorUI.classList.add('active');
            init3DConstructor();
        });
    }

    // Material controls
    const materialBtns = document.querySelectorAll('.material-btn');
    materialBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            materialBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const color = btn.dataset.color;
            if (furniture) {
                furniture.traverse(child => {
                    if (child.isMesh && child.geometry.type !== 'PlaneGeometry') {
                        child.material.color.set(color);
                    }
                });
            }
        });
    });

    // Model controls
    const modelBtns = document.querySelectorAll('.constructor__control-btn');
    modelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!is3DInitialized) return;
            modelBtns.forEach(b => b.classList.remove('constructor__control-btn--active'));
            btn.classList.add('constructor__control-btn--active');
            loadFurniture(btn.dataset.model);
        });
    });

    // ====== CATEGORY CARD IMAGE FALLBACKS ======
    // Generate gradient placeholders for category cards without images
    const categoryCards = document.querySelectorAll('.category-card');
    const gradients = [
        'linear-gradient(135deg, #2C2C2A 0%, #3D3D3A 50%, #4A4A46 100%)',
        'linear-gradient(135deg, #3A352E 0%, #4D463C 50%, #5A5248 100%)',
        'linear-gradient(135deg, #2E3530 0%, #3F4D42 50%, #4D5E50 100%)',
        'linear-gradient(135deg, #352E2E 0%, #4D3C3C 50%, #5E4848 100%)',
        'linear-gradient(135deg, #2E2E35 0%, #3C3C4D 50%, #48485E 100%)',
        'linear-gradient(135deg, #35332E 0%, #4D493C 50%, #5E5948 100%)'
    ];

    categoryCards.forEach((card, i) => {
        const img = card.querySelector('.category-card__image');
        if (img) {
            // Check if image loaded
            const bgImage = img.style.backgroundImage;
            const testImg = new Image();
            const url = bgImage.replace(/url\(['"]?/, '').replace(/['"]?\)/, '');
            
            testImg.onerror = () => {
                img.style.backgroundImage = gradients[i % gradients.length];
            };
            testImg.src = url;
        }
    });

    // Same for portfolio items
    const portfolioImages = document.querySelectorAll('.portfolio__image');
    const portfolioGradients = [
        'linear-gradient(135deg, #3D3D3A 0%, #555550 100%)',
        'linear-gradient(135deg, #4D463C 0%, #655B4E 100%)',
        'linear-gradient(135deg, #3F4D42 0%, #576558 100%)',
        'linear-gradient(135deg, #3D3D3A 0%, #555550 100%)',
        'linear-gradient(135deg, #3C3C4D 0%, #545468 100%)',
        'linear-gradient(135deg, #4D493C 0%, #656050 100%)'
    ];

    portfolioImages.forEach((img, i) => {
        const bgImage = img.style.backgroundImage;
        const testImg = new Image();
        const url = bgImage.replace(/url\(['"]?/, '').replace(/['"]?\)/, '');
        
        testImg.onerror = () => {
            img.style.backgroundImage = portfolioGradients[i % portfolioGradients.length];
        };
        testImg.src = url;
    });

    // About image fallback
    const aboutImage = document.querySelector('.about__image');
    if (aboutImage) {
        const bgImage = aboutImage.style.backgroundImage;
        const testImg = new Image();
        const url = bgImage.replace(/url\(['"]?/, '').replace(/['"]?\)/, '');
        
        testImg.onerror = () => {
            aboutImage.style.backgroundImage = 'linear-gradient(135deg, #4D463C 0%, #655B4E 50%, #7A6F60 100%)';
        };
        testImg.src = url;
    }

    // ====== MODAL LOGIC ======
    const modal = document.getElementById('genericModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');

    function openModal(content) {
        modalBody.innerHTML = content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Escape listener for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Content Generators
    window.showCertificates = function() {
        const content = `
            <h3>Сертификаты и Гарантии</h3>
            <p>Мы используем только сертифицированные материалы высшего качества. Все наши изделия проходят строгий контроль качества.</p>
            <div class="certificate-grid">
                <div class="certificate-item">ISO 9001:2015<br>Качество менеджмента</div>
                <div class="certificate-item">E1 Standard<br>Экологичность материалов</div>
                <div class="certificate-item">Blum Expert<br>Официальный партнер</div>
                <div class="certificate-item">5 Лет Гарантии<br>Сертификат надежности</div>
            </div>
        `;
        openModal(content);
    };

    window.showProject = function(projectId) {
        // Mock project data
        const projects = {
            '1': { title: 'Минималистичная спальня', desc: 'Проект реализован в 2023 году. Использована фурнитура Blum и шпон дуба.' },
            '2': { title: 'Современная кухня', desc: 'Кухня с островом и встроенной техникой. Фасады — белый глянец.' },
            '3': { title: 'Гардеробная система', desc: 'Индивидуальное решение для хранения вещей с умной подсветкой.' }
        };

        const project = projects[projectId] || { title: 'Наш проект', desc: 'Детальная информация о выполненной работе.' };
        
        const content = `
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div style="aspect-ratio: 16/9; background: var(--color-bg-alt); border-radius: var(--radius-md); margin-top: 20px; display: flex; align-items: center; justify-content: center; color: var(--color-text-muted);">
                [Профессиональные фотографии проекта]
            </div>
            <button class="btn btn--primary" style="margin-top: 20px;" onclick="closeModal()">Закрыть</button>
        `;
        openModal(content);
    };

    // Attach to existing elements
    document.querySelectorAll('.guarantee-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => window.showCertificates());
    });

    document.querySelectorAll('.portfolio__link').forEach((link, i) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.showProject((i + 1).toString());
        });
    });

    console.log('✅ MUEBLES BA website initialized.');

    // ====== DYNAMIC CATALOG & ADMIN SYSTEM ======
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminAuthModal = document.getElementById('adminAuthModal');
    const adminDashboardModal = document.getElementById('adminDashboardModal');
    const adminAuthClose = document.getElementById('adminAuthClose');
    const adminAuthOverlay = document.getElementById('adminAuthOverlay');
    const adminDashboardClose = document.getElementById('adminDashboardClose');
    const adminDashboardOverlay = document.getElementById('adminDashboardOverlay');
    
    const adminPasswordInput = document.getElementById('adminPassword');
    const adminLoginSubmit = document.getElementById('adminLoginSubmit');
    const adminAuthError = document.getElementById('adminAuthError');
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');

    // Admin Access Configuration
    const ADMIN_PASSWORD = "Bueno2028";
    
    // State
    const STORAGE_KEY = 'muebles_catalog_products';
    let products = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // Modals Handlers
    function closeAdminModals() {
        adminAuthModal.classList.remove('active');
        adminDashboardModal.classList.remove('active');
        adminPasswordInput.value = '';
        adminAuthError.style.display = 'none';
        resetAdminForm();
    }

    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', () => {
            // Check if already authenticated via session
            if (sessionStorage.getItem('admin_auth') === 'true') {
                openAdminDashboard();
            } else {
                adminAuthModal.classList.add('active');
            }
        });
    }

    if (adminAuthClose) adminAuthClose.addEventListener('click', closeAdminModals);
    if (adminAuthOverlay) adminAuthOverlay.addEventListener('click', closeAdminModals);
    if (adminDashboardClose) adminDashboardClose.addEventListener('click', closeAdminModals);
    if (adminDashboardOverlay) adminDashboardOverlay.addEventListener('click', closeAdminModals);

    // Escape listener for admin modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAdminModals();
        }
    });

    // Login Logic
    function handleLogin() {
        if (adminPasswordInput.value === ADMIN_PASSWORD) {
            sessionStorage.setItem('admin_auth', 'true');
            adminAuthModal.classList.remove('active');
            openAdminDashboard();
        } else {
            adminAuthError.style.display = 'block';
            adminPasswordInput.value = '';
            adminPasswordInput.focus();
            // Shake animation
            adminPasswordInput.style.animation = 'shake 0.5s ease';
            setTimeout(() => { adminPasswordInput.style.animation = ''; }, 500);
        }
    }

    if (adminLoginSubmit) adminLoginSubmit.addEventListener('click', handleLogin);
    if (adminPasswordInput) adminPasswordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });

    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('admin_auth');
            closeAdminModals();
        });
    }

    function openAdminDashboard() {
        adminDashboardModal.classList.add('active');
        renderAdminProducts();
    }

    // ====== PRODUCT FORM HANDLING ======
    const adminProductForm = document.getElementById('adminProductForm');
    const adminProductId = document.getElementById('adminProductId');
    const adminProductCategory = document.getElementById('adminProductCategory');
    const adminProductName = document.getElementById('adminProductName');
    const adminProductPrice = document.getElementById('adminProductPrice');
    const adminProductDesc = document.getElementById('adminProductDesc');
    const adminProductPhotoUrl = document.getElementById('adminProductPhotoUrl');
    const adminProductPhotoFile = document.getElementById('adminProductPhotoFile');
    const adminProductPhotoPreview = document.getElementById('adminProductPhotoPreview');
    const adminFormTitle = document.getElementById('adminFormTitle');
    const adminSubmitBtn = document.getElementById('adminSubmitBtn');
    const adminCancelEditBtn = document.getElementById('adminCancelEditBtn');
    const adminViewCategory = document.getElementById('adminViewCategory');

    let currentPhotoData = '';

    // Handle File Upload (FileReader)
    if (adminProductPhotoFile) {
        adminProductPhotoFile.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    currentPhotoData = e.target.result;
                    adminProductPhotoPreview.style.backgroundImage = `url('${currentPhotoData}')`;
                    adminProductPhotoPreview.style.display = 'block';
                    adminProductPhotoUrl.value = ''; // clear URL if file picked
                }
                reader.readAsDataURL(file);
            } else {
                currentPhotoData = '';
                adminProductPhotoPreview.style.display = 'none';
            }
        });
    }

    if (adminProductPhotoUrl) {
        adminProductPhotoUrl.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                currentPhotoData = this.value.trim();
                adminProductPhotoPreview.style.backgroundImage = `url('${currentPhotoData}')`;
                adminProductPhotoPreview.style.display = 'block';
                adminProductPhotoFile.value = ''; // clear file if URL entered
            } else if (!adminProductPhotoFile.value) {
                currentPhotoData = '';
                adminProductPhotoPreview.style.display = 'none';
            }
        });
    }

    function saveProducts() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
        renderAdminProducts();
        renderPublicCatalog();
    }

    function resetAdminForm() {
        if(adminProductForm) adminProductForm.reset();
        if(adminProductId) adminProductId.value = '';
        currentPhotoData = '';
        if(adminProductPhotoPreview) {
            adminProductPhotoPreview.style.backgroundImage = 'none';
            adminProductPhotoPreview.style.display = 'none';
        }
        if(adminFormTitle) adminFormTitle.textContent = 'Добавить товар';
        if(adminSubmitBtn) adminSubmitBtn.textContent = 'Добавить';
        if(adminCancelEditBtn) adminCancelEditBtn.style.display = 'none';
    }

    if (adminCancelEditBtn) {
        adminCancelEditBtn.addEventListener('click', resetAdminForm);
    }

    if (adminProductForm) {
        adminProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const id = adminProductId.value;
            const product = {
                id: id ? id : Date.now().toString(),
                category: adminProductCategory.value,
                name: adminProductName.value.trim(),
                price: adminProductPrice.value,
                desc: adminProductDesc.value.trim(),
                photo: currentPhotoData
            };

            if (!product.photo) {
                alert('Пожалуйста, добавьте фотографию (URL или файл)');
                return;
            }

            if (id) {
                // Edit
                const index = products.findIndex(p => p.id === id);
                if (index !== -1) {
                    products[index] = product;
                }
            } else {
                // Add
                products.push(product);
            }

            saveProducts();
            resetAdminForm();
        });
    }

    // Expose edit/delete global functions for injected HTML
    window.editProduct = function(id) {
        const product = products.find(p => p.id === id);
        if (!product) return;
        
        adminProductId.value = product.id;
        adminProductCategory.value = product.category;
        adminProductName.value = product.name;
        adminProductPrice.value = product.price;
        adminProductDesc.value = product.desc;
        
        currentPhotoData = product.photo;
        
        // Is it base64 or URL?
        if (product.photo.startsWith('data:image')) {
            adminProductPhotoUrl.value = '';
        } else {
            adminProductPhotoUrl.value = product.photo;
        }
        
        adminProductPhotoPreview.style.backgroundImage = `url('${product.photo}')`;
        adminProductPhotoPreview.style.display = 'block';
        
        adminFormTitle.textContent = 'Редактировать товар';
        adminSubmitBtn.textContent = 'Сохранить';
        adminCancelEditBtn.style.display = 'block';
    };

    window.deleteProduct = function(id) {
        if (confirm('Вы уверены, что хотите удалить этот товар?')) {
            products = products.filter(p => p.id !== id);
            saveProducts();
            
            // If editing the deleted product, reset form
            if (adminProductId.value === id) {
                resetAdminForm();
            }
        }
    };

    function renderAdminProducts() {
        const list = document.getElementById('adminProductsList');
        if (!list) return;

        const filter = adminViewCategory.value;
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);

        if (filteredProducts.length === 0) {
            list.innerHTML = '<p style="color: var(--color-text-muted); grid-column: 1/-1; text-align: center; padding: 20px;">В этой категории пока нет товаров.</p>';
            return;
        }

        const categoryNames = {
            'bedroom': 'Спальные гарнитуры',
            'wardrobe': 'Гардеробные',
            'kitchen': 'Кухонные гарнитуры',
            'living': 'Гостиные',
            'hallway': 'Прихожие',
            'office': 'Офисы'
        };

        list.innerHTML = filteredProducts.map(p => `
            <div class="admin-product-item">
                <img src="${p.photo}" alt="${p.name}">
                <h5>${p.name}</h5>
                <span class="price">$${p.price}</span>
                <span style="font-size: 11px; color: var(--color-text-muted); margin-bottom: 8px;">${categoryNames[p.category]}</span>
                <div class="admin-product-actions">
                    <button class="admin-btn-edit" onclick="editProduct('${p.id}')">Изменить</button>
                    <button class="admin-btn-delete" onclick="deleteProduct('${p.id}')">Удалить</button>
                </div>
            </div>
        `).join('');
    }

    if (adminViewCategory) {
        adminViewCategory.addEventListener('change', renderAdminProducts);
    }

    // ====== RENDERING DYNAMIC CATALOG (PUBLIC) ======
    const catalogGrid = document.getElementById('catalogGrid');
    const catalogSection = document.getElementById('catalog-products');
    const catalogFiltersBtn = document.querySelectorAll('#catalogFilter .portfolio__filter-btn');

    function renderPublicCatalog(filter = 'all') {
        if (!catalogGrid || !catalogSection) return;

        if (products.length === 0) {
            catalogSection.style.display = 'none';
            return;
        }

        catalogSection.style.display = 'block';

        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);
            
        // Setup empty state check if needed
        if (filteredProducts.length === 0 && filter !== 'all') {
             catalogGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-muted);">Товаров в этой категории пока нет.</div>';
             return;
        }

        const categoryNames = {
            'bedroom': 'Спальные гарнитуры',
            'wardrobe': 'Гардеробные',
            'kitchen': 'Кухонные гарнитуры',
            'living': 'Гостиные',
            'hallway': 'Прихожие',
            'office': 'Офисы'
        };

        catalogGrid.innerHTML = filteredProducts.map(p => `
            <div class="catalog-product-card reveal visible">
                <div class="catalog-product-card__image" style="background-image: url('${p.photo}')"></div>
                <div class="catalog-product-card__content">
                    <span class="catalog-product-card__category">${categoryNames[p.category]}</span>
                    <h3 class="catalog-product-card__title">${p.name}</h3>
                    <div class="catalog-product-card__price">$${p.price}</div>
                    <p class="catalog-product-card__desc">${p.desc}</p>
                    <div class="catalog-product-card__actions">
                        <button class="btn btn--outline btn--full" onclick="window.location.href='#contacts'" style="padding: 10px;">Заказать</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    if (catalogFiltersBtn.length > 0) {
        catalogFiltersBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                catalogFiltersBtn.forEach(b => b.classList.remove('portfolio__filter-btn--active'));
                btn.classList.add('portfolio__filter-btn--active');
                
                // Get filter properly considering 'catalogFilter' might use dataset.filter
                const filter = btn.dataset.filter || 'all';
                renderPublicCatalog(filter);
            });
        });
    }

    // Initial render for public catalog
    renderPublicCatalog();

});
