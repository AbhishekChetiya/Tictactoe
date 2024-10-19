let boxer = document.querySelectorAll(".box");
let adder = document.querySelector(".winner");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let Newgame = document.querySelector(".Newgame");
let con= document.querySelector(".container");
// con.classList.remove("hide");
Newgame.addEventListener("click",()=>{
    enable();
    con.classList.remove("hide");
    reset.classList.remove("hide");
    adder.classList.add("hide");
});
const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const disable = ()=>{
    // boxer.forEach((box)=>{
    //     box.disabled = true;
    // })
    con.classList.add("hide");
    reset.classList.add("hide");
    adder.classList.remove("hide");
}
const enable =()=>{
    boxer.forEach((box)=>{
       box.disabled= false;
       box.innerHTML="";
    })
    turn = true;
}
const winner = ()=>{
   for(ele of arr) {
    let fir = boxer[ele[0]].innerHTML;
    let sec = boxer[ele[1]].innerHTML;
    let thi = boxer[ele[2]].innerHTML;
    if(fir!="" && sec!="" && thi!=""){
    if(fir===sec && thi===sec){
        
        if(fir=="X")
        msg.innerHTML = "Conguralation Winner is First Player";
        if(fir=="O") { 
        msg.innerHTML = "Conguralation Winner is Second Player";
        }

        disable();
        break;
    }
    }
  }
};

let turn = true;
boxer.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){
            turn = false;
            box.innerHTML = "X";
        }
        else{
            turn = true;
            box.innerHTML = "O";
        }
        box.disabled = true;
        winner();
    })    
});

reset.addEventListener("click",()=>{
    enable();
})