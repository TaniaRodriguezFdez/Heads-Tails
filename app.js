
let coin = document.querySelector(".coin");
let startBtn = document.querySelector("#start")

startBtn.addEventListener('click', () =>{
	let i = Math.floor(Math.random()*2);
	coin.style.animation= "none";
	if(i){
		setTimeout(function(){
			coin.style.animation = "spin-heads 1s forwards";
		}, 100);
		heads++;
	}
	else{
		setTimeout(function(){
			coin.style.animation = "spin-tails 1s forwards";
		}, 100);
		tails++;
	}

	});
