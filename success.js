document.addEventListener('DOMContentLoaded', function() {
    var confirmationData = JSON.parse(localStorage.getItem('confirmationData'));
    var confirmationDetails = document.getElementById('confirmationDetails');
    
    if (confirmationData) {
        if (confirmationData.donationType === 'Abholung') {
            var formattedDate = new Date(confirmationData.date).toLocaleDateString('de-DE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
            confirmationDetails.innerHTML = `
                <li><strong>Vorname:</strong> ${confirmationData.firstName}</li>
                <li><strong>Nachname:</strong> ${confirmationData.lastName}</li>
                <li><strong>Ort:</strong> ${confirmationData.location}</li>
                <li><strong>Art der Kleider:</strong> ${confirmationData.clothingType}</li>
                <li><strong>Krisengebiet:</strong> ${confirmationData.crisisArea}</li>
                <li><strong>Abholzeitraum:</strong> ${formattedDate}, ${confirmationData.time}</li>
            `;
        } else {
            confirmationDetails.innerHTML = `
                <li><strong>Ort:</strong> ${confirmationData.location}</li>
                <li><strong>Öffnungszeiten:</strong></li>
                <ul>
                    <li>Montag - Freitag: 09:00 - 18:00</li>
                    <li>Samstag: 10:00 - 14:00</li>
                    <li>Sonntag: Geschlossen</li>
                </ul>
                <p>Die Kleider können während den Öffnungszeiten abgegeben werden.</p>
                <li><strong>Art der Kleider:</strong> ${confirmationData.clothingType}</li>
                <li><strong>Krisengebiet:</strong> ${confirmationData.crisisArea}</li>
            `;
        }
    }
});
