// ===== DATA =====
const servicesData = [
    { 
        icon: '🔍', 
        name: 'Общая диагностика автомобиля', 
        price: '800–1500 ₽', 
        desc: 'Все виды транспорта: грузовики, легковые, мотоциклы',
        detail: 'Стоимость зависит от местонахождения ТС'
    },
    { 
        icon: '💨', 
        name: 'Поиск подсоса воздуха', 
        price: '1500–3000 ₽', 
        desc: 'Дымогенератор: впуск/выпуск, турбина, EVAP',
        detail: 'Определение места негерметичности и подсоса воздуха'
    },
    { 
        icon: '🛞', 
        name: 'Замена тормозных колодок', 
        price: '1300–3000 ₽', 
        desc: 'Для ТС массой до 2500 кг',
        detail: 'Без учёта стоимости колодок • зависит от местонахождения ТС'
    },
    { 
        icon: '🔧', 
        name: 'Замена амортизаторов', 
        price: '1500–3000 ₽/шт', 
        desc: 'Для ТС массой до 2500 кг',
        detail: 'Без учёта стоимости амортизаторов • зависит от местонахождения ТС'
    },
    { 
        icon: '🛢️', 
        name: 'Замена масла и фильтра двигателя', 
        price: '1200–2000 ₽', 
        desc: 'Двигатель',
        detail: 'Без учёта стоимости масла и фильтра • зависит от местонахождения ТС'
    },
    { 
        icon: '⚙️', 
        name: 'Замена масла в МКПП', 
        price: '1200–2000 ₽', 
        desc: 'Механическая коробка передач',
        detail: 'Без учёта стоимости масла • зависит от местонахождения ТС'
    },
    { 
        icon: '🔩', 
        name: 'Замена масла в АКПП и вариаторе', 
        price: '1500–3000 ₽', 
        desc: 'Автоматические коробки передач и вариаторы',
        detail: 'Без учёта стоимости масла и фильтра • зависит от местонахождения ТС'
    },
    { 
        icon: '⛓️', 
        name: 'Замена ремня ГРМ (1.6)', 
        price: '2000–3000 ₽', 
        desc: 'Российский автопром (АвтоВАЗ)',
        detail: 'Без учёта стоимости ремня • зависит от местонахождения ТС'
    },
    { 
        icon: '🌀', 
        name: 'Замена ступичного подшипника', 
        price: '2000–3000 ₽', 
        desc: 'Для ТС массой до 2500 кг',
        detail: 'Без учёта стоимости подшипника • зависит от местонахождения ТС'
    },
    { 
        icon: '🔗', 
        name: 'Замена рулевого наконечника', 
        price: '1500–2000 ₽', 
        desc: 'Для ТС массой до 2500 кг',
        detail: 'Без учёта стоимости наконечников • зависит от местонахождения ТС'
    }
];

const pricingData = [
    { name: 'Общая диагностика (все виды ТС)', price: '800–1500 ₽' },
    { name: 'Поиск подсоса воздуха (дымогенератор)', price: '1500–3000 ₽' },
    { name: 'Замена тормозных колодок (до 2500 кг)', price: '1300–3000 ₽' },
    { name: 'Замена амортизаторов (до 2500 кг)', price: '1500–3000 ₽/шт' },
    { name: 'Замена масла и фильтра двигателя', price: '1200–2000 ₽' },
    { name: 'Замена масла в МКПП', price: '1200–2000 ₽' },
    { name: 'Замена масла в АКПП/вариаторе', price: '1500–3000 ₽' },
    { name: 'Замена ремня ГРМ (1.6, АвтоВАЗ)', price: '2000–3000 ₽' },
    { name: 'Замена ступичного подшипника (до 2500 кг)', price: '2000–3000 ₽' },
    { name: 'Замена рулевого наконечника (до 2500 кг)', price: '1500–2000 ₽' },
    { name: 'Замена ремня ГРМ (иномарки)', price: 'По согласованию' }
];

// ===== PHONE NUMBER =====
const PHONE = '+79280166542';

// ===== RENDER SERVICES =====
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = servicesData.map(service => `
        <div class="service-card">
            <div class="icon">${service.icon}</div>
            <h3>${service.name}</h3>
            <div class="price">${service.price}</div>
            <div class="desc">${service.desc}</div>
            <div class="detail">${service.detail}</div>
        </div>
    `).join('');
}

// ===== RENDER PRICING =====
function renderPricing() {
    const grid = document.getElementById('pricingGrid');
    if (!grid) return;

    grid.innerHTML = pricingData.map(item => `
        <div class="pricing-item">
            <span class="name">${item.name}</span>
            <span class="price">${item.price}</span>
        </div>
    `).join('');
}

// ===== КОПИРОВАНИЕ НОМЕРА (РАБОТАЕТ!) =====
function copyPhone() {
    const phone = '+79280166542';
    
    // Способ 1: Современный API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(phone)
            .then(() => {
                showNotification('✅ Номер скопирован: ' + phone);
            })
            .catch(() => {
                fallbackCopy(phone);
            });
    } else {
        fallbackCopy(phone);
    }
}

