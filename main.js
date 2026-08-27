// ===== DATA =====
const servicesData = [
    // === Старые услуги ===
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
    },

    // === НОВЫЕ УСЛУГИ из первого скриншота ===
    { 
        icon: '🔌', 
        name: 'FRM MATCHING', 
        price: 'По запросу', 
        desc: 'Согласование модуля FRM',
        detail: 'Калибровка и адаптация'
    },
    { 
        icon: '🔥', 
        name: 'Регенерация сажевого фильтра', 
        price: 'По запросу', 
        desc: 'Принудительная регенерация DPF',
        detail: 'Очистка сажевого фильтра'
    },
    { 
        icon: '🌐', 
        name: 'GATEWAY MODULE DATA CALIBRATION', 
        price: 'По запросу', 
        desc: 'Калибровка данных модуля шлюза',
        detail: 'Настройка gateway'
    },
    { 
        icon: '🔋', 
        name: 'Диагностика высоковольтной батареи', 
        price: 'По запросу', 
        desc: 'Проверка состояния HV-батареи',
        detail: 'Гибридные и электромобили'
    },
    { 
        icon: '🔒', 
        name: 'Иммобилайзер', 
        price: 'По запросу', 
        desc: 'Программирование и ремонт',
        detail: 'Чип-ключи, иммобилайзер'
    },
    { 
        icon: '⛽', 
        name: 'Форсунка', 
        price: 'По запросу', 
        desc: 'Диагностика и замена',
        detail: 'Топливные форсунки'
    },
    { 
        icon: '🚗', 
        name: 'Система интеллектуального круиз-контроля', 
        price: 'По запросу', 
        desc: 'Калибровка и настройка ACC',
        detail: 'Адаптивный круиз-контроль'
    },
    { 
        icon: '🗣️', 
        name: 'Изменение языка', 
        price: 'По запросу', 
        desc: 'Смена языка в бортовом компьютере',
        detail: 'Локализация меню'
    },
    { 
        icon: '🔄', 
        name: 'Калибровка угла мотора', 
        price: 'По запросу', 
        desc: 'Настройка угла двигателя',
        detail: 'Калибровка положения'
    },
    { 
        icon: '🌫️', 
        name: 'Сброс датчика NOx', 
        price: 'По запросу', 
        desc: 'Обнуление показаний NOx-сенсора',
        detail: 'Система выхлопа'
    },
    { 
        icon: '📊', 
        name: 'ODO CHECK', 
        price: 'По запросу', 
        desc: 'Проверка одометра',
        detail: 'Диагностика пробега'
    },
    { 
        icon: '📟', 
        name: 'ODO METER', 
        price: 'По запросу', 
        desc: 'Калибровка одометра',
        detail: 'Настройка приборной панели'
    },
    { 
        icon: '💡', 
        name: 'RAIN/LIGHT SENSOR', 
        price: 'По запросу', 
        desc: 'Калибровка датчика дождя и света',
        detail: 'Настройка сенсоров'
    },
    { 
        icon: '💺', 
        name: 'Калибровка сидений', 
        price: 'По запросу', 
        desc: 'Настройка электропривода сидений',
        detail: 'Память сидений'
    },
    { 
        icon: '⏹️', 
        name: 'Сброс стопа/старта', 
        price: 'По запросу', 
        desc: 'Сброс системы Stop/Start',
        detail: 'Адаптация системы'
    },
    { 
        icon: '🚪', 
        name: 'Сдвижной люк', 
        price: 'По запросу', 
        desc: 'Калибровка панорамной крыши',
        detail: 'Настройка люка'
    },
    { 
        icon: '🛞', 
        name: 'Сброс системы контроля давления в шинах', 
        price: 'По запросу', 
        desc: 'Сброс TPMS',
        detail: 'Датчики давления'
    },
    { 
        icon: '🚛', 
        name: 'TRAILER MATCHING', 
        price: 'По запросу', 
        desc: 'Согласование прицепа',
        detail: 'Адаптация фаркопа'
    },
    { 
        icon: '🚚', 
        name: 'Транспортный режим', 
        price: 'По запросу', 
        desc: 'Включение/отключение Transport Mode',
        detail: 'Режим перевозки'
    },
    { 
        icon: '⚡', 
        name: 'TURBOCHARGING MATCHING', 
        price: 'По запросу', 
        desc: 'Адаптация турбокомпрессора',
        detail: 'Калибровка турбины'
    },
    { 
        icon: '🪟', 
        name: 'Калибровка стеклоподъемника', 
        price: 'По запросу', 
        desc: 'Настройка стеклоподъемников',
        detail: 'Адаптация окон'
    },

    // === НОВЫЕ УСЛУГИ из второго скриншота ===
    { 
        icon: '🔋', 
        name: 'HIGH VOLTAGE BATTERY (EV)', 
        price: 'По запросу', 
        desc: 'Диагностика высоковольтной батареи EV',
        detail: 'Электромобили'
    },
    { 
        icon: '🔌', 
        name: 'OBC TEST (EV)', 
        price: 'По запросу', 
        desc: 'Тестирование бортового зарядного устройства',
        detail: 'Зарядка электромобиля'
    },
    { 
        icon: '🌡️', 
        name: 'PTC', 
        price: 'По запросу', 
        desc: 'Диагностика PTC-нагревателя',
        detail: 'Отопление салона EV'
    },
    { 
        icon: '📈', 
        name: 'STATE OF HEALTH (SOH)', 
        price: 'По запросу', 
        desc: 'Оценка состояния здоровья батареи',
        detail: 'Степень износа батареи'
    },
    { 
        icon: '🛑', 
        name: 'Сброс тормоза', 
        price: 'По запросу', 
        desc: 'Сброс тормозной системы',
        detail: 'Адаптация тормозов'
    },
    { 
        icon: '🛢️', 
        name: 'Сброс напоминания замены масла', 
        price: 'По запросу', 
        desc: 'Обнуление сервисного интервала',
        detail: 'Сброс сервисного индикатора'
    },
    { 
        icon: '🧭', 
        name: 'Сброс SAS', 
        price: 'По запросу', 
        desc: 'Калибровка датчика угла поворота руля',
        detail: 'Steering Angle Sensor'
    },
    { 
        icon: '🔋', 
        name: 'Обнуление АКБ', 
        price: 'По запросу', 
        desc: 'Сброс параметров аккумулятора',
        detail: 'Адаптация АКБ'
    },
    { 
        icon: '🚦', 
        name: 'Повторное обучение дроссельной заслонки', 
        price: 'По запросу', 
        desc: 'Адаптация электронной дроссельной заслонки',
        detail: 'Throttle adaptation'
    },
    { 
        icon: '🛞', 
        name: 'Сброс TPMS', 
        price: 'По запросу', 
        desc: 'Сброс системы контроля давления в шинах',
        detail: 'TPMS reset'
    },
    { 
        icon: '🔥', 
        name: 'Регенерация DPF', 
        price: 'По запросу', 
        desc: 'Принудительная регенерация сажевого фильтра',
        detail: 'DPF regeneration'
    },
    { 
        icon: '💨', 
        name: 'Удаление воздуха из системы ABS', 
        price: 'По запросу', 
        desc: 'Прокачка ABS',
        detail: 'ABS bleeding'
    },
    { 
        icon: '❄️', 
        name: 'Обучение системы AC', 
        price: 'По запросу', 
        desc: 'Инициализация кондиционера',
        detail: 'AC initialization'
    },
    { 
        icon: '💡', 
        name: 'Обучение головного освещения AFS', 
        price: 'По запросу', 
        desc: 'Калибровка адаптивного света',
        detail: 'AFS calibration'
    },
    { 
        icon: '🧪', 
        name: 'Сброс ADBLUE', 
        price: 'По запросу', 
        desc: 'Сброс системы мочевины',
        detail: 'AdBlue reset'
    },
    { 
        icon: '⛽', 
        name: 'Сброс A/F', 
        price: 'По запросу', 
        desc: 'Сброс Air/Fuel датчика',
        detail: 'Lambda sensor reset'
    },
    { 
        icon: '🔧', 
        name: 'Сброс SUS', 
        price: 'По запросу', 
        desc: 'Сброс подвески',
        detail: 'Suspension reset'
    },
    { 
        icon: '🛡️', 
        name: 'AIRBAG RESET', 
        price: 'По запросу', 
        desc: 'Сброс подушек безопасности',
        detail: 'SRS reset'
    },
    { 
        icon: '⚙️', 
        name: 'CLUTCH MATCHING', 
        price: 'По запросу', 
        desc: 'Адаптация сцепления',
        detail: 'Clutch adaptation'
    },
    { 
        icon: '💻', 
        name: 'ECU', 
        price: 'По запросу', 
        desc: 'Диагностика и перепрошивка ECU',
        detail: 'Engine control unit'
    },
    { 
        icon: '💧', 
        name: 'Прокачка системы', 
        price: 'По запросу', 
        desc: 'Прокачка тормозной/топливной системы',
        detail: 'System bleeding'
    },
    { 
        icon: '📚', 
        name: 'Обучение', 
        price: 'По запросу', 
        desc: 'Адаптация и обучение систем',
        detail: 'Adaptation & learning'
    }
];

