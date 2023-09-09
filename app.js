var ageInput = document.getElementsByTagName('input')[0], bY = document.getElementsByTagName('h4')[0];
var cY = 2023, mY;
console.log(ageInput);
console.log(bY);
function darh(){
    if(ageInput.value==""){
        alert("hooson baij bolohgui")
    }else if(ageInput.value>150){
        alert("iim naslah bolomjgui")
    }else if(ageInput<0){
        alert("ta turuugui baina")
    }else{
        mY = cY - ageInput.value ;
    console.log(ageInput.value);
    bY.innerText = "Таны төрсөн он:" + mY;
    }
}