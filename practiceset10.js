let animal = document.getElementById("animal");


animal.addEventListener("mouseover", function() {
    animal.textContent = "Nocturnal";
});


animal.addEventListener("mouseout", function() {
    animal.textContent = "Bat";
});


setTimeout(function() {
    document.getElementById("message").textContent = "Welcome to the Animal Page!";
}, 3000);