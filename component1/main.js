// let section3 = document.querySelector(".three");
// let spans = document.querySelectorAll(".progress span");

// window.onscroll = function(){
//     if(window.scrollY >= section3.offsetTop - 250){
//         spans.forEach((span)=>{
//         span.style.width=span.dataset.width;
//         })
//     }
// }
////////////////////////////////
let section4 = document.querySelector(".four");
let nums = document.querySelectorAll(".nums .num");
let started = false;

window.onscroll = function(){
  if(window.scrollY >= section4.offsetTop - 250 )  {
  if(!started){
  nums.forEach((num)=> countNumbers(num))
 } started = true;
}
}

function countNumbers(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
            
        }
    },2000/goal)
}
