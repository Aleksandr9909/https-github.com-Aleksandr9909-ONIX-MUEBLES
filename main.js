/* ============================================
   MUEBLES BA — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

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
});
