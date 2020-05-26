import RouterHandler from './router.js'

window.onhashchange = () => {
    setActiveLink ();
}

function setActiveLink(){
    const links=documents.querySelectorAll('.header-link');
    links.forEach(link => {
        const linkPath=link.gettAttribute('href');
        const currentPath=window.location.hash;
        if(currentPath === linkPath){
            link.classLink.add('active');
        } else {
            link.classLink.remove('active');
        }
    })
}
class App {
    constructor () {
        new RouterHandler();
    }    
}

new App();