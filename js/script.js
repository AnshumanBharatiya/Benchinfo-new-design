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
if (document.getElementById('relocation')) {
    VirtualSelect.init({ ele: '#relocation' });
}


if (document.getElementById('jobDescription')) {
    // ckeditor
    var editor = CKEDITOR.replace( 'jobDescription' );
}


//  job Description popup

function openJobDesc(id){
    let jobDescElement = document.getElementById('job-desc-' + id);
    jobDescElement.classList.add('mobile');
}

function closeJobDesc(id){
  
    let jobDescElement = document.getElementById('job-desc-' + id);
    jobDescElement.classList.remove('mobile');
}

function closeDropdown(event){
    event.stopPropagation();
}

function displayError(error_msg){
    document.getElementById("errormsg").innerHTML = error_msg;
    document.getElementById("emessage").style.display = 'flex';
    
    setTimeout(function() {
        document.getElementById("emessage").style.display = 'none';
    }, 5000);
}

function closeError(){
    document.getElementById("emessage").style.display = 'none';
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    let common_text = document.getElementById('common_text').value;
    if(common_text.length < 1){
        displayError("Please Enter Job Name");
    }

});