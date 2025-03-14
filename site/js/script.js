// Функция изменения цвета фона страницы
function toggleBackground() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
}

/* === Переключение языков === */
let currentLang = "ru";

const translations = {
  ru: {
    subtitle: "Человек-паук",
    bioTitle: "Биография",
    bioText: "Питер Паркер, известный как Человек-паук, получил свои суперспособности после укуса радиоактивного паука. Он борется с преступностью в Нью-Йорке, сохраняя баланс между личной жизнью и обязанностями героя.",
    abilitiesTitle: "Способности",
    ability1: "Сверхчеловеческая сила",
    ability2: "Ловкость и реакция",
    ability3: "«Паутина» для перемещения по городу",
    ability4: "Высокий интеллект и аналитические способности",
    learnMore: "Узнать больше можно на официальном сайте ",
    interactiveTitle: "Интерактивный элемент",
    toggleBackground: "Изменить цвет фона",
    videoTitle: "Видео о Spider-Man",
    footerText: "Проект размещён на GitHub Pages:",
    langToggle: "Switch to English"
  },
  en: {
    subtitle: "Spider-Man",
    bioTitle: "Biography",
    bioText: "Peter Parker, known as Spider-Man, got his superpowers after being bitten by a radioactive spider. He fights crime in New York while balancing his personal life with his responsibilities as a hero.",
    abilitiesTitle: "Abilities",
    ability1: "Superhuman strength",
    ability2: "Agility and reflexes",
    ability3: "Web-slinging to traverse the city",
    ability4: "High intelligence and analytical skills",
    learnMore: "Learn more on the official Marvel website.",
    interactiveTitle: "Interactive Element",
    toggleBackground: "Change background color",
    videoTitle: "Spider-Man Video",
    footerText: "Project hosted on GitHub Pages:",
    langToggle: "Переключиться на русский"
  }
};

function toggleLanguage() {
  currentLang = currentLang === "ru" ? "en" : "ru";

  document.getElementById("subtitle").innerText = translations[currentLang].subtitle;
  document.getElementById("bioTitle").innerText = translations[currentLang].bioTitle;
  document.getElementById("bioText").innerText = translations[currentLang].bioText;
  document.getElementById("abilitiesTitle").innerText = translations[currentLang].abilitiesTitle;
  document.getElementById("ability1").innerText = translations[currentLang].ability1;
  document.getElementById("ability2").innerText = translations[currentLang].ability2;
  document.getElementById("ability3").innerText = translations[currentLang].ability3;
  document.getElementById("ability4").innerText = translations[currentLang].ability4;
  
  document.getElementById("learnMore").innerHTML =
    translations[currentLang].learnMore +
    '<a href="https://www.marvel.com/characters/spider-man/on-screen" target="_blank">Marvel</a>';
    
  document.getElementById("interactiveTitle").innerText = translations[currentLang].interactiveTitle;
  document.getElementById("bgToggle").innerText = translations[currentLang].toggleBackground;
  document.getElementById("videoTitle").innerText = translations[currentLang].videoTitle;
  document.getElementById("footerText").innerText = translations[currentLang].footerText;
  document.getElementById("langToggle").innerText = translations[currentLang].langToggle;
}
