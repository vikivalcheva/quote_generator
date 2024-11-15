function requestNotificationPermission() {
    if (Notification.permission === 'default') {
        Notification.requestPermission()
            .then(permission => {
                if (permission === 'granted') {
                    console.log("Notification permission granted.");
                } else {
                    console.log("Notification permission denied.");
                }
            });
    }
}

// Функция за изпращане на уведомление
function sendDailyReminder() {
    if (Notification.permission === 'granted') {
        const options = {
            body: "Don't forget to check out today's random quote!",
            icon: "https://via.placeholder.com/128" // Замени с икона на приложението
        };
        new Notification("Quote of the Day Reminder", options);
    } else {
        console.log("Notifications are not enabled.");
    }
}

// Настройване на ежедневното напомняне
function setDailyReminder() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0); // 9:00 сутринта

    const timeUntilReminder = tomorrow - now;
    setTimeout(() => {
        sendDailyReminder();
        setInterval(sendDailyReminder, 24 * 60 * 60 * 1000); // Изпращай всеки ден
    }, timeUntilReminder);
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    requestNotificationPermission();
    setDailyReminder();
});
