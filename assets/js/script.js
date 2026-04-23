// ============================================
// VARIÁVEIS GLOBAIS
// ============================================
let productsData = {};
let currentCheckoutData = null;

const taxasJuros = {
    1: 4.20, 2: 6.09, 3: 7.01, 4: 7.91, 5: 8.80, 6: 9.67,
    7: 12.59, 8: 13.42, 9: 14.25, 10: 15.06, 11: 15.87, 12: 16.66
};

// ============================================
// NAVEGAÇÃO POR JOGO (tabs horizontais)
// ============================================

function selectGame(game, tabEl) {
    // Ativar tab
    document.querySelectorAll('.game-tab').forEach(t => t.classList.remove('active'));
    tabEl.classList.add('active');

    // Mostrar painel correspondente
    document.querySelectorAll('.game-panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById('panel-' + game);
    if (panel) panel.classList.add('active');
}

// ============================================
// NAVEGAÇÃO POR TIPO (Cristais / Passes / Hacks)
// ============================================

function selectType(tabEl, panelId) {
    // Ativar tab dentro do mesmo game-panel
    const gamePanel = tabEl.closest('.game-panel');
    gamePanel.querySelectorAll('.type-tab').forEach(t => t.classList.remove('active'));
    tabEl.classList.add('active');

    // Mostrar painel correspondente
    gamePanel.querySelectorAll('.type-panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.add('active');
}

// ============================================
// RENDERIZAÇÃO DE PRODUTOS
// ============================================

/**
 * Cria grid de moedas (cristais, fragmentos, monocromos)
 * Layout: cards em linha com imagem pequena
 */
function renderCurrencyPanel(panelId, products) {
    const panel = document.getElementById(panelId);
    if (!panel) return;

    if (!products || products.length === 0) {
        panel.innerHTML = '<div class="product-none"><p>Em Breve.</p></div>';
        return;
    }

    const grid = document.createElement('div');
    grid.className = 'product-grid grid-currency';

    products.forEach(product => {
        const [game, category] = panelId.split('-');

        const card = document.createElement('div');
        card.className = 'product-card card-row';
        card.innerHTML = `
            <img class="product-card-img" src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
            <div class="product-card-body">
                <div class="product-card-name">${product.name}</div>
                ${product.bonus ? `<div class="product-card-bonus">${product.bonus}</div>` : ''}
                <div class="product-card-prices">
                    ${product.oldPrice ? `<span class="product-old-price">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                    <span class="product-price">R$ ${product.price.toFixed(2)}</span>
                </div>
            </div>
            <button class="buy-btn" onclick="openCheckout('${game}', '${category}', '${product.id}')">Comprar</button>
        `;
        grid.appendChild(card);
    });

    panel.innerHTML = '';
    panel.appendChild(grid);
}

/**
 * Cria grid de passes e hacks
 * Layout: card coluna com durations como pills clicáveis
 */
function renderProductPanel(panelId, products, game, category) {
    const panel = document.getElementById(panelId);
    if (!panel) return;

    if (!products || products.length === 0) {
        panel.innerHTML = '<div class="product-none"><p>Em Breve.</p></div>';
        return;
    }

    const grid = document.createElement('div');
    grid.className = 'product-grid';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card card-col';

        let durationHTML = '';
        if (product.hasTray && product.durations && product.durations.length > 0) {
            durationHTML = `<div class="duration-pills">`;
            product.durations.forEach(dur => {
                durationHTML += `
                    <div class="duration-pill" onclick="openCheckoutWithDuration('${game}','${category}','${product.id}','${dur.text}',${dur.price},${dur.oldPrice || 'null'})">
                        <span class="pill-text">${dur.text}</span>
                        ${dur.oldPrice ? `<span class="pill-old-price">R$${dur.oldPrice.toFixed(2)}</span>` : ''}
                        <span class="pill-price">R$ ${dur.price.toFixed(2)}</span>
                    </div>
                `;
            });
            durationHTML += `</div>`;
        }

        const priceArea = product.hasTray
            ? `<span class="product-price">a partir de R$ ${product.price.toFixed(2)}</span>`
            : `
                ${product.oldPrice ? `<span class="product-old-price">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                <span class="product-price">R$ ${product.price.toFixed(2)}</span>
            `;

        const buyArea = !product.hasTray
            ? `<button class="buy-btn" onclick="openCheckout('${game}','${category}','${product.id}')">Comprar</button>`
            : '';

        card.innerHTML = `
            <div class="card-col-top">
                <img class="product-card-img" src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
                <div class="product-card-body">
                    <div class="product-card-name">${product.name}</div>
                    <div class="product-card-prices">${priceArea}</div>
                </div>
            </div>
            ${durationHTML}
            ${buyArea}
        `;
        grid.appendChild(card);
    });

    panel.innerHTML = '';
    panel.appendChild(grid);
}

// ============================================
// INICIALIZAÇÃO DE PRODUTOS
// ============================================

function initializeProducts() {
    const d = productsData;

    // GENSHIN
    renderCurrencyPanel('genshin-cristais', d.genshin?.cristais);
    renderProductPanel('genshin-passes', d.genshin?.passes, 'genshin', 'passes');
    renderProductPanel('genshin-hacks', d.genshin?.hacks, 'genshin', 'hacks');

    // STAR RAIL
    renderCurrencyPanel('starrail-fragmentos', d.starrail?.fragmentos);
    renderProductPanel('starrail-passes', d.starrail?.passes, 'starrail', 'passes');
    renderProductPanel('starrail-hacks', d.starrail?.hacks, 'starrail', 'hacks');

    // WUWA
    renderProductPanel('wuwa-hacks', d.wuwa?.hacks, 'wuwa', 'hacks');

    // ZZZ
    renderCurrencyPanel('zzz-monocromos', d.zzz?.monocromos);
    renderProductPanel('zzz-passes', d.zzz?.passes, 'zzz', 'passes');
    renderProductPanel('zzz-hacks', d.zzz?.hacks, 'zzz', 'hacks');

    // DNA
    renderProductPanel('dna-hacks', d.dna?.hacks, 'dna', 'hacks');

    // ARKNIGHTS
    renderProductPanel('arknights-hacks', d.arknights?.hacks, 'arknights', 'hacks');

    // STELLA SORA
    renderProductPanel('stellasora-hacks', d.stellasora?.hacks, 'stellasora', 'hacks');

    // BLUE ARCHIVE
    renderProductPanel('bluearchive-hacks', d.bluearchive?.hacks, 'bluearchive', 'hacks');

    // SEVEN DEADLY SINS
    renderProductPanel('sds-hacks', d.sds?.hacks, 'sds', 'hacks');
}

async function loadProductsData() {
    try {
        const response = await fetch('/store/assets/data/products.json');
        productsData = await response.json();
        initializeProducts();
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

// ============================================
// CHECKOUT
// ============================================

function openCheckout(game, category, productId) {
    const product = productsData[game]?.[category]?.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('checkoutImage').src = product.image;
    document.getElementById('checkoutName').textContent = product.name;

    const dur = product.hasTray && product.durations ? product.durations[0] : null;
    document.getElementById('checkoutDuration').textContent = dur ? dur.text : '';
    document.getElementById('checkoutPrice').textContent = `R$ ${(dur ? dur.price : product.price).toFixed(2)}`;

    currentCheckoutData = {
        game, category, productId,
        productName: product.name,
        duration: dur ? dur.text : '',
        price: dur ? dur.price : product.price,
        image: product.image
    };

    document.getElementById('checkoutPopup').style.display = 'flex';
}

function openCheckoutWithDuration(game, category, productId, durationText, durationPrice, durationOldPrice) {
    const product = productsData[game]?.[category]?.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('checkoutImage').src = product.image;
    document.getElementById('checkoutName').textContent = product.name;
    document.getElementById('checkoutDuration').textContent = durationText;
    document.getElementById('checkoutPrice').textContent = `R$ ${durationPrice.toFixed(2)}`;

    currentCheckoutData = {
        game, category, productId,
        productName: product.name,
        duration: durationText,
        price: durationPrice,
        image: product.image
    };

    document.getElementById('checkoutPopup').style.display = 'flex';
}

function closeCheckout() {
    document.getElementById('checkoutPopup').style.display = 'none';
}

// ============================================
// POPUPS
// ============================================

function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}

window.onclick = function(event) {
    const popupOverlay = document.getElementById('popupOverlay');
    const checkoutPopup = document.getElementById('checkoutPopup');
    if (event.target === popupOverlay) closePopup();
    if (event.target === checkoutPopup) closeCheckout();
};

// ============================================
// FAQ (páginas secundárias)
// ============================================

function showFAQ(category) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.faq-content').forEach(content => content.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(category).classList.add('active');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
}

function toggleFAQ(question) {
    const faqItem = question.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
    if (!isActive) faqItem.classList.add('active');
}

// ============================================
// FUNCTIONS PAGE (Diferenças)
// ============================================

function showSubcategories(type) {
    document.querySelectorAll('.cheat-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.subcategories').forEach(sub => sub.classList.remove('active'));
    document.querySelectorAll('.cheat-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.subcategory-btn').forEach(btn => btn.classList.remove('active'));
    closeAllFeatureCategories();
    event.currentTarget.classList.add('active');
    if (type === 'uni')   document.getElementById('uni-subcategories')?.classList.add('active');
    if (type === 'shika') document.getElementById('shika-subcategories')?.classList.add('active');
    if (type === 'minty') document.getElementById('minty-subcategories')?.classList.add('active');
    if (type === 'slash') document.getElementById('slash-subcategories')?.classList.add('active');
}

function showCheat(cheatId) {
    document.querySelectorAll('.subcategory-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.cheat-content').forEach(content => content.classList.remove('active'));
    closeAllFeatureCategories();
    event.currentTarget.classList.add('active');
    document.getElementById(cheatId)?.classList.add('active');
    smoothScrollToTarget();
}

function showCheatDirect(cheatId) {
    document.querySelectorAll('.cheat-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.subcategories').forEach(sub => sub.classList.remove('active'));
    document.querySelectorAll('.cheat-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.subcategory-btn').forEach(btn => btn.classList.remove('active'));
    closeAllFeatureCategories();
    event.currentTarget.classList.add('active');
    document.getElementById(cheatId)?.classList.add('active');
    smoothScrollToTargetDirect();
}

function backToMainCategories() {
    document.querySelectorAll('.cheat-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.subcategories').forEach(sub => sub.classList.remove('active'));
    document.querySelectorAll('.cheat-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.subcategory-btn').forEach(btn => btn.classList.remove('active'));
    closeAllFeatureCategories();
}

function toggleCategory(element) {
    const category = element.parentElement;
    const isActive = category.classList.contains('active');
    const currentCheat = category.closest('.cheat-content');
    if (currentCheat) {
        currentCheat.querySelectorAll('.feature-category').forEach(cat => cat.classList.remove('active'));
    }
    if (!isActive) category.classList.add('active');
}

function closeAllFeatureCategories() {
    document.querySelectorAll('.feature-category').forEach(category => category.classList.remove('active'));
}

// ============================================
// SCROLL
// ============================================

function smoothScrollToTarget() {
    setTimeout(() => {
        document.getElementById('cheat-target')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function smoothScrollToTargetDirect() {
    setTimeout(() => {
        document.getElementById('cheat-target-direct')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// ============================================
// CALCULADORA DE JUROS (FAQ)
// ============================================

function calcularJuros() {
    const valorInput = document.getElementById('valor');
    const parcelasSelect = document.getElementById('parcelas');
    const resultsContainer = document.getElementById('results');
    if (!valorInput || parseFloat(valorInput.value) <= 0) {
        alert('Por favor, insira um valor válido.');
        valorInput?.focus();
        return;
    }
    const valorOriginal = parseFloat(valorInput.value);
    const numParcelas = parseInt(parcelasSelect.value);
    const taxaJuros = taxasJuros[numParcelas];
    const valorComJuros = valorOriginal * (1 + (taxaJuros / 100));
    const valorParcela = valorComJuros / numParcelas;
    document.getElementById('valor-original').textContent = formatarMoeda(valorOriginal);
    document.getElementById('juros-aplicados').textContent = taxaJuros.toFixed(2) + '%';
    document.getElementById('valor-total').textContent = formatarMoeda(valorComJuros);
    document.getElementById('valor-parcela').textContent = formatarMoeda(valorParcela);
    resultsContainer.style.display = 'block';
    atualizarExemplos(valorOriginal);
}

function atualizarExemplos(valor) {
    for (let i = 1; i <= 12; i++) {
        const el = document.getElementById(`exemplo-${i}`);
        if (el) el.textContent = formatarMoeda(valor * (1 + (taxasJuros[i] / 100)));
    }
}

function formatarMoeda(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',').replace(/\d(?=(\d{3})+,)/g, '$&.');
}

// ============================================
// CAROUSEL — auto-scroll + edge acceleration + drag
// ============================================

(function initCarousel() {
    const scroller = document.getElementById('gameTabsScroll');
    if (!scroller) return;

    const BASE_SPEED   = 0.4;

    let direction    = 1;
    let isPaused     = false;
    let isDragging   = false;
    let dragStartX   = 0;
    let dragScrollX  = 0;
    let rafId        = null;

    function getMaxScroll() {
        return scroller.scrollWidth - scroller.clientWidth;
    }

    function tick() {
        if (!isDragging && !isPaused) {
            scroller.scrollLeft += BASE_SPEED * direction;
            const max = getMaxScroll();
            if (scroller.scrollLeft >= max - 1) direction = -1;
            else if (scroller.scrollLeft <= 1)  direction =  1;
        }
        rafId = requestAnimationFrame(tick);
    }

    scroller.addEventListener('mouseenter', () => { isPaused = true; });
    scroller.addEventListener('mouseleave', () => { isPaused = false; });

    // Drag com mouse
    scroller.addEventListener('mousedown', (e) => {
        isDragging  = true;
        dragStartX  = e.pageX;
        dragScrollX = scroller.scrollLeft;
        scroller.style.cursor = 'grabbing';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.pageX - dragStartX;
        scroller.scrollLeft = dragScrollX - dx;
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        scroller.style.cursor = 'grab';
    });

    // Touch drag (mobile)
    let touchStartX   = 0;
    let touchScrollX  = 0;
    scroller.addEventListener('touchstart', (e) => {
        touchStartX  = e.touches[0].pageX;
        touchScrollX = scroller.scrollLeft;
        isPaused = true;
    }, { passive: true });

    scroller.addEventListener('touchmove', (e) => {
        const dx = e.touches[0].pageX - touchStartX;
        scroller.scrollLeft = touchScrollX - dx;
    }, { passive: true });

    scroller.addEventListener('touchend', () => {
        isPaused = false;
    });

    // Inicia o loop
    rafId = requestAnimationFrame(tick);
})();



document.addEventListener('DOMContentLoaded', function() {
    loadProductsData();
    closeAllFeatureCategories();

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') { closePopup(); closeCheckout(); }
    });

    const valorInput = document.getElementById('valor');
    if (valorInput) {
        valorInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') calcularJuros();
        });
    }
});

window.onload = function() {
    if (typeof atualizarExemplos === 'function') {
        try { atualizarExemplos(100); } catch(e) {}
    }
};