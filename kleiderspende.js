document.getElementById('donationType').addEventListener('change', function() {
    var addressGroup = document.getElementById('addressGroup');
    if (this.value === 'Abholung') {
        addressGroup.style.display = 'block';
    } else {
        addressGroup.style.display = 'none';
    }
});

document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var donationType = form.donationType.value;
    var street = form.street.value;
    var houseNumber = form.houseNumber.value;
    var zipCode = form.zipCode.value;
    var city = form.city.value;
    var country = form.country.value;
    var clothingType = form.clothingType.value;
    var crisisArea = form.crisisArea.value;

    if (donationType === 'Abholung' && !validateAddress(zipCode)) {
        alert('Die Abholadresse muss in der Nähe der Geschäftsstelle liegen.');
        return;
    }

    var confirmationMessage = `Registrierung erfolgreich!\nArt der Kleider: ${clothingType}\nKrisengebiet: ${crisisArea}\nDatum: ${new Date().toLocaleDateString()}\nUhrzeit: ${new Date().toLocaleTimeString()}\nOrt: ${donationType === 'Übergabe an der Geschäftsstelle' ? 'Geschäftsstelle' : `${street} ${houseNumber}, ${zipCode} ${city}, ${country}`}`;
    alert(confirmationMessage);
});

function validateAddress(zipCode) {
    var officeZip = '12345'; // Beispiel PLZ der Geschäftsstelle
    return zipCode.startsWith(officeZip.substring(0, 2));
}
