// Variáveis globais
let productsData = {};
let currentCheckoutData = null;

function showProductsC(category) {
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });

    document.querySelectorAll('.products-section').forEach(section => {
        section.classList.remove('active');
    });

    event.target.closest('.category-card').classList.add('active');

    document.getElementById(category).classList.add('active');
    smoothScrollToTargetHome();
}

function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}

function showSubcategories(type) {
    // Remove active de todos os botões principais
    document.querySelectorAll('.cheat-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Remove active de todas as subcategorias
    document.querySelectorAll('.subcategories').forEach(sub => {
        sub.classList.remove('active');
    });

    // Remove active de todos os conteúdos
    document.querySelectorAll('.cheat-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active de todos os botões de subcategoria
    document.querySelectorAll('.subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Fecha todas as categorias de features
    closeAllFeatureCategories();

    // Ativa o botão principal clicado
    event.currentTarget.classList.add('active');

    // Mostra as subcategorias correspondentes
    if (type === 'uni') {
        document.getElementById('uni-subcategories').classList.add('active');
    } else if (type === 'shika') {
        document.getElementById('shika-subcategories').classList.add('active');
    } else if (type === 'minty') {
        document.getElementById('minty-subcategories').classList.add('active');
    }
}

// Função para mostrar cheat específico (para subcategorias)
function showCheat(cheatId) {
    // Remove active de todos os botões de subcategoria
    document.querySelectorAll('.subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Remove active de todos os conteúdos
    document.querySelectorAll('.cheat-content').forEach(content => {
        content.classList.remove('active');
    });

    // Fecha todas as categorias de features
    closeAllFeatureCategories();

    // Ativa o botão de subcategoria clicado
    event.currentTarget.classList.add('active');

    // Mostra o conteúdo do cheat
    document.getElementById(cheatId).classList.add('active');

    smoothScrollToTarget();
}

// Função para mostrar cheat direto (para categorias sem subcategorias como Slash)
function showCheatDirect(cheatId) {
    // Remove active de todos os botões principais
    document.querySelectorAll('.cheat-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Remove active de todas as subcategorias
    document.querySelectorAll('.subcategories').forEach(sub => {
        sub.classList.remove('active');
    });

    // Remove active de todos os conteúdos
    document.querySelectorAll('.cheat-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active de todos os botões de subcategoria
    document.querySelectorAll('.subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Fecha todas as categorias de features
    closeAllFeatureCategories();

    // Ativa o botão principal clicado
    event.currentTarget.classList.add('active');

    // Mostra o conteúdo do cheat
    document.getElementById(cheatId).classList.add('active');

    smoothScrollToTargetDirect();
}

// Função para voltar para a seleção de categorias principais
function backToMainCategories() {
    // Remove active de todos os elementos
    document.querySelectorAll('.cheat-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll('.subcategories').forEach(sub => {
        sub.classList.remove('active');
    });

    document.querySelectorAll('.cheat-content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    closeAllFeatureCategories();
}

// Função para expandir/recolher categorias de features
function toggleCategory(element) {
    const category = element.parentElement;
    const isActive = category.classList.contains('active');

    // Fecha todas as categorias na mesma seção de cheat
    const currentCheat = category.closest('.cheat-content');
    if (currentCheat) {
        currentCheat.querySelectorAll('.feature-category').forEach(cat => {
            cat.classList.remove('active');
        });
    }

    // Abre a categoria clicada se não estava ativa
    if (!isActive) {
        category.classList.add('active');
    }
}

// Fecha todas as categorias quando um novo cheat é selecionado
function closeAllFeatureCategories() {
    document.querySelectorAll('.feature-category').forEach(category => {
        category.classList.remove('active');
    });
}

function smoothScrollToTargetHome() {
    setTimeout(() => {
        const target = document.getElementById('home-target');
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100); // 300ms de delay
}

function smoothScrollToTarget() {
    setTimeout(() => {
        const target = document.getElementById('cheat-target');
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100); // 300ms de delay
}

function smoothScrollToTargetDirect() {
    setTimeout(() => {
        const target = document.getElementById('cheat-target-direct');
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100); // 300ms de delay
}

function showFAQ(category) {
    // Remove active class from all buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Hide all FAQ content
    document.querySelectorAll('.faq-content').forEach(content => {
        content.classList.remove('active');
    });

    // Add active class to clicked button
    event.target.classList.add('active');

    // Show selected FAQ content
    document.getElementById(category).classList.add('active');

    // Close any open FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
}

function toggleFAQ(question) {
    const faqItem = question.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');

    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}
// Taxas de juros por parcela
const taxasJuros = {
    1: 4.2,
    2: 6.09,
    3: 7.01,
    4: 7.91,
    5: 8.80,
    6: 9.67,
    7: 12.59,
    8: 13.42,
    9: 14.25,
    10: 15.06,
    11: 15.87,
    12: 16.66
};

function calcularJuros() {
    const valorInput = document.getElementById('valor');
    const parcelasSelect = document.getElementById('parcelas');
    const resultsContainer = document.getElementById('results');

    // Validar entrada
    if (!valorInput.value || parseFloat(valorInput.value) <= 0) {
        alert('Por favor, insira um valor válido para o produto.');
        valorInput.focus();
        return;
    }

    const valorOriginal = parseFloat(valorInput.value);
    const numParcelas = parseInt(parcelasSelect.value);
    const taxaJuros = taxasJuros[numParcelas];

    // Calcular valor com juros
    const valorComJuros = valorOriginal * (1 + (taxaJuros / 100));
    const valorParcela = valorComJuros / numParcelas;

    // Atualizar resultados
    document.getElementById('valor-original').textContent = formatarMoeda(valorOriginal);
    document.getElementById('juros-aplicados').textContent = taxaJuros.toFixed(2) + '%';
    document.getElementById('valor-total').textContent = formatarMoeda(valorComJuros);
    document.getElementById('valor-parcela').textContent = formatarMoeda(valorParcela);

    // Mostrar resultados
    resultsContainer.style.display = 'block';

    // Atualizar exemplos na tabela
    atualizarExemplos(valorOriginal);
}

function atualizarExemplos(valor) {
    for (let i = 1; i <= 12; i++) {
        const valorComJuros = valor * (1 + (taxasJuros[i] / 100));
        document.getElementById(`exemplo-${i}`).textContent = formatarMoeda(valorComJuros);
    }
}

function formatarMoeda(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',').replace(/\d(?=(\d{3})+,)/g, '$&.');
}

// Controle de exibição de produtos por categoria
function showProducts(category) {
    const sections = document.querySelectorAll('.products-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    const selectedSection = document.getElementById(category);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Popup de contato
function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}

// Popup de checkout
function openCheckout(productData) {
    const checkoutPopup = document.getElementById('checkoutPopup');
    const checkoutImage = document.getElementById('checkoutImage');
    const checkoutName = document.getElementById('checkoutName');
    const checkoutDuration = document.getElementById('checkoutDuration');
    const checkoutPrice = document.getElementById('checkoutPrice');
    
    checkoutImage.src = productData.image;
    checkoutImage.alt = productData.name;
    checkoutName.textContent = productData.name;
    
    if (productData.duration) {
        checkoutDuration.textContent = productData.duration;
        checkoutDuration.style.display = 'block';
    } else {
        checkoutDuration.style.display = 'none';
    }
    
    checkoutPrice.textContent = productData.price;
    
    checkoutPopup.style.display = 'flex';
}

function closeCheckout() {
    document.getElementById('checkoutPopup').style.display = 'none';
}

// Fechar popups ao clicar fora
window.onclick = function(event) {
    const popupOverlay = document.getElementById('popupOverlay');
    const checkoutPopup = document.getElementById('checkoutPopup');
    
    if (event.target === popupOverlay) {
        closePopup();
    }
    if (event.target === checkoutPopup) {
        closeCheckout();
    }
}

// Função auxiliar para obter dados do produto
function getProductData(productMain, product = null) {
    const productInfo = productMain.querySelector('.product-info');
    const img = productMain.querySelector('img');
    
    let duration = null;
    let price = productInfo.querySelector('.product-price').textContent;
    
    // Se o produto tem tray, pegar a primeira opção de duração
    if (product && product.classList.contains('has-tray')) {
        const firstDurationOption = product.querySelector('.duration-option');
        if (firstDurationOption) {
            duration = firstDurationOption.querySelector('.duration-text').textContent;
            price = firstDurationOption.querySelector('.duration-price').textContent;
        }
    }
    
    return {
        name: productInfo.querySelector('.product-name').textContent,
        price: price,
        image: img.src,
        duration: duration
    };
}

// Inicialização dos botões de compra
document.addEventListener('DOMContentLoaded', function() {   
    // Adicionar event listeners para TODOS os botões de compra
    const allBuyButtons = document.querySelectorAll('.buy-btn');
    allBuyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const product = this.closest('.product');
            const productMain = this.closest('.product-main');
            
            // Se o produto tem tray, verificar se está aberta
            if (product && product.classList.contains('has-tray')) {
                const tray = product.querySelector('.product-tray');
                
                // Se a tray estiver fechada, abrir o checkout com primeira opção
                if (!tray || tray.style.display !== 'block') {
                    const productData = getProductData(productMain, product);
                    openCheckout(productData);
                    return;
                }
                
                // Se a tray estiver aberta, apenas fecha (o clique nas opções abrirá o checkout)
                tray.style.display = 'none';
            } else {
                // Produto sem tray - compra direta
                const productData = getProductData(productMain);
                openCheckout(productData);
            }
        });
    });
    
    // Adicionar event listeners para indicadores de tray (clique na seta)
    const trayIndicators = document.querySelectorAll('.tray-indicator');
    trayIndicators.forEach(indicator => {
        indicator.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar que dispare o evento do botão de compra
            const product = this.closest('.product');
            const tray = product.querySelector('.product-tray');
            
            // Fechar outras trays abertas
            document.querySelectorAll('.product-tray').forEach(otherTray => {
                if (otherTray !== tray) {
                    otherTray.style.display = 'none';
                }
            });
            
            // Toggle da tray atual
            if (tray.style.display === 'block') {
                tray.style.display = 'none';
            } else {
                tray.style.display = 'block';
            }
        });
    });
    
    // Adicionar event listeners para opções de duração
    const durationOptions = document.querySelectorAll('.duration-option');
    durationOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const product = this.closest('.product');
            const productMain = product.querySelector('.product-main');
            const productInfo = productMain.querySelector('.product-info');
            const img = productMain.querySelector('img');
            
            const productData = {
                name: productInfo.querySelector('.product-name').textContent,
                price: this.querySelector('.duration-price').textContent,
                image: img.src,
                duration: this.querySelector('.duration-text').textContent
            };
            
            // Fechar a tray
            product.querySelector('.product-tray').style.display = 'none';
            
            // Abrir checkout
            openCheckout(productData);
        });
    });
});

