$(document).ready(function () {
	var bananaLoop, eyeLoop, tailLoop, earLoop;

	var originalHeight = parseInt($('#eyes').attr('height')),
			originalWidth = parseInt($('#eyes').attr('width'));
	
	function wiggleTail() {
		var counter = 0, tail = $('#tail');
		if(!tailLoop) {
			tailLoop = setInterval(function() {
				if (counter % 2 === 0) {
					tail.attr('y', parseInt(tail.attr('y')) + 3);
				} else {
					tail.attr('y', parseInt(tail.attr('y')) - 3);
				}
				counter++;
			}, 100);
		} else {
			clearInterval(tailLoop);
			tailLoop = undefined;
		}
	}
			
	
	function wiggleEars() {
		if(!earLoop) {
			earLoop = setInterval(function() {
				var ears = $('.ear');
				ears.each(function (i, ear) {
					var currentPosition = parseInt($(ear).attr('y'));
					if (currentPosition === 96) {
						$(ear).attr('y', currentPosition + 5);
					} else {
						$(ear).attr('y', currentPosition - 5);
					}
				});
			}, 100);
		} else {
			clearInterval(earLoop);
			earLoop = undefined;
		}
	}
	
	function wiggleLeftEar(){
		var ear = $('#leftEar');
		wiggleEar(ear);
	}
	
	 $('button#shake-leftEar').click(wiggleEars);
	 $('button#shake-tail').click(wiggleTail);
	 $('button#banana-surprise').click(function () {
	 	if (!bananaLoop) {
	 		bananaLoop = setInterval(bananaSurprise, 100);
	 	} else {
	 		clearInterval(bananaLoop);
	 		bananaLoop = undefined;
	 	}
	 });
	 $('button#bulge-eyes').click(bulgeEyes);

	function bulgeEyes() {
		if (!eyeLoop) {
	 		eyeLoop = setInterval(function () {
				var width = parseInt($('#eyes').attr('width')),
					height = parseInt($('#eyes').attr('width'));
				if (height < 130) {
					$('#eyes').attr('width', width * 1.01);
					$('#eyes').attr('height', height * 1.01);
				} else {
					$('#eyes').attr('width', width * 0.98);
					$('#eyes').attr('height', height * 0.98);
				}
			}, 50);
	 	} else {
	 		clearInterval(eyeLoop);
	 		$('#eyes').attr('width', originalWidth);
			$('#eyes').attr('height', originalHeight);
	 		eyeLoop = undefined;
	 	}	
	}
	
	
	
	
	function bananaSurprise() {
		
		var bananas = $('.banana');
		$(bananas).each(function(i, banana) {
			var currentX = parseInt($(banana).attr('x'));
			
			if (currentX > 500) {
				$(banana).attr('x', 0);
			} else {
				$(banana).attr('x', currentX + 10);
			}
			
			
		});
	}

});
	
	
	










