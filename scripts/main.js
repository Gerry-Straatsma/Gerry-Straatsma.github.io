function start() {
  windowHeight = window.innerHeight;
  titleCont = document.getElementById('titleCont');
  titleContHeight = titleCont.offsetHeight;
  divideHeight = (windowHeight - titleContHeight) / 2.0;
  divideHeight = divideHeight + 20;
  titleCont.style.padding = divideHeight + "px 0px";
}


function scroll() {
  var scroll = window.pageYOffset;
  stickyNav(scroll);
  getIDLocations(scroll);
}

function getIDLocations(scroll) {
  skillsOffset = document.getElementById('skills').offsetTop;
  projectsOffset = document.getElementById('projects').offsetTop;
  resumeOffset = document.getElementById('resume').offsetTop;
  aboutOffset = document.getElementById('about').offsetTop;

  home = document.getElementById('homeOption');
  skills = document.getElementById('skillsOption');
  projects = document.getElementById('projectsOption');
  resume = document.getElementById('resumeOption');
  about = document.getElementById('aboutOption');

  home.classList.remove("active");
  skills.classList.remove("active");
  projects.classList.remove("active");
  resume.classList.remove("active");
  about.classList.remove("active");

  if (skillsOffset <= scroll) {
    skills.classList.add("active");
    if (projectsOffset <= scroll) {
      projects.classList.add("active");
      if (resumeOffset <= scroll) {
        resume.classList.add("active");
        if (aboutOffset <= scroll) {
          about.classList.add("active");
        }
      }
    }
  } else {
    home.classList.add("active");
  }
}

function stickyNav(scroll) {
  nav = document.getElementById('nav');
  navCont = document.getElementById('navCont');
  header = document.getElementById('header');
  header = header.offsetHeight;
  if (scroll > header - 200) {
    navCont.classList.add("sticky");
  } else {
    navCont.classList.remove("sticky");
  }
}

window.onload = start;
window.onscroll = function() {scroll()};
