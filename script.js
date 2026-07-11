const showEnvelope = document.getElementById("showEnvelope");
const intro = document.getElementById("intro");
const envelopeSection = document.getElementById("envelopeSection");
const envelope = document.getElementById("envelope");
const letterSection = document.getElementById("letterSection");


// Intro → Envelope
showEnvelope.addEventListener("click", () => {

    intro.style.display = "none";
    envelopeSection.style.display = "flex";

});


// Open envelope → Letter
envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        envelopeSection.style.display = "none";
        letterSection.style.display = "flex";

    }, 1200);

});