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
        alert('Die Abholadresse muss in der Nähe der Geschäftsstelle liegen: Mülheimer Str. 38, 53604 Bad Honnef');
        return;
    }

    var location = donationType === 'Übergabe an der Geschäftsstelle' 
        ? 'Geschäftsstelle' 
        : `${street} ${houseNumber}, ${zipCode} ${city}, ${country}`;

    var confirmationUrl = `bestaetigung.html?clothingType=${encodeURIComponent(clothingType)}&crisisArea=${encodeURIComponent(crisisArea)}&date=${encodeURIComponent(new Date().toLocaleDateString())}&time=${encodeURIComponent(new Date().toLocaleTimeString())}&location=${encodeURIComponent(location)}`;

    window.location.href = confirmationUrl;
});

function validateAddress(zipCode) {
    var officeZip = '53604'; // PLZ der Geschäftsstelle
    return zipCode.startsWith(officeZip.substring(0, 5));
}

function populateCrisisAreas() {
    var crisisAreas = [
        "Syrien (Nachfrage: hoch)", "Jemen (Nachfrage: mittel)", "Afghanistan (Nachfrage: hoch)", "Ukraine (Nachfrage: mittel)", 
        "Sudan (Nachfrage: hoch)", "Demokratische Republik Kongo (Nachfrage: niedrig)", "Venezuela (Nachfrage: mittel)",
        "Myanmar (Nachfrage: hoch)", "Äthiopien (Nachfrage: niedrig)", "Zentralafrikanische Republik (Nachfrage: hoch)",
        "Haiti (Nachfrage: mittel)", "Somalia (Nachfrage: hoch)"
    ];

    crisisAreas = crisisAreas.sort(() => Math.random() - 0.5);

    var crisisAreaSelect = document.getElementById('crisisArea');
    crisisAreas.forEach(area => {
        var option = document.createElement('option');
        option.value = area;
        option.textContent = area;
        crisisAreaSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateCrisisAreas);
