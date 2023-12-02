let equalpressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
}

buttonInput.forEach((buttonClass) => {
    buttonClass.addEventListener("click", () => {
        if(equalpressed === 1){
            equalpressed = 0;
        }
    input.value += buttonClass.value;
    });
});

equal.addEventListener("click", () =>{
    equalpressed=1;
    let inputValue = input.value;
    try{
        let solution = eval(inputValue.substr(0,inputValue.length-1));
        if(Number.isNaN(solution) || !Number.isFinite(solution)){
            throw new Error("Invalid mathematical expression");
        }
        if(Number.isInteger(solution)){
            input.value = solution;
        }
        else{
            input.value = solution.toFixed(2);
        }
    }
    catch(error){
        alert(error.message);
    }
});

clear.addEventListener("click", ()=>{
    input.value="";
})

erase.addEventListener("click", ()=>{
    input.value = input.value.substr(0, input.value.length - 1);
})