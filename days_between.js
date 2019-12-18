const daysBetweenFinder = {
    date1Input() {
        if (!document.getElementById('include_from').checked) {
            let includeFromDate = new Date(document.getElementById('date_from').value.replace(/-/g, ','));
            includeFromDate.setHours(24, 0, 0, 0);
            return includeFromDate.getTime();
        }

        return new Date(document.getElementById('date_from').value.replace(/-/g, ',')).getTime();
    },

    date2Input() {
        return new Date(document.getElementById('date_to').value.replace(/-/g, ',')).getTime();
    },

    getDates() {
        const daysBetweenDiv = document.getElementById('days_between');
        if (isNaN(this.date1Input()) || isNaN(this.date2Input())) {
            return;
        }
        else if (this.date1Input() > this.date2Input()) {
            daysBetweenDiv.innerText = `0`;
            console.log(`from greater than to`);
            return;
        }
        return daysBetweenDiv.innerText = (Math.floor((this.date2Input() - this.date1Input()) / (60 * 60 * 24 * 1000)));
    },
    setEvents() {
        document.querySelectorAll('.date_input').forEach((date) => date.addEventListener('input', () => this.getDates()));
        document.getElementById('include_from').addEventListener('input', () => this.getDates());
    },

};
daysBetweenFinder.setEvents();