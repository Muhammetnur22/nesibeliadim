// Init

let header = document.querySelector('header')
let hamburger = document.querySelector('.hamburger')
let infoSection = document.querySelector('.info')

let langDropDown = document.querySelector('.lang-dropdown')
let modal = document.getElementById('modal')

// clickable button responsive
hamburger.addEventListener('click',  () =>{
    infoSection.classList.toggle('info-active')
    document.body.style.overflow = 'hidden'
})

infoSection.addEventListener('click', (e) => {
    const className = e.target.className;
    if(className !== 'chosen-lang'){
        infoSection.classList.remove('info-active')
        document.body.style.overflow = 'unset'
        document.body.style.scrollBehavior ='smooth'
    }   
})

// language dropdown
langDropDown.addEventListener('click', clicked)

function clicked() {
    modal.classList.toggle('active')
}

window.addEventListener('click', (e) => {
    if(e.target.className !== 'chosen-lang') modal.classList.remove('active')
    
})

// Navbar scroll style
window.onscroll = () => {
    if(scrollY > 20){
        header.style.background = 'white';
        header.style.boxShadow = "0 0 5px rgb(219, 219, 219)"
    }
    else{
        header.style.background = 'none';
        header.style.boxShadow = "none"
    }
}

