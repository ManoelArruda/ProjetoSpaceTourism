/* INICIO MENU DESKTOP */

const currentLocation = location.href;
const menuItem = document.querySelectorAll('#itemMenu');

menuItem.forEach((item, index) =>{
	console.log(item)
  if(menuItem[index].href === currentLocation){
    menuItem[index].className = "active"
  }
});

/* FIM MENU DESKTOP */

/* =============================================================================================== */

/* INICIO SUBMENU PAGINA DESTINATION */

const currentlocation = location.href;
const submenuItem = document.querySelectorAll('#itemSubmenu');

submenuItem.forEach((item, index) =>{
	console.log(item)
  if(submenuItem[index].href === currentlocation){
    submenuItem[index].className = "submenu-active"
  }
})

/* FIM SUBMENU PAGINA DESTINATION */

/* =============================================================================================== */

/* INICIO MENU MOBILE */

window.onload = function(){
  document.querySelector(".menu-mobile").addEventListener("click", function(){
    if(document.querySelector(".menu nav ul").style.display == 'flex') {
      document.querySelector(".menu nav ul").style.display = 'none';
    }else{
      document.querySelector(".menu nav ul").style.display = 'flex';
    }
  });
};

/* FIM MENU MOBILE */

/* INICIO SUBMENU PAGINA CREW */

const currentlocationCrew = location.href;
const submenuItemCrew = document.querySelectorAll('#subMenuCrew');

submenuItemCrew.forEach((item, index) =>{
	console.log(item)
  if(submenuItemCrew[index].href === currentlocationCrew){
    submenuItemCrew[index].className = "circle"
  }
})
    
   //   document.querySelector(".btn-circle").style.backgroundColor = 'blue';
    
  


/* FIM SUBMENU PAGINA CREW */

/* =============================================================================================== */
























