var menu = false;
window.onload = function(){
	$(".menu-button").on('click',showMenu);
}

function showMenu(){
	if(!menu)
		$(".menu-button").css('transform',"rotate(180deg)");
	else
		$(".menu-button").css('transform',"rotate(0deg)");
	$(".contmenu").toggle("fast");
	console.log("lol");
	menu = !menu;

}