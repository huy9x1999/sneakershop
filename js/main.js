// menu show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');
// remove  menu
const navLinks = document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu');

function removeShow() {
    navMenu.classList.remove('active');
}

navLinks.forEach(element=>{
    element.addEventListener('click',removeShow);
})
// scroll sections active link
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',srcollActive)

function srcollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight

        const sectionTop = current.offsetTop - 50

        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('nav__menu a[href*='+ sectionId +']').classList.add('active');
        }else{
            document.querySelector('nav__menu a[href*='+ sectionId +']').classList.remove('active');
        }
    })
}
// change color header
window.onscroll =()=>{
    const nav = document.getElementById('header')
    if(this.scrollY > 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

//page active
const sneakerPages = document.querySelectorAll('.sneaker__pag');

sneakerPages.forEach(element => {
    element.addEventListener('click',()=>{
        sneakerPages.forEach(item=>{
            item.classList.remove('active');
        })
        element.classList.add('active');
    });
});