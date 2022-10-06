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
