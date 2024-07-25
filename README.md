Verein für Kleiderspenden - Registrierungsseite

Projektübersicht
Dieses Projekt umfasst eine Webseite für den Verein für Kleiderspenden. Die Webseite ermöglicht es Benutzern, Kleiderspenden entweder zur Abholung zu registrieren oder eine Übergabe an der Geschäftsstelle des Vereins zu planen. Das Projekt wurde mit HTML, CSS, JavaScript und dem Bootstrap-Framework erstellt, um eine responsive und benutzerfreundliche Erfahrung zu gewährleisten.

Dateien und ihre Funktionen
index.html: Startseite des Vereins für Kleiderspenden mit allgemeinen Informationen über den Verein und einem Button, um zur Registrierungsseite für Kleiderspenden zu gelangen.
kleiderspende.html: Registrierungsseite für Kleiderspenden, auf der Benutzer entweder eine Abholung oder eine Übergabe an der Geschäftsstelle planen können.
images/: Verzeichnis für Bilder, einschließlich des Vereinslogos und eines Bildes zur Geschichte des Vereins.
styles.css: Enthält die CSS-Styles für die Webseite.
kleiderspende.js: Enthält das JavaScript zur dynamischen Anpassung des Formulars und zur Validierung der Eingaben.
README.md: Diese Datei, die eine Übersicht und Anleitung zur Nutzung des Projekts bietet.

**Funktionalitäten**

**Startseite (index.html)**
Header mit Navigation
Begrüßungsbereich mit einem Button zur Registrierungsseite für Kleiderspenden
Informationen über den Verein und seine Projekte
Kontaktformular

**Registrierungsseite (kleiderspende.html)**
Formular zur Registrierung von Kleiderspenden
Dropdown-Menü zur Auswahl zwischen "Abholung" und "Übergabe an der Geschäftsstelle"
Dynamische Anzeige der Adressfelder bei Auswahl von "Abholung"
Anzeige der Adresse der Geschäftsstelle bei Auswahl von "Übergabe an der Geschäftsstelle"
Validierung der Abholadresse, um sicherzustellen, dass die ersten beiden Stellen der Postleitzahl mit der der Geschäftsstelle übereinstimmen

**Implementierte Anforderungen**
Die Webseite besitzt einen Titel und ein Logo.
Die Webseite verfügt über einen Header mit globaler Navigation, einen Content-Bereich und einen Footer mit rechtlichen Hinweisen.
Die Webseite ist responsiv und für die Anzeige auf Desktops, Tablets und Smartphones optimiert.
Die Seite enthält ein Formular zur Registrierung von Kleiderspenden.
Benutzer können auswählen, ob die Kleidung abgeholt oder an der Geschäftsstelle übergeben werden soll.
Bei Auswahl von "Abholung" werden umfangreiche Adressfelder angezeigt.
Bei Auswahl von "Übergabe an der Geschäftsstelle" wird die Adresse der Geschäftsstelle angezeigt.
Die Validierung der Abholadresse stellt sicher, dass die ersten beiden Stellen der Postleitzahl mit der der Geschäftsstelle übereinstimmen.
Erfolgreiche Registrierungen werden mit einer Bestätigungsnachricht abgeschlossen.

**Zusätzliche Hinweise**
Die Webseite nutzt das Bootstrap-Framework über ein CDN. Stellen Sie sicher, dass Sie eine aktive Internetverbindung haben, um die Bootstrap-Stile und -Skripte zu laden.
Die Validierung der Postleitzahl ist auf eine Beispiel-PLZ der Geschäftsstelle (12345) eingestellt. Passen Sie diese bei Bedarf im JavaScript (kleiderspende.js) an.