// Calcular automaticamente ao pressionar Enter no campo de valor
const valorInput = document.getElementById('valor');
if (valorInput) {
    valorInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            calcularJuros();
        }
    });
}

// Carregar dados dos produtos
async function loadProductsData() {
    try {
        const response = await fetch('/store/assets/data/products.json');
        productsData = await response.json();
        initializeProducts();
    } catch (error) {
        console.error('Erro ao carregar dados dos produtos:', error);
    }
}

// Inicializar produtos na página
function initializeProducts() {
    // Inicializar produtos do Genshin Impact
    initializeCategoryProducts('genshin', 'cristais', 'Cristais Gênesis');
    initializeCategoryProducts('genshin', 'passes', 'Passes e Bençãos');
    initializeCategoryProducts('genshin', 'hacks', 'Hacks e Bypass');
    
    // Inicializar produtos do Star Rail
    initializeCategoryProducts('starrail', 'fragmentos', 'Fragmentos Oníricos');
    initializeCategoryProducts('starrail', 'passes', 'Passes e Suprimentos');
    initializeCategoryProducts('starrail', 'hacks', 'Hacks e Bypass');
    
    // Inicializar produtos do Wuthering Waves
    initializeCategoryProducts('wuwa', 'hacks', 'Hacks e Bypass');
    
    // Inicializar produtos do Zenless Zone Zero
    initializeCategoryProducts('zzz', 'monocromos', 'Monocromos');
    initializeCategoryProducts('zzz', 'passes', 'Passes e Assinaturas');
    initializeCategoryProducts('zzz', 'hacks', 'Hacks e Bypass');
    
    // Manter conteúdo original para categorias vazias
    preserveEmptyCategories();
}

