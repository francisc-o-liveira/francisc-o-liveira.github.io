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

        const formData = new FormData(this);

        fetch('forms/contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            loading.style.display = 'none';
            
            if (data.success) {
                sentMessage.style.display = 'block';
                form.reset();
            } else {
                throw new Error('Message could not be sent');
            }
        })
        .catch(error => {
            loading.style.display = 'none';
            errorMessage.innerHTML = 'Message could not be sent';
            errorMessage.style.display = 'block';
        });
    });
}); 