window.onload = function() {
  setTimeout(fadeOut, 1000);
}

function fadeIn() {
	document.getElementById('start').style.opacity = 1;
	setTimeout(fadeOut, 1000);
}

function fadeOut() {
	document.getElementById('start').style.opacity = 0;
	setTimeout(fadeIn, 2000);
}

document.querySelector("#body").addEventListener("click", function(){window.location.replace('Game/game.html')})
document.querySelector("#body").addEventListener("keypress", function(){window.location.replace('Game/game.html')})

