document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form form');
    const feedbackMessage = document.querySelector('#feedback-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('submit_feedback.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            feedbackMessage.textContent = data.message;
            feedbackMessage.style.color = data.status === 'success' ? 'green' : 'red';
            feedbackMessage.style.display = 'block';
        })
        .catch(error => {
            feedbackMessage.textContent = 'An error occurred. Please try again.';
            feedbackMessage.style.color = 'red';
            feedbackMessage.style.display = 'block';
        });
    });
});
