let starsContainer = document.querySelector(".stars-container");
let stars = document.querySelectorAll(".star");
let filledStars = 0;
let starCount = document.querySelector(".count");

starsContainer.addEventListener("click",function(e){
    let currClickedStar = e.target.dataset.index;
   
    for(let i=0;i<filledStars;i++){
        stars[i].classList.remove("star-filled");
    }

    for(let i=0;i<currClickedStar;i++){
        stars[i].classList.add("star-filled");
    }

    filledStars = currClickedStar;
    starCount.innerText = `${currClickedStar}`;
})

starsContainer.addEventListener("mouseover",function(e){
    let currClickedStar = e.target.dataset.index;
    console.log("currClickedStar is == ", currClickedStar);

    for(let i=0;i<filledStars;i++){
        stars[i].classList.remove("star-filled");
    }

    for(let i=0;i<currClickedStar;i++){
        stars[i].classList.add("star-filled");
    }
})

starsContainer.addEventListener("mouseleave",function(e){

    for(let i=0;i<5;i++){
        stars[i].classList.remove("star-filled");
    }

    for(let i=0;i<filledStars;i++){
        stars[i].classList.add("star-filled");
    }
})