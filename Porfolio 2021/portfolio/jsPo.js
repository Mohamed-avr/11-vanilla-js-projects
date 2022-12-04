// hamburger menu navbar 
// putting values 

const menu = document.querySelector(".btn-ham-menu");
const DivA  = document.querySelector(".one");
const DivB  = document.querySelector(".tow");
const DivC  = document.querySelector(".three");


// navbar value 
const NavbarFirst = document.querySelector(".navbar")

// start func with even 
menu.addEventListener("click" , function() {
    "use strict";

    NavbarFirst.classList.toggle("navbar-style");
    DivA.classList.toggle("xd-1");
    DivB.classList.toggle("xd-2");
    DivC.classList.toggle("xd-3");

});



// displing child in skills divs 
// put values 
const ButtonSFrontEnd = document.getElementById("buttun-skills-01");
const ButtonSDesign= document.getElementById("buttun-skills-02");



// put value of divs 
const SkillsSection = document.querySelector(".skills")
const SeFrontEnd = document.querySelector(".skills-dev");
const SeDesign = document.querySelector(".skills-design");

// start function 


ButtonSDesign.onclick = function() {
    SeFrontEnd.style.display = "none";
    SeDesign.style.display = "flex";
}   

ButtonSFrontEnd.onclick = function() {
    SeFrontEnd.style.display = "flex";
    SeDesign.style.display = "none";

}



//  start with projects device 
// put the values 

// buttons 
const btnFrontendProjects  = document.getElementById('button-01-project');
const btnDesignProjects = document.getElementById('button-02-project');  

//  contents 

const contentF = document.querySelector('.projects-frontEnd');
const contentD = document.querySelector('.Projects-design');


// start showing and hiding 

// first give show to any section 
contentF.classList.add("x-show");
contentD.classList.add("x-hide");
console.log(btnFrontendProjects);

// second functions  
//  if we click in btn 01 we hide content 02  with showing content 01 
// if we click in btn 02 we hide content 01 with showing content 02 

btnFrontendProjects.onclick = function() {
    "use strict";

contentF.classList.add("x-show");
contentF.classList.remove("x-hide");


contentD.classList.remove("x-show");
contentD.classList.add("x-hide");

}


btnDesignProjects.onclick = function() {
    "use strict";
contentF.classList.remove("x-show");
contentF.classList.add("x-hide");

contentD.classList.remove("x-hide");
contentD.classList.add("x-show");
}



//  next section contact with me 
// attrbiute maxlength 

// select items 
const TextAareaXone  = document.getElementById("text-area-01");
const spanOftext = document.getElementById("spam-textArea");
const Mxlingth  = TextAareaXone.getAttribute("maxlength");


TextAareaXone.oninput = function()
 {
     "use strict";
     // if condition 

     if( Mxlingth >50 <60 ) {
         spanOftext.textContent = " Request is not enough write more" ;
         spanOftext.classList.add("x-1-red-color");
     }
    else if (Mxlingth== 100) {
        alert("biger than 100 ")
        spanOftext.textContent = " your Request is enough " ;
        spanOftext.classList.add("x-1-gree-color");
  }

}


// last footer 
// we will put the date of year repeating every years 

const Xdate = new Date();
const DateYearFooter =  Xdate.getFullYear(); 


// value of div should copy the date of year 

const XFooterDate = document.getElementById("date-of-footer").textContent  = DateYearFooter;







