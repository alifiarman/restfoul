

// responsive menu bar

const bar = document.getElementById("bar");
const navBar = document.getElementById("nav-bar");
const clos = document.getElementById("clos");

if("bar") {
    bar.addEventListener('click', ( ) => {
        navBar.classList.add('active');
    })
}
if("clos") {
    clos.addEventListener('click', ( ) => {
        navBar.classList.remove('active');
    })
}



// single prodcut img slider

function imgGallery(smallImg){
    var mainImages = document.querySelector("#mainImg");

    mainImages.src = smallImg.src;
  }