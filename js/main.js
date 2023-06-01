const burgerMenu =  document.querySelector(".nav-list"); // боковое бургер меню
const burgerMenuClose = document.querySelector(".burger-menu-close"); // кнопка закрыть меню
const shadow = document.querySelector(".shadow"); // тень
const header = document.querySelector(".header"); // хедер, чтобы закрывать меню при клике на тень
const burgerLink = document.querySelector(".btn-burger-menu") // кнопка бургер меню
const navItems = document.querySelectorAll(".nav-link"); // строка меню


function showBurgerMenu(evt) {
    evt.preventDefault();
    burgerMenu.classList.add("nav-active");
    shadow.classList.add("shadow-active");
    burgerMenuClose.classList.add("burger-active")
}

function closeBurgerMenu(evt) {
    evt.preventDefault();
    burgerMenu.classList.remove("nav-active");
    shadow.classList.remove("shadow-active");
    burgerMenuClose.classList.remove("burger-active")
}

/* показать бургер меню при клике мышкой на ссылку*/
burgerLink.addEventListener("click", function (evt) {
    showBurgerMenu(evt)
});

/* показать бургер меню при нажатии энтер*/
burgerLink.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 13) {
        showBurgerMenu(evt);
    }
});

/* закрыть окно при нажатии кнопки закрыть*/
burgerMenuClose.addEventListener("click", function (evt) {
    closeBurgerMenu(evt);
});

/* закрыть окно при нажатии на эск*/
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (burgerMenu.classList.contains("nav-active")) {
            closeBurgerMenu(evt);
        }
    }
});

/* закрыть окно при нажатии на тень*/
shadow.addEventListener("click", function(evt) {
    if (shadow.classList.contains("shadow-active")) {
        closeBurgerMenu(evt);
    }
});

/* закрыть окно при нажатии на ссылку*/
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
        burgerMenu.classList.remove("nav-active");
        shadow.classList.remove("shadow-active");
        burgerMenuClose.classList.remove("burger-active")
    });
}


