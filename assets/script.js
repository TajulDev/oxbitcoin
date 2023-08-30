document.addEventListener('DOMContentLoaded', function() {
    const parentElements = document.querySelectorAll('.parent');

    parentElements.forEach(parent => {
        const child = parent.querySelector('.child');
        const arrowIcon = parent.querySelector('.fa-chevron-right');

        parent.addEventListener('click', function() {
            arrowIcon.classList.toggle('rotate-icon');
            if (child.style.display === 'block') {
                child.style.display = 'none';
            } else {
                child.style.display = 'block';
            }
        });
    });
});