/*
const slide = document.querySelectorAll('.sliders')
const next = document.getElementById('next')

let currentSlide = 0

function hideSlider(){
    slide.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slide[currentSlide].classList.add('on')
}

function nextSlider(){
    hideSlider()
    if(currentSlide == slide.length -1){
        currentSlide = 0
    }else{
        currentSlide++
    }
    showSlider()
}
next.addEventListener('click',nextSlider)*/


var search = document.querySelector('.search-btn')

function OpenSearch(){
    if(search.style.display = 'block'){

    }
}

function closeSearch(){
    if(search.style.display = 'none'){

    }
}

var login1 = document.querySelector('.login')

function fecharLo(){
    if(login1.style.display = 'none'){

    }
}

var BarFrds = document.querySelector('.bar-amigos')

function CloserFr(){
    if(BarFrds.style.display = 'none'){

    }
}

function OpenFrds(){
    if(BarFrds.style.display = 'flex'){
    }
}