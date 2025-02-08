function closePopup() {
    document.getElementById('notification-popup').style.display = 'none';
}

window.onload = function() {
    document.getElementById('notification-popup').style.display = 'block';
};

document.addEventListener("DOMContentLoaded", function() {
    fetch('notification-popup.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('notification-popup-placeholder').innerHTML = data;
        });

    document.addEventListener('click', function(event) {
        const popup = document.getElementById('notification-popup');
        if (popup && !popup.contains(event.target)) {
            popup.style.display = 'none';
        }
    });
});
