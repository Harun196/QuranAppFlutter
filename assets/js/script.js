const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if ($("#divMenuTbl").css("display") == "block") {
      //  $("#sidebar").css("height","50px");
        $("#divMenuTbl").css("display", "none");
       // $(".menu-bar").css("display", "none");
        $("#divMenuTranslators").css("display", "none");
    } else {
      //  $("#sidebar").css("height", "100%");
        $("#divMenuTbl").css("display", "block");
        //$(".menu-bar").css("display", "block");
        $("#divMenuTranslators").css("display", "block");
    }
})

//searchBtn.addEventListener("click" , () =>{
//    sidebar.classList.remove("close");
//})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
        $("#divMenuTbl").css("color", "#fff");
        $("#menuSurah").css("color", "#fff");
        $('.dataTable thead th').css('color', '#fff');
    } else {
        modeText.innerText = "Dark mode";
        $("#divMenuTbl").css("color", "#000");
        $("#menuSurah").css("color", "#000");
        $('.dataTable thead th').css('color', '#000');
    }
});