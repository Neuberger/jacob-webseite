const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const body = document.body;

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    container.classList.toggle('active');
});


function openModal() {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
    
    // Setze das Bild in das Modal ein und zeige es an
    modal.style.display = "block";
    modalImage.src = "images/jacob-medrea.png"; // URL des Bildes
    caption.innerHTML = "Beschreibung des Bildes"; // Bildbeschreibung
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Schließt das Modal
}

// Schließt das Modal, wenn der Benutzer außerhalb des Bildes klickt
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
