document.addEventListener("DOMContentLoaded", function() {
    const notificationList = document.querySelector(".notification-list");
    const notificationContainer = document.querySelector(".notifications-container");

    function updateAnimation() {
        const listHeight = notificationList.scrollHeight;
        const containerHeight = notificationContainer.clientHeight;
        const animationDuration = (listHeight / containerHeight) * 15; // Adjust the multiplier as needed

        const keyframes = `
            @keyframes scroll-up {
                0% {
                    top: 0;
                }
                100% {
                    top: -${listHeight}px;
                }
            }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);

        notificationList.style.animationDuration = `${animationDuration}s`;
    }

    updateAnimation();
    window.addEventListener("resize", updateAnimation);
});
