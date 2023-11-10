const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPass = document.getElementById("first-pass")
let secondPass = document.getElementById("second-pass")
let lengthSlider = document.getElementById("myRange");
let output = document.getElementById("length");
output.innerHTML = lengthSlider.value;

lengthSlider.oninput = function() {
  output.innerHTML = this.value;
}

function randomPassword(){
    firstPass.textContent = ""
    secondPass.textContent = ""
    for(i=0; i < lengthSlider.value; i++){
        let randomNumberOne = Math.floor(Math.random()*characters.length)
        let randomNumberTwo = Math.floor(Math.random()*characters.length)
        firstPass.textContent += characters[randomNumberOne]
        secondPass.textContent += characters[randomNumberTwo]        
    }
    
}
console.log(characters.length)
console.log(lengthSlider)