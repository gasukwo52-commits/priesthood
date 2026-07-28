console.log("Cyber Academy Loaded");

document.querySelectorAll(".card").forEach(card=>{
card.addEventListener("mouseenter",()=>{
card.style.transform="scale(1.05)";
card.style.transition="0.3s";
});

card.addEventListener("mouseleave",()=>{
card.style.transform="scale(1)";
});
});console.log("Priesthood website loaded successfully!");
