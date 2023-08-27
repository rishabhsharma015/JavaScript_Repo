const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");

// console.log(boxes);                                          // NodeList

boxes.forEach( (box)=> {
    box.addEventListener('click', (event)=>{                   // 'event' is an Event object.
        body.style.backgroundColor = event.target.id;
    })
})