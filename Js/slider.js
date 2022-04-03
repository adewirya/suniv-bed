let idx = 1;
let count = 5;
let  w = $('#slider-image').width()
let nextImage = (index) =>{
    $(".slider-content").animate({"margin-left" : -w * (index - 1)})
}

function slide(){
    (idx == count) ? idx = 1: idx++;
    nextImage(idx)
}

setInterval(slide, 3000);


let images = $('#slider-image')