// Manter o conteúdo original para categorias sem dados no JSON
function preserveEmptyCategories() {
    // Para Wuwa - Lunites e Passes
    const wuwaLunites = document.querySelector('#wuwa .product-list h4:contains("Lunites")')?.closest('.product-list');
    const wuwaPasses = document.querySelector('#wuwa .product-list h4:contains("Passes e Assinaturas")')?.closest('.product-list');
    
    // Verificar se essas categorias têm dados no JSON
    const wuwaHasLunites = productsData.wuwa?.lunites?.length > 0;
    const wuwaHasPasses = productsData.wuwa?.passes?.length > 0;

    // Restaurar conteúdo original se não houver dados no JSON
    if (wuwaLunites && !wuwaHasLunites) {
        wuwaLunites.innerHTML = '<h4>Lunites</h4><div class="product-none"><p>Em Breve.</p></div>';
    }
    
    if (wuwaPasses && !wuwaHasPasses) {
        wuwaPasses.innerHTML = '<h4>Passes e Assinaturas</h4><div class="product-none"><p>Em Breve.</p></div>';
    }
}

// Inicializar produtos de uma categoria específica
function initializeCategoryProducts(game, category, title) {
    const section = document.getElementById(game);
    if (!section) return;
    
    const categoryData = productsData[game]?.[category];
    
    // Se não houver dados no JSON, manter o conteúdo original (não fazer nada)
    if (!categoryData || categoryData.length === 0) {
        return;
    }
    
    // Encontrar a lista de produtos correspondente
    const productLists = section.querySelectorAll('.product-list');
    let targetList = null;
    
    productLists.forEach(list => {
        if (list.querySelector('h4')?.textContent === title) {
            targetList = list;
        }
    });
    
    if (!targetList) return;
    
    // Limpar conteúdo existente (exceto o título)
    const titleElement = targetList.querySelector('h4');
    targetList.innerHTML = '';
    targetList.appendChild(titleElement);
    
    // Adicionar produtos
    categoryData.forEach(product => {
        const productElement = createProductElement(product, game, category);
        targetList.appendChild(productElement);
    });
}

