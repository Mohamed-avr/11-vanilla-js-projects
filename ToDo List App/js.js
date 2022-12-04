// select items 
const theInput = document.querySelector('.inputTyping');
const theButtonHandler = document.querySelector('.inputSetting');
const containerOfTodos = document.querySelector(".todos");




// starting function 
theButtonHandler.addEventListener('click', function () {
    if (theInput.value === '') {
        alert('your input is empty ')
    } else {
        // creating 
        const theDiv = document.createElement('div');
        const theButton = document.createElement('button');
        const theNameOftodo = document.createElement('h1');


        // puting 
        theDiv.appendChild(theNameOftodo);
        theDiv.appendChild(theButton);
        containerOfTodos.appendChild(theDiv);
        
        for(let i = 0 ; i <= 5 ; i++) {
            theDiv.id = i ;
            console.log(theDiv.id)
        }


        // styling
        theDiv.classList.add('todo');
        theNameOftodo.classList.add('x-1');
        theButton.classList.add('x-2');


        theNameOftodo.textContent = theInput.value;
        theButton.textContent = 'X';
        
        if(containerOfTodos.children.length >= 4) {
          
            theInput.classList.add('HidingHandler');
            theButtonHandler.value = 'back home'

        }

        theButton.onclick = function() {
          if(theDiv.id  ) {
            containerOfTodos.removeChild(theDiv)
          }
        }

    }
    theInput.value = '';
});


// const ArrayList = [ 1, 2, 3 , 4 , 5 , 6 , 7 , 8 , 9 ];

// ArrayList.map((i) => {
//     return console.log(i)
// })

// console.log('break_'.repeat(10))

// for(let i = 0 ; i < ArrayList.length - 2 ; i++) {
//     console.log(ArrayList[i])
// }

const TheObj = {
    name :'mohamed' , 
    age : '23'
}

console.log(typeof  TheObj.age )