const langLinks = document.querySelectorAll('.lang-link');
const contentNodes = document.querySelectorAll('[data-content]');
const navLang = document.querySelector('.chosen-lang');

async function getContents(){
    const res = await fetch('./content.json')
    const obj = await res.json();
    return obj
}

langLinks.forEach(a => {
    a.addEventListener('click',async (e) => {
        const chosenLang = a.children[0].innerText.toLowerCase();
        const contents = await getContents();

        navLang.innerText = chosenLang.toUpperCase()

        contentNodes.forEach(node => {
            node.innerHTML = contents[chosenLang][node.id]
        })
    })
});

function getLangFromLocalStorage(){
    
}
function setLangToLocalStorage(){
    
}