//random //

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//get number //

$("#start").click(function(){
	if(parseInt($("#number").val())< 101){
		sessionStorage.setItem("number",$("#number").val());
		window.location = "exam3part2.php";
	}
	else{
		$("#error").fadeIn(1000).delay(2000).fadeOut(1000);
	}
});

//share and generate //

$(document).ready(function(){
	let hArr = [];
	for(let i = 1 ; i <= sessionStorage.getItem("number"); i++){
		hArr.push(i);
	}

	while(hArr.length > 0){
		let random = getRandomInt(hArr.length);
		$(".section__sort").append("<div class='section__sortP' id='" + hArr[random] + "'></div>");
		hArr.splice(random, 1);
	}

});

// sort height //

$(document).ready(function(){
	let eArr = $(".section__sortP");
	let ids = $(".section__sortP").get().map(elem => elem.id);

	for(let i = 0 ; i < eArr.length; i++){
		let height = 270 / eArr.length * ids[i] + "px";
		let $e = $(eArr[i]);
		$e.css("height", height);
	}
});

// sort colums //

$("#sort").click(function(){
	let ids = $(".section__sortP").get().map(elem => parseInt(elem.id));
	let temp = 0;
	let br = 0;   	
	 for (let i = 0; i < ids.length; i++) {
   
        for (let j = 0; j < (ids.length - 1); j++) {
        	let id1;
        	let id2;
            if (ids[j] > ids[j + 1]) {
  				id1 = ids[j+1];
  				id2 = ids[j];
                let temp = ids[j];
                ids[j] = ids[j + 1];
                ids[j + 1] = temp;
  				br++;
            }
            setTimeout(function(){
  					let element1 = "#" + id1;
	           		let element2 = "#" + id2;
	           		$(element1).css("background-color","red");
	            	$(element2).css("background-color","red");
	            	$(element1).after($(element2));
	            	$(element1).delay(500)
	            	.queue(function(next){
	            		$(this).css("background-color","white");
	            		next();
	            	});
					$(element2).delay(500)
					.queue(function(next){
						$(this).css("background-color","white");
						next();
					});
  				},1000 * br);
        }
    }

 	// finish //
 	
    for(let i = 1; i <= ids.length; i++){
    	let element3 = "#" + i;
    	setTimeout(function(){
    		$(element3).css("background-color","green");
    	},1000 * br + 300 * i + 1000);
    }
});
