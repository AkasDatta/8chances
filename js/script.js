// script.js
document.getElementById('spinButton').addEventListener('click', function () {
    const wheel = document.getElementById('wheel');
    const randomDegree = Math.floor(Math.random() * 360) + 1440; // Ensure at least 4 full spins
    wheel.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    // Reset spin after animation
    setTimeout(() => {
        const actualDegree = randomDegree % 360; // Get final rotation angle
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${actualDegree}deg)`;
    }, 4000);
});
