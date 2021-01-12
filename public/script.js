// Floating action button

const body = document.body, html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

document.addEventListener('scroll', () => {
  const position = window.scrollY;
  if (position > height * 0.2) {
    document.getElementById("fab").classList.add("showing");
    document.getElementById("fab").classList.remove("hidden");
  } else {
    document.getElementById("fab").classList.add("hidden");
    document.getElementById("fab").classList.remove("showing");
  }
});

document.getElementById("fab").addEventListener("click", () => {
  const el = document.getElementById("start");
  const y = el.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: y + -65 });
});

// Collapsible navbar

let navbarMenuShowing = false;
document.getElementById("navbar-menu").addEventListener("click", () => {
  navbarMenuShowing = !navbarMenuShowing;
  document.getElementById("navbar-menu").src = `icons/${navbarMenuShowing ? "menu-open.svg" : "menu.svg"}`;
  var content = document.getElementById("navbar-menu-collapsible-content");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    const el = document.getElementById("navbar-menu-collapsible-content");
    const y = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y + -65 });
  }
});

// Project cards

function redirect(link) {
  window.location.href = link;
}

[...document.querySelectorAll('[data-link]')].forEach(linkItem => {
  linkItem.addEventListener("click", () => {
    redirect(linkItem.dataset.link);
  });
});

// Localization

let activeLang = "en";

const translations = {
  hr: {
    aboutMe: "O meni",
    experience: "Radno iskustvo",
    education: "Obrazovanje",
    technologies: "Tehnologije",
    projects: "Projekti",
    contact: "Kontakt",
    aboutPartOne: "Programer sam s jako velikom znatiželjom za stvaranjem web aplikacija i težim što bolje unaprijediti svoje znanje i sebe kao osobu.",
    aboutPartTwo: "Rođen sam u Hrvatskoj i odrastao na selu s budućim namjerama da pronađem karijeru u znanstvenim poljima vezanim uz računala i elektrotehniku, početak toga našao sam u Tehničkoj školi Ruđera Boškovića, Zagreb gdje sam proveo 4 godine i krajem svojeg srednjoškolskog obrazovanja dobio titulu Tehničara za računarstvo.",
    aboutPartThree: "U to vrijeme, međutim, sam se počeo zanimati za teme poput programiranja i razvoja igara te zatim krenuo s pohađanjem Tehničkog veleučilišta u Zagrebu, tamo sam znantno poboljšao svoje sposobnosti i u međuvremenu našao dva posla kao junior programer. Nakon 3 godine dobio sam titulu Stručnog prvostupnika informacijskih tehnologija (bacc. ing. techn. inf.).",
    aboutPartFour: "Trenutno dovršavam svoje visoko obrazovanje u polju Informatičkih znanosti s ciljem dobivanja titule Stručni specijalist inženjer informacijskih tehnologija. (struc. spec. ing. techn. inf.).",
    juniorSoftwareDeveloper: "Junior razvojni inžinjer",
    present: "Trenutačno vrijeme",
    june: "Srpanj",
    omegaExperience: "Razvoj aplikacija za razne tvrtke Grada Zagreba, uključujući Čistoću, Hrvatske autoceste i Gradsku plinaru koristeći pritom fullstack tehnologije.",
    may: "Svibanj",
    january: "Siječanj",
    maideaExperience: "Razvoj aplikacija koristeći fullstack tehnologije.",
    tvz: "Tehničko veleučilište u Zagrebu",
    mastersDegree: "Stručni specijalist inženjer informacijskih tehnologija. (struc. spec. ing. techn. inf.)",
    bachelorsDegree: "Stručni prvostupnik informacijskih tehnologija (bacc. ing. techn. inf.)",
    ruder: "Tehnička škola Ruđera Boškovića",
    computerTechnician: "Tehničar za računarstvo",
    other: "Ostalo",
    lmsDescription: "Sustav za upravljanje učenjem napravljeno pomoću VueJS2, .NET Core i MSSQL.",
    finappDescription: "Aplikacija za praćenje financija izrađena s Vue 3, NestJS, GraphQL I MySQL.",
    finappFlutterDescription: "Mobilna aplikacija za praćenje financija izrađena pomoću Fluttera.",
    downloaderDescription: "Program za preuzimanje pjesama koristeći .NET Core i LAST.FM API sa sučeljem temeljenim na Vue i Electronom.",
    onexprojektiDescription: "Stranica za tvrtku Onexprojekti izrađena s VueJS i PHPom.",
    heroesOfCrimsonDescription: "Bullet hell RPG rougelike napravljen u Game Maker Studiju 2."
  },
  en: {
    aboutMe: "About me",
    experience: "Experience",
    education: "Education",
    technologies: "Technologies",
    projects: "Projects",
    contact: "Contact",
    aboutPartOne: "I am a developer with a large interest in creating applications on the web and improving my knowledge and abilities as a person.",
    aboutPartTwo: "Born in Croatia, I grew up in a rural farm area with future intentions of seeking a career in computer technologies which was later granted to me via the technical school of Ruđer Bošković where I spent 4 years of my secondary education and in the end receiving the title of Computer technician.",
    aboutPartThree: "During this time, however, I began getting interested in other topics such as programming and developing video games and thus enlisted in the Zagreb University of applied sciences, further improving my skills, getting two jobs as a junior developer and after 3 years getting the title of Bachelor of Engineering in Information Technology (bacc. ing. techn. inf.).",
    aboutPartFour: "In the present time I am finishing my education in the field of Information technology with the intention of acquiring a Master's degree (struc. spec. ing. techn. inf.).",
    juniorSoftwareDeveloper: "Junior software developer",
    present: "Present",
    june: "June",
    omegaExperience: "Software development on multiple company projects (Čistoća, Hrvatske Autoceste, Gradska plinara Zagreb, ePlatforma) using fullstack technologies.",
    may: "May",
    january: "January",
    maideaExperience: "Software development using fullstack technologies.",
    tvz: "Zagreb university of applied sciences, Zagreb",
    mastersDegree: "Master's degree (struc. spec. ing. techn. inf.)",
    bachelorsDegree: "Bachelor of Engineering in Information Technology (bacc. ing. techn. inf.)",
    ruder: "Technical school of Ruđer Bošković",
    computerTechnician: "Computer technician",
    other: "Other",
    lmsDescription: "Learning management system made with VueJS 2 on the frontend and .NET Core on the backend with MSSQL as the database.",
    finappDescription: "App for managing finances made using Vue 3 Composition API on the frontend and NestJS and GraphQL on the backend with MySQL as the database.",
    finappFlutterDescription: "Finapp (https://github.com/MatijaNovosel/fin-app) mobile implementation made with Flutter.",
    downloaderDescription: "Song downloader made with .NET Core and LAST FM using Electron and Vue for the frontend.",
    onexprojektiDescription: "Company website made with VueJS and PHP.",
    heroesOfCrimsonDescription: "Bullet hell RPG roguelike created using Game Maker Studio 2."
  }
};