// ===== FALLBACK КОПИРОВАНИЕ =====
function fallbackCopy(phone) {
    try {
        // Создаём временный input
        const tempInput = document.createElement('input');
        tempInput.value = phone;
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        tempInput.style.left = '-9999px';
        document.body.appendChild(tempInput);
        
        // Выделяем и копируем
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
        const success = document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        if (success) {
            showNotification('✅ Номер скопирован: ' + phone);
        } else {
            showNotification('❌ Не удалось скопировать. Номер: ' + phone);
        }
    } catch (e) {
        showNotification('❌ Не удалось скопировать. Номер: ' + phone);
    }
}

// ===== ОТПРАВКА ЗАЯВКИ (РАБОТАЕТ!) =====
function submitForm() {
    // Получаем данные из формы
    const name = document.getElementById('formName').value.trim();
    const phone = document.getElementById('formPhone').value.trim();
    const serviceSelect = document.getElementById('formService');
    const service = serviceSelect.value;
    const message = document.getElementById('formMessage').value.trim();
    
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const spinner = document.getElementById('btnSpinner');

    // === ВАЛИДАЦИЯ ===
    if (!name) {
        showNotification('⚠️ Пожалуйста, введите ваше имя');
        document.getElementById('formName').focus();
        return;
    }
    
    if (!phone) {
        showNotification('⚠️ Пожалуйста, введите ваш телефон');
        document.getElementById('formPhone').focus();
        return;
    }
    
    if (phone.length < 10) {
        showNotification('⚠️ Пожалуйста, введите корректный номер телефона');
        document.getElementById('formPhone').focus();
        return;
    }

    // === БЛОКИРУЕМ КНОПКУ ===
    submitBtn.disabled = true;
    btnText.textContent = 'Отправка...';
    spinner.style.display = 'inline-block';

    // === ФОРМИРУЕМ СООБЩЕНИЕ ДЛЯ WHATSAPP ===
    let waMessage = `Здравствуйте! Меня зовут ${name}.%0AТелефон: ${phone}`;
    
    if (service && service !== '') {
        waMessage += `%0AУслуга: ${service}`;
    }
    
    if (message) {
        waMessage += `%0AСообщение: ${message}`;
    }

    // === ОТКРЫВАЕМ WHATSAPP ===
    const waUrl = `https://wa.me/${PHONE.replace('+', '')}?text=${waMessage}`;
    
    // Открываем в новой вкладке
    window.open(waUrl, '_blank');
    
    // === ПОКАЗЫВАЕМ УСПЕХ ===
    setTimeout(() => {
        // Разблокируем кнопку
        submitBtn.disabled = false;
        btnText.textContent = 'Отправить заявку';
        spinner.style.display = 'none';
        
        // Очищаем форму
        document.getElementById('formName').value = '';
        document.getElementById('formPhone').value = '';
        document.getElementById('formService').value = '';
        document.getElementById('formMessage').value = '';
        
        // Показываем модальное окно
        showModal();
        
        showNotification('✅ Заявка отправлена в WhatsApp!');
    }, 500);
}

// ===== ОТСЛЕЖИВАНИЕ КЛИКОВ ПО WHATSAPP =====
function trackWA() {
    console.log('Клик по WhatsApp');
    // Здесь можно добавить аналитику
}

// ===== МОДАЛЬНОЕ ОКНО =====
function showModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== NOTIFICATION (TOAST) =====
function showNotification(message) {
    // Удаляем предыдущее уведомление
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = message;
    document.body.appendChild(notif);

    // Автоматическое скрытие через 3 секунды
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.4s ease';
        setTimeout(() => {
            if (notif.parentNode) notif.remove();
        }, 400);
    }, 3000);
}

// ===== МЕНЮ (бургер) =====
function toggleMenu() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
        document.body.style.overflow = links.classList.contains('active') ? 'hidden' : '';
    }
}

function closeMenu() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
        toggle.classList.remove('active');
        links.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.navbar')?.offsetHeight || 70;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== INTERSECTION OBSERVER =====
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .pricing-item, .advantage-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ===== ЗАКРЫТИЕ МОДАЛКИ ПО КЛИКУ НА ОВЕРЛЕЙ =====
function initModalClose() {
    const overlay = document.getElementById('successModal');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
}

// ===== ЗАКРЫТИЕ ПО ESC =====
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    renderPricing();
    initSmoothScroll();
    initAnimations();
    initModalClose();
    
    // Добавляем обработчик Enter для формы
    document.getElementById('contactForm').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            submitForm();
        }
    });

    console.log('🚗 Mobile Mechanic • Чеченская Республика');
    console.log('📞 ' + PHONE);
    console.log('💳 Предоплата: 1000 ₽ на карту Сбербанка');
});
