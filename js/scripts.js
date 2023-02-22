/* Author: Tim West - www.timwestdesigns.com */
$(function () {
	overlay();
	dropdown();
	playAudio();
});	

function overlay() {
	$('nav li:first-child div').click(function () {
		$('#FAQ').fadeIn(400);
	});
	$('#close-button').click(function () {
		$('#FAQ').fadeOut(400);
	});
}

function dropdown() {
	$('li.dropdown').hover(function () {
		$('li.dropdown ul').stop().animate({height: '248px'}, 350);
	}, function () {
		$('li.dropdown ul').stop().animate({height: '0'}, 350);
	});
	$('li.dropdown,li.dropdown li:last-child a').focus(function () {
		$('li.dropdown ul').stop().animate({height: '248px'}, 350);
	});
	$('nav li:first-child div,#notes li').focus(function () {
		$('.dropdown ul').stop().animate({height: '0'}, 350);
	});
}

function playAudio() {
	var files = {
		// Standard
		E1: new Audio('audio/E1.ogg'),
		A1: new Audio('audio/A1.ogg'),
		D2: new Audio('audio/D2.ogg'),
		G2: new Audio('audio/G2.ogg'),
		B2: new Audio('audio/B2.ogg'),
		E3: new Audio('audio/E3.ogg'),
		// 1/2 Step Down
		Eb1: new Audio('audio/Eb1.ogg'),
		Ab1: new Audio('audio/Ab1.ogg'),
		Db2: new Audio('audio/Db2.ogg'),
		Gb2: new Audio('audio/Gb2.ogg'),
		Bb2: new Audio('audio/Bb2.ogg'),
		Eb3: new Audio('audio/Eb3.ogg'),
		// Full Step Down
		D1: new Audio('audio/D1.ogg'),
		G1: new Audio('audio/G1.ogg'),
		C2: new Audio('audio/C2.ogg'),
		F2: new Audio('audio/F2.ogg'),
		A2: new Audio('audio/A2.ogg'),
		D3: new Audio('audio/D3.ogg'),
		// Drop D
	//	D1:
	//  A1:
	//	D2:
	//	G2:
	//	B2:
	//	E3:
		// Drop C
		C1: new Audio('audio/C1.ogg'),
	//	G1:
	//	C2:
	//	F2:
	//	A2:
	//	D3:
		// Open D
	//	D1:
	//  A1:
	//	D2:
		FH2: new Audio('audio/Gb2.ogg'),
	//	A2:
	//	D3:
		// DADGAD
	//	D1:
	//  A1:
	//	D2:
	//	G2:
	//	A2:
	//	D3:
		// Iris
		B1: new Audio('audio/B1.ogg'),
	//	D1:
	//	D2:
		D4: new Audio('audio/D2.ogg'),
		D5: new Audio('audio/D2.ogg')
	//	D3:
	};
	
	var loop = function () {
		this.currentTime = 0;
		this.play();
	};
	
	$('#notes li').click(function () {
		var	fileName = this.id.slice(4);
		var LCDnum = $('.LCD div').eq($(this).index());
		files[fileName].addEventListener('ended', loop, false);
		if (files[fileName].paused === false) {
			files[fileName].pause();
			files[fileName].currentTime = 0;
			$(this).add(LCDnum).removeClass('active');
			$('#notes li:nth-child(6)').focus().blur();
		} else {
			files[fileName].play();
			$(this).add(LCDnum).addClass('active');
		}
	});
	
	$(document).keyup(function (event) {
		var key = event.keyCode || event.which;
		if (key === 49 || key === 97) {
			$('#notes li:nth-child(1)').click();
		}
		if (key === 50 || key === 98) {
			$('#notes li:nth-child(2)').click();
		}
		if (key === 51 || key === 99) {
			$('#notes li:nth-child(3)').click();		
		}
		if (key === 52 || key === 100) {
			$('#notes li:nth-child(4)').click();	
		}
		if (key === 53 || key === 101) {
			$('#notes li:nth-child(5)').click();		
		}
		if (key === 54 || key === 102) {
			$('#notes li:nth-child(6)').click();		
		}
		if (key === 37) {
			$('#notes li.active').click().prev().click();		
		}
		if (key === 39) {
			$('#notes li.active').click().next().click();		
		}
		if (key === 27) {
			$('#notes li.active,#close-button').click();
			$('#notes li:nth-child(6)').focus().blur();
		}
		if (key === 13) {
			$('*:focus').click();		
		}
	});
}