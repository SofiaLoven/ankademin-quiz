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
result.innerHTML = "";

let answer = document.querySelectorAll(" .q:checked");
let answerArr = Array.from(answer);

filteredAnswer = answerArr.filter((value)=>{
    return value.value === "right";
});

let amount = filteredAnswer.length;
let sum = "";

if(amount < 0.5*10){
    result.style.color ="red";
    sum = `${amount}/10 poäng. Du är tyvärr underkänd.`
} else if (amount <= 0.75*10){
    result.style.color ="orange";
    sum =`${amount}/10 poäng. Du är godkänd.`
}else{
    result.style.color ="green";
    sum = `${amount}/10 poäng. Du är mycket väl godkänd.`
};
result.append(sum);

});
