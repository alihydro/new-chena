


window.addEventListener("scroll", function () {
  const section2 = document.getElementById('section_3');

  const title = section2.querySelector('#title');
  const text = section2.querySelector('#text');


  const section2Top = section2.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (section2Top < screenHeight && section2Top > 0) {
    // section2.classList.add("translation-animation");

    title.classList.add("translation-animation");
    text.classList.add("translation-animation-down");
  }


  const boxes = document.querySelectorAll('.box'); // Select all boxes
  // const screenHeight = window.innerHeight;

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < screenHeight && boxTop > 0) {
      if (index < 3) {
        box.classList.add("box-animation");
      } else {
        box.classList.add("box-animation");
      }
    }
  });



  const portfolio_images = document.querySelectorAll('.portfolio-image'); // Select all boxes
  // const screenHeight = window.innerHeight;

  portfolio_images.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < screenHeight && boxTop > 0) {
      if (index < 3) {
        box.classList.add("img-animation");
      } else {
        box.classList.add("img-animation");
      }
    }
  });




  const portfolio_title = document.querySelector('.portfolio_title');


  const portfolio_titleTop = portfolio_title.getBoundingClientRect().top;

  if (portfolio_titleTop < screenHeight && portfolio_titleTop > 0) {
    // section2.classList.add("translation-animation");

    portfolio_title.classList.add("portfolio-title-animation");
  }

  


  const section4 = document.getElementById('section_4');
  const section4Top = section4.getBoundingClientRect().top;

  if (section4Top < screenHeight && section4Top > 0) {
    // section2.classList.add("translation-animation");

    section4.classList.add("box-animation");
  }


  const section5 = document.getElementById('section_5');
  const h5 = section5.querySelector("h5");
  const p = section5.querySelector("p");
  const button = section5.querySelector("button");


  const section5Top = section5.getBoundingClientRect().top;

  if (section5Top < screenHeight && section5Top > 0) {
    // section2.classList.add("translation-animation");

    h5.classList.add("footer-sub-title-animation");
    p.classList.add("footer-title-animation");
    button.classList.add("footer-sous-title-animation");
  }



});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");
  const section1 = document.querySelector("header");

  scrollToTopButton.addEventListener("click", function () {
    const section1Top = section1.getBoundingClientRect().top;
    const offset = section1Top + window.scrollY;
    
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });




});


function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);

  if (section) {
    const sectionTop = section.getBoundingClientRect().top;
    const offset = sectionTop + window.scrollY;
    
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");
  const work = document.getElementById("work");
  const about = document.getElementById("about");
  const service = document.getElementById("service");


  
  scrollToTopButton.addEventListener("click", function () {
    scrollToSection("#header");
  });

  work.addEventListener("click", function () {
    scrollToSection(".portfolio");
  });
  about.addEventListener("click", function () {
    scrollToSection("#section_4");
  });

  Home.addEventListener("click", function () {
    scrollToSection("#section99");
  });




  const work_mob = document.getElementById("work_mob");
  const about_mob = document.getElementById("about_mob");
  const service_mob = document.getElementById("Home_mob");


  
  scrollToTopButton.addEventListener("click", function () {
    scrollToSection("#header");
  });

  work_mob.addEventListener("click", function () {
    scrollToSection(".portfolio");
  });
  about_mob.addEventListener("click", function () {
    scrollToSection("#section_4");
  });

  Home_mob.addEventListener("click", function () {
    scrollToSection("#section1");
  });




  




});

