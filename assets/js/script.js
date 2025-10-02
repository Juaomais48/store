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
    const header = document.querySelector('.page-header');
    if (header) {
        header.remove();
    }
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