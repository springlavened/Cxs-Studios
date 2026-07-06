// Create floating particles

const particleCount = 40;

for (let i = 0; i < particleCount; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";

    particle.style.animationDuration =
        8 + Math.random() * 12 + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.width =
        2 + Math.random() * 5 + "px";

    particle.style.height =
        particle.style.width;

    document.body.appendChild(particle);

}
