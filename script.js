// ==========================
// ONGLET À PROPOS
// ==========================
function openTab(tabId, element) {

    let contents = document.querySelectorAll(".tab-content");
    let tabs = document.querySelectorAll(".tab");

    contents.forEach(c => c.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    element.classList.add("active");
}


// ==========================
// COMPÉTENCES (HOVER)
// ==========================
document.querySelectorAll(".skill-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.querySelectorAll(".progress-bar").forEach(bar => {
            bar.style.width = bar.getAttribute("data-percent");
        });
    });

    card.addEventListener("mouseleave", () => {
        card.querySelectorAll(".progress-bar").forEach(bar => {
            bar.style.width = "0";
        });
    });

});
document.querySelector(".contact-form").addEventListener("submit", function(e) {

    let answer = this.querySelector(".captcha input").value;

    if(answer != 4){
        e.preventDefault();
        alert("Mauvais calcul 😅");
    }

});