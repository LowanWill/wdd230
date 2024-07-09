document.addEventListener('DOMContentLoaded', function () {
    const popupBanner = document.getElementById('banner');
    const closeBtn = document.getElementById('closeBtn');

    // Show the popup banner only on Mondays, Tuesdays, and Wednesdays
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) - 6 (Saturday)
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        popupBanner.style.display = 'block';
    }

    // Close the popup banner when the close button is clicked
    closeBtn.addEventListener('click', function () {
        popupBanner.style.display = 'none';
    });
});