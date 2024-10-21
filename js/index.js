const translations = {
    en: {
        navAbout: "About Me",
        navSkills: "Skills",
        navContact: "Contact",
        navProject: "Projects",
        aboutTitle: "About Me",
        aboutDescription1: `Welcome to my portfolio! My name is Ádám Kovács, a 17-year-old software development student from Kaposvár. Currently, I am studying in the IT program at a local high school, where my passion for programming continues to grow.`,
        aboutDescription2: `I wrote my first program at the age of 11, and since then, I have made significant progress. I primarily work with Python and JavaScript, but I am constantly expanding my knowledge of new technologies. I enjoy creating web applications, games, and automated solutions that make everyday tasks easier.`,
        usernameTitle: "More about myself",
        usernameDescription1: 'In my projects, I focus not only on coding but also on problem-solving and creative thinking. My goal is to develop innovative solutions while continuously learning about the field.',
        usernameDescription2: 'Take a look around my portfolio, where I showcase some of my previous work and projects. Thank you for visiting!',
        skillsTitle: "Skills",
        contactTitle: "Contact",
        projectTitle: "Projects",
        FooterP: "&copy; 2024 Adam Kovacs. All rights reserved.",
        themeButton: "Theme",
    },
    hu: {
        navAbout: "Rólam",
        navSkills: "Készségek",
        navContact: "Kapcsolat",
        navProject: "Projektjeim",
        aboutTitle: "Rólam",
        aboutDescription1: `Üdvözöllek a portfóliómban! Kovács Ádám vagyok, 17 éves szoftverfejlesztő tanuló Kaposvárról. Jelenleg egy helyi középiskola informatika szakán tanulok, ahol a programozás iránti szenvedélyem egyre csak növekszik.`,
        aboutDescription2: `Az első programomat 11 évesen írtam, és azóta rengeteget fejlődtem. Főként Python és JavaScript nyelveken dolgozom, de folyamatosan bővítem a tudásomat új technológiák terén is. Szívesen készítek webalkalmazásokat, játékokat és automatizált megoldásokat, amelyek megkönnyítik a mindennapokat.`,
        usernameTitle: "Önmagam részletezése",
        usernameDescription1: 'A projektjeim során nemcsak a kódolásra, hanem a problémamegoldásra és a kreatív gondolkodásra is nagy hangsúlyt fektetek. Célom, hogy innovatív megoldásokat hozzak létre, és folyamatosan tanuljak a szakmáról.',
        usernameDescription2: 'Nézz körül a portfóliómban, ahol bemutatom néhány eddigi munkámat és projektjeimet. Köszönöm, hogy meglátogattál!',
        skillsTitle: "Ismeretek",
        contactTitle: "Kapcsolat",
        projectTitle: "Projektjeim",
        FooterP: "&copy; 2024 Adam Kovacs. Minden jog fenntartva.",
        themeButton: "Téma",
    }
  };
  
  let currentLanguage = 'en';
  
  function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hu' : 'en';
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
  }
  
  function updateLanguage() {
    document.getElementById('about-link').textContent = translations[currentLanguage].navAbout;
    document.getElementById('skills-link').textContent = translations[currentLanguage].navSkills;
    document.getElementById('project-link').textContent = translations[currentLanguage].navProject;
    document.getElementById('contact-link').textContent = translations[currentLanguage].navContact;  
    document.getElementById('about-title').textContent = translations[currentLanguage].aboutTitle;
    document.getElementById('about-description1').innerHTML = translations[currentLanguage].aboutDescription1;
    document.getElementById('about-description2').innerHTML = translations[currentLanguage].aboutDescription2;
    document.getElementById('username-title').textContent = translations[currentLanguage].usernameTitle;
    document.getElementById('username-description1').textContent = translations[currentLanguage].usernameDescription1;
    document.getElementById('username-description2').textContent = translations[currentLanguage].usernameDescription2;
    document.getElementById('skills-title').textContent = translations[currentLanguage].skillsTitle;
    document.getElementById('project-title').textContent = translations[currentLanguage].projectTitle;
    document.getElementById('contact-title').textContent = translations[currentLanguage].contactTitle;
    document.querySelector('.theme-btn').textContent = translations[currentLanguage].themeButton;
    document.getElementById('FooterP').innerHTML = translations[currentLanguage].FooterP;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const savedLanguage = localStorage.getItem('language') || 'en';
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage();
    }
  });
  
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
  
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });
  
  const backToTopButton = document.getElementById('backToTop');
  
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.classList.toggle('light-theme', newTheme === 'light');
    localStorage.setItem('theme', newTheme);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
  });