const PHONE = '+79280166542';

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

function copyPhone() {
    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(PHONE)
            .then(() => showNotification('✅ Номер скопирован: ' + PHONE))
            .catch(() => fallbackCopy(PHONE));
    } else {
        fallbackCopy(PHONE);
    }
}

function fallbackCopy(phone) {
    try {
        const input = document.createElement('input');
        input.value = phone;
        Object.assign(input.style, { position: 'fixed', opacity: '0', left: '-9999px' });
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, 99999);
        const success = document.execCommand('copy');
        document.body.removeChild(input);
        showNotification(success ? '✅ Номер скопирован: ' + phone : '❌ Не удалось скопировать. Номер: ' + phone);
    } catch {
        showNotification('❌ Не удалось скопировать. Номер: ' + phone);
    }
}

function submitForm() {
    const name = document.getElementById('formName').value.trim();
    const phone = document.getElementById('formPhone').value.trim();
    const service = document.getElementById('formService').value;
    const message = document.getElementById('formMessage').value.trim();
    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const spinner = document.getElementById('btnSpinner');

    if (!name) return showNotification('⚠️ Пожалуйста, введите ваше имя'), document.getElementById('formName').focus();
    if (!phone) return showNotification('⚠️ Пожалуйста, введите ваш телефон'), document.getElementById('formPhone').focus();
    if (phone.length < 10) return showNotification('⚠️ Введите корректный номер телефона'), document.getElementById('formPhone').focus();

    btn.disabled = true;
    btnText.textContent = 'Отправка...';
    spinner.style.display = 'inline-block';

    let waMessage = `Здравствуйте! Меня зовут ${name}.%0AТелефон: ${phone}`;
    if (service) waMessage += `%0AУслуга: ${service}`;
    if (message) waMessage += `%0AСообщение: ${message}`;

    window.open(`https://wa.me/${PHONE.replace('+', '')}?text=${waMessage}`, '_blank');

    setTimeout(() => {
        btn.disabled = false;
        btnText.textContent = 'Отправить заявку';
        spinner.style.display = 'none';
        document.getElementById('formName').value = '';
        document.getElementById('formPhone').value = '';
        document.getElementById('formService').value = '';
        document.getElementById('formMessage').value = '';
        showModal();
        showNotification('✅ Заявка отправлена в WhatsApp!');
    }, 500);
}

function trackWA() {}

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

function showNotification(message) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = message;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.4s ease';
        setTimeout(() => notif.remove(), 400);
    }, 3000);
}

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

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.navbar')?.offsetHeight || 70;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .advantage-card').forEach(el => {
        Object.assign(el.style, { opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' });
        observer.observe(el);
    });
}

function initModalClose() {
    document.getElementById('successModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
}

document.addEventListener('keydown', e => e.key === 'Escape' && closeModal());

document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    initSmoothScroll();
    initAnimations();
    initModalClose();
    
    document.getElementById('contactForm').addEventListener('keypress', e => {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            submitForm();
        }
    });

    console.log('🚗 Mobile Mechanic • Чеченская Республика');
});
