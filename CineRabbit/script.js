const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");


arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 270); 
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        if (imageItem - (3 + clickCounter) + (3 -widthRatio) >= 0) {
            clickCounter++;
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 270}px)`

        } else {
            movieLists[i].style.transform = "translateX(0)"
            clickCounter = 0;
        }
    });
});


/* light mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title");
ball.addEventListener("click", function(){
    items.forEach((item)=> item.classList.toggle("active"));
});