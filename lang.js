const langLinks = document.querySelectorAll('.lang-link');
const contentNodes = document.querySelectorAll('[data-content]');
const navLang = document.querySelector('.chosen-lang');

// Loading
function loading(isLoading = true){
    if(!isLoading){
        document.querySelector('.loading-block').style.display = 'none'
    }
    else{
        document.querySelector('.loading-block').style.display = 'flex'
    }
}

// Get Contents
async function getContents(){
    const res = await fetch('./content.json')
    const obj = await res.json();
    return obj
}

window.addEventListener('load', () => onClicklangLinks())


// Onclick event Lang Links
function onClicklangLinks() {
    langLinks.forEach(a => {
        a.addEventListener('click',async (e) => {
            const chosenLang = a.children[0].innerText;
    
            // Set Local storage
            setLangToLocalStorage(chosenLang.toUpperCase());
    
            return changeUiLanguage(chosenLang)
            
        })
    });
}

async function changeUiLanguage(chosenLang) {
    const contents = await getContents();
    // Nav Lang Change
    navLang.innerText = chosenLang.toUpperCase();
    //  All Body Text
    contentNodes.forEach(node => {
        node.innerHTML = contents[chosenLang.toLowerCase()][node.id]
    })
}

async function getLangFromLocalStorage(){
    const lang = localStorage.getItem(`nesibeliAdimLang`);
    if(lang){
        return changeUiLanguage(lang)
    }
    else{
        return changeUiLanguage('TM')
    }
}
function setLangToLocalStorage(lang){
    localStorage.setItem(`nesibeliAdimLang`, lang)
}
getLangFromLocalStorage()