// Criar elemento de produto
function createProductElement(product, game, category) {
    const productDiv = document.createElement('div');
    productDiv.className = `product ${product.hasTray ? 'has-tray' : ''}`;
    
    let productHTML = `
        <div class="product-main">
            ${product.hasTray ? '<div class="tray-indicator"></div>' : ''}
            <img src="${product.image}" alt="${product.id}">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                ${product.bonus ? `<div class="product-bonus">${product.bonus}</div>` : ''}
                ${product.oldPrice ? `<div class="product-old-price">R$ ${product.oldPrice.toFixed(2)}</div>` : ''}
                <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            </div>
            <button class="buy-btn" onclick="openCheckout('${game}', '${category}', '${product.id}')">Comprar</button>
        </div>
    `;
    
    if (product.hasTray && product.durations) {
        productHTML += `
            <div class="product-tray">
                <div class="tray-content">
                    <div class="tray-title">${category === 'hacks' && product.durations.length === 1 ? 'Somente uma opção disponível:' : 'Escolha a duração do acesso:'}</div>
                    <div class="duration-options">
        `;
        
        product.durations.forEach(duration => {
            const durationPrice = duration.price > 0 ? `R$ ${duration.price.toFixed(2)}` : '';
            productHTML += `
                <div class="duration-option" onclick="openCheckoutWithDuration('${game}', '${category}', '${product.id}', '${duration.text}', ${duration.price}, ${duration.oldPrice || 'null'})">
                    <span class="duration-text">${duration.text}</span>
                    ${duration.oldPrice ? `<span class="duration-old-price">R$ ${duration.oldPrice.toFixed(2)}</span>` : ''}
                    <span class="duration-price">${durationPrice}</span>
                </div>
            `;
        });
        
        productHTML += `
                    </div>
                </div>
            </div>
        `;
    }
    
    productDiv.innerHTML = productHTML;
    return productDiv;
}

