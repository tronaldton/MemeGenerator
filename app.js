// =========================================================================================================
// ==============================Meme Generator Code========================================================
// =========================================================================================================

// HTML Selctors
const form = document.querySelector('#memegen');
const imgInput = document.querySelector('input[name="img-url"]');
const upperInput = document.querySelector('input[name="upper-text"]');
const lowerInput = document.querySelector('input[name="lower-text"]');
const results = document.querySelector('#results');

// Form inputs to load image to page
form.addEventListener('submit', function(e) {
	e.preventDefault();
	// Create html elements
	const newDiv = document.createElement('div');
	const memeImage = document.createElement('img');
	const upInput = document.createElement('p');
	const bottomInput = document.createElement('p');
	const removeBtn = document.createElement('button');
	// Adds elements to page
	results.appendChild(newDiv);
	newDiv.appendChild(memeImage);
	newDiv.appendChild(upInput);
	newDiv.appendChild(bottomInput);
	newDiv.appendChild(removeBtn);
	// Meme Input values
	memeImage.src = imgInput.value;
	upInput.innerText = upperInput.value;
	bottomInput.innerText = lowerInput.value;
	// clear inputs after load
	imgInput.value = '';
	upperInput.value = '';
	lowerInput.value = '';
	// Image style
	memeImage.style.height = '645px';
	memeImage.style.width = '575px';
	memeImage.style.boxShadow = '-3px 5px 5px black';
	memeImage.style.borderRadius = '3px';
	// Uppertext style
	upInput.style.bottom = '670px';
	upInput.style.color = 'white';
	upInput.style.fontFamily = 'Impact';
	upInput.style.fontWeight = 'bold';
	upInput.style.fontSize = '50px';
	upInput.style.webkitTextStroke = '2px black';
	upInput.style.position = 'relative';
	// Lowertext style
	bottomInput.style.bottom = '250px';
	bottomInput.style.color = 'white';
	bottomInput.style.fontFamily = 'Impact';
	bottomInput.style.fontWeight = 'bold';
	bottomInput.style.fontSize = '50px';
	bottomInput.style.webkitTextStroke = '2px black';
	bottomInput.style.position = 'relative';
	// Delete button style
	removeBtn.innerText = 'DELETE';
	removeBtn.style.position = 'relative';
	removeBtn.style.bottom = '265px';
	removeBtn.style.left = '0px';
	removeBtn.style.boxShadow = '-3px 5px 5px black';
	removeBtn.style.borderRadius = '3px';
	removeBtn.style.padding = '15px 32px';
	removeBtn.style.textAlign = 'center';
	removeBtn.style.textDecoration = 'none';
	removeBtn.style.display = 'inline-block';
	removeBtn.style.fontSize = 'x-large';
	removeBtn.style.fontFamily = '"Courier New", Courier, monospace';
	removeBtn.style.fontWeight = 'bold';
	removeBtn.style.backgroundColor = 'red';
	removeBtn.style.color = 'white';
});

// const removeBtn = document.createElement('button');
// const removeImg = document.querySelector('img');
// const removeText = document.querySelector('p');

results.addEventListener('click', function(e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	}
});

// =========================================================================================================
// ==============================Color Change Code Below====================================================
// =========================================================================================================
// Random color function
function generateRandomColor() {
	const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
	return randomColor;
}
// Change color function
function changeColor() {
	// On the body
	document.body.style.backgroundColor = generateRandomColor();
	// On button bg
	btnColor.style.backgroundColor = generateRandomColor();
}
// words class
const words = document.querySelectorAll('.words');
// Button background
const btnColor = document.querySelector('input[name="submit"]');

// On click
const btnClick = document.querySelector('input[name="submit"]');
btnClick.addEventListener('click', () => {
	changeColor();
});
// Random colors function on the words class
setInterval(function() {
	for (let word of words) {
		word.style.color = generateRandomColor();
	}
}, 1000);
