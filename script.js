/* ==========================================
   CXS STUDIO
   script.js
========================================== */

// ----------------------------
// Smooth Scroll Reveal
// ----------------------------

const revealElements = document.querySelectorAll(
'.project-card, .service-box, .about, .community, .archive-card, .info-box'
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.classList.add("fade-up");

revealObserver.observe(el);

});

// ----------------------------
// Shrink Header
// ----------------------------

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// ----------------------------
// Cursor Glow
// ----------------------------

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// ----------------------------
// Floating Particles
// ----------------------------

const particles=document.createElement("div");

particles.className="particles";

document.body.appendChild(particles);

for(let i=0;i<40;i++){

const p=document.createElement("span");

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(8+Math.random()*12)+"s";

p.style.animationDelay=Math.random()*12+"s";

p.style.opacity=Math.random();

particles.appendChild(p);

}

// ----------------------------
// Button Ripple Effect
// ----------------------------

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="";

});

});

// ----------------------------
// Logo Glow Pulse
// ----------------------------

const logo=document.querySelector(".hero-logo");

if(logo){

setInterval(()=>{

logo.style.filter=`
drop-shadow(0 0 20px cyan)
drop-shadow(0 0 40px #ff4fd8)
`;

setTimeout(()=>{

logo.style.filter=`
drop-shadow(0 0 10px cyan)
drop-shadow(0 0 20px #ff4fd8)
`;

},700);

},3000);

}

// ----------------------------
// Random Project Glow
// ----------------------------

const cards=document.querySelectorAll(".project-card");

setInterval(()=>{

cards.forEach(card=>{

card.style.boxShadow="";

});

const random=

cards[Math.floor(Math.random()*cards.length)];

if(random){

random.style.boxShadow="0 0 35px rgba(52,245,255,.30)";

}

},2500);

// ===========================
// Intro Screen
// ===========================

const introScreen = document.getElementById("intro-screen");
const enterButton = document.getElementById("enter-site");

if (introScreen && enterButton) {

    enterButton.addEventListener("click", () => {

        introScreen.classList.add("hidden");

    });

}

/*=========================================
  BENDY AND THE BLOOD BATH EFFECTS
=========================================*/

if (document.body.classList.contains("project-bendy")) {

    /* Floating Ink Particles */

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {

        const ink = document.createElement("div");

        ink.className = "ink-particle";

        ink.style.left = Math.random() * 100 + "vw";
        ink.style.animationDuration = 8 + Math.random() * 12 + "s";
        ink.style.animationDelay = Math.random() * 8 + "s";
        ink.style.opacity = Math.random() * 0.4 + 0.1;
        ink.style.transform =
            `scale(${0.4 + Math.random() * 1.3})`;

        document.body.appendChild(ink);

    }

    /* Fade Sections */

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    sections.forEach(section => {

        section.classList.add("fade-section");

        observer.observe(section);

    });

    /* Logo Glow */

    const logo = document.querySelector(".project-logo");

    if (logo) {

        setInterval(() => {

            logo.animate([

                {
                    filter:
                    "drop-shadow(0 0 15px rgba(255,220,120,.2))"
                },

                {
                    filter:
                    "drop-shadow(0 0 35px rgba(255,220,120,.5))"
                },

                {
                    filter:
                    "drop-shadow(0 0 15px rgba(255,220,120,.2))"
                }

            ], {

                duration: 3500,

                easing: "ease-in-out"

            });

        }, 3500);

    }

    /* Film Grain Flicker */

    setInterval(() => {

        document.body.style.filter =
            `brightness(${0.98 + Math.random() * 0.04})`;

    }, 120);

}
