//Funktion för darkmode.
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


function colorWrong(qNumber){
    let wrongAnswer = document.querySelector(`[name='f${qNumber}'][value='wrong']:checked`);
    let location = document.querySelector(`#q${qNumber}`);
    location.innerHTML="";
    if (wrongAnswer){
    let p=document.createElement("p");
    p.innerText = `Här har du svarat fel.`;
    p.style.color="red";
    location.append(p);
    };
}; 

function checkbox(number){
    sum=0;
    let answer = document.querySelectorAll(`input[type='checkbox'][class='check${number}']:checked`);
    let arr=[];
    answer.forEach((a)=>{
            arr.push(a.value);
        });
        let arrFiltered = arr.filter((arr)=>{
            return arr === "right";
        });
        if(+arrFiltered.length===3){
        sum+=1;
        };
        return sum;
    };
   
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
    //Check three.
    let answerSix = checkbox(6);
    let answerSeven = checkbox(7);
    sum = answerSix + answerSeven;

    //Räkna ihop totalen.
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

    //Berättar om det är fel.
    let qArr = [1,2,3,4,5,6,7,8,9,10];
    qArr.forEach((nr)=>{
        colorWrong(nr);
    });

});