// Função para abrir checkout com dados do JSON
function openCheckout(game, category, productId) {
    const product = productsData[game]?.[category]?.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('checkoutImage').src = product.image;
    document.getElementById('checkoutName').textContent = product.name;
    
    // Se não tem tray, usar preço base
    if (!product.hasTray) {
        document.getElementById('checkoutDuration').textContent = '';
        document.getElementById('checkoutPrice').textContent = `R$ ${product.price.toFixed(2)}`;
        
        // Armazenar dados da compra
        currentCheckoutData = {
            game: game,
            category: category,
            productId: productId,
            productName: product.name,
            duration: '',
            price: product.price,
            image: product.image
        };
    } else {
        // Se tem tray, usar primeira opção como padrão
        const firstDuration = product.durations[0];
        document.getElementById('checkoutDuration').textContent = firstDuration.text;
        document.getElementById('checkoutPrice').textContent = `R$ ${firstDuration.price.toFixed(2)}`;
        
        // Armazenar dados da compra
        currentCheckoutData = {
            game: game,
            category: category,
            productId: productId,
            productName: product.name,
            duration: firstDuration.text,
            price: firstDuration.price,
            image: product.image
        };
    }
    
    document.getElementById('checkoutPopup').style.display = 'flex';
}

// Função para abrir checkout com duração específica
function openCheckoutWithDuration(game, category, productId, durationText, durationPrice, durationOldPrice) {
    const product = productsData[game]?.[category]?.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('checkoutImage').src = product.image;
    document.getElementById('checkoutName').textContent = product.name;
    document.getElementById('checkoutDuration').textContent = durationText;
    document.getElementById('checkoutPrice').textContent = `R$ ${durationPrice.toFixed(2)}`;
    
    document.getElementById('checkoutPopup').style.display = 'flex';
    
    // Armazenar os dados da compra para uso posterior
    currentCheckoutData = {
        game: game,
        category: category,
        productId: productId,
        productName: product.name,
        duration: durationText,
        price: durationPrice,
        image: product.image
    };
}

// Função para selecionar duração
function selectDuration(element, game, category, productId, durationText) {
    const product = productsData[game]?.[category]?.find(p => p.id === productId);
    if (!product || !product.durations) return;
    
    const duration = product.durations.find(d => d.text === durationText);
    if (!duration) return;
    
    // Atualizar UI para mostrar seleção
    document.querySelectorAll('.duration-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
    
    // Atualizar preço principal se estiver no checkout
    if (document.getElementById('checkoutPopup').style.display === 'flex') {
        document.getElementById('checkoutDuration').textContent = durationText;
        document.getElementById('checkoutPrice').textContent = `R$ ${duration.price.toFixed(2)}`;
    }
}

// Carregar dados quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    loadProductsData();
});

// Inicializar exemplos com R$ 100,00
window.onload = function () {
    atualizarExemplos(100);
};

// Inicialização - estado inicial limpo
document.addEventListener('DOMContentLoaded', function () {
    // Todas as categorias começam fechadas
    closeAllFeatureCategories();
});

// Fechar a popup ao clicar fora dela
document.getElementById('popupOverlay').addEventListener('click', function (event) {
    if (event.target === this) {
        closePopup();
    }
});

// Fechar a popup com a tecla ESC
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});