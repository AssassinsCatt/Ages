document.getElementById("button").addEventListener("click", function() {
    var button = document.getElementById("button");
    var p = document.getElementById("bool")

    if (button.value === "true") {
        button.value = "false";
        button.src = "..\\Bilder\\cat.ico";
        p.textContent = "False"
        console.log("Meow");

    } else {
        button.value = "true";
        button.src = "..\\Bilder\\cat_true.ico";
        p.textContent = "True"
        console.log("woeM");

    }
});
