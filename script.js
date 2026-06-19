document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.glass-card');
    const catalogBtn = document.getElementById('btn-catalog');

    // Add subtle 3D card tilt effect on desktop mousemove
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
            
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Reset transform on mouse leave
        document.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });

        document.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    }

    // Handle catalog button click dynamically
    if (catalogBtn) {
        catalogBtn.addEventListener('click', (e) => {
            if (catalogBtn.getAttribute('href') === '#') {
                e.preventDefault();
                alert('El catálogo digital estará disponible próximamente junto con nuestro sitio web.');
            }
        });
    }
});
