$(document).ready(function() {

	/*
	0 - > Rock
	1 - > Paper
	2 - > Scissors
	*/
	//Core concept in javascript. Mind of computer ))
	var computer;
	setInterval(function(){
		computer = Math.floor(Math.random() * 3);
	}, 500);

	timesPlayed = Number(document.getElementById("timesPlayed").innerHTML);
	wins = Number(document.getElementById("wins").innerHTML);
	losses = Number(document.getElementById("losses").innerHTML);
	draw = Number(document.getElementById("draw").innerHTML);


	//Rock functionality
	$("#rock").on("click", function(){	
		timesPlayed++;
		document.getElementById("timesPlayed").innerHTML = timesPlayed;
		$(".should-blur").addClass("blurit");
		if(computer == 0){
			draw++;
			document.getElementById("draw").innerHTML = draw;
			$(".modal-draw").css("top", "50%");
			$("#draw-summary").text("You chose Rock, Computer too :|");
		}else if(computer == 1){
			losses++;
			document.getElementById("losses").innerHTML = losses;
			$(".modal-lose").css("top", "50%");
			$("#lose-summary").text("You chose Rock but Computer chose Paper :(");
		}else if(computer == 2){
			wins++;
			document.getElementById("wins").innerHTML = wins;
			$(".modal-win").css("top", "50%");
			$("#win-summary").text("You chose Rock and Computer chose Scissors :)");
		}
	});


	//Paper functionality
	$("#paper").on("click", function(){
		timesPlayed++;
		document.getElementById("timesPlayed").innerHTML = timesPlayed;
		$(".should-blur").addClass("blurit");
		if(computer == 0){
			wins++;
			document.getElementById("wins").innerHTML = wins;
			$(".modal-win").css("top", "50%");
			$("#win-summary").text("You chose Paper and Computer chose Rock :)");
		}else if(computer == 1){
			draw++;
			document.getElementById("draw").innerHTML = draw;
			$(".modal-draw").css("top", "50%");
			$("#draw-summary").text("You chose Paper, Computer too :|");
		}else if(computer == 2){
			losses++;
			document.getElementById("losses").innerHTML = losses;
			$(".modal-lose").css("top", "50%");
			$("#lose-summary").text("You chose Paper but Computer chose Scissors :(");
		}
	});


	//Scissors functionality
	$("#scissors").on("click", function(){
		timesPlayed++;
		document.getElementById("timesPlayed").innerHTML = timesPlayed;
		$(".should-blur").addClass("blurit");
		if(computer == 0){
			losses++;
			document.getElementById("losses").innerHTML = losses;
			$(".modal-lose").css("top", "50%");
			$("#lose-summary").text("You chose Scissors but Computer chose Rock :(");
		}else if(computer == 1){
			wins++;
			document.getElementById("wins").innerHTML = wins;
			$(".modal-win").css("top", "50%");
			$("#win-summary").text("You chose Scissors and Computer chose Paper :)");
		}else if(computer == 2){
			draw++;
			document.getElementById("draw").innerHTML = draw;
			$(".modal-draw").css("top", "50%");
			$("#draw-summary").text("You chose Scissors, Computer too :|");
		}
	});


	//Interval
	setInterval(function(){
		$(".modal-win").css("top", "-50%");
		$(".modal-lose").css("top", "-50%");
		$(".modal-draw").css("top", "-50%");
		$(".should-blur").removeClass("blurit");
	}, 4000);


	//All close button funcionalities
	$(".close-draw-modal-btn").on("click", function(){
		$(".modal-draw").css("top", "-50%");
		$(".should-blur").removeClass("blurit");
	});

	$(".close-lose-modal-btn").on("click", function(){
		$(".modal-lose").css("top", "-50%");
		$(".should-blur").removeClass("blurit");
	});

	$(".close-win-modal-btn").on("click", function(){
		$(".modal-win").css("top", "-50%");
		$(".should-blur").removeClass("blurit");
		$('.win-div').removeClass('fireworks');
	})


	//Info button's functionality
	$(".info").on("mouseover", function(){
		var str = "Ilkhom Kobilov               Our Team            Iskandarov Abror";
		$("#original").slideUp("slow").text(str);
	});
	$(".info").on("mouseleave", function(){
		$("#original").slideDown("slow").text("Get info");
	})

	//Logo reload
	$("#logo").on("click", function(){
		location.reload();
	});

});