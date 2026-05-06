/* ============================================
   MUEBLES BA — Main JavaScript
   Firebase Cloud Database Integration
   ============================================ */

import { FirebaseDB } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', () => {

    // ====== TRANSLATIONS DATA ======
    const translations = {
        'es': {
            // — Nav —
            'nav_constructor': 'Diseño 3D',
            'nav_portfolio': 'Portafolio',
            'nav_about': 'Nosotros',
            'nav_contacts': 'Contacto',
            // — Hero —
            'hero_tag': 'Muebles de Lujo en Argentina',
            'hero_title': 'Muebles que<br><span class="hero__title-accent">crean espacio</span>',
            'hero_subtitle': 'Diseñamos y fabricamos muebles premium.<br>Diseño individual. Producción propia.',
            'btn_constructor': 'Diseño 3D',
            'btn_catalog': 'Ver Catálogo',
            'stat_years': 'años de exp.',
            'stat_projects': 'proyectos',
            'stat_warranty': 'garantía',
            'scroll_down': 'Deslizá hacia abajo',
            // — Side Menu —
            'side_menu_title': 'Catálogo',
            'side_bedroom': 'Dormitorios',
            'side_bedroom_desc': 'Camas, mesas de luz, cómodas',
            'side_wardrobe': 'Vestidores',
            'side_wardrobe_desc': 'Sistemas de guardado, placards',
            'side_kitchen': 'Cocinas',
            'side_kitchen_desc': 'Cocinas llave en mano',
            'side_living': 'Living',
            'side_living_desc': 'Estantes, zonas TV, mesas',
            'side_hallway': 'Recibidores',
            'side_hallway_desc': 'Percheros, zapateros, espejos',
            'side_office': 'Oficinas',
            'side_office_desc': 'Zonas de trabajo y despachos',
            // — Categories —
            'tag_catalog': 'Catálogo',
            'title_catalog': 'Categorías de muebles',
            'subtitle_catalog': 'Elegí la dirección y empezá a diseñar tu interior ideal',
            'cat_bedroom': 'Dormitorios',
            'cat_bedroom_count': '24 modelos',
            'cat_bedroom_desc': 'Camas, mesas de luz, cómodas y tocadores',
            'cat_wardrobe': 'Vestidores',
            'cat_wardrobe_count': '18 modelos',
            'cat_wardrobe_desc': 'Sistemas de guardado y placards',
            'cat_kitchen': 'Cocinas',
            'cat_kitchen_count': '32 modelos',
            'cat_kitchen_desc': 'Cocinas llave en mano con los mejores materiales',
            'cat_living': 'Living',
            'cat_living_count': '28 modelos',
            'cat_living_desc': 'Estantes, zonas TV, mesas ratonas',
            'cat_hallway': 'Recibidores',
            'cat_hallway_count': '15 modelos',
            'cat_hallway_desc': 'Percheros, zapateros, espejos',
            'cat_office': 'Oficinas',
            'cat_office_count': '20 modelos',
            'cat_office_desc': 'Zonas de trabajo, despachos, salas de reunión',
            'cat_link': 'Ver catálogo →',
            // — Dynamic Catalog —
            'tag_products': 'Nuestros productos',
            'title_products': 'Catálogo de productos',
            'subtitle_products': 'Elegí muebles de nuestro surtido actual',
            // — Constructor —
            'tag_innovations': 'Innovación',
            'title_constructor': 'Constructor 3D de muebles',
            'subtitle_constructor': 'Diseñá cómo se verán los muebles en tu casa. Elegí medidas, materiales, colores — y mirá el resultado en tiempo real con nuestro motor 3D.',
            'ctrl_living': 'Living',
            'ctrl_bedroom': 'Dormitorio',
            'badge_3d_active': 'Modo 3D activo',
            'lbl_material': 'Material:',
            'badge_demo': 'Demo interactiva',
            'cta_constructor_title': 'Iniciá el constructor 3D',
            'cta_constructor_desc': 'Elegí modelos y cambiá materiales en tiempo real',
            'btn_launch_360': 'Iniciar vista 360°',
            'feat_library': 'Biblioteca de modelos',
            'feat_library_desc': 'Más de 500 modelos de muebles en el catálogo',
            'feat_materials': 'Materiales reales',
            'feat_materials_desc': 'Texturas precisas de madera, piedra, tela',
            'feat_export': 'Exportar proyecto',
            'feat_export_desc': 'Descargá el plano con medidas en PDF',
            // — Portfolio —
            'tag_portfolio': 'Nuestros trabajos',
            'title_portfolio': 'Proyectos realizados',
            'subtitle_portfolio': 'Proyectos reales de nuestros clientes en Buenos Aires y toda Argentina',
            'filter_all': 'Todos los proyectos',
            'filter_bedroom': 'Dormitorios',
            'filter_kitchen': 'Cocinas',
            'filter_living': 'Living',
            'filter_office': 'Oficinas',
            'portfolio_details': 'Ver más',
            'ptag_kitchen': 'Cocina',
            'ptag_bedroom': 'Dormitorio',
            'ptag_living': 'Living',
            'ptag_office': 'Oficina',
            'ptitle_1': 'Cocina «Milano» en Palermo',
            'pmeta_1': 'Palermo, Buenos Aires • 18 m²',
            'ptitle_2': 'Dormitorio «Aurora» en Recoleta',
            'pmeta_2': 'Recoleta, Buenos Aires • 24 m²',
            'ptitle_3': 'Living «Cielo» en Puerto Madero',
            'pmeta_3': 'Puerto Madero • 40 m²',
            'ptitle_4': 'Cocina «Elegante» en La Plata',
            'pmeta_4': 'La Plata • 22 m²',
            'ptitle_5': 'Oficina «Capital» en Microcentro',
            'pmeta_5': 'Microcentro • 55 m²',
            'ptitle_6': 'Dormitorio «Luna» en San Telmo',
            'pmeta_6': 'San Telmo • 20 m²',
            // — About —
            'tag_about': 'Sobre nosotros',
            'title_about': 'Onyx Muebles — tu socio en la creación del interior ideal',
            'about_desc_1': 'Somos un equipo de diseñadores y artesanos profesionales con más de 12 años de experiencia en la fabricación de muebles. Nuestra producción está en Buenos Aires, lo que nos permite controlar cada etapa — desde el diseño hasta la instalación.',
            'about_desc_2': 'Usamos solo materiales certificados de producción europea y argentina. Cada proyecto pasa por un control de calidad de tres niveles.',
            'badge_warranty': 'Garantía 5 años',
            'badge_warranty_desc': 'En todos los productos y herrajes',
            'badge_iso': 'Certificados ISO',
            'badge_iso_desc': 'Estándares de calidad ISO 9001',
            'badge_rating': 'Calificación 4.9',
            'badge_rating_desc': 'Según reseñas de más de 850 clientes',
            'about_float': 'años<br>de experiencia',
            // — Guarantees —
            'tag_guarantees': 'Confiabilidad',
            'title_guarantees': 'Nuestras garantías',
            'subtitle_guarantees': 'Estamos seguros de la calidad y listos para respaldarlo con compromisos reales',
            'guard_1_title': 'Garantía 5 años',
            'guard_1_desc': 'Garantía completa en todos los productos, incluyendo herrajes y acabados. Visita técnica gratuita durante el período de garantía.',
            'guard_2_title': 'Precio fijo',
            'guard_2_desc': 'El costo del proyecto se fija tras la aprobación y no cambia durante la producción.',
            'guard_3_title': 'Plazos exactos',
            'guard_3_desc': 'Producción e instalación en los plazos pactados. En caso de demora por nuestra parte — compensación del 1% por cada día.',
            'guard_4_title': 'Contrato oficial',
            'guard_4_desc': 'Trabajamos solo con contrato con especificación completa de materiales, medidas y plazos.',
            // — Contacts —
            'tag_contacts': 'Contacto',
            'title_contacts': '¿Tenés un proyecto?',
            'contacts_intro': 'Contanos sobre tu proyecto — preparamos un presupuesto gratuito y una visualización 3D en 48 horas.',
            'contact_showroom': 'Dirección del showroom',
            'contact_phone': 'Teléfono',
            'contact_schedule': 'Horario de atención',
            'contact_schedule_val': 'Lun-Vie: 9:00 — 19:00 | Sáb: 10:00 — 15:00',
            'form_title': 'Consulta gratuita',
            'form_name': 'Tu nombre',
            'form_phone': 'Tu teléfono',
            'form_email': 'E-mail',
            'form_message': 'Contanos sobre tu proyecto',
            'btn_send': 'Enviar solicitud',
            'form_success': '¡Solicitud enviada!',
            'loading_3d': 'Cargando motor 3D...',
            // — Footer —
            'footer_tagline': 'Muebles premium<br>en Buenos Aires desde 2014',
            'footer_catalog': 'Catálogo',
            'footer_cat_bed': 'Dormitorios',
            'footer_cat_ward': 'Vestidores',
            'footer_cat_kit': 'Cocinas',
            'footer_cat_liv': 'Living',
            'footer_cat_hall': 'Recibidores',
            'footer_cat_off': 'Oficinas',
            'footer_company': 'Empresa',
            'footer_about': 'Nosotros',
            'footer_works': 'Proyectos realizados',
            'footer_guarantees': 'Garantías',
            'footer_certificates': 'Certificados',
            'footer_contacts': 'Contacto',
            'footer_service': 'Servicios',
            'footer_3d': 'Constructor 3D',
            'footer_measure': 'Medición gratuita',
            'footer_delivery': 'Entrega e instalación',
            'footer_installments': 'Cuotas',
            'footer_copy': '© 2014–2026 Onyx Muebles. Todos los derechos reservados.',
            'footer_admin': 'Panel admin',
            'footer_privacy': 'Política de privacidad',
            'footer_terms': 'Términos de uso',
            'filter_cat_all': 'Todos',
            'filter_cat_bedroom': 'Dormitorios',
            'filter_cat_wardrobe': 'Vestidores',
            'filter_cat_kitchen': 'Cocinas',
            'filter_cat_living': 'Living',
            'filter_cat_hallway': 'Recibidores',
            'filter_cat_office': 'Oficinas',
            'btn_add_to_cart': 'Agregar al carrito',
            'btn_order_project': 'Solicitar proyecto',
            'empty_category': 'Todavía no hay productos en esta categoría.',
            // — Cart —
            'cart_title': 'Tu carrito',
            'cart_empty': 'El carrito está vacío',
            'cart_continue': 'Seguir comprando',
            'cart_total': 'Total:',
            'cart_checkout': 'Realizar pedido',
            'cart_added': '¡Producto agregado al carrito!',
            // — Form feedback —
            'form_sending': '⏳ Enviando...',
            'form_sent_alert': '¡Tu solicitud fue enviada! Nos pondremos en contacto pronto.',
            // — Certificates Modal —
            'cert_title': 'Certificados de calidad',
            'cert_desc': 'Usamos solo materiales certificados de máxima calidad. Todos nuestros productos pasan un estricto control de calidad.',
            'cert_iso': 'ISO 9001:2015',
            'cert_iso_desc': 'Gestión de calidad',
            'cert_e1': 'Estándar E1',
            'cert_e1_desc': 'Materiales ecológicos',
            'cert_blum': 'Blum Expert',
            'cert_blum_desc': 'Socio oficial',
            'cert_warranty': '5 Años de Garantía',
            'cert_warranty_desc': 'Certificado de confiabilidad',
            // — Project Modal —
            'project_default_title': 'Nuestro proyecto',
            'project_default_desc': 'Información detallada del trabajo realizado.',
            'btn_close': 'Cerrar',
            // — Materials —
            'mat_oak': 'Roble',
            'mat_wenge': 'Wengué',
            'mat_white': 'Blanco brillante',
            // — Meta —
            'meta_description': 'Fábrica de muebles premium en Argentina — dormitorios, cocinas, vestidores, living, oficinas. Constructor 3D de muebles, proyecto gratuito.'
        },
        'en': {
            // — Nav —
            'nav_constructor': '3D Design',
            'nav_portfolio': 'Portfolio',
            'nav_about': 'About Us',
            'nav_contacts': 'Contacts',
            // — Hero —
            'hero_tag': 'Premium Furniture in Argentina',
            'hero_title': 'Furniture that<br><span class="hero__title-accent">creates space</span>',
            'hero_subtitle': 'We design and manufacture premium furniture.<br>Individual design. Own production.',
            'btn_constructor': '3D Constructor',
            'btn_catalog': 'View Catalog',
            'stat_years': 'years of exp.',
            'stat_projects': 'projects',
            'stat_warranty': 'warranty',
            'scroll_down': 'Scroll down',
            // — Side Menu —
            'side_menu_title': 'Catalog',
            'side_bedroom': 'Bedroom Sets',
            'side_bedroom_desc': 'Beds, nightstands, dressers',
            'side_wardrobe': 'Wardrobes',
            'side_wardrobe_desc': 'Storage systems, closets',
            'side_kitchen': 'Kitchen Sets',
            'side_kitchen_desc': 'Turnkey kitchens',
            'side_living': 'Living Rooms',
            'side_living_desc': 'Shelving, TV zones, tables',
            'side_hallway': 'Hallways',
            'side_hallway_desc': 'Coat racks, shoe cabinets, mirrors',
            'side_office': 'Offices',
            'side_office_desc': 'Workspaces and studies',
            // — Categories —
            'tag_catalog': 'Catalog',
            'title_catalog': 'Furniture Categories',
            'subtitle_catalog': 'Choose a direction and start designing your ideal interior',
            'cat_bedroom': 'Bedroom Sets',
            'cat_bedroom_count': '24 models',
            'cat_bedroom_desc': 'Beds, nightstands, dressers and vanity tables',
            'cat_wardrobe': 'Wardrobes',
            'cat_wardrobe_count': '18 models',
            'cat_wardrobe_desc': 'Storage systems and walk-in closets',
            'cat_kitchen': 'Kitchen Sets',
            'cat_kitchen_count': '32 models',
            'cat_kitchen_desc': 'Turnkey kitchens with the finest materials',
            'cat_living': 'Living Rooms',
            'cat_living_count': '28 models',
            'cat_living_desc': 'Shelving, TV zones, coffee tables',
            'cat_hallway': 'Hallways',
            'cat_hallway_count': '15 models',
            'cat_hallway_desc': 'Coat racks, shoe cabinets, mirrors',
            'cat_office': 'Offices',
            'cat_office_count': '20 models',
            'cat_office_desc': 'Workspaces, studies, meeting rooms',
            'cat_link': 'Open catalog →',
            // — Dynamic Catalog —
            'tag_products': 'Our Products',
            'title_products': 'Product Catalog',
            'subtitle_products': 'Choose furniture from our current assortment',
            // — Constructor —
            'tag_innovations': 'Innovation',
            'title_constructor': '3D Furniture Constructor',
            'subtitle_constructor': 'Design how the furniture will look in your home. Choose sizes, materials, colors — and see the result in real time with our 3D engine.',
            'ctrl_living': 'Living Room',
            'ctrl_bedroom': 'Bedroom',
            'badge_3d_active': '3D Mode Active',
            'lbl_material': 'Material:',
            'badge_demo': 'Interactive Demo',
            'cta_constructor_title': 'Launch the 3D Constructor',
            'cta_constructor_desc': 'Choose models and change materials in real time',
            'btn_launch_360': 'Launch 360° View',
            'feat_library': 'Model Library',
            'feat_library_desc': 'Over 500 furniture models in the catalog',
            'feat_materials': 'Real Materials',
            'feat_materials_desc': 'Accurate textures of wood, stone, fabric',
            'feat_export': 'Export Project',
            'feat_export_desc': 'Download a plan with dimensions in PDF',
            // — Portfolio —
            'tag_portfolio': 'Our Works',
            'title_portfolio': 'Completed Projects',
            'subtitle_portfolio': 'Real projects by our clients in Buenos Aires and across Argentina',
            'filter_all': 'All Projects',
            'filter_bedroom': 'Bedrooms',
            'filter_kitchen': 'Kitchens',
            'filter_living': 'Living Rooms',
            'filter_office': 'Offices',
            'portfolio_details': 'Details',
            'ptag_kitchen': 'Kitchen',
            'ptag_bedroom': 'Bedroom',
            'ptag_living': 'Living Room',
            'ptag_office': 'Office',
            'ptitle_1': 'Kitchen «Milano» in Palermo',
            'pmeta_1': 'Palermo, Buenos Aires • 18 m²',
            'ptitle_2': 'Bedroom «Aurora» in Recoleta',
            'pmeta_2': 'Recoleta, Buenos Aires • 24 m²',
            'ptitle_3': 'Living Room «Cielo» in Puerto Madero',
            'pmeta_3': 'Puerto Madero • 40 m²',
            'ptitle_4': 'Kitchen «Elegante» in La Plata',
            'pmeta_4': 'La Plata • 22 m²',
            'ptitle_5': 'Office «Capital» in Microcentro',
            'pmeta_5': 'Microcentro • 55 m²',
            'ptitle_6': 'Bedroom «Luna» in San Telmo',
            'pmeta_6': 'San Telmo • 20 m²',
            // — About —
            'tag_about': 'About Us',
            'title_about': 'Onyx Muebles — your partner in creating the ideal interior',
            'about_desc_1': 'We are a team of professional designers and craftsmen with over 12 years of experience in furniture manufacturing. Our production is based in Buenos Aires, allowing us to control every stage — from design to installation.',
            'about_desc_2': 'We use only certified materials from European and Argentine production. Every project goes through a three-stage quality control.',
            'badge_warranty': '5-Year Warranty',
            'badge_warranty_desc': 'On all products and hardware',
            'badge_iso': 'ISO Certificates',
            'badge_iso_desc': 'ISO 9001 quality standards',
            'badge_rating': 'Rating 4.9',
            'badge_rating_desc': 'Based on reviews from 850+ clients',
            'about_float': 'years<br>of experience',
            // — Guarantees —
            'tag_guarantees': 'Reliability',
            'title_guarantees': 'Our Guarantees',
            'subtitle_guarantees': 'We are confident in our quality and ready to back it with real commitments',
            'guard_1_title': '5-Year Warranty',
            'guard_1_desc': 'Full warranty on all products, including hardware and finishes. Free technician visit during the warranty period.',
            'guard_2_title': 'Fixed Price',
            'guard_2_desc': 'The project cost is locked after approval and doesn\'t change during production.',
            'guard_3_title': 'Precise Deadlines',
            'guard_3_desc': 'Production and installation strictly on schedule. In case of delay on our part — 1% compensation per day.',
            'guard_4_title': 'Official Contract',
            'guard_4_desc': 'We work only under contract with full specification of materials, dimensions, and deadlines.',
            // — Contacts —
            'tag_contacts': 'Contacts',
            'title_contacts': 'Have a project?',
            'contacts_intro': 'Tell us about your project — we\'ll prepare a free estimate and 3D visualization within 48 hours.',
            'contact_showroom': 'Showroom Address',
            'contact_phone': 'Phone',
            'contact_schedule': 'Working Hours',
            'contact_schedule_val': 'Mon-Fri: 9:00 AM — 7:00 PM | Sat: 10:00 AM — 3:00 PM',
            'form_title': 'Free Consultation',
            'form_name': 'Your name',
            'form_phone': 'Your phone',
            'form_email': 'E-mail',
            'form_message': 'Tell us about your project',
            'btn_send': 'Send Request',
            'form_success': 'Request sent!',
            'loading_3d': '3D Engine loading...',
            // — Footer —
            'footer_tagline': 'Premium furniture<br>in Buenos Aires since 2014',
            'footer_catalog': 'Catalog',
            'footer_cat_bed': 'Bedroom Sets',
            'footer_cat_ward': 'Wardrobes',
            'footer_cat_kit': 'Kitchen Sets',
            'footer_cat_liv': 'Living Rooms',
            'footer_cat_hall': 'Hallways',
            'footer_cat_off': 'Offices',
            'footer_company': 'Company',
            'footer_about': 'About Us',
            'footer_works': 'Completed Projects',
            'footer_guarantees': 'Guarantees',
            'footer_certificates': 'Certificates',
            'footer_contacts': 'Contacts',
            'footer_service': 'Services',
            'footer_3d': '3D Constructor',
            'footer_measure': 'Free Measurement',
            'footer_delivery': 'Delivery & Installation',
            'footer_installments': 'Installments',
            'footer_copy': '© 2014–2026 Onyx Muebles. All rights reserved.',
            'footer_admin': 'Admin Panel',
            'footer_privacy': 'Privacy Policy',
            'footer_terms': 'Terms of Use',
            'filter_cat_all': 'All',
            'filter_cat_bedroom': 'Bedrooms',
            'filter_cat_wardrobe': 'Wardrobes',
            'filter_cat_kitchen': 'Kitchens',
            'filter_cat_living': 'Living Rooms',
            'filter_cat_hallway': 'Hallways',
            'filter_cat_office': 'Offices',
            'btn_add_to_cart': 'Add to Cart',
            'btn_order_project': 'Order Project',
            'empty_category': 'There are no products in this category yet.',
            // — Cart —
            'cart_title': 'Your Cart',
            'cart_empty': 'Your cart is empty',
            'cart_continue': 'Continue Shopping',
            'cart_total': 'Total:',
            'cart_checkout': 'Place Order',
            'cart_added': 'Product added to cart!',
            // — Form feedback —
            'form_sending': '⏳ Sending...',
            'form_sent_alert': 'Your request has been sent! We will contact you shortly.',
            // — Certificates Modal —
            'cert_title': 'Quality Certificates',
            'cert_desc': 'We use only certified materials of the highest quality. All our products pass strict quality control.',
            'cert_iso': 'ISO 9001:2015',
            'cert_iso_desc': 'Quality Management',
            'cert_e1': 'E1 Standard',
            'cert_e1_desc': 'Eco-friendly Materials',
            'cert_blum': 'Blum Expert',
            'cert_blum_desc': 'Official Partner',
            'cert_warranty': '5-Year Warranty',
            'cert_warranty_desc': 'Reliability Certificate',
            // — Project Modal —
            'project_default_title': 'Our Project',
            'project_default_desc': 'Detailed information about the completed work.',
            'btn_close': 'Close',
            // — Materials —
            'mat_oak': 'Oak',
            'mat_wenge': 'Wenge',
            'mat_white': 'White Gloss',
            // — Meta —
            'meta_description': 'Premium furniture factory in Argentina — bedroom sets, kitchens, wardrobes, living rooms, offices. 3D furniture constructor, free project design.'
        },
        'ru': {
            // — Nav —
            'nav_constructor': '3D Конструктор',
            'nav_portfolio': 'Портфолио',
            'nav_about': 'О нас',
            'nav_contacts': 'Контакты',
            // — Hero —
            'hero_tag': 'Премиальная мебель в Аргентине',
            'hero_title': 'Мебель, которая<br><span class="hero__title-accent">создаёт пространство</span>',
            'hero_subtitle': 'Проектируем и производим мебель премиум-класса.<br>Индивидуальный дизайн. Собственное производство.',
            'btn_constructor': '3D Конструктор',
            'btn_catalog': 'Смотреть каталог',
            'stat_years': 'лет опыта',
            'stat_projects': 'проектов',
            'stat_warranty': 'гарантия',
            'scroll_down': 'Листайте вниз',
            // — Side Menu —
            'side_menu_title': 'Каталог',
            'side_bedroom': 'Спальные гарнитуры',
            'side_bedroom_desc': 'Кровати, тумбы, комоды',
            'side_wardrobe': 'Гардеробные',
            'side_wardrobe_desc': 'Системы хранения, шкафы',
            'side_kitchen': 'Кухонные гарнитуры',
            'side_kitchen_desc': 'Кухни под ключ',
            'side_living': 'Гостиные',
            'side_living_desc': 'Стеллажи, ТВ-зоны, столы',
            'side_hallway': 'Прихожие',
            'side_hallway_desc': 'Вешалки, обувницы, зеркала',
            'side_office': 'Офисы',
            'side_office_desc': 'Рабочие зоны и кабинеты',
            // — Categories —
            'tag_catalog': 'Каталог',
            'title_catalog': 'Категории мебели',
            'subtitle_catalog': 'Выберите направление и начните проектировать свой идеальный интерьер',
            'cat_bedroom': 'Спальные гарнитуры',
            'cat_bedroom_count': '24 модели',
            'cat_bedroom_desc': 'Кровати, тумбы, комоды и туалетные столики',
            'cat_wardrobe': 'Гардеробные',
            'cat_wardrobe_count': '18 моделей',
            'cat_wardrobe_desc': 'Системы хранения и шкафы-купе',
            'cat_kitchen': 'Кухонные гарнитуры',
            'cat_kitchen_count': '32 модели',
            'cat_kitchen_desc': 'Кухни под ключ из лучших материалов',
            'cat_living': 'Гостиные',
            'cat_living_count': '28 моделей',
            'cat_living_desc': 'Стеллажи, ТВ-зоны, журнальные столы',
            'cat_hallway': 'Прихожие',
            'cat_hallway_count': '15 моделей',
            'cat_hallway_desc': 'Вешалки, обувницы, зеркала',
            'cat_office': 'Офисы',
            'cat_office_count': '20 моделей',
            'cat_office_desc': 'Рабочие зоны, кабинеты, переговорные',
            'cat_link': 'Открыть каталог →',
            // — Dynamic Catalog —
            'tag_products': 'Наши товары',
            'title_products': 'Каталог изделий',
            'subtitle_products': 'Выберите мебель из нашего актуального ассортимента',
            // — Constructor —
            'tag_innovations': 'Инновации',
            'title_constructor': '3D Конструктор мебели',
            'subtitle_constructor': 'Спроектируйте, как мебель будет выглядеть в вашем доме. Выбирайте размеры, материалы, цвета — и смотрите результат в реальном времени с помощью нашего 3D движка.',
            'ctrl_living': 'Гостиная',
            'ctrl_bedroom': 'Спальня',
            'badge_3d_active': '3D Режим активен',
            'lbl_material': 'Материал:',
            'badge_demo': 'Интерактивная демонстрация',
            'cta_constructor_title': 'Запустите 3D конструктор',
            'cta_constructor_desc': 'Выбирайте модели и меняйте материалы в реальном времени',
            'btn_launch_360': 'Запустить 360° просмотр',
            'feat_library': 'Библиотека моделей',
            'feat_library_desc': 'Более 500 моделей мебели в каталоге',
            'feat_materials': 'Реальные материалы',
            'feat_materials_desc': 'Точные текстуры дерева, камня, ткани',
            'feat_export': 'Экспорт проекта',
            'feat_export_desc': 'Скачайте план с размерами в PDF',
            // — Portfolio —
            'tag_portfolio': 'Портфолио',
            'title_portfolio': 'Выполненные работы',
            'subtitle_portfolio': 'Реальные проекты наших клиентов в Буэнос-Айресе и по всей Аргентине',
            'filter_all': 'Все проекты',
            'filter_bedroom': 'Спальни',
            'filter_kitchen': 'Кухни',
            'filter_living': 'Гостиные',
            'filter_office': 'Офисы',
            'portfolio_details': 'Подробнее',
            'ptag_kitchen': 'Кухня',
            'ptag_bedroom': 'Спальня',
            'ptag_living': 'Гостиная',
            'ptag_office': 'Офис',
            'ptitle_1': 'Кухня «Milano» в Палермо',
            'pmeta_1': 'Палермо, Буэнос-Айрес • 18 м²',
            'ptitle_2': 'Спальня «Aurora» в Реколете',
            'pmeta_2': 'Реколета, Буэнос-Айрес • 24 м²',
            'ptitle_3': 'Гостиная «Сielo» в Пуэрто-Мадеро',
            'pmeta_3': 'Пуэрто-Мадеро • 40 м²',
            'ptitle_4': 'Кухня «Elegante» в Ла-Плате',
            'pmeta_4': 'Ла-Плата • 22 м²',
            'ptitle_5': 'Офис «Capital» в Микроцентро',
            'pmeta_5': 'Микроцентро • 55 м²',
            'ptitle_6': 'Спальня «Luna» в Сан-Тельмо',
            'pmeta_6': 'Сан-Тельмо • 20 м²',
            // — About —
            'tag_about': 'О компании',
            'title_about': 'Onyx Muebles — ваш партнёр в создании идеального интерьера',
            'about_desc_1': 'Мы — команда профессиональных дизайнеров и мастеров с более чем 12-летним опытом производства мебели. Наше производство расположено в Буэнос-Айресе, что позволяет контролировать каждый этап — от проекта до установки.',
            'about_desc_2': 'Используем только сертифицированные материалы европейского и аргентинского производства. Каждый проект проходит трёхступенчатый контроль качества.',
            'badge_warranty': 'Гарантия 5 лет',
            'badge_warranty_desc': 'На все изделия и фурнитуру',
            'badge_iso': 'Сертификаты ISO',
            'badge_iso_desc': 'Стандарты качества ISO 9001',
            'badge_rating': 'Рейтинг 4.9',
            'badge_rating_desc': 'По отзывам более 850 клиентов',
            'about_float': 'лет<br>опыта',
            // — Guarantees —
            'tag_guarantees': 'Надёжность',
            'title_guarantees': 'Наши гарантии',
            'subtitle_guarantees': 'Мы уверены в качестве и готовы подкрепить это реальными обязательствами',
            'guard_1_title': 'Гарантия 5 лет',
            'guard_1_desc': 'Полная гарантия на все изделия, включая фурнитуру и покрытия. Бесплатный выезд мастера в гарантийный период.',
            'guard_2_title': 'Фиксированная цена',
            'guard_2_desc': 'Стоимость проекта фиксируется после утверждения и не меняется в процессе производства.',
            'guard_3_title': 'Точные сроки',
            'guard_3_desc': 'Производство и установка строго по срокам. При задержке по нашей вине — компенсация 1% за каждый день.',
            'guard_4_title': 'Официальный договор',
            'guard_4_desc': 'Работаем только по договору с полной спецификацией материалов, размеров и сроков.',
            // — Contacts —
            'tag_contacts': 'Контакты',
            'title_contacts': 'Свяжитесь с нами',
            'contacts_intro': 'Расскажите нам о вашем проекте — мы подготовим бесплатный расчёт и 3D-визуализацию в течение 48 часов.',
            'contact_showroom': 'Адрес шоурума',
            'contact_phone': 'Телефон',
            'contact_schedule': 'График работы',
            'contact_schedule_val': 'Пн-Пт: 9:00 — 19:00 | Cб: 10:00 — 15:00',
            'form_title': 'Бесплатная консультация',
            'form_name': 'Ваше имя',
            'form_phone': 'Телефон',
            'form_email': 'E-mail',
            'form_message': 'Расскажите о проекте',
            'btn_send': 'Отправить заявку',
            'form_success': 'Заявка отправлена!',
            'loading_3d': '3D Engine загружается...',
            // — Footer —
            'footer_tagline': 'Мебель премиум-класса<br>в Буэнос-Айресе с 2014 года',
            'footer_catalog': 'Каталог',
            'footer_cat_bed': 'Спальные гарнитуры',
            'footer_cat_ward': 'Гардеробные',
            'footer_cat_kit': 'Кухонные гарнитуры',
            'footer_cat_liv': 'Гостиные',
            'footer_cat_hall': 'Прихожие',
            'footer_cat_off': 'Офисы',
            'footer_company': 'Компания',
            'footer_about': 'О нас',
            'footer_works': 'Выполненные работы',
            'footer_guarantees': 'Гарантии',
            'footer_certificates': 'Сертификаты',
            'footer_contacts': 'Контакты',
            'footer_service': 'Сервис',
            'footer_3d': '3D Конструктор',
            'footer_measure': 'Бесплатный замер',
            'footer_delivery': 'Доставка и монтаж',
            'footer_installments': 'Рассрочка',
            'footer_copy': '© 2014–2026 Onyx Muebles. Все права защищены.',
            'footer_admin': 'Админ-панель',
            'footer_privacy': 'Политика конфиденциальности',
            'footer_terms': 'Условия использования',
            'filter_cat_all': 'Все',
            'filter_cat_bedroom': 'Спальни',
            'filter_cat_wardrobe': 'Гардеробные',
            'filter_cat_kitchen': 'Кухни',
            'filter_cat_living': 'Гостиные',
            'filter_cat_hallway': 'Прихожие',
            'filter_cat_office': 'Офисы',
            'btn_add_to_cart': 'В корзину',
            'btn_order_project': 'Заказать проект',
            'empty_category': 'Товаров в этой категории пока нет.',
            // — Cart —
            'cart_title': 'Ваша корзина',
            'cart_empty': 'В корзине пока ничего нет',
            'cart_continue': 'Продолжить покупки',
            'cart_total': 'Итого:',
            'cart_checkout': 'Оформить заказ',
            'cart_added': 'Товар добавлен в корзину!',
            // — Form feedback —
            'form_sending': '⏳ Отправка...',
            'form_sent_alert': 'Ваша заявка отправлена! Мы скоро свяжемся с вами.',
            // — Certificates Modal —
            'cert_title': 'Сертификаты качества',
            'cert_desc': 'Мы используем только сертифицированные материалы высшего качества. Все наши изделия проходят строгий контроль качества.',
            'cert_iso': 'ISO 9001:2015',
            'cert_iso_desc': 'Качество менеджмента',
            'cert_e1': 'Стандарт E1',
            'cert_e1_desc': 'Экологичность материалов',
            'cert_blum': 'Blum Expert',
            'cert_blum_desc': 'Официальный партнер',
            'cert_warranty': '5 Лет Гарантии',
            'cert_warranty_desc': 'Сертификат надежности',
            // — Project Modal —
            'project_default_title': 'Наш проект',
            'project_default_desc': 'Детальная информация о выполненной работе.',
            'btn_close': 'Закрыть',
            // — Materials —
            'mat_oak': 'Дуб',
            'mat_wenge': 'Венге',
            'mat_white': 'Белый глянец',
            // — Meta —
            'meta_description': 'Мебельная компания в Аргентине — спальные гарнитуры, кухни, гардеробные, гостиные, офисы. 3D-конструктор мебели, бесплатный проект.'
        }
    };

    // ====== PRODUCT NAME/DESC TRANSLATION MAP ======
    const productTranslations = {
        'КУХНЯ ГОЛДЕН ГУСЬ': { 'es': 'COCINA GOLDEN GOOSE', 'en': 'GOLDEN GOOSE KITCHEN' },
        'Хорошая кухня, огонь': { 'es': 'Buena cocina, espectacular', 'en': 'Great kitchen, amazing' },
        'Спальня "Аврора"': { 'es': 'Dormitorio "Aurora"', 'en': 'Bedroom "Aurora"' },
        'Брилиантовая кухня "Золотой гусь"': { 'es': 'Cocina brillante "Ganso Dorado"', 'en': 'Brilliant kitchen "Golden Goose"' }
    };

    function translateProduct(text, lang) {
        if (lang === 'ru') return text;
        if (productTranslations[text] && productTranslations[text][lang]) {
            return productTranslations[text][lang];
        }
        return text;
    }

    // ====== LANGUAGE SWITCHER LOGIC ======
    const langBtn = document.getElementById('langBtn');
    const langSwitcher = document.getElementById('langSwitcher');
    const currentLangText = document.getElementById('currentLang');
    const langOptions = document.querySelectorAll('.lang-switcher__dropdown button');

    function setLanguage(lang) {
        localStorage.setItem('preferred_lang', lang);
        currentLangText.textContent = lang.toUpperCase();
        document.documentElement.lang = lang;
        
        const t = translations[lang] || translations['es'];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });

        // Update page title
        const pageTitles = {
            'es': 'Onyx Muebles — Muebles Premium en Argentina',
            'en': 'Onyx Muebles — Premium Furniture in Argentina',
            'ru': 'Onyx Muebles — Мебель Премиум-Класса | Аргентина'
        };
        document.title = pageTitles[lang] || pageTitles['es'];

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && t['meta_description']) {
            metaDesc.setAttribute('content', t['meta_description']);
        }

        // Update contact form select options
        const selectOpts = {
            'es': ['Elegí una categoría', 'Dormitorio', 'Vestidor', 'Cocina', 'Living', 'Recibidor', 'Oficina'],
            'en': ['Choose a category', 'Bedroom Set', 'Wardrobe', 'Kitchen Set', 'Living Room', 'Hallway', 'Office'],
            'ru': ['Выберите категорию', 'Спальный гарнитур', 'Гардеробная', 'Кухонный гарнитур', 'Гостиная', 'Прихожая', 'Офис']
        };
        const sel = document.getElementById('contactCategory');
        if (sel && selectOpts[lang]) {
            const opts = sel.options;
            const texts = selectOpts[lang];
            if (opts.length >= texts.length) {
                for (let i = 0; i < texts.length; i++) {
                    opts[i].textContent = texts[i];
                }
            }
        }

        // Update material button tooltips
        const materialMap = {
            '#B8956A': 'mat_oak',
            '#4A4A46': 'mat_wenge',
            '#F4F3F0': 'mat_white'
        };
        document.querySelectorAll('.material-btn').forEach(btn => {
            const color = btn.dataset.color;
            if (color && materialMap[color] && t[materialMap[color]]) {
                btn.title = t[materialMap[color]];
            }
        });

        // Update active state in dropdown
        langOptions.forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });

        // Re-render dynamic catalog with new language
        try {
            const activeBtn = document.querySelector('#catalogFilter .portfolio__filter-btn--active');
            const currentFilter = activeBtn ? (activeBtn.dataset.filter || 'all') : 'all';
            renderPublicCatalog(currentFilter);
        } catch (e) {
            // Catalog not yet initialized, will render later
        }

        // Update category card counts with correct language
        try {
            updateCategoryCounts();
        } catch (e) {
            // Category counts not yet initialized
        }
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
    const savedLang = localStorage.getItem('preferred_lang') || 'es';
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
            const href = this.getAttribute('href');
            // Skip bare '#' to avoid querySelector errors
            if (!href || href === '#') return;
            // If this link has a data-category, use navigateToCategory instead
            if (this.dataset.category) {
                e.preventDefault();
                // navigateToCategory is defined later, use window reference
                if (window.navigateToCategory) {
                    window.navigateToCategory(this.dataset.category);
                }
                return;
            }
            // Skip category cards and side menu links (they have their own handlers)
            if (this.closest('.category-card') || this.closest('.side-menu__link')) return;
            try {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
                    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            } catch(err) {
                // Invalid selector, ignore
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

    // ====== CONTACT FORM (now saves to Firebase) ======
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('#contactSubmit');
            const originalText = submitBtn.innerHTML;

            // Simple validation
            const name = document.getElementById('contactName').value.trim();
            const phone = document.getElementById('contactPhone').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const category = document.getElementById('contactCategory').value;
            const message = document.getElementById('contactMessage').value.trim();

            if (!name || !phone) {
                // Shake animation
                contactForm.style.animation = 'shake 0.5s ease';
                setTimeout(() => { contactForm.style.animation = ''; }, 500);
                return;
            }

            // Disable button while saving
            submitBtn.disabled = true;
            const lang = document.documentElement.lang || 'es';
            const t = translations[lang] || translations['es'];
            submitBtn.innerHTML = t['form_sending'];

            try {
                // Save to Firebase Cloud Database
                await FirebaseDB.saveContactSubmission({
                    name,
                    phone,
                    email,
                    category,
                    message,
                    language: document.documentElement.lang || 'es'
                });

                // Success state
                const lang = document.documentElement.lang || 'es';
                const successText = translations[lang]?.form_success || 'Заявка отправлена!';
                submitBtn.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    ${successText}
                `;
                submitBtn.style.background = 'var(--color-accent)';

                // Reset after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 3000);

            } catch (error) {
                console.error('Error saving contact:', error);
                // Still show success to user (data might have saved)
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
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

    // ====== NAVIGATE TO CATEGORY (shared function) ======
    // Used by category cards, side menu links, and footer links
    function navigateToCategory(category) {
        const catalogSection = document.getElementById('catalog-products');
        const catalogFiltersBtn = document.querySelectorAll('#catalogFilter .portfolio__filter-btn');
        
        if (!catalogSection) return;

        // Show catalog section first
        catalogSection.style.display = 'block';

        // Set the correct filter button as active
        catalogFiltersBtn.forEach(btn => {
            btn.classList.remove('portfolio__filter-btn--active');
            if (btn.dataset.filter === category) {
                btn.classList.add('portfolio__filter-btn--active');
            }
        });

        // Render products with the chosen filter
        renderPublicCatalog(category);

        // Smooth scroll to catalog section
        setTimeout(() => {
            const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80;
            const top = catalogSection.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }, 50);
    }
    window.navigateToCategory = navigateToCategory;

    // ====== CATEGORY CARDS CLICK HANDLER ======
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const category = card.dataset.category;
            if (category) {
                navigateToCategory(category);
            }
        });
    });

    // ====== SIDE MENU LINKS CLICK HANDLER ======
    document.querySelectorAll('.side-menu__link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            if (category) {
                closeMenu();
                // Small delay so menu animation finishes
                setTimeout(() => navigateToCategory(category), 300);
            }
        });
    });

    // ====== UPDATE CATEGORY CARD COUNTS FROM REAL DATA ======
    function updateCategoryCounts() {
        const countMap = {};
        products.forEach(p => {
            countMap[p.category] = (countMap[p.category] || 0) + 1;
        });

        const lang = document.documentElement.lang || 'es';
        const modelWords = {
            'es': (n) => n === 1 ? 'modelo' : 'modelos',
            'en': (n) => n === 1 ? 'model' : 'models',
            'ru': (n) => {
                if (n % 10 === 1 && n % 100 !== 11) return 'модель';
                if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return 'модели';
                return 'моделей';
            }
        };
        const getWord = modelWords[lang] || modelWords['es'];

        const categoryToCardId = {
            'bedroom': 'catBedroom',
            'wardrobe': 'catWardrobe',
            'kitchen': 'catKitchen',
            'living': 'catLiving',
            'hallway': 'catHallway',
            'office': 'catOffice'
        };

        Object.entries(categoryToCardId).forEach(([cat, cardId]) => {
            const card = document.getElementById(cardId);
            if (card) {
                const countEl = card.querySelector('.category-card__count');
                if (countEl) {
                    const count = countMap[cat] || 0;
                    countEl.textContent = `${count} ${getWord(count)}`;
                }
            }
        });
    }

    // ====== CATEGORY CARD IMAGE FALLBACKS ======
    // Generate gradient placeholders for category cards without images
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
    window.openModal = openModal;

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    window.closeModal = closeModal;

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
        const lang = document.documentElement.lang || 'es';
        const t = translations[lang] || translations['es'];
        const content = `
            <h3>${t['cert_title']}</h3>
            <p>${t['cert_desc']}</p>
            <div class="certificate-grid">
                <div class="certificate-item">${t['cert_iso']}<br>${t['cert_iso_desc']}</div>
                <div class="certificate-item">${t['cert_e1']}<br>${t['cert_e1_desc']}</div>
                <div class="certificate-item">${t['cert_blum']}<br>${t['cert_blum_desc']}</div>
                <div class="certificate-item">${t['cert_warranty']}<br>${t['cert_warranty_desc']}</div>
            </div>
        `;
        openModal(content);
    };

    window.showProject = function(projectId) {
        const lang = document.documentElement.lang || 'es';
        const t = translations[lang] || translations['es'];
        const projectsData = {
            'es': {
                '1': { title: 'Dormitorio Minimalista', desc: 'Proyecto realizado en 2023. Herraje Blum y chapa de roble.' },
                '2': { title: 'Cocina Moderna', desc: 'Cocina con isla y electrodom\u00e9sticos empotrados. Frentes en blanco brillante.' },
                '3': { title: 'Sistema de Vestidor', desc: 'Soluci\u00f3n individual de almacenamiento con iluminaci\u00f3n inteligente.' }
            },
            'en': {
                '1': { title: 'Minimalist Bedroom', desc: 'Project completed in 2023. Blum hardware and oak veneer used.' },
                '2': { title: 'Modern Kitchen', desc: 'Kitchen with island and built-in appliances. White gloss fronts.' },
                '3': { title: 'Walk-in Closet System', desc: 'Individual storage solution with smart lighting.' }
            },
            'ru': {
                '1': { title: '\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u0430\u044f \u0441\u043f\u0430\u043b\u044c\u043d\u044f', desc: '\u041f\u0440\u043e\u0435\u043a\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d \u0432 2023 \u0433\u043e\u0434\u0443. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0444\u0443\u0440\u043d\u0438\u0442\u0443\u0440\u0430 Blum \u0438 \u0448\u043f\u043e\u043d \u0434\u0443\u0431\u0430.' },
                '2': { title: '\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043a\u0443\u0445\u043d\u044f', desc: '\u041a\u0443\u0445\u043d\u044f \u0441 \u043e\u0441\u0442\u0440\u043e\u0432\u043e\u043c \u0438 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u043e\u0439. \u0424\u0430\u0441\u0430\u0434\u044b \u2014 \u0431\u0435\u043b\u044b\u0439 \u0433\u043b\u044f\u043d\u0435\u0446.' },
                '3': { title: '\u0413\u0430\u0440\u0434\u0435\u0440\u043e\u0431\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430', desc: '\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0432\u0435\u0449\u0435\u0439 \u0441 \u0443\u043c\u043d\u043e\u0439 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u043e\u0439.' }
            }
        };
        const projects = projectsData[lang] || projectsData['es'];
        const project = projects[projectId] || { title: t['project_default_title'], desc: t['project_default_desc'] };
        
        const content = `
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div style="aspect-ratio: 16/9; background: var(--color-bg-alt); border-radius: var(--radius-md); margin-top: 20px; display: flex; align-items: center; justify-content: center; color: var(--color-text-muted);">
                \ud83d\udcf7
            </div>
            <button class="btn btn--primary" style="margin-top: 20px;" onclick="closeModal()">${t['btn_close']}</button>
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
    
    // State — now synced from Firebase in real-time
    let products = [];

    // ====== FIREBASE REAL-TIME SYNC ======
    // This listener keeps products[] in sync with the cloud database
    // Any change made from ANY device will be reflected here automatically
    FirebaseDB.onProductsChange((firebaseProducts) => {
        products = firebaseProducts;
        console.log(`🔥 Firebase sync: ${products.length} products loaded`);
        renderPublicCatalog();
        updateCategoryCounts();
        // If admin dashboard is open, refresh it too
        if (adminDashboardModal && adminDashboardModal.classList.contains('active')) {
            renderAdminProducts();
        }
    });

    // Migrate any existing localStorage data to Firebase (one-time)
    FirebaseDB.migrateFromLocalStorage();

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
    let currentAdditionalPhotosData = [];

    const adminProductAdditionalPhotosFile = document.getElementById('adminProductAdditionalPhotosFile');
    const adminProductAdditionalPhotosPreview = document.getElementById('adminProductAdditionalPhotosPreview');
    const adminClearAdditionalPhotosBtn = document.getElementById('adminClearAdditionalPhotosBtn');

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

    if (adminProductAdditionalPhotosFile) {
        adminProductAdditionalPhotosFile.addEventListener('change', function() {
            const files = Array.from(this.files);
            
            if (files.length > 0) {
                adminProductAdditionalPhotosPreview.style.display = 'grid';
                files.forEach((file) => {
                    if (currentAdditionalPhotosData.length >= 9) return;
                    
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        if (currentAdditionalPhotosData.length >= 9) return;
                        
                        currentAdditionalPhotosData.push(e.target.result);
                        const imgDiv = document.createElement('div');
                        imgDiv.style.backgroundImage = `url('${e.target.result}')`;
                        imgDiv.style.backgroundSize = 'cover';
                        imgDiv.style.backgroundPosition = 'center';
                        imgDiv.style.height = '60px';
                        imgDiv.style.borderRadius = 'var(--radius-sm)';
                        adminProductAdditionalPhotosPreview.appendChild(imgDiv);
                    };
                    reader.readAsDataURL(file);
                });
            }
            
            this.value = '';
        });
    }

    if (adminClearAdditionalPhotosBtn) {
        adminClearAdditionalPhotosBtn.addEventListener('click', function() {
            currentAdditionalPhotosData = [];
            if (adminProductAdditionalPhotosFile) adminProductAdditionalPhotosFile.value = '';
            if (adminProductAdditionalPhotosPreview) {
                adminProductAdditionalPhotosPreview.innerHTML = '';
                adminProductAdditionalPhotosPreview.style.display = 'none';
            }
        });
    }

    function saveProducts() {
        // Products are now auto-synced from Firebase via onProductsChange listener
        // This function is called after Firebase operations complete
        // The real-time listener will trigger renderPublicCatalog and renderAdminProducts
        console.log('🔥 Products will sync from Firebase automatically');
    }

    function resetAdminForm() {
        if(adminProductForm) adminProductForm.reset();
        if(adminProductId) adminProductId.value = '';
        currentPhotoData = '';
        currentAdditionalPhotosData = [];
        if(adminProductPhotoPreview) {
            adminProductPhotoPreview.style.backgroundImage = 'none';
            adminProductPhotoPreview.style.display = 'none';
        }
        if(adminProductAdditionalPhotosPreview) {
            adminProductAdditionalPhotosPreview.innerHTML = '';
            adminProductAdditionalPhotosPreview.style.display = 'none';
        }
        if(adminFormTitle) adminFormTitle.textContent = 'Добавить товар';
        if(adminSubmitBtn) adminSubmitBtn.textContent = 'Добавить';
        if(adminCancelEditBtn) adminCancelEditBtn.style.display = 'none';
    }

    if (adminCancelEditBtn) {
        adminCancelEditBtn.addEventListener('click', resetAdminForm);
    }

    if (adminProductForm) {
        adminProductForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const id = adminProductId.value;
            const productData = {
                category: adminProductCategory.value,
                name: adminProductName.value.trim(),
                price: adminProductPrice.value,
                desc: adminProductDesc.value.trim(),
                photo: currentPhotoData,
                additionalPhotos: currentAdditionalPhotosData.filter(Boolean)
            };

            if (!productData.photo) {
                alert('Пожалуйста, добавьте фотографию (URL или файл)');
                return;
            }

            // Disable button while saving
            adminSubmitBtn.disabled = true;
            adminSubmitBtn.textContent = '⏳ Сохранение...';

            try {
                if (id) {
                    // Edit existing product in Firebase
                    await FirebaseDB.updateProduct(id, productData);
                } else {
                    // Add new product to Firebase
                    await FirebaseDB.addProduct(productData);
                }
                resetAdminForm();
            } catch (error) {
                alert('Ошибка при сохранении: ' + error.message);
            } finally {
                adminSubmitBtn.disabled = false;
                adminSubmitBtn.textContent = id ? 'Сохранить' : 'Добавить';
            }
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
        currentAdditionalPhotosData = product.additionalPhotos || [];
        
        // Is it base64 or URL?
        if (product.photo && product.photo.startsWith('data:image')) {
            adminProductPhotoUrl.value = '';
        } else {
            adminProductPhotoUrl.value = product.photo || '';
        }
        
        if (product.photo) {
            adminProductPhotoPreview.style.backgroundImage = `url('${product.photo}')`;
            adminProductPhotoPreview.style.display = 'block';
        } else {
            adminProductPhotoPreview.style.display = 'none';
        }

        if (adminProductAdditionalPhotosPreview) {
            adminProductAdditionalPhotosPreview.innerHTML = '';
            if (currentAdditionalPhotosData.length > 0) {
                adminProductAdditionalPhotosPreview.style.display = 'grid';
                currentAdditionalPhotosData.forEach(photoData => {
                    const imgDiv = document.createElement('div');
                    imgDiv.style.backgroundImage = `url('${photoData}')`;
                    imgDiv.style.backgroundSize = 'cover';
                    imgDiv.style.backgroundPosition = 'center';
                    imgDiv.style.height = '60px';
                    imgDiv.style.borderRadius = 'var(--radius-sm)';
                    adminProductAdditionalPhotosPreview.appendChild(imgDiv);
                });
            } else {
                adminProductAdditionalPhotosPreview.style.display = 'none';
            }
        }
        
        adminFormTitle.textContent = 'Редактировать товар';
        adminSubmitBtn.textContent = 'Сохранить';
        adminCancelEditBtn.style.display = 'block';
    };

    window.deleteProduct = async function(id) {
        if (confirm('Вы уверены, что хотите удалить этот товар?')) {
            try {
                await FirebaseDB.deleteProduct(id);
                // Real-time listener will automatically update the products array
                
                // If editing the deleted product, reset form
                if (adminProductId.value === id) {
                    resetAdminForm();
                }
            } catch (error) {
                alert('Ошибка при удалении: ' + error.message);
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

    // ====== CART LOGIC (stays in localStorage — cart is personal per device) ======
    let cart = JSON.parse(localStorage.getItem('muebles_cart')) || [];
    const cartBadge = document.getElementById('cartBadge');

    function updateCartBadge() {
        if (cartBadge) {
            cartBadge.textContent = cart.length;
        }
    }

    window.addToCart = function(id) {
        const product = products.find(p => p.id === id);
        if (product) {
            cart.push(product);
            localStorage.setItem('muebles_cart', JSON.stringify(cart));
            updateCartBadge();
            
            const lang = document.documentElement.lang || 'es';
            const t = translations[lang] || translations['es'];
            const toast = document.createElement('div');
            toast.textContent = t['cart_added'];
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.right = '20px';
            toast.style.background = 'var(--color-primary)';
            toast.style.color = '#fff';
            toast.style.padding = '12px 24px';
            toast.style.borderRadius = 'var(--radius-md)';
            toast.style.boxShadow = 'var(--shadow-lg)';
            toast.style.zIndex = '10000';
            toast.style.fontFamily = 'var(--font-primary)';
            toast.style.fontWeight = '500';
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            toast.style.transition = 'all 0.3s ease';
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = '1';
                toast.style.transform = 'translateY(0)';
            }, 10);
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(20px)';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }
    };

    updateCartBadge();

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        localStorage.setItem('muebles_cart', JSON.stringify(cart));
        updateCartBadge();
        window.openCart(); // refresh modal
    };

    window.openCart = function() {
        const lang = document.documentElement.lang || 'es';
        const t = translations[lang] || translations['es'];

        if (cart.length === 0) {
            window.openModal(`
                <h3 style="margin-bottom: 20px;">${t['cart_title']}</h3>
                <div class="cart-modal__empty">
                    ${t['cart_empty']}
                </div>
                <button class="btn btn--outline btn--full" onclick="window.closeModal()">${t['cart_continue']}</button>
            `);
            return;
        }

        let total = 0;
        const itemsHtml = cart.map((item, index) => {
            const price = parseFloat(item.price) || 0;
            total += price;
            return `
                <div class="cart-item">
                    <div class="cart-item__img" style="background-image: url('${item.photo}')"></div>
                    <div class="cart-item__info">
                        <div class="cart-item__title">${item.name}</div>
                        <div class="cart-item__price">$${price}</div>
                    </div>
                    <button class="cart-item__remove" onclick="window.removeFromCart(${index})" title="✕">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                </div>
            `;
        }).join('');

        window.openModal(`
            <h3 style="margin-bottom: 20px;">Ваша корзина</h3>
            <div class="cart-modal">
                <div class="cart-modal__items">
                    ${itemsHtml}
                </div>
                <div class="cart-modal__footer">
                    <div class="cart-modal__total">
                        <span>${t['cart_total']}</span>
                        <span>$${total}</span>
                    </div>
                    <button class="btn btn--primary btn--full" onclick="window.closeModal(); window.location.href='#contacts'">${t['cart_checkout']}</button>
                </div>
            </div>
        `);
    };

    const cartOpenBtn = document.getElementById('cartOpenBtn');
    if (cartOpenBtn) {
        cartOpenBtn.addEventListener('click', window.openCart);
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

        const lang = document.documentElement.lang || 'es';
        const t = translations[lang] || translations['es'];

        // Setup empty state check if needed
        if (filteredProducts.length === 0 && filter !== 'all') {
             catalogGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-muted);">${t['empty_category'] || 'Товаров в этой категории пока нет.'}</div>`;
             return;
        }

        const categoryNames = {
            'bedroom': t['cat_bedroom'] || 'Спальные гарнитуры',
            'wardrobe': t['cat_wardrobe'] || 'Гардеробные',
            'kitchen': t['cat_kitchen'] || 'Кухонные гарнитуры',
            'living': t['cat_living'] || 'Гостиные',
            'hallway': t['cat_hallway'] || 'Прихожие',
            'office': t['cat_office'] || 'Офисы'
        };

        const btnCart = t['btn_add_to_cart'] || 'В корзину';
        const btnOrder = t['btn_order_project'] || 'Заказать проект';

        catalogGrid.innerHTML = filteredProducts.map(p => `
            <div class="catalog-product-card reveal visible" onclick="window.openProductModal('${p.id}')" style="cursor: pointer;">
                <div class="catalog-product-card__image" style="background-image: url('${p.photo}')"></div>
                <div class="catalog-product-card__content">
                    <span class="catalog-product-card__category">${categoryNames[p.category]}</span>
                    <h3 class="catalog-product-card__title">${translateProduct(p.name, lang)}</h3>
                    <div class="catalog-product-card__price">$${p.price}</div>
                    <p class="catalog-product-card__desc">${translateProduct(p.desc, lang)}</p>
                    <div class="catalog-product-card__actions" style="display: flex; gap: 8px; flex-direction: column;">
                        <button class="btn btn--primary btn--full" onclick="event.stopPropagation(); window.addToCart('${p.id}')" style="padding: 10px;">${btnCart}</button>
                        <button class="btn btn--outline btn--full" onclick="event.stopPropagation(); window.location.href='#contacts'" style="padding: 10px;">${btnOrder}</button>
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
    // Note: renderPublicCatalog() is now called by the Firebase real-time listener
    // when products data arrives from the cloud
    renderPublicCatalog();

    window.openProductModal = function(id) {
        const product = products.find(p => p.id === id);
        if (!product) return;

        const lang = document.documentElement.lang || 'es';
        const t = translations[lang] || translations['es'];

        const categoryNames = {
            'bedroom': t['cat_bedroom'] || 'Спальные гарнитуры',
            'wardrobe': t['cat_wardrobe'] || 'Гардеробные',
            'kitchen': t['cat_kitchen'] || 'Кухонные гарнитуры',
            'living': t['cat_living'] || 'Гостиные',
            'hallway': t['cat_hallway'] || 'Прихожие',
            'office': t['cat_office'] || 'Офисы'
        };

        const btnCart = t['btn_add_to_cart'] || 'В корзину';
        const btnOrder = t['btn_order_project'] || 'Заказать проект';

        const allPhotos = [product.photo];
        if (product.additionalPhotos && product.additionalPhotos.length > 0) {
            allPhotos.push(...product.additionalPhotos);
        }

        const thumbnailsHtml = allPhotos.map((photo, index) => `
            <div class="product-modal__thumb ${index === 0 ? 'active' : ''}" 
                 style="background-image: url('${photo}')" 
                 onclick="
                    document.getElementById('productModalMainImg').style.backgroundImage = 'url(\\'${photo}\\')';
                    document.querySelectorAll('.product-modal__thumb').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                 ">
            </div>
        `).join('');

        const content = `
            <div class="product-modal">
                <div class="product-modal__gallery">
                    <div class="product-modal__main-img" id="productModalMainImg" style="background-image: url('${product.photo}')"></div>
                    ${allPhotos.length > 1 ? `<div class="product-modal__thumbnails">${thumbnailsHtml}</div>` : ''}
                </div>
                <div class="product-modal__info">
                    <div class="product-modal__category">${categoryNames[product.category]}</div>
                    <h2 class="product-modal__title">${translateProduct(product.name, lang)}</h2>
                    <div class="product-modal__price">$${product.price}</div>
                    <p class="product-modal__desc">${translateProduct(product.desc, lang)}</p>
                    <div style="display: flex; gap: 10px; margin-top: auto;">
                        <button class="btn btn--primary btn--full" onclick="window.addToCart('${product.id}')">${btnCart}</button>
                        <button class="btn btn--outline btn--full" onclick="window.closeModal(); window.location.href='#contacts'">${btnOrder}</button>
                    </div>
                </div>
            </div>
        `;
        openModal(content);
    };

});
