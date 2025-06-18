// Définir la date de fin (9 novembre à 8h45)
const targetDate = new Date('june 21, 2025 08:40:00').getTime();

// Mettre à jour le compteur toutes les secondes
const countdown = setInterval(function() {

    // Obtenir la date et l'heure actuelle
    const now = new Date().getTime();

    // Calculer la différence entre la date actuelle et la date cible
    const distance = targetDate - now;

    // Calculer les jours, heures, minutes et secondes restants
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Afficher le résultat dans les éléments HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Si le compte à rebours est terminé, afficher un message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Temps écoulé !";
    }
}, 1000);
