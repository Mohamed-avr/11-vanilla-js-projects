// select item 
const btnShwignSideBar = document.querySelector(".btn-showing-side-bar");
const SideBar = document.querySelector(".showing-side-bar-right");
const BtnCloseSideBar = document.querySelector(".btn-close-side-bar");
const LinksPages = document.querySelector(".links");
const EacHlink  =document.querySelector("ul-block");
const TemplatePutLinks = document.querySelector(".block-side-bar-content-responsive");
const navBarDom = document.querySelector(".nav-bar");
const theBODY = document.body;

// select item  for images container 
const sorryMessage = document.querySelector(".sorry-message");
const addImageContent = document.querySelector(".content-adding-images-02");
const imagesCount = document.querySelector(".count");
const btnAddImages = document.querySelector(".btn-add-images");
const ImagesContainer = document.querySelector(".images-container");
const fileInput  = document.querySelector(".input-file");
// const imgSet = document.querySelector("");


// so the first thing should we do is adding the li links automaticlly 
btnShwignSideBar.addEventListener("click" , function() {
    SideBar.classList.add("show-the-side-bar-right");
    BtnCloseSideBar.classList.add('translate-btn-to-place');
    if(SideBar.classList.contains("show-the-side-bar-right")) {
        const PutClone = LinksPages.cloneNode(true);
        TemplatePutLinks.appendChild(PutClone);
        PutClone.classList.remove("links");

        // translate-btn-to-place

        if(TemplatePutLinks.childElementCount > 1) {
          TemplatePutLinks.removeChild(TemplatePutLinks.lastElementChild);
        }
       
    } else if (SideBar.classList.contains ==! "show-the-side-bar-right") {
        alert("good")
    }

});
BtnCloseSideBar.addEventListener("click" , function() {
    SideBar.classList.remove("show-the-side-bar-right");
    BtnCloseSideBar.classList.remove('translate-btn-to-place');
});


// section nunmber 03 
// select all ltems
const btnLeftShow = document.querySelector(".btn-show-left-content");
const btnSRightShow = document.querySelector(".btn-show-right-content");

const contentRightSection03 = document.querySelector(".right-content-three");
const contentLeftSection04 = document.querySelector(".left-content-three");


btnLeftShow.addEventListener("click"  ,function() {
    contentRightSection03.classList.toggle('show');
    contentLeftSection04.classList.toggle("hide");
});

btnSRightShow.addEventListener("click"  ,function() {
    contentRightSection03.classList.toggle('show');
    contentLeftSection04.classList.toggle("hide");
}); 


// add the emails to the local storage 
// select items 
const btnSendEmail = document.querySelector(".btn-send-email");
const inputEmail = document.querySelector(".input-email");
const inputName = document.querySelector(".input-name");
const messageOverllyAlert = document.querySelector(".overlly-section");
const btnCloseAlert = document.querySelector(".accept-btn");


// we can use Events or click
btnSendEmail.addEventListener("click", function() {
    sending();
    // if the email added to local storage alert us
    if(localStorage.getItem(inputEmail.value)){
        messageOverllyAlert.classList.add("show-alert");
        // set the name and the name and email in the cart 
        let nameReserve = document.querySelector(".reserve-name");
        let emailReserve = document.querySelector(".reserve-email");

        nameReserve.textContent = inputName.value ;
        emailReserve.textContent = inputEmail.value;

             // if the values in the local storage do this 
        if(localStorage.getItem(inputEmail.value)) {
            sorryMessage.classList.add("hide");
            addImageContent.classList.add("show");
       } 
    }
    inputEmail.value ='';
}) 


function sending() {
    if(inputEmail.value =='' || inputName.value =='') {
        alert(`on of the input is empty is emtpty`)
    } else {
    localStorage.setItem(inputEmail.value , inputName.value);
    }
}
// 
btnCloseAlert.addEventListener("click" , function() {
    messageOverllyAlert.classList.remove("show-alert");

    
})


const reader  = new FileReader();
const thespan  = document.createElement("span");

