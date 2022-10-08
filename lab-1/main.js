//shame
const liczba1 = document.querySelector('#liczba1')
const liczba2 = document.querySelector('#liczba2')
const liczba3 = document.querySelector('#liczba3')
const liczba4 = document.querySelector('#liczba4')
const btnPrzelicz = document.querySelector('#przelicz')
const wynikiPojemnik = document.querySelector('#wyniki')


btnPrzelicz.addEventListener('click', () => {
    var liczby = [liczba1.value, liczba2.value, liczba3.value, liczba4.value]

    const suma = liczby.reduce((a, b) => parseInt(a) + parseInt(b), 0)

    wynikiPojemnik.innerHTML = "suma = " + suma
    + " sriednia = " + suma/4 
    + " min = " + Math.min.apply(null, liczby)
    + " max = " + Math.max.apply(null, liczby)
    

    console.dir("suma = " + suma
    + " sriednia = " + suma/4 
    + " min = " + Math.min.apply(null, liczby)
    + " max = " + Math.max.apply(null, liczby)
    )
})


//zieew
const zwliczba1 = document.querySelector('#zw-liczba1')
const zwliczba2 = document.querySelector('#zw-liczba2')
const zwliczba3 = document.querySelector('#zw-liczba3')
const zwliczba4 = document.querySelector('#zw-liczba4')
const zwwynikiPojemnik = document.querySelector('#zw-wyniki')

document.addEventListener('keyup', () => {
    var zwliczby = [zwliczba1.value, zwliczba2.value, zwliczba3.value, zwliczba4.value]
    
    const zwsuma = zwliczby.reduce((a, b) => parseInt(a) + parseInt(b), 0)

    zwwynikiPojemnik.innerHTML = "suma = " + zwsuma 
    + " sriednia = " + zwsuma/4 
    + " min = " + Math.min.apply(null, zwliczby)
    + " max = " + Math.max.apply(null, zwliczby)
})
