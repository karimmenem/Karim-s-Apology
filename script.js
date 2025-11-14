document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const apologyContainer = document.getElementById('apologyContainer');
    
    startBtn.addEventListener('click', () => {
       
        startBtn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        startBtn.style.opacity = '0';
        startBtn.style.transform = 'scale(0.5)';
        setTimeout(() => {
            startBtn.style.display = 'none';
            apologyContainer.classList.remove('hidden');
        }, 500);
    });
});