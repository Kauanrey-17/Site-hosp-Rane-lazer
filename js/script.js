document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. MENU MOBILE (Para celular)
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Fecha o menu ao clicar (opcional)
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // ==========================================
    // 2. ABAS DO CARDÁPIO
    // ==========================================
    const categoryBtns = document.querySelectorAll('.menu-category-btn');
    const categoryContents = document.querySelectorAll('.menu-category-content');

    if(categoryBtns.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const targetCategory = btn.getAttribute('data-category');
                categoryContents.forEach(content => {
                    content.classList.add('hidden');
                    if (content.id === targetCategory) {
                        content.classList.remove('hidden');
                    }
                });
            });
        });
    }

    // ==========================================
// 3. NOVO CARROSSEL - 100% FUNCIONAL
// ==========================================

const items = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
let autoSlide;

function showImage(i) {
    items.forEach(img => img.classList.remove("active"));

    if (i < 0) index = items.length - 1;
    else if (i >= items.length) index = 0;
    else index = i;

    items[index].classList.add("active");
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        showImage(index + 1);
    }, 5000);
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        showImage(index + 1);
        resetAutoSlide();
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        showImage(index - 1);
        resetAutoSlide();
    });
}

// Inicia o auto-slide
resetAutoSlide();

});
