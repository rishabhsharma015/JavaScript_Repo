const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");

// console.log(boxes);                                          // NodeList

boxes.forEach( (box)=> {
    box.addEventListener('click', (event)=>{                   // 'event' is an Event object.

        if(event.target.id == "grey" || event.target.id == "blue"){
            body.style.color = "white";
        }
        if(event.target.id == "white" || event.target.id == "yellow"){
            body.style.color = "black";
        }
        body.style.backgroundColor = event.target.id;
    })
})