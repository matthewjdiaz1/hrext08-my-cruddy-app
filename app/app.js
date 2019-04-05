



var loadLocalStorage = function () {
	var htmlString = '';
	htmlString += `<ins class="scales_chords_api" chord="${localStorage.scaleKey}"></ins>`
	// console.log($('.scale-container').html(htmlString));
	$('.scale-container').html(htmlString);
};

var updateStatusLabel = function (message) {
	$('#statusLabel').text(message);
}

//jQuery document ready initialization stuff
////button and form event handlers
// logic for determining action probably needs to go in the event handler
$(document).ready(function () {
	loadLocalStorage();

	$('#btn-create').on('click', function (e) {
		var key = $('#key').val();
		var value = $('#value').val();
		var keyExists = localStorage.getItem(key) !== null;

		if (keyExists) {
			updateStatusLabel('key already exists, please use update button instead! :D');
		} else if (key === '') {
			updateStatusLabel('invalid input!')
		} else {
			createEntry(key, value);
			updateStatusLabel('key created - ' + key);
		}

		loadLocalStorage();
	});

	$('#btn-update').on('click', function (e) {
		var key = $('#key').val();
		var value = $('#value').val();
		var existingValue = localStorage.getItem(key)
		var keyExists = existingValue !== null;

		if (value === existingValue) {
			updateStatusLabel('key not updated - that value already exists silly! xD')
		} else if (keyExists) {
			updateEntry(key, value);
			updateStatusLabel('key updated - ' + key);
		} else if (key === '') {
			updateStatusLabel('invalid input!')
		} else {
			updateStatusLabel('key doesn\'t exist, please use create button instead! :D');
		}

		loadLocalStorage();
	});

	$('#btn-delete').on('click', function (e) {
		var key = $('#key').val();
		var value = $('#value').val();
		var keyExists = localStorage.getItem(key) !== null;

		if (keyExists) {
			removeEntry(key);
			updateStatusLabel('key removed - ' + key);
		} else if (key === '') {
			updateStatusLabel('invalid input!')
		} else {
			updateStatusLabel('key doesn\'t exist, nothing removed. :|');
		}

		loadLocalStorage();
	});

	$('#btn-A').on('click', function () {
		updateScaleKey('A');
		updateStatusLabel(`Current Key: A`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.a-class').css('display', 'block').css('visibility', 'visible');
		//loadLocalStorage();
	});
	$('#btn-As').on('click', function () {
		updateScaleKey('A#');
		updateStatusLabel(`Current Key: A#`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.as-class').css('display', 'block').css('visibility', 'visible');
		//loadLocalStorage();
	});
	$('#btn-B').on('click', function () {
		updateScaleKey('B');
		updateStatusLabel(`Current Key: B`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.b-class').css('display', 'block').css('visibility', 'visible');
		loadLocalStorage();
	});
	$('#btn-C').on('click', function () {
		updateScaleKey('C');
		updateStatusLabel(`Current Key: C`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.c-class').css('display', 'block').css('visibility', 'visible');
		loadLocalStorage();
	});
	$('#btn-Cs').on('click', function () {
		updateScaleKey('C#');
		updateStatusLabel(`Current Key: C#`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.cs-class').css('display', 'block').css('visibility', 'visible');
		loadLocalStorage();
	});
	$('#btn-D').on('click', function () {
		updateScaleKey('D');
		updateStatusLabel(`Current Key: D`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.d-class').css('display', 'block').css('visibility', 'visible');
		loadLocalStorage();
	});
	$('#btn-Ds').on('click', function () {
		updateScaleKey('D#');
		updateStatusLabel(`Current Key: D#`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.ds-class').css('display', 'block').css('visibility', 'visible');
		loadLocalStorage();
	});
	$('#btn-E').on('click', function () {
		updateScaleKey('E');
		updateStatusLabel(`Current Key: E`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.e-class').css('display', 'block').css('visibility', 'visible');
		loadLocalStorage();
	});
	$('#btn-F').on('click', function () {
		updateScaleKey('F');
		updateStatusLabel(`Current Key: F`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.f-class').css('display', 'block').css('visibility', 'visible');
		loadLocalStorage();
	});
	$('#btn-Fs').on('click', function () {
		updateScaleKey('F#');
		updateStatusLabel(`Current Key: F#`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.fs-class').css('display', 'block').css('visibility', 'visible');
		loadLocalStorage();
	});
	$('#btn-G').on('click', function () {
		updateScaleKey('G');
		updateStatusLabel(`Current Key: G`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.g-class').css('display', 'block').css('visibility', 'visible');
		loadLocalStorage();
	});
	$('#btn-Gs').on('click', function () {
		updateScaleKey('G#');
		updateStatusLabel(`Current Key: G#`);
		$('.scales_chords_api').css('display', 'none').css('visibility', 'hidden');
		$('.gs-class').css('display', 'block').css('visibility', 'visible');
		loadLocalStorage();
	});
});
/*



When an input element is given a name, that name becomes a property of the
owning form element's HTMLFormElement.elements property. That means if you
have an input whose name is set to guest and another whose name is hat-size,
the following code can be used:

let form = document.querySelector("form");
let guestName = form.elements.guest;
let hatSize = form.elements["hat-size"];
*/

/*
PAGE CONTENT STUFF
*/
//something to update the table every time localStorage changes

//localStorage stuff
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
////create new entry
//localStorage.setItem(key, value)
var createEntry = function (key, value) {
	return localStorage.setItem(key, value);
}

////Update existing entry
//localStorage.setItem(key, value)
var updateEntry = function (key, value) {
	return localStorage.setItem(key, value);
}

////delete existing entry
//localStorage.removeItem(key)
var removeEntry = function (key) {
	return localStorage.removeItem(key);
}

var updateScaleKey = function (value) {
	return localStorage.setItem('scaleKey', value);
}

