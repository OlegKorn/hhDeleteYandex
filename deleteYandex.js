var ya = document.querySelectorAll('.serp-item')

for (i = 0; i<ya.length; i++) {
    if (ya[i].textContent.includes("Яндекс")) {
        ya[i].remove()   
