//select Dom items (document object models- ui Structure of html tags) const is for constant

const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menunav = document.querySelector('.menu-nav');
const menubranding = document.querySelector('.menu-branding');
const navitem = document.querySelectorAll('.nav-items');

//select the inial state of menu

let showmenu = false;
menubtn.addEventListener('click', togglemenu );

function togglemenu() {
    if(!showmenu) {         //exclamanation is for 'not'
    menubtn.classList.add('close');
    menu.classList.add('show');
    menunav.classList.add('show');
    menubranding.classList.add('show');
    navitem.forEach(item => item.classList.add('show'));


    //set menu state
    showmenu = true;

} else { 
    menubtn.classList.remove('close');
    menu.classList.remove('show');
    menunav.classList.remove('show');
    menubranding.classList.remove('show');
    navitem.forEach(item =>  item.classList.remove('show'));


 //set menu state
 showmenu = false;
 


}

}

