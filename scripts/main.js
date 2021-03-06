function scroll() {
  var scroll = window.pageYOffset;
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

  if (aboutOffset <= scroll) {
    about.classList.add("active");
    if (skillsOffset - 1 <= scroll) {
      about.classList.remove("active");
      skills.classList.add("active");
      if (projectsOffset <= scroll) {
        skills.classList.remove("active");
        projects.classList.add("active");
        if (resumeOffset <= scroll) {
          projects.classList.remove("active");
          resume.classList.add("active");
        }
      }
    }
  } else {
    home.classList.add("active");
  }
}

function displayProject(test) {
  document.getElementById("project-disp").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("project-disp").innerHTML += '<object type="text/html" data="' + test + '"></object>';
}

function closeDisplayProject() {
  document.getElementById("project-disp").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("project-disp").innerHTML ='<a id="project-close" onclick="closeDisplayProject()">X</a>';
}

window.onscroll = function() {scroll()};
