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
zwliczba1.value = 0
const zwliczba2 = document.querySelector('#zw-liczba2')
zwliczba2.value = 0
const zwliczba3 = document.querySelector('#zw-liczba3')
zwliczba3.value = 0
const zwliczba4 = document.querySelector('#zw-liczba4')
zwliczba4.value = 0
const zwwynikiPojemnik = document.querySelector('#zw-wyniki')

document.addEventListener('keyup', () => {
    var zwliczby = [zwliczba1.value, zwliczba2.value, zwliczba3.value, zwliczba4.value]
    
    const zwsuma = zwliczby.reduce((a, b) => parseInt(a) + parseInt(b), 0)

    zwwynikiPojemnik.innerHTML = "suma = " + zwsuma 
    + " sriednia = " + zwsuma/4 
    + " min = " + Math.min.apply(null, zwliczby)
    + " max = " + Math.max.apply(null, zwliczby)
})


//normal
const inputsContainer = document.querySelector('#inputs')
const btnDodajpole = document.querySelector('#dodaj-pole')
const btnUsunpole = document.querySelector('#usun-pole')
const btnResult = document.querySelector('#result')
const nWyniki = document.querySelector('#n-wyniki')

btnDodajpole.addEventListener('click', () => {
    const inputsContainer = document.querySelector('#inputs')
    const inputs = document.querySelectorAll('.norm-inp')
    const inp = document.querySelector('.norm-inp').cloneNode(true)
    inputsContainer.insertBefore(inp, inputs[0])
})

btnUsunpole.addEventListener('click', () => {
    inputsContainer.innerHTML = '<input type="text" id="inp" class="norm-inp">' 
    + '<input type="text" class="norm-inp">'
    + '<input type="text" class="norm-inp">'
})

btnResult.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.norm-inp')
    const inputsValues = []
    Array.from(inputs).forEach(element => inputsValues.push(element.value))
    const nsuma = inputsValues.reduce((a, b) => parseInt(a) + parseInt(b), 0)

    nWyniki.innerHTML = "suma = " + nsuma
    + " sriednia = " + nsuma/inputsValues.length
    + " min = " + Math.min.apply(null, inputsValues)
    + " max = " + Math.max.apply(null, inputsValues)
})
