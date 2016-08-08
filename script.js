$(document).ready(function(){
	$.getJSON("pe2.json", function(json){
		for(var x=0; x<10;x++){

			var characterName = json.people[x].name
			$("#containsCharacter").append("<div class = 'w3-container'><div  class='w3-card-12' id = 'char"+ x + "'><h2>" +characterName + "</h2><img src='img/Characters/"+characterName+".jpeg' style='width:100%'><div class='w3-container w3-center'><p>Click here for more detail </p></div></div></div>");	}
	});
	$(function(){
		$('#Container').scroll(function(){
			var wScroll = $(this).scrollTop();
			var wHeight = $(this).height();
			$('#titlehead').css({
				'transform': 'translate(-50%,' + (wScroll-150)/3+ "%)"
			});
		});
	});

});
