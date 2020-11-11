//DECLARING IMPORTANT VARIABLES
var bits = 0;

var bps = 0;

var miners = {
	"blackBerryPi" : 2000,
	"yPhone" : 10000,
	"oldComputer" : 50000,
	"beeMiner9s" : 90000,
}

//ITEMS

document.querySelector('#BlackberryPI').addEventListener("click", function(){buy("blackBerryPi", 20000)});
document.querySelector('#Y-Phone').addEventListener("click", function(){buy("yPhone", 100000)});
document.querySelector('#Old-Computer').addEventListener("click", function(){buy("oldComputer", 500000)});
document.querySelector('#Bee-Miner-9s').addEventListener("click", function(){buy("beeMiner9s", 1000000)});

//MINING BITS
document.querySelector('#mineButton').addEventListener("click", function(){mine(1000)});


function mine(bitsMining) {
	bits += bitsMining;
	document.querySelector("#bitCounter").innerHTML = "You Have " + bits + " Bits";	
}

//SHOP



function buy(miner, price){
	if(bits<price){
		alert("You Need More Bits To Buy That!")
	}else{
		bits -= price;
		document.querySelector("#bitCounter").innerHTML = "You Have " + bits + " Bits";	
		bps += miners[miner]
		document.querySelector("#bitpsCounter").innerHTML = "Your Making " + bps + " Bits/Sec."
		autoMinePart1(bps)
	}
}

//AUTOMATED ITEMS

function wait(timeInMs){

    var time = Date.now()

    var waitTime = time + timeInMs

    while(time <= waitTime){
        time = Date.now()
}
}

function autoMinePart1(bitps){
	setTimeout(function(){autoMinePart2(bitps)}, 1000)
}

function autoMinePart2(bitps){
	mine(bitps)
	wait(1000)
	autoMinePart1(bitps)
}