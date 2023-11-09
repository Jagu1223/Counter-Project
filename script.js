const counts = document.querySelector("#count");
const subs = document.querySelector("#sub");
const adds = document.querySelector("#add");
const resets = document.querySelector("#reset")

let counter = 0;
adds.addEventListener("click", function(){
    counter++;
    counts.innerHTML = counter;
})


resets.addEventListener("click", function(){
    counter = 0;
    counts.innerHTML = counter;
})


subs.addEventListener("click", function(){
    counter--;
    counts.innerHTML = counter;
})