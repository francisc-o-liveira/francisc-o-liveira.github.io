document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.php-email-form');
    const loading = form.querySelector('.loading');
    const errorMessage = form.querySelector('.error-message');
    const sentMessage = form.querySelector('.sent-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        loading.style.display = 'block';
        errorMessage.style.display = 'none';
        sentMessage.style.display = 'none';

        fetch("https://formspree.io/f/mwppgrye", {
            method: "POST",
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            },
        })
        .then(response => {
            if (response.ok) {
                loading.style.display = 'none';
                sentMessage.style.display = 'block';
                form.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch((error) => {
            loading.style.display = 'none';
            errorMessage.textContent = 'Oops! There was a problem submitting your form';
            errorMessage.style.display = 'block';
            console.error('Error:', error);
        });
    });
}); 