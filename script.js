function calculateNextPeriod() {
    var lastPeriodDate = new Date(document.getElementById('lastPeriodDate').value);
    var cycleLength = parseInt(document.getElementById('cycleLength').value);

    if (!lastPeriodDate || isNaN(cycleLength)) {
        alert('Please enter valid inputs.');
        return;
    }

    var nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(lastPeriodDate.getDate() + cycleLength);

    var formattedNextPeriodDate = nextPeriodDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('result').innerText = 'Your next period is expected on ' + formattedNextPeriodDate + '.';
}
