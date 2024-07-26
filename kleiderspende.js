document.getElementById('donationType').addEventListener('change', function() {
    var addressGroup = document.getElementById('addressGroup');
    var officeAddress = document.getElementById('officeAddress');
    if (this.value === 'Abholung') {
        addressGroup.style.display = 'block';
        officeAddress.style.display = 'none';
    } else if (this.value === 'Übergabe an der Geschäftsstelle') {
        addressGroup.style.display = 'none';
        officeAddress.style.display = 'block';
    } else {
        addressGroup.style.display = 'none';
        officeAddress.style.display = 'none';
    }
});

document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var donationType = form.donationType.value;
    var firstName = form.firstName ? form.firstName.value : '';
    var lastName = form.lastName ? form.lastName.value : '';
    var street = form.street ? form.street.value : '';
    var houseNumber = form.houseNumber ? form.houseNumber.value : '';
    var zipCode = form.zipCode ? form.zipCode.value : '';
    var city = form.city ? form.city.value : '';
    var country = form.country ? form.country.value : '';
    var pickupDate = form.pickupDate ? form.pickupDate.value : '';
    var clothingType = form.clothingType.value;
    var crisisArea = form.crisisArea.value;

    if (donationType === 'Abholung' && !validateAddress(zipCode)) {
        alert('Die Abholadresse muss in der Nähe der Geschäftsstelle liegen.');
        return;
    }

    var confirmationData = {
        donationType: donationType,
        firstName: firstName,
        lastName: lastName,
        clothingType: clothingType,
        crisisArea: crisisArea,
        date: donationType === 'Abholung' ? pickupDate : new Date().toLocaleDateString('de-DE'),
        time: donationType === 'Abholung' ? '15:00 - 19:00' : new Date().toLocaleTimeString('de-DE'),
        location: donationType === 'Übergabe an der Geschäftsstelle' ? 'Geschäftsstelle, Mülheimer Str. 38, 53604 Bad Honnef, Deutschland' : `${street} ${houseNumber}, ${zipCode} ${city}, ${country}`,
        openingHours: donationType === 'Übergabe an der Geschäftsstelle' ? 'Montag - Freitag: 09:00 - 18:00, Samstag: 10:00 - 14:00, Sonntag: Geschlossen' : null
    };

    localStorage.setItem('confirmationData', JSON.stringify(confirmationData));
    window.location.href = 'success.html';
});

function validateAddress(zipCode) {
    var officeZipStart = '53'; // Die ersten beiden Ziffern der Geschäftsstelle PLZ
    return zipCode.startsWith(officeZipStart);
}
