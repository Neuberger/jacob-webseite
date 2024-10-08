function toggleMenu() {
    const menu = document.getElementById('side-menu');
    const mainContent = document.getElementById('main-content');

    // Menü ein-/ausblenden
    if (menu.style.width === '250px') {
        menu.style.width = '0'; // Menü schließen
        mainContent.style.marginLeft = '0'; // Hauptinhalt zurückschieben
    } else {
        menu.style.width = '250px'; // Menü öffnen
        mainContent.style.marginLeft = '250px'; // Hauptinhalt nach rechts schieben
    }
}