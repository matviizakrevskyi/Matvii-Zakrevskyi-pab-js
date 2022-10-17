const main = document.querySelector('main')
const slides = document.querySelector('.slides')
const btnPrev = document.querySelector('#prev')
const btnNext = document.querySelector('#next')


let licznik = 0 
const intervalRef = setInterval( 
    () => {
        licznik += 600
        if(licznik > 3000){
            licznik = 0
        }

        slides.style.left = -licznik + 'px'
        
        main.innerHTML='From interval ' + licznik / 600
    },
    5000
)

btnPrev.addEventListener('click', () => {
    licznik -= 600
    if(licznik < 0){
        licznik = 3000
    }

    slides.style.left = -licznik + 'px'

    main.innerHTML='From interval ' + licznik / 600
})

btnNext.addEventListener('click', () => {
    licznik += 600
    if(licznik > 3000){
        licznik = 0
    }

    slides.style.left = -licznik + 'px'
    
    main.innerHTML='From interval ' + licznik / 600
})


    
    
// const picts = document.querySelectorAll('img')
// let licznik = 0 
// const intervalRef = setInterval( 
//     () => {
//         if(licznik === 5){
//             picts[licznik].classList.add('none')
//             picts[licznik].classList.remove('block')
//             licznik = -1
//             picts[++licznik].classList.add('block')
//             // picts[licznik].style.display = 'none'
//             // licznik = 0
//             // picts[++licznik].style.display = 'block'
//         }
//         else{
//             picts[licznik].classList.add('none')
//             picts[licznik].classList.remove('block')
//             picts[++licznik].classList.add('block')
//             // picts[licznik].style.display = 'none'
//             // picts[++licznik].style.display = 'block'
//         }
        
//         main.innerHTML='From interval ' + licznik
//         + " count " + Array.from(picts).length
//     },
//     4000
// )
    
