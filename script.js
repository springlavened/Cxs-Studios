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

// ----------------------------
// Loading Animation
// ----------------------------

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

setTimeout(()=>{

loader.classList.add("hidden");

},800);

}

});

console.log("CXS Studio Website Loaded");
