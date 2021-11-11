const currentLocation = location.href;
const menuItem = document.querySelectorAll('#itemMenu');

menuItem.forEach((item, index) =>{
	console.log(item)
  if(menuItem[index].href === currentLocation){
    menuItem[index].className = "active"
  }
})