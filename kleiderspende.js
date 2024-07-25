document.getElementById('donationType').addEventListener('change', function() {
    var addressGroup = document.getElementById('addressGroup');
    if (this.value === 'Übergabe an der Geschäftsstelle') {
        addressGroup.style.display = 'none';
    } else {
        addressGroup.style.display = 'block';
    }
});

document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var donationType = form.donationType.value;
    var address = form.address.value;
    var clothingType = form.clothingType.value;
    var crisisArea = form.crisisArea.value;
    
    if (donationType === 'Abholung' && !validateAddress(address)) {
        alert('Die Abholadresse muss in der Nähe der Geschäftsstelle liegen.');
        return;
    }

    var confirmationMessage = `Registrierung erfolgreich!\nArt der Kleider: ${clothingType}\nKrisengebiet: ${crisisArea}\nDatum: ${new Date().toLocaleDateString()}\nUhrzeit: ${new Date().toLocaleTimeString()}\nOrt: ${donationType === 'Übergabe an der Geschäftsstelle' ? 'Geschäftsstelle' : address}`;
    localStorage.setItem('confirmationMessage', confirmationMessage);
    window.location.href = 'success.html';
});

function validateAddress(address) {
    var officeZip = '12345'; // Beispiel PLZ der Geschäftsstelle
    return address.startsWith(officeZip.substring(0, 2));
}

// Auf der Erfolgsseite (success.html)
if (document.getElementById('confirmation')) {
    document.getElementById('confirmation').innerText = localStorage.getItem('confirmationMessage');
}