function changeLanguage(lang = "hr") {
  if (lang == activeLang) return;
  activeLang = lang;
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  nodes.forEach(node => {
    node.textContent = translations[lang][node.dataset.i18n];
  });
}

document.getElementById("hr").addEventListener("click", () => changeLanguage());
document.getElementById("en").addEventListener("click", () => changeLanguage("en"));

document.getElementById("hr-mobile").addEventListener("click", () => changeLanguage());
document.getElementById("en-mobile").addEventListener("click", () => changeLanguage("en"));

// Anchor setting and smooth scrolling

const href = window.location.href;

if (href.indexOf("#") != -1) {
  const currentId = href.slice(href.indexOf("#") + 1, href.length);
  if (currentId.length != 0) {
    document.getElementById(currentId + "-hashtag").classList.add("hashtag-visible");
    document.getElementById(currentId + "-hashtag").classList.add("selected");
    document.getElementById(currentId + "-hashtag").classList.remove("hashtag-invisible");

    const el = document.getElementById(currentId);
    const y = el.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({ top: y + -65 });
  }
}

[...document.getElementsByClassName("navbar-link")].forEach(navbarLink => {
  navbarLink.addEventListener("click", (e) => {
    const id = e.target.id.split("-")[0];

    const el = document.getElementById(id);
    const y = el.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({ top: y + -65 });
  })
});

function headerClicked(e) {
  if (document.getElementsByClassName("selected").length != 0) {
    if (document.getElementsByClassName("selected")[0].id == e.srcElement.id + "-hashtag") {
      document.getElementsByClassName("selected")[0].classList.add("hashtag-invisible");
      document.getElementsByClassName("selected")[0].classList.remove("selected");
      window.history.pushState('data', 'title', '#')
      return;
    }
    document.getElementsByClassName("selected")[0].classList.add("hashtag-invisible");
    document.getElementsByClassName("selected")[0].classList.remove("selected");
  }

  const element = e.srcElement;
  document.getElementById(element.id + "-hashtag").classList.add("hashtag-visible");
  document.getElementById(element.id + "-hashtag").classList.add("selected");
  document.getElementById(element.id + "-hashtag").classList.remove("hashtag-invisible");

  window.history.pushState('data', 'title', '#' + element.id)

  const el = document.getElementById(element.id + "-hashtag");
  const y = el.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({ top: y + -65 });
}

const headers = [...document.getElementsByClassName("header-section-title")];

headers.forEach(header => {
  header.addEventListener("click", headerClicked);
  header.addEventListener("mouseover", () => {
    if (!document.getElementById(header.id + "-hashtag").classList.contains("selected")) {
      document.getElementById(header.id + "-hashtag").classList.add("hashtag-visible");
      document.getElementById(header.id + "-hashtag").classList.remove("hashtag-invisible");
    }
  });
  header.addEventListener("mouseout", () => {
    if (!document.getElementById(header.id + "-hashtag").classList.contains("selected")) {
      document.getElementById(header.id + "-hashtag").classList.remove("hashtag-visible");
      document.getElementById(header.id + "-hashtag").classList.add("hashtag-invisible");
    }
  });
});
