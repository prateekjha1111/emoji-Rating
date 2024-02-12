const starsArray = document.querySelectorAll(".fa-star");
const emojisArray = document.querySelectorAll(".fa-regular");
const colors = ["red", "orange", "lightblue", "lightgreen", "green"];
updateRating(0);

starsArray.forEach(function(star, index){
    star.addEventListener("click", function(){
        updateRating(index);
    });
});

function updateRating(index) {
    starsArray.forEach(function(star, idx){
       if(idx < index+1){
        star.classList.add("active");
       }
       else {
        star.classList.remove("active");
       }
    });

    emojisArray.forEach(function(emoji){
        emoji.style.transform = `translateX(${-60*index}px)`;
        emoji.style.color = colors[index];
    })
};
