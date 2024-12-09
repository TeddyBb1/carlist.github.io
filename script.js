document.querySelectorAll('.faq-item').forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer');

    item.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
            openItem.classList.remove('open');
        });
        if (!isOpen) {
            item.classList.add('open');
        }
    });
});
