// select items
const inputText = document.querySelector(".input-age");
const buttonClick = document.querySelector(".btn-age-click");

/*  

if the age biger than 18 > show something 
if the age less then 18 show another thing  

*/

window.onload = function () {
  inputText.focus();
};

buttonClick.addEventListener("click", function () {

    
  if (inputText.value >= 18) {
    if (inputText.value.length >= 3) {
      console.log("your age are refused");
    } else {
      // if the age is currect show the item
      const TheBody = document.body;
      const popUpelement = document.createElement("div");
      const popUpText = document.createElement("p");
      const buttonBack = document.createElement("button");

      // show the pupip
      showPupop(inputText.value, TheBody, popUpelement, popUpText, buttonBack);

      buttonBack.addEventListener("click", function () {
        popUpelement.classList.add("hide");
        inputText.value = " ";
      });
    }
  } else {
    // statment
    const TheBody = document.body;
    const popUpelement = document.createElement("div");
    const popUpText = document.createElement("p");
    const buttonBack = document.createElement("button");

    // show the pupip
    showPupopTow(inputText.value, TheBody, popUpelement, popUpText, buttonBack);

    buttonBack.addEventListener("click", function () {
      popUpelement.classList.add("hide");
      inputText.value = " ";
    });
  }
});

function showPupop(e, TheBody, popUpelement, popUpText, buttonBack) {
  // style the elements
  popUpelement.classList.add("x-show");
  popUpText.classList.add("textPopup");
  buttonBack.classList.add("back-btn");

  // orgranize the layouts
  TheBody.append(popUpelement);
  popUpelement.appendChild(popUpText);
  popUpelement.append(buttonBack);
  popUpText.innerHTML = `your age is ${e} biger or equal 18 , you can access what you want`;
  buttonBack.textContent = "next";
}

function showPupopTow(e, TheBody, popUpelement, popUpText, buttonBack) {
  // style the elements
  popUpelement.classList.add("x-show");
  popUpText.classList.add("textPopup");
  buttonBack.classList.add("back-btn");

  // orgranize the layouts
  TheBody.append(popUpelement);
  popUpelement.appendChild(popUpText);
  popUpelement.append(buttonBack);
  popUpText.innerHTML = `your age is ${e} less or not equal 18 , you can't access what you want`;
  buttonBack.textContent = "back";
}
