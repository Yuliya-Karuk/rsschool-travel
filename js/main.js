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
burgerLink.addEventListener("click", function(evt) {
    showBurgerMenu(evt)
});

/* показать бургер меню при нажатии энтер*/
burgerLink.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 13) {
        showBurgerMenu(evt);
    }
});

/* закрыть окно при нажатии кнопки закрыть*/
burgerMenuClose.addEventListener("click", function(evt) {
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
    if (shadow.classList.contains("shadow-active") && burgerMenu.classList.contains("nav-active")) {
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


/* POP UP LOGIN */

const loginLink = document.querySelector(".user-enter") // кнопка login
const login =  document.querySelector(".login"); // боковое бургер меню

function handlerLogin(evt) {
    evt.preventDefault();
    login.classList.toggle("login-active");
    shadow.classList.toggle("shadow-active");
}


/* показать бургер меню при клике мышкой на ссылку*/
loginLink.addEventListener("click", function (evt) {
    handlerLogin(evt);
});

/* показать бургер меню при нажатии энтер*/
loginLink.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 13) {
        handlerLogin(evt);
    }
});

/* закрыть окно при нажатии на эск*/
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (login.classList.contains("login-active") && shadow.classList.contains("shadow-active")) {
            handlerLogin(evt);
        }
    }
});

/* закрыть окно при нажатии на тень*/
shadow.addEventListener("click", function(evt) {
    if (login.classList.contains("login-active") && shadow.classList.contains("shadow-active")) {
        handlerLogin(evt);
    }
});

const changeLink = document.querySelector(".signup-link") // кнопка login
const socialBlock =  document.querySelector(".login-social"); // боковое бургер меню
const forgotLink =  document.querySelector(".login-forgot"); // боковое бургер меню
const loginTitle =  document.querySelector(".login-title"); // боковое бургер меню signin-button
const signButton =  document.querySelector(".sign-button"); 
const signText =  document.querySelector(".signup-text"); 
const inputEmail = document.querySelector("#email"); 
const inputPassword = document.querySelector("#password"); 

const loginPopup = {
    title: 'Log in to your account',
    button: 'Sign In',
    text: 'Don’t have an account?',
    link: 'Register'
}

const createPopup = {
    title: 'Create account',
    button: 'Sign Up',
    text: 'Already have an account?',
    link: 'Log in'
}

function changePopup(evt) {
    evt.preventDefault();
    socialBlock.classList.toggle("log-hidden")
    forgotLink.classList.toggle("log-hidden")
    let neededPopup = (evt.target.innerHTML === 'Register') ? createPopup : loginPopup
    loginTitle.innerHTML = neededPopup.title
    signButton.innerHTML = neededPopup.button
    signText.innerHTML = neededPopup.text
    changeLink.innerHTML = neededPopup.link
}

/* изменить popUp Login при клике на register*/
changeLink.addEventListener("click", changePopup);

/* вернуть первоначальный вид popUp Login при клике на Shadow*/
shadow.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (changeLink.innerHTML = "Log in") {
        socialBlock.classList.remove("log-hidden")
        forgotLink.classList.remove("log-hidden")
        let neededPopup = loginPopup
        loginTitle.innerHTML = neededPopup.title
        signButton.innerHTML = neededPopup.button
        signText.innerHTML = neededPopup.text
        changeLink.innerHTML = neededPopup.link
    }
});

signButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    alert(`E-mail: ${inputEmail.value} \nPassword: ${inputPassword.value}`)
});
