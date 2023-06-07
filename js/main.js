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
const login = document.querySelector(".login-wrapper"); // login popup
const accountLink = document.querySelector(".account-link")

function handlerLogin(evt) {
    evt.preventDefault();
    shadow.classList.toggle("shadow-active");
    login.classList.toggle("login-wrapper-active");
}

/* показать Login Popup при клике мышкой на ссылку*/
loginLink.addEventListener("click", function (evt) {
    handlerLogin(evt);
});

/* показать Login Popup при нажатии энтер*/
loginLink.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 13) {
        handlerLogin(evt);
    }
});

/* показать Login Popup при клике мышкой на ссылку*/
accountLink.addEventListener("click", function (evt) {
    handlerLogin(evt);
});

/* закрыть Login Popup при нажатии на эск*/
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (login.classList.contains("login-wrapper-active") && shadow.classList.contains("shadow-active")) {
            handlerLogin(evt);
        }
    }
});

/* закрыть Login Popup при нажатии на тень*/
shadow.addEventListener("click", function(evt) {
    if (login.classList.contains("login-wrapper-active") && shadow.classList.contains("shadow-active")) {
        handlerLogin(evt);
    }
});

const changeLink = document.querySelector(".signup-link") // ссылка, которая меняет вид popup
const socialBlock =  document.querySelector(".login-social"); // блок с кнопками соц. сетей
const forgotLink =  document.querySelector(".login-forgot"); // ссылка - забыли пароль
const loginTitle =  document.querySelector(".login-title"); // заголовок popup
const signButton =  document.querySelector(".sign-button"); // кнопка войти - Sugn In или Sign Up
const signText =  document.querySelector(".signup-text"); // текст о наличии аккаунта
const inputEmail = document.querySelector("#email"); // поле для email
const inputPassword = document.querySelector("#password"); // поле для password

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

/* вывести alert с введенными данными */
signButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    alert(`E-mail: ${inputEmail.value} \nPassword: ${inputPassword.value}`)
});

/* SLIDER */

const slider = document.querySelector(".destination-wrapper")
const item0 = document.querySelector("#item0")
const item1 = document.querySelector("#item1")
const item2 = document.querySelector("#item2")
const item3 = document.querySelector("#item3")
const item4 = document.querySelector("#item4")
const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")
let startActivePagination = document.querySelector(".btn-pag-active")
const pagination = document.querySelectorAll(".btn-pagination")


function slideLeft() {
    slider.classList.add('transition-left');
    startActivePagination.classList.remove('btn-pag-active')
}

function slideRight() {
    slider.classList.add('transition-right');
    startActivePagination.classList.remove('btn-pag-active')
}

 if (document.documentElement.clientWidth > 390) { 
    item1.addEventListener('click', slideRight); //слушатель событий

    item3.addEventListener('click', slideLeft); //слушатель событий
 }

if (document.documentElement.clientWidth <= 390) {
    startActivePagination.classList.remove("btn-pag-active") // восстанавливаем активный элемент в левое положение
    startActivePagination = pagination[0]
    startActivePagination.classList.add("btn-pag-active")
    item0.innerHTML = item2.innerHTML // перетасовывам слайды на первоначальное положение в макете
    item2.innerHTML = item1.innerHTML
    item1.innerHTML = item3.innerHTML
    item3.innerHTML = item0.innerHTML
    item4.innerHTML = item1.innerHTML

    arrowRight.addEventListener('click', slideLeft); //слушатель событий

    arrowLeft.addEventListener('click', slideRight); //слушатель событий
}

slider.addEventListener('animationend', (animation) => { // слушаем куда был сдвиг
	let itemBox = item2.innerHTML // активный слайдер

	if (animation.animationName === 'slide-right') { // если была анимация вправо
		slider.classList.remove('transition-right') // удаляем анимацию
		item2.innerHTML = item1.innerHTML // меняем внутренности слайдов
		item1.innerHTML = item0.innerHTML
		item3.innerHTML = itemBox
		item0.innerHTML = itemBox
		item4.innerHTML = item1.innerHTML

        if (startActivePagination.previousElementSibling !== null) { // сдвиг активного елемента в пагинаци
            startActivePagination.previousElementSibling.classList.add("btn-pag-active")
            startActivePagination = startActivePagination.previousElementSibling
        } else {
            startActivePagination = pagination[2]
            startActivePagination.classList.add("btn-pag-active")
        }
    }

    if (animation.animationName === 'slide-left') { // если была анимация влево
		slider.classList.remove('transition-left') // удаляем анимацию
		item2.innerHTML = item3.innerHTML // меняем внутренности слайдов
		item3.innerHTML = item4.innerHTML
		item1.innerHTML = itemBox
		item4.innerHTML = itemBox
		item0.innerHTML = item3.innerHTML

        if (startActivePagination.nextElementSibling !== null) { // сдвиг активного елемента в пагинации
            startActivePagination.nextElementSibling.classList.add("btn-pag-active")
            startActivePagination = startActivePagination.nextElementSibling
        } else {
            startActivePagination = pagination[0]
            startActivePagination.classList.add("btn-pag-active")
        }
    }
})
