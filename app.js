const border = document.querySelector('.border');
const btn = document.querySelector('.btn');
const levelTwo = document.querySelector('.level-two');
const levelOne = document.querySelector('.level-one');
const img = document.querySelector('.iska')
const text = document.querySelector('.text')
const sound = document.querySelector('.sound')



document.addEventListener('mouseover', function(e) {
	let check = e.target.classList.value

	if (check === 'border') {
		alert('ooop.. u lost, try again and be patience')
		location.reload()
	}

	if (check === 'finish') {
		border.style.pointerEvents = 'none';
		btn.style.opacity = '1';
		btn.style.visibility = 'visible';
	}

	if (check === 'finish-two') {
		sound.play();
		img.style.display = 'block';
		text.style.display = 'block';
	}
});

btn.addEventListener('click', function(e) {
	e.preventDefault();
	levelOne.style.display = 'none';
	levelTwo.style.display = 'block';
	btn.style.opacity = '0';
	btn.style.value = 'hidden';
})