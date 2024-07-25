function initMap() {
    var officeLocation = { lat: 50.643, lng: 7.216 }; // Koordinaten für Mülheimer Str. 38, 53604 Bad Honnef
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: officeLocation
    });
    var marker = new google.maps.Marker({
        position: officeLocation,
        map: map,
        title: 'Geschäftsstelle'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    document.getElementById('clothingType').textContent = params.get('clothingType');
    document.getElementById('crisisArea').textContent = params.get('crisisArea');
    document.getElementById('location').textContent = params.get('location');

    if (params.get('location') === 'Geschäftsstelle') {
        document.getElementById('location').textContent += ' - Mülheimer Str. 38, 53604 Bad Honnef';
    }

    var openingHours = `
        Montag - Freitag: 9:00 - 17:00 Uhr<br>
        Samstag: 10:00 - 14:00 Uhr<br>
        Sonntag: Geschlossen
    `;
    document.getElementById('openingHours').innerHTML = openingHours;
});
