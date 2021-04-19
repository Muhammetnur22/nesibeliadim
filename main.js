let langDropdown = document.querySelector('.lang-dropdown')
let modal = document.getElementById('modal')
let header = document.querySelector('header')
let hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click',  () =>{
    console.log('2')
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