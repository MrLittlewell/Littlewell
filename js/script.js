jQuery(document).ready(function($) {
	var						 
		$window = $(window), 						 
		$target = $("#navigation"),						 
		$h = 680; // Задаю координаты верха на котором надо фиксировать						 
		$window.on('scroll', function() {									
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;									
		if (scrollTop > $h) {						 
			$target.addClass("navigation-pouring");						 
				} else {     
					$target.removeClass("navigation-pouring");
					}
					});
						 
});


(function($){
	$.fn.percentPie = function(options){

		var settings = $.extend({
			width: 100,
			trackColor: "EEEEEE",
			barColor: "777777",
			barWeight: 30,
			startPercent: 0,
			endPercent: 1,
			fps: 60
		}, options);

		this.css({
			width: settings.width,
			height: settings.width
		});

		var that = this,
			hoverPolice = false,
			canvasWidth = settings.width,
			canvasHeight = canvasWidth,
			id = $('canvas').length,
			canvasElement = $('<canvas id="'+ id +'" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas>'),
			canvas = canvasElement.get(0).getContext("2d"),
			centerX = canvasWidth/2,
			centerY = canvasHeight/2,
			radius = settings.width/2 - settings.barWeight/2;
			counterClockwise = false,
			fps = 1000 / settings.fps,
			update = .01;
			this.angle = settings.startPercent;

		this.drawArc = function(startAngle, percentFilled, color){
			var drawingArc = true;
			canvas.beginPath();
			canvas.arc(centerX, centerY, radius, (Math.PI/180)*(startAngle * 360 - 90), (Math.PI/180)*(percentFilled * 360 - 90), counterClockwise);
			canvas.strokeStyle = color;
			canvas.lineWidth = settings.barWeight;
			canvas.stroke();
			drawingArc = false;
		}

		this.fillChart = function(stop){
			var loop = setInterval(function(){
				hoverPolice = true;
				canvas.clearRect(0, 0, canvasWidth, canvasHeight);

				that.drawArc(0, 360, settings.trackColor);
				that.angle += update;
				that.drawArc(settings.startPercent, that.angle, settings.barColor);

				if(that.angle > stop){
					clearInterval(loop);
					hoverPolice = false;
				}
			}, fps);
		}

		this.mouseover(function(){
			if(hoverPolice == false){
				that.angle = settings.startPercent;
				that.fillChart(settings.endPercent);
			}
		});

		this.fillChart(settings.endPercent);
		this.append(canvasElement);
		return this;
	}
}(jQuery));

$(document).ready(function() {
  
	$('.__mod-fe-design0').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "YellowGreen",
		barWeight: 10,
		endPercent: .9,
		fps: 60
	});
  
  $('.__mod-fe-design1').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "YellowGreen",
		barWeight: 10,
		endPercent: .75,
		fps: 60
	});
  
  $('.__mod-fe-design2').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "Orange",
		barWeight: 10,
		endPercent: .25,
		fps: 60
	});
  $('.__mod-fe-design3').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "YellowGreen",
		barWeight: 10,
		endPercent: .8,
		fps: 60
	});
  $('.__mod-fe-design4').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "YellowGreen",
		barWeight: 10,
		endPercent: .9,
		fps: 60
	});
  $('.__mod-fe-design5').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "Gold",
		barWeight: 10,
		endPercent: .5,
		fps: 60
	});
  $('.__mod-fe-design6').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "Orange",
		barWeight: 10,
		endPercent: .2,
		fps: 60
	});
  $('.__mod-fe-design7').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "OrangeRed",
		barWeight: 10,
		endPercent: .1,
		fps: 60
	});
  $('.__mod-fe-design8').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "OrangeRed",
		barWeight: 10,
		endPercent: .1,
		fps: 60
	});
  $('.__mod-fe-design9').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "OrangeRed",
		barWeight: 10,
		endPercent: .1,
		fps: 60
	});
  $('.__mod-fe-design10').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "YellowGreen",
		barWeight: 10,
		endPercent: .9,
		fps: 60
	});
	$('.__mod-fe-design11').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "YellowGreen",
		barWeight: 10,
		endPercent: .9,
		fps: 60
	});
	$('.__mod-fe-design12').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "Gold",
		barWeight: 10,
		endPercent: .5,
		fps: 60
	});
	$('.__mod-fe-design13').percentPie({
		width: 250,
		trackColor: "#444444",
		barColor: "Orange",
		barWeight: 10,
		endPercent: .3,
		fps: 60
	});
    
});

$(document).ready(function(){

	$('.menu-trigger').click(function(){
		$('nav ul').slideToggle(760);
	});
	$(window).resize(function(){
		if ($(window).width() > 760 ) {
			$('nav ul').removeAttr('style');
		}
});
});

$(document).ready(function(){
    $('.send-button').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
	    return false;
    });
});
