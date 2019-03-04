// document.querySelectorAll("mobilenav").addEventListener("click", function () {
//     document.querySelectorAll("mobilenav").style.display = 'none'
// });

let navBarToggle = document.querySelector('.mobilenav');
let desktopnav = document.querySelector('.desktopnav');
let ham = document.querySelectorAll('.mobilespan');
navBarToggle.addEventListener('click', function () {
    desktopnav.classList.toggle('active');
    // for (let index = 0; index < ham.length; index++) {
    //     ham[index].style.backgroundColor = "red";
    // }
});