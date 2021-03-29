const btn = document.getElementById("drop-down");
const info = document.getElementById("info");

btn.addEventListener ('click', function() {
    info.classList.toggle('active')
    btn.classList.toggle('active')
})

const btn1 = document.getElementById("drop-down1");
const info1 = document.getElementById("info1");

btn1.addEventListener ('click', function() {
    info1.classList.toggle('active')
    btn1.classList.toggle('active')
})

const btn2 = document.getElementById("drop-down2");
const info2 = document.getElementById("info2");

btn2.addEventListener ('click', function() {
    info2.classList.toggle('active')
    btn2.classList.toggle('active')
})

const btn3 = document.getElementById("drop-down3");
const info3 = document.getElementById("info3");

btn3.addEventListener ('click', function() {
    info3.classList.toggle('active')
    btn3.classList.toggle('active')
})

const btn4 = document.getElementById("drop-down4");
const info4 = document.getElementById("info4");

btn4.addEventListener ('click', function() {
    info4.classList.toggle('active')
    btn4.classList.toggle('active')
})

const btnContact = document.getElementById("contact-trigger")
const li = document.getElementById("linked");
const em = document.getElementById("email");
const tg = document.getElementById("telegram");

btnContact.addEventListener('click', function() {
    li.classList.add('active');
    em.classList.add('active');
    tg.classList.add('active');
})