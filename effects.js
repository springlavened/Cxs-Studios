/* ==========================================
   CXS STUDIO EFFECTS FRAMEWORK v1.0
   Created for CXS Studio
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeReveal();
    initializeGodsFall();
    initializeMouseGlow();

});

/* ==========================================
   SCROLL REVEAL
========================================== */

function initializeReveal(){

    const reveals = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:0.15

    });

    reveals.forEach(section=>{

        section.classList.add("reveal");
        observer.observe(section);

    });

}

/* ==========================================
   GODSFALL EMBERS
========================================== */

function initializeGodsFall(){

    if(!document.body.classList.contains("project-godsfall"))
        return;

    const background=document.createElement("div");
    background.className="godsfall-background";

    document.body.appendChild(background);

    for(let i=0;i<55;i++){

        createEmber(background);

    }

}

function createEmber(parent){

    const ember=document.createElement("div");

    ember.className="ember";

    ember.style.left=Math.random()*100+"vw";

    const size=(Math.random()*7)+2;

    ember.style.width=size+"px";
    ember.style.height=size+"px";

    ember.style.animationDuration=
        (8+Math.random()*10)+"s";

    ember.style.animationDelay=
        (-Math.random()*20)+"s";

    ember.style.opacity=
        (.25+Math.random()*.75);

    parent.appendChild(ember);

}

/* ==========================================
   MOUSE GLOW
========================================== */

function initializeMouseGlow(){

    const glow=document.createElement("div");

    glow.className="cursor-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove",(e)=>{

        glow.style.left=e.clientX+"px";
        glow.style.top=e.clientY+"px";

    });

}
