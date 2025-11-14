document.addEventListener('DOMContentLoaded', () => {
	const startBtn = document.getElementById('startBtn');
	const apologyContainer = document.getElementById('apologyContainer');
	const backgroundOverlay = document.getElementById('backgroundOverlay');
	
	startBtn.addEventListener('click', () => {
		// Show background image overlay
		backgroundOverlay.classList.remove('hidden');
		setTimeout(() => {
			backgroundOverlay.classList.add('show');
		}, 10);
		
		// Hide button smoothly
		startBtn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
		startBtn.style.opacity = '0';
		startBtn.style.transform = 'scale(0.5)';
		setTimeout(() => {
			startBtn.style.display = 'none';
			// Show apology content on top of the image
			apologyContainer.classList.remove('hidden');
		}, 500);
	});
});