// add the images when you click on the images container 
btnAddImages.addEventListener("click" , function() {

  
  const reader  = new FileReader();
  const theDiv = document.createElement("div")
  const theDivInsideOne = document.createElement("div");
  const theDivInsideTow = document.createElement("div");
  const theDivent  = document.createElement("div");
  const  image = document.createElement("img");
  const thespan  = document.createElement("span");
    
  theDivent.classList.add("img-for-div");
  image.classList.add("img-template");
  thespan.classList.add("increase-it");
  thespan.innerHTML=  `<i class="fas fa-heart"></i>`;
  theDivent.appendChild(image);
  thespan.setAttribute("onclick" , "func()")
  thespan.setAttribute("id" , "icon-heart")
  theDivent.appendChild(thespan);

  fileInput.click();

  if(true) {
    var file = document.querySelector('input[type=file]').files[0];    
    reader.onloadend = function () {
        image.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file); 
      if(reader.onloadend) {
  
    theDivInsideOne.appendChild(theDivent);
     theDivInsideTow.innerHTML = `  
     <div class="img-info"> 
         <div class="div-img left-info-sec"> 
         <span>?</span> <span class="span-green-point"> </span>
     </div> 
     <span class="nameOfUser">by <span> ${inputName.value} </span> </span>
     </div> 
    `;
  
    theDiv.classList.add("image-div-s-5");
    theDiv.appendChild(theDivInsideOne);
    theDiv.appendChild(theDivInsideTow);
    ImagesContainer.appendChild(theDiv);

    thespan.classList.add("x-for-selec");
  
    // set images counts 
    imagesCount.innerHTML = `<span> ${ImagesContainer.children.length} </span> images`;
    fileInput.style.display ="none";
      }
    } else {
        image.src =" "
    }
  }
      
});

// icon heart to like 1
/*
thespan.addEventListener("click" , function() {
    thespan.classList.toggle("bg-color");
    alert("ehlds")
}) */
  function func() {
   const theMain =document.getElementById("icon-heart");
   theMain.classList.add("x-x-logo")
   theMain.classList.add("bg-color")
  
   if(theMain.classList.contains("x-x-logo")) {
    theMain.style.color = "red";
   }
  } 



// select elements first 
const spanIconContainer  = document.querySelectorAll(".increase-it");
spanIconContainer.forEach((item) => {
    item.addEventListener("click" , function() {
        item.classList.toggle("bg-color");
    });
});


// donate 
// select all buttons and elements 

const donateBtn = document.querySelector(".donate-section button");
const donateDoneBtn = document.querySelector(".donateDone");
const cancelBtn = document.querySelector(".donateCancel");
const DonateTemplate = document.querySelector(".overlly-section-tow");
const RightDonateImage = document.querySelector(".right-donate");
const formOne  = document.querySelector(".form-one");
const UsernameIfloged = document.querySelector(".span-name-if");
const sectionWelcomed  = document.querySelector(".if-section");
const centerElemet = document.querySelector(".centerElement");



donateBtn.onclick = donateITNow;
cancelBtn.onclick = donateCanceled;
donateDoneBtn.onclick = donateFinished;

function donateITNow() {
     // if the user reserved a ticket : show the name and email and see welcome 
    // if not show the name and email input
    
    if(addImageContent.classList.contains("show")) {
        formOne.classList.add("hide");
        sectionWelcomed.classList.add("show-block");
        sectionWelcomed.innerHTML = `welcome <span class="span-name-if">  ${inputName.value} </span> again , we are so happy for that , let's go!`;
        DonateTemplate.classList.add("show");
    } else {
        DonateTemplate.classList.add("show");
        formOne.classList.add("show")
    }
 
}
function donateCanceled() {
    DonateTemplate.classList.remove("show");
}
function donateFinished(){
    RightDonateImage.classList.add("AnimationImage");
    if(RightDonateImage.classList.contains("AnimationImage")) {

        if(window.innerWidth > 700) {
            setTimeout(() => {
                DonateTemplate.classList.remove("show");
                RightDonateImage.classList.remove("AnimationImage");
             
           }, 2000);
        } else {
            DonateTemplate.classList.remove("show");
            RightDonateImage.classList.remove("AnimationImage");
        }
 
    }
   
 
}


// if inner hight biger than 700 > quiqly 
// less than 700 < cancel rapidly


   