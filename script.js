const  box1= document.querySelector(".box1");
const  box2= document.querySelector(".box2");
const  lists= document.querySelectorAll(".list");

// for(list of lists){
//     list.addEventListener("dragstart",(e)=>{
//         let selected = e.target;

//         box2.addEventListener("dragover",(e)=>{
//             e.preventDefault();
//         })
//         box2.addEventListener("drop",()=>{
//             box2.appendChild(selected);
//             selected = null;
//         })
//         box1.addEventListener("dragover",(e)=>{
//             e.preventDefault();
//         })
//         box1.addEventListener("drop",()=>{
//             box1.appendChild(selected);
//             selected = null;
//         })
//     })
// }


for(list of lists){
    list.addEventListener("dragstart",(e)=>{
        let selected = e.target;

        box2.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        box2.addEventListener("drop",()=>{
            box2.appendChild(selected);
            selected = null;
        })

        box1.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        box1.addEventListener("drop",()=>{
            box1.appendChild(selected);
            selected = null;
        })

    })
}