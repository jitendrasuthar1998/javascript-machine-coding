let boxContainer = document.querySelector(".box-container");
let boxes = document.querySelectorAll(".box");

let queue = [];

boxContainer.addEventListener("click", function(e){
    let index = e.target.dataset.index;
    if(index){
        console.log("index", index);
        queue.push(index);
        boxes[index].classList.add("green");
    }


    if(queue.length == 7){
        let cnt = 0;

        while(queue.length > 0){
            let ind = queue.shift();
            cnt++;

            setTimeout(()=>{
                boxes[ind].classList.remove("green");
            },cnt * 1000);
        }
    }
})