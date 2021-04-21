let header = document.querySelector('header')
let hamburger = document.querySelector('.hamburger')
let infoSection = document.querySelector('.info')

let langDropdown = document.querySelector('.lang-dropdown')
let modal = document.getElementById('modal')

hamburger.addEventListener('click',  () =>{
    infoSection.classList.toggle('info-active')
    
})


langDropdown.addEventListener('click', clicked)

function clicked() {
    modal.classList.toggle('active')
}


window.addEventListener('click', (e) => {
    if(e.target.className !== 'chosen-lang') modal.classList.remove('active')
    
})

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