let closeIcon = document.querySelector(".close");
let openBtn = document.querySelector(".btn");
openBtn.addEventListener("click", function(){
    modalContainer.style.display = "block";
})
let modalContainer = document.querySelector(".modal");


closeIcon.addEventListener("click",function(){
    modalContainer.style.display = "none";
})