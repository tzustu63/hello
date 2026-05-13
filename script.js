document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('main-card');
    const button = document.getElementById('explore-btn');

    // Subtle tilt effect
    document.addEventListener('mousemove', (e) => {
        if (!card) return;
        
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset tilt on mouse out
    document.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = 'all 0.5s ease';
    });

    document.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    // Button interaction
    button.addEventListener('click', () => {
        button.textContent = '🎉 歡迎！';
        
        // Simple confetti-like effect via log or alert for now
        // But let's just make it feel interactive
        button.style.background = 'linear-gradient(135deg, #a7f3d0 0%, #93c5fd 100%)';
        
        setTimeout(() => {
            button.textContent = '探索更多';
            button.style.background = 'linear-gradient(135deg, #f9a8d4 0%, #c084fc 50%, #93c5fd 100%)';
        }, 2000);
    });

    console.log('Premium Hello World Loaded!');
});