function notify(message) {
    // in milliseconds
    const displayTime = 2000;
    let notificationDiv = document.getElementById('notification');
    notificationDiv.textContent = message;
    notificationDiv.style.display = 'block';
    setTimeout(() => notificationDiv.style.display = 'none', displayTime);
}