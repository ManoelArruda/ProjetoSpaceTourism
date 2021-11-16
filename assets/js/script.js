/* MENU*/
const currentLocation = location.href;
const menuItem = document.querySelectorAll('#itemMenu');

menuItem.forEach((item, index) =>{
	console.log(item)
  if(menuItem[index].href === currentLocation){
    menuItem[index].className = "active"
  }
})
/* MENU*/

window.onload = function(){
  document.querySelector(".menu-mobile").addEventListener("click", function(){
    if(document.querySelector(".menu nav ul").style.display == 'flex') {
      document.querySelector(".menu nav ul").style.display = 'none';
    }else{
      document.querySelector(".menu nav ul").style.display = 'flex';
    }
  });
};



























