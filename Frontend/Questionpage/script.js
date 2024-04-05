document.getElementById("button").addEventListener("click", function() {
    var button = document.getElementById("button");
    var p = document.getElementById("bool")

    if (button.value === "true") {
        button.value = "false";
        button.src = "C:\\Users\\Rib\\Desktop\\MeowProjekte\\App Idee\\Frontend\\Bilder\\cat.ico";
        p.textContent = "False"
        console.log("Meow");

    } else {
        button.value = "true";
        button.src = "C:\\Users\\Rib\\Desktop\\MeowProjekte\\App Idee\\Frontend\\Bilder\\cat_true.ico";
        p.textContent = "True"
        console.log("woeM");

    }
});
