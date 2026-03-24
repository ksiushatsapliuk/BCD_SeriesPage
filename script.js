// функція «Діалог з користувачем»
// використовує: змінні, умовне розгалуження, цикли, prompt/confirm/alert
function dialogWithUser() {
    let name = "";
    while (name.trim() === "") {
        name = prompt("Hello! What's your name?");
        if (name.trim() === "") {
            alert("You have name! Try again!");
        }
    }

    let favCharacter = prompt(`Glad to see you, ${name}! What's your favourite character?`);

    let reaction = `Great choice!`;

    // продовження
    let wantMore = confirm(`${reaction}\n\nDo you want to learn more about the series "Why Women Kill"?`);

    if (wantMore) {
        // for: виводить 3 факти про серіал
        let facts = [
            "The series is created by Marc Cherry, the creator of Desperate Housewives.",
            "Each season is a separate anthology with new characters and eras.",
            "The series explores themes of betrayal, ambition, and societal expectations of women."
        ];

        let message = `3 facts about "Why Women Kill":\n\n`;
        for (let i = 0; i < facts.length; i++) {
            message += `${i + 1}. ${facts[i]}\n`;
        }
        alert(message);
    } else {
        alert(`Okay, ${name}! Good luck!`);
    }
}


// функція виводу інформації про розробника
// «посада» має значення за замовчуванням
function showDeveloperInfo(lastName, firstName, position = "Student") {
    let info = `Developer Info:\n\n`
             + `Name:     ${firstName}\n`
             + `Last name: ${lastName}\n`
             + `Position:   ${position}`;
    alert(info);
}


// функція порівняння двох рядків
// більший (за довжиною) виводить через alert
function compareTwoStrings(str1, str2) {
    let result;
    if (str1.length > str2.length) {
        result = `Longer string: "${str1}" (${str1.length} symbols)`;
    } else if (str2.length > str1.length) {
        result = `Longer string: "${str2}" (${str2.length} symbols)`;
    } else {
        result = `String are equal: "${str1}" і "${str2}" (по ${str1.length} symbols)`;
    }
    alert(result);
}


// зміна фону сторінки через document на 30 секунд
function changeBackgroundFor30s() {
    const originalColor = document.body.style.backgroundColor;
    // новий фон
    document.body.style.backgroundColor = "#f861da";

    alert("Background changed for 30 seconds!");

    // 30 секунд
    setTimeout(function () {
        document.body.style.backgroundColor = originalColor || "#d770b7";
        alert("Background changed back!");
    }, 30000);
}


// переадресація через location
function redirectToWikipedia() {
    let confirmed = confirm("Go to Wikipedia about «Why Women Kill»?");
    if (confirmed) {
        // BOM: об'єкт location - перенаправлення на зовнішню сторінку
        location.href = "https://en.wikipedia.org/wiki/Why_Women_Kill";
    }
}

/////////////////////////////

// getElementById та querySelectorAll
// innerHTML, outerHTML, textContent, nodeValue / data
function domInspector() {
    // getElementById - знаходимо заголовок сторінки
    let heading = document.getElementById("about");
 
    // innerHTML - HTML-вміст елемента
    alert("innerHTML:\n" + heading.innerHTML);
 
    // outerHTML - елемент разом із самим тегом
    alert("outerHTML:\n" + heading.outerHTML);
 
    // textContent - лише текст без тегів
    alert("textContent:\n" + heading.textContent);
 
    // nodeValue / data - значення текстового вузла (firstChild)
    let textNode = heading.firstChild;
    alert("nodeValue:\n" + textNode.nodeValue);
 
    // querySelectorAll - всі посилання в навігації
    let links = document.querySelectorAll("nav a");
    let info = "Nav links (" + links.length + "):\n";
    links.forEach(function(link) {
        info += "• " + link.textContent + " → " + link.href + "\n";
    });
    alert(info);
}


