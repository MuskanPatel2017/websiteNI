const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const companyOverview = document.querySelector(".company-overview");
const productRange = document.querySelector(".product-range");
const globalExport = document.querySelector(".global-export");
const contactBanner = document.querySelector(".contact-banner");
const footer = document.querySelector(".footer");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".close-button");
let isMenuOpen = false;

menuToggle.addEventListener('click', () => {
    header.style.display = 'none';
    hero.style.display = 'none';
    companyOverview.style.display = 'none';
    productRange.style.display = 'none';
    globalExport.style.display = 'none';
    contactBanner.style.display = 'none';
    footer.style.display = 'none';
    menu.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    header.style.display = 'flex';
    hero.style.display = 'block';
    companyOverview.style.display = 'block';
    productRange.style.display = 'block';
    globalExport.style.display = 'block';
    contactBanner.style.display = 'block';
    footer.style.display = 'block';
    menu.style.display = 'none';
});
