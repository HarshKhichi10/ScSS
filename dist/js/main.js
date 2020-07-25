const menubtn= document.querySelector('.menu-btn');
const menu= document.querySelector('.menu');
const menubranding= document.querySelector('.menu-branding');
const menuNav= document.querySelector('.menu-nav');

const navItem= document.querySelectorAll('.nav-item');


let showMenu = false;

menubtn.addEventListener('click',togglebtn);

function togglebtn(){
if(!showMenu){
menubtn.classList.add('close');
menu.classList.add('show');
menubranding.classList.add('show');
menuNav.classList.add('show');
navItem.forEach(element => {element.classList.add('show')
    
});

showMenu = true;
}
else{
    menubtn.classList.remove('close');
    menu.classList.remove('show');
    menubranding.classList.remove('show');
    menuNav.classList.remove('show');
    navItem.forEach(element => {element.classList.remove('show')
        
    });
    
    showMenu = false;



}



}