// document.createElement, createTextNode
// append, prepend, after, replaceWith, remove
function addDynamicContent() {
    // createElement - створюємо новий блок
    let block = document.createElement("div");
    block.style.cssText = "background:#ffe3fa; border:2px solid #830066; border-radius:10px; padding:15px; margin:15px auto; max-width:700px; text-align:center;";
    block.id = "dynamic-block";
 
    // createTextNode - текстовий вузол для заголовка
    let h = document.createElement("h3");
    h.appendChild(document.createTextNode("YOUR MESSAGE"));
    h.style.color = "#370024";
 
    let p = document.createElement("p");
    p.textContent = "You are the best fan ever!";
 
    // append — додаємо h3 і p до блоку
    block.append(h, p);
 
    // Кнопка видалення
    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.style.cssText = "background:#ffe3fa; border:2px solid #830066; border-radius:10px;"
    btn.onclick = function() { block.remove(); }; // remove — видалення блоку
    block.append(btn);
 
    // prepend — додаємо мітку на початок блоку
    let label = document.createElement("b");
    label.textContent = "NEW! ";
    block.prepend(label);
 
    // after — вставляємо блок після <hr>
    let hr = document.querySelector("hr");
    hr.after(block);
 
    // replaceWith — замінюємо заголовок оновленим
    let h2 = document.createElement("h3");
    h2.appendChild(document.createTextNode("YOUR HIDDEN MESSAGE"));
    h2.style.color = "#370024";
    h.replaceWith(h2);
}


// ІНІЦІАЛІЗАЦІЯ — виконується після завантаження DOM

document.addEventListener("DOMContentLoaded", function () {
    // запускаємо діалог з користувачем тільки на головній сторінці
    // (перевіряємо наявність елемента #about, що є лише в index.html)
    if (document.getElementById("about")) {
        // затримка, щоб сторінка встигла повністю завантажитись
        setTimeout(dialogWithUser, 500);
    }
});


// ============================================================
// ЛАБ 7 — ЗАВДАННЯ 1

// --- 1а. oбробник через атрибут (onclick="onLogoClick()" в HTML) ---
// викликається прямо з атрибута onclick на елементі #logo-img
function onLogoClickAttr(){
    alert("You clicked the logo!\nWelcome to Why Women Kill fan page.");
}

// --- 1б. oбробник через властивість ---
function onLogoClickProp(){
    alert("Yeah, that text is blue, just like a logo)");
}

const blueText = document.getElementById("blue-text");
blueText.onclick = onLogoClickProp;

// --- 1в. обробники addEventListener
const pAboutText = document.getElementById("p-about-text");

function onPAboutTextClickOne(){
    alert("The main genre is black comedy drama.");
}

function onPAboutTextClickTwo(){
    alert("The director is Mark Cherry.");
}

function onPAboutTextClickThree(){
    alert("The main problem is marital infidelity.");
}

pAboutText.addEventListener("click", onPAboutTextClickOne);
pAboutText.addEventListener("click", onPAboutTextClickTwo);
pAboutText.addEventListener("click", onPAboutTextClickThree);

// ---1г. призначено об’єкт за допомогою addEventListener, метод handleEvent, виведено елемент, 
// на якому спрацював обробник, використовуючи event.currentTarget
const handleObject = {
    handleEvent(event){
        alert("You clicked on" + event.currentTarget);
        event.currentTarget.style.backgroundColor = "#f861da";
    }
}

const introVideo = document.getElementById("intro");

introVideo.addEventListener("click", handleObject);

introVideo.addEventListener("click", function(){
    introVideo.removeEventListener("click", handleObject);
    alert("The intro headline is no longer clickable.");
});

// ---2а. підсвічування елементів списку при кліку миші
const genreList = document.getElementById("genreList");

genreList.onclick = function(event){
    if(event.target.tagName === "LI"){
        event.target.style.backgroundColor = "#f861da";
    }
}

// ---2б-в. меню + поведінка
const dataMenu = document.getElementById("data-menu")

const menuActions = {
    showPlot() {
        alert("You can use the Plot page to see it");
    },
    showCharacters() {
        alert("You can use the Characters page to see it");
    },
    showCast() {
        alert("You can use the Cast page to see it");
    },
    showFact() {
        alert("Fun fact: This series has a nonlinear storyline!");
    },
};

// один обробник для всього меню
dataMenu.addEventListener("click", function(event){
    // перевірка: клік саме по кнопці + існує метод
    if (event.target.classList.contains("js-btn")) {
    const action = event.target.dataset.action;

    if (action && menuActions[action]) {
        menuActions[action]();
    }
}
}
);
