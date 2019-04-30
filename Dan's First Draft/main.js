const introBtn = document.querySelectorAll('.intro-button');
const introDiv = document.querySelector('.introduction');
const projectsBtn =  document.querySelectorAll('.projects-button');
const projectsDiv = document.querySelector('.projects');
const contactBtn =  document.querySelectorAll('.contact-button');
const contactDiv = document.querySelector('.contact');
const contentDivs = document.querySelectorAll('.content');
const buttons = document.querySelectorAll('.btn');
const hamburger = document.querySelector('.hamburger');
const hamburgerDiv = document.querySelector('.hamburgerDiv');


function setup(){
    for( i=0 ; i<contentDivs.length ; i++){
        contentDivs[i].classList.add('d-none')
        buttons.forEach((btn)=>{
            btn.classList.remove('active');
        })
        hamburgerDiv.classList.add('d-none');
    }
}

introBtn.forEach((button) => {
    button.addEventListener('click', () => {
        setup();
        introDiv.classList.remove('d-none');
        introBtn.forEach((btn)=>{
            btn.classList.add('active');
        })
    })
})

projectsBtn.forEach((button) => {
    button.addEventListener('click', () => {
        setup();
        projectsDiv.classList.remove('d-none');
        projectsBtn.forEach((btn)=>{
            btn.classList.add('active');
        })
    })
})

contactBtn.forEach((button) => {
    button.addEventListener('click', () => {
        setup();
        contactDiv.classList.remove('d-none');
        contactBtn.forEach((btn)=>{
            btn.classList.add('active');
        })
    })
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerDiv.classList.toggle('d-none');
})