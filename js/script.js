/* ----- Preloader ----- */
function preloaderLoad() {
    if($('.preloader').length){
        $('.preloader').delay(700).fadeOut(300);
    }
    $(".preloader_disabler").on('click', function() {
        $("#preloader").hide();
    });
}
$(window).on('load', function() {
    // add your functions
    preloaderLoad();

});

/* ----- Scroll To top ----- */
// scroll to top button
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active2",window.scrollY>500)
});
function scrollyToTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}
/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  
    if(toggle && nav){
      toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
      })
    }
}
showMenu('header-toggle','nav-menu')
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   
function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));



// multi select drop down

// $(document).ready(function() {
//     $(".sd-CustomSelect").multipleSelect({
//         selectAll: false,
//         onOptgroupClick: function(view) {
//         $(view).parents("label").addClass("selecte-optgroup");
//         }
//     });
// });


VirtualSelect.init({ 
    ele: '#relocation' 
});