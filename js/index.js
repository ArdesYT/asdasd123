const translations = {
    en: {
        navAbout: "About Me",
        navSkills: "Skills",
        navContact: "Contact",
        aboutTitle: "Lorem, ipsum.",
        aboutDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto deleniti nisi earum repellendus ullam maxime, iusto vero corrupti eveniet sequi et quidem reprehenderit magnam animi error deserunt, impedit cumque itaque quaerat voluptatum accusantium omnis ipsam! Est architecto ad nisi!`,
        usernameTitle: "Lorem, ipsum.",
        usernameDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt a illum quod maiores fugit totam cum quibusdam reprehenderit iure. Adipisci impedit ipsam vitae facere praesentium temporibus tempore fugiat obcaecati tenetur quidem, cumque, nobis ullam neque, animi explicabo ipsum architecto saepe? Fugit soluta nulla itaque voluptates odit repudiandae accusamus in qui a, temporibus, deserunt quam minus unde provident cumque quaerat suscipit!',
        skillsTitle: "Skills",
        contactTitle: "Contact",
        FooterP: "&copy; 2024 Adam Kovacs. All rights reserved.",
        themeButton: "Theme",
    },
    hu: {
        navAbout: "Rólam",
        navSkills: "Készségek",
        navContact: "Kapcsolat",
        aboutTitle: "Lorem, ipsum.",
        aboutDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto deleniti nisi earum repellendus ullam maxime, iusto vero corrupti eveniet sequi et quidem reprehenderit magnam animi error deserunt, impedit cumque itaque quaerat voluptatum accusantium omnis ipsam! Est architecto ad nisi!`,
        usernameTitle: "Lorem, ipsum.",
        usernameDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt a illum quod maiores fugit totam cum quibusdam reprehenderit iure. Adipisci impedit ipsam vitae facere praesentium temporibus tempore fugiat obcaecati tenetur quidem, cumque, nobis ullam neque, animi explicabo ipsum architecto saepe? Fugit soluta nulla itaque voluptates odit repudiandae accusamus in qui a, temporibus, deserunt quam minus unde provident cumque quaerat suscipit!',
        skillsTitle: "Ismeretek",
        contactTitle: "Kapcsolat",
        FooterP: "&copy; 2024 Adam Kovacs. Minden jog fenttartva.",
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
    document.getElementById('contact-link').textContent = translations[currentLanguage].navContact;  
    document.getElementById('about-title').textContent = translations[currentLanguage].aboutTitle;
    document.getElementById('about-description').innerHTML = translations[currentLanguage].aboutDescription;
    document.getElementById('username-title').textContent = translations[currentLanguage].usernameTitle;
    document.getElementById('username-description').textContent = translations[currentLanguage].usernameDescription;
    document.getElementById('skills-title').textContent = translations[currentLanguage].skillsTitle;
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