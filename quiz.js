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
let result = document.querySelector("#colorResult");

resultBtn.addEventListener("click", ()=>{
result.innertext = "";

let answer = document.querySelectorAll(" .q:checked");
let answerArr = Array.from(answer);

filteredAnswer = answerArr.filter((value)=>{
    return value.value === "right";
});

let amount =filteredAnswer.length;
let sum = `${amount}/10 poäng`;

result.append(sum);


});
