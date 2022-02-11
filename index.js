//document.getElementById("count").innerText=5

//initialise Count to 0
//onclick button shoukd increment


let count = 0

let countEl=document.getElementById("count")

let saveEl=document.getElementById("save-el")



function increment() {
    count = count + 1
    

    countEl.innerText=count
}

function save(){
    
    let countstring=count + " - "
    saveEl.textContent+=countstring
    countEl.textContent = 0
    count = 0
}



