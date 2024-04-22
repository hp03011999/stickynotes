let textarea = document.querySelector("#textA");
let input1 = document.querySelector("#bg")

let input2 = document.querySelector("#text")


let btn = document.querySelector("#btn")

let right = document.querySelector("#wrapper .right")


btn.addEventListener("click", hello)


let update;

function hello(){

    if(btn.innerHTML === 'edit'){

        update.target.parentElement.children[0].innerHTML = textarea.value
        btn.innerHTML = "add note"

        textarea.value = ""
    }

    else{

   

    let div = document.createElement("div");

    

    div.classList.add("disk")

    

    let span = document.createElement("a")

    let spanText = document.createElement("span")

    let spanEdit = document.createElement("span");

    spanEdit.innerHTML = "E"
    span.classList.add("span1")
   
    span.innerHTML = "&times;"
    
    // if(spanText ==textarea.value){


    spanText.innerText=textarea.value;

    div.style.backgroundColor = input1.value;

    div.style.color = input2.value;

    
    div.appendChild(spanText)
    div.appendChild(spanEdit)
    right.appendChild(div)
    div.appendChild(span)
    // }
    
    
    span.addEventListener("click", coll)


    spanEdit.addEventListener("click", edit)


    spanText.addEventListener("blur", focus)

    }
  
}


function coll(event){

    event.target.parentElement.remove()
}

function edit(event){

    event.target.parentElement.children[0].contentEditable = true;
    if(event.target.innerHTML === "E"){

        textarea.value = event.target.parentElement.children[0].innerHTML;
        textarea.focus();
        btn.innerHTML = "edit"

        update = event;
    }
}

function focus(event){

    event.target.contentEditable = true;
}

