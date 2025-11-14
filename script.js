document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const apologyContainer = document.getElementById('apologyContainer');
    const backgroundOverlay = document.getElementById('backgroundOverlay');
    
    startBtn.addEventListener('click', () => {
        backgroundOverlay.classList.remove('hidden');
        setTimeout(() => {
            backgroundOverlay.classList.add('show');
        }, 10);
        
        startBtn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        startBtn.style.opacity = '0';
        startBtn.style.transform = 'scale(0.5)';
        setTimeout(() => {
            startBtn.style.display = 'none';
            apologyContainer.classList.remove('hidden');
        }, 500);
    });
});