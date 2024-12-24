const input1 = document.getElementById("input");



function show(input){
    input1.value += input;
}


function clearInputs(){
    input1.value = '';
   
}


function equalityyy(){
    try{
        input1.value = eval(input1.value);
    }
    catch{
        input1.value = "error"
    }
    eval(input1.value); //eval show the result 
}



function  clearLastLetterrr(){
    input1.value = input1.value.slice(0, -1);
}
