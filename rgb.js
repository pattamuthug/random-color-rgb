var btn = document.getElementById("btn");
var text = document.getElementById("text");

const color=()=>{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var ranclr = "rgb("+ x + "," + y + "," + z + ")";
 console.log(ranclr);
  
    text.style.color = ranclr;
    
}
btn.addEventListener("click",color);