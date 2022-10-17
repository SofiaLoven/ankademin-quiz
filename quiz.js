let darkmode= document.querySelector("#darkmode");

darkmode.addEventListener("change", ()=>{
    if(darkmode.checked){
    document.body.style.background = "black";
    document.body.style.color = "white";
    } else{
        document.body.style.background ="white";
        document.body.style.color ="black";
    };
});


let resultBtn = document.querySelector("#result");
