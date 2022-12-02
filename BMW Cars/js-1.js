/*  we will get dwon to buttun navbar */


const MyNavbar = document.querySelector(".navbar");
const Mybutton = document.querySelector(".left button");
const MyImg = document.getElementById("IN");


const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", function() {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        MyNavbar.classList.add("show-nav");
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        MyNavbar.classList.remove("show-nav");
    }
});







// fixed navbar  &  add btn scroll
const BtnScroll = document.querySelector(".fixed-btn-scroll");

window.onscroll = function() {
    "use strict";

    if (window.pageYOffset > 20) {
        MyNavbar.classList.add("fixed-navbar");
    }
    if (window.pageYOffset > 3000) {
        MyNavbar.classList.remove("fixed-navbar");
        BtnScroll.classList.add("show-btn-scroll");
    } else if (window.pageYOffset < 20) {
        MyNavbar.classList.remove("fixed-navbar")
    }
    if (window.pageYOffset < 3000) {
        BtnScroll.classList.remove("show-btn-scroll");
    }
}

BtnScroll.addEventListener("click", function() {

    window.scrollTo(0, 0);
})







// dark modw
//  bigF.insertBefore(MyElement, that Element) 



// onload  and remove it 

const MyOnload = document.querySelector(".onload");
// trick -1 i prefer this 


window.onload = function() {
    "use strict";
    MyOnload.classList.add("remove-onload");
}


// trick one -2
/* setTimeout(
    function() {
        "use strict";
        MyOnload.classList.add("remove-onload");
        console.log("setTimeout is done")
    }, 1000) */


// local reviews data
const reveiws = [{
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "photos/person-5.jpg",
        text: "I'm baby meggings twee health goth before they sold out cold-pressed four dollar toast everyday carry"

    },
    {
        id: 2,
        name: "flire maten",
        job: "web design",
        img: "photos/person-2.jpg",
        text: " Helvetica artisan kinfolk thundercats lumbersexual  pin fashion axe.photo booth jean shorts"

    },
    {
        id: 3,
        name: "narile molie",
        job: "software engineer",
        img: "photos/person-6.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa ch pickled coloring book salvia hoodie, cold-pressed four dollar"

    }, {
        id: 4,
        name: "steve alin",
        job: "AI & cyper security",
        img: "photos/person-7.jpg",
        text: " marfa pok pok heirloom fashion axe cray Edison bulb put four dollar toast everyday carry"

    }
];

// select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// select btn 

const preB = document.querySelector(".btn-left-SC button");
const nexB = document.querySelector(".btn-right-SC button");

// currentItem 
let currentItem = 0;

// load inicail item
window.addEventListener("DOMContentLoaded", function() {
    const item = reveiws[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show  person  based on item
function showPerson(person) {
    const item = reveiws[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}

// show next person 
nexB.addEventListener("click", function() {
    currentItem++
    if (currentItem > reveiws.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})

//  show prev person
preB.addEventListener("click", function() {
    currentItem--
    if (currentItem < 0) {
        currentItem = reveiws.length - 1

    }
    showPerson(currentItem);
})

// fiinish it



// btn  " join us " html-2.html tex-2-SB
const BtnJoinUs = document.querySelector(".tex-2-SB button");

BtnJoinUs.addEventListener("click", function() {
    window.location.href = "html-2.html";
})



/*  
=====
slider cars models
===== 
*/


const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const slides = document.querySelectorAll(".slide");

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", function() {
    counter++;
    carousel();
})

prevBtn.addEventListener("click", function() {
    counter--;
    carousel();
})


function carousel() {
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }

    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}


/*  
=====
slider motos models
=====
 */

const preBtn = document.querySelector(".preBtn");
const nexBtn = document.querySelector(".nexBtn");
const slidesT = document.querySelectorAll(".slide-1");

slidesT.forEach(function(slidE, index) {
    slidE.style.left = `${index * 100}%`;
})

let counteR = 0;

nexBtn.addEventListener("click", function() {
    counteR++;
    carouseL();
});
preBtn.addEventListener("click", function() {
    counteR--;
    carouseL();
});

function carouseL() {
    if (counteR < slidesT.length - 1) {
        nexBtn.style.display = "block";
    } else {
        nexBtn.style.display = "none";
    }

    if (counteR > 0) {
        preBtn.style.display = "block";
    } else {
        preBtn.style.display = "none";
    }

    slidesT.forEach(function(slidE) {
        slidE.style.transform = `translateX(-${counteR * 100}%)`;
    })
}



// slider 3 for show cars 
// fisrt thing we should set data 

const Items = [{
    Img: "photos/car-1-4.png",
    Name: "I9 coupe X9",
}, {
    Img: "photos/car-1-3.png",
    Name: "I8 coupe",
}, {
    Img: "photos/car-1-2.png",
    Name: "X5 xDrive40i",
}, {
    Img: "photos/car-1-1.png",
    Name: "ALPINA P7",
}];



// select item 
const ImgSF = document.getElementById("img-SF");
const TexTSF = document.getElementById("text-SF");


//select btn

const prevBtnSF = document.querySelector(".prevBtnSF");
const nextBtnSF = document.querySelector(".nextBtnSF");

// let current item 


let currenT = 0;

// load item X we dont need it


// show person 
function ShowPersoN(person) {
    const Item = Items[person];
    ImgSF.src = Item.Img;
    TexTSF.textContent = Item.Name;
}

// show next person 
nextBtnSF.addEventListener("click", function() {
    currenT++;
    if (currenT > Items.length - 1) {
        currenT = 0;
    }
    ShowPersoN(currenT)
});

// show prev person
prevBtnSF.addEventListener("click", function() {
    currenT--;
    if (currenT < 0) {
        currenT = Items.length - 1;
    }
    ShowPersoN(currenT)
})


// btn visit us 

const BIgDV = document.querySelector(".div-3-SI");


const visitBTn = BIgDV.firstElementChild;
console.log(visitBTn);

const takeBTn = BIgDV.childNodes[3];
console.log(takeBTn);


// visit 
visitBTn.onclick = function() {
    "use strict";
    window.location.href = "html-2.html";
}

// take it
takeBTn.onclick = function() {
    "use strict";
    window.location.href = "html-2.html";
}



const options = {
    bottom: '64px', // default: '32px'
    right: '1rem', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff', // default: '#fff'
    buttonColorDark: '#100f2c', // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}
const darkmode = new Darkmode(options);
darkmode.showWidget();

console.log(document.querySelector(".darkmode-toggle"));
console.log(document.querySelector(".darkmode-layer--button"))


document.querySelector(".darkmode-toggle").style.width = "30px";
document.querySelector(".darkmode-toggle").style.height = "30px";
document.querySelector(".darkmode-toggle").style.outline = "none";

document.querySelector(".darkmode-layer").classList.remove("darkmode-layer--button");





/*  btn to home  */

const PageHome = document.getElementById("to-home");


PageHome.addEventListener("click", function() {
    "use strict";

    window.scrollTo(0, 0);
});


//  to another page
const PageOut = document.querySelector(".links");
const PageTE = PageOut.lastElementChild;
console.log(PageTE)


PageTE.addEventListener("click", function() {
    "use strict";
    alert("ron")
    window.location.host = "https://bmwlogin.netlify.app/";
})