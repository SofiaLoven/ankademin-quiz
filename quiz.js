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

//True False och check one.
let answer = document.querySelectorAll(" .q:checked");
let answerArr = Array.from(answer);


let filteredAnswer = answerArr.filter((arr)=>{
    return arr.value === "right";
});

// Chech Three
let answerThree = document.querySelectorAll("input[type='checkbox'][class='checkThree']:checked");
//let threeArr= Array.from(answerThree);
let threeArr=[];
answerThree.forEach((arr)=>{
    threeArr.push(arr.value);
});

let filterThree = threeArr.filter((arr)=>{
    return arr === "right";
});

let sum=0;
if(+filterThree.length===3){
    sum=1;
}else if(+filterThree.length===6){
    sum=2;
};

let amount = +filteredAnswer.length + sum;
let total = "";

if(amount < 0.5*10){
    result.style.color ="red";
    total = `${amount}/10 poäng. Du är tyvärr underkänd.`
} else if (amount <= 0.75*10){
    result.style.color ="orange";
    total =`${amount}/10 poäng. Du är godkänd.`
}else{
    result.style.color ="green";
    total = `${amount}/10 poäng. Du är mycket väl godkänd.`
};
result.append(total);

});