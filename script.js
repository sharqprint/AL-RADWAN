document.querySelectorAll('.phone-span').forEach(span => {
    span.addEventListener('click', () => {
        const number = span.getAttribute('data-number');
        navigator.clipboard.writeText(number).then(() => {
            const notification = document.getElementById('copy-notification');
            notification.style.opacity = 1;
            setTimeout(() => {
                notification.style.opacity = 0;
            }, 1500);
        });
    });
});