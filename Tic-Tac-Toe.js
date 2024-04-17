let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let msg_container=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let newgamebtn=document.querySelector("#submit")

let turnO=true;

let winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        if(turnO){
            box.innerText="O"
            turnO=false;
        }else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true
        checkwinner()
    })
})

const checkwinner=()=>{
    for(let i of winner){
        let pos1Val=boxes[i[0]].innerText
        let pos2Val=boxes[i[1]].innerText
        let pos3Val=boxes[i[2]].innerText

        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showwinner(pos1Val)
            }
        }

    }
};

showwinner=(winner)=>{
    msg.innerHTML=`Congratulation! Winner is ${winner}`
    msg_container.classList.remove("hide")
    disabledbox()
}
disabledbox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
enabledbox=()=>{
    for(box of boxes){
        box.disabled=false
        box.innerText=""
    }
}

reset=()=>{
    turnO=true
    enabledbox()
    msg_container.classList.add("hide")
}

newgamebtn.addEventListener("click",reset)
resetbtn.addEventListener("click",reset)