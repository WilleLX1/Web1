window.addEventListener('scroll', () => {
    const title = document.querySelector('.title');
    const titlePosition = title.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (titlePosition < screenPosition) {
        title.classList.remove('hidden');
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }
});
