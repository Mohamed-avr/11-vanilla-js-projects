/*  value of the inputs */

const FormInputs = document.querySelector(".form-inputs");


/*  inputs */
const FirstInput = FormInputs.children[0];
const secoundInput = FormInputs.children[2];

/* texts */
const FirstText = FormInputs.children[1];
const secoundText = FormInputs.children[3];

/*  let's start */

FirstInput.setAttribute("id", "FirstInput");
secoundInput.setAttribute("id", "SecoundInput");


const MyFI = document.getElementById('FirstInput');
const MySI = document.getElementById('SecoundInput');

MyFI.onkeyup = function() {
    "use strict";
    if (this.value.length < 5) {
        FirstText.textContent = "please write a longe name";
    } else if (this.value.length > 5) {
        FirstText.textContent = "";
    }

    if (this.value.length > 11) {
        FirstText.textContent = "sorry your name is very long";

    }
}
MySI.onkeyup = function() {
    "use strict";
    if (this.value.length < 5) {
        secoundText.textContent = "please don't use uppercase latter";
    } else if (this.value.length > 5) {
        secoundText.textContent = "";
    }

    if (this.value.length > 11) {
        secoundText.textContent = "sorry your password is very long";

    }
}