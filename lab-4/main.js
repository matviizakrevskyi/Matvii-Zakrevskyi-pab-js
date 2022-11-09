// localStorage.setItem('listaNotatek', JSON.stringify([1,2,3,4,5,6]))
// localStorage.getItem('listaNotatek')
// JSON.parse()

const submitBtn = document.querySelector('#submit')
const showBtn = document.querySelector('.btn-show')

submitBtn.addEventListener('click', () => {
    var n = 0
    while(localStorage.getItem(`title${n}`) !== null){
        n++
    }

    
    //title
    localStorage.setItem(
        `title${n}`, 
        document.querySelector('#title').value
    )

    //content
    localStorage.setItem(
        `content${n}`, 
        document.querySelector('#content').value
    )

    //color
    localStorage.setItem(
        `color${n}`, 
        document.querySelector('#color').value
    )

    //date
    localStorage.setItem(
        `date${n}`,
        new Date().toISOString()
    )

    //pin
    localStorage.setItem(
        `pin${n}`,
        document.querySelector('#pin').checked
    )

    Show()
})



showBtn.addEventListener('click', Show)


function Show(){
    document.querySelector('#list-notes').innerHTML = ''
    
    
    for(let i = 0; i < localStorage.length * 10; i++){
        if(localStorage.getItem(`title${i}`) != null){
            if(localStorage.getItem(`pin${i}`) === 'true'){
                CreateNote(i)
            }
        }
    }
    for(let i = 0; i < localStorage.length * 10; i++){
        if(localStorage.getItem(`title${i}`) != null){
            if(localStorage.getItem(`pin${i}`) === 'false'){
                CreateNote(i)
            }
        }
    }
}

function CreateNote(i){
    var li = document.createElement('li')
    var note = document.createElement('div')
    note.classList.add('note')

    //title
    var titleValue = localStorage.getItem(`title${i}`)
    var pForTitle = document.createElement('p')
    pForTitle.style.height = '20px'
    var title = document.createElement('text')
    title.style.fontSize = '18px'
    title.innerHTML = titleValue
    pForTitle.append(title)
    note.append(pForTitle)

    //pin
    var pin = document.createElement('input')
    pin.type = 'checkbox'
    pin.style.float = 'right'
    if(localStorage.getItem(`pin${i}`) === 'true'){
        pin.checked = true
    }
    pin.attributes.setNamedItem(document.createAttribute('disabled'))
    pForTitle.append(pin)

    //line
    var hr = document.createElement('hr')
    hr.style.height = '3px'
    hr.style.backgroundColor = 'black'
    note.append(hr)

    //content
    var contentValue = localStorage.getItem(`content${i}`)
    var pForContent = document.createElement('p')
    var content = document.createElement('text')
    content.innerHTML = contentValue
    content.classList.add('note-content')
    pForContent.append(content)
    note.append(pForContent)
    
    //date
    var dateValue = localStorage.getItem(`date${i}`)
    var pForDate = document.createElement('p')
    var date = document.createElement('text')
    date.innerHTML = dateValue
    pForDate.append(date)
    note.append(pForDate)

    //color
    note.style.backgroundColor = localStorage.getItem(`color${i}`)
    
    //btn delete
    var pForBtnDelete = document.createElement('p')
    pForBtnDelete.style.height = '30px'
    var btnDelete = document.createElement('button')
    btnDelete.innerHTML = 'Delete'
    btnDelete.classList.add('btn-delete')
    btnDelete.addEventListener('click', function(){ Delete(i) })
    pForBtnDelete.append(btnDelete)
    
    //btn edit
    var btnEdit = document.createElement('button')
    btnEdit.innerHTML = 'Edit'
    btnEdit.classList.add('btn-delete')
    btnEdit.addEventListener('click', function(){ OnBtnEdit(i) })
    pForBtnDelete.append(btnEdit)

    note.append(pForBtnDelete)
    
    
    li.append(note)
    document.querySelector('#list-notes').append(li)
}

function CreateEditNote(i){
    var li = document.createElement('li')
    var note = document.createElement('div')
    note.classList.add('note')

    //title
    var titleValue = localStorage.getItem(`title${i}`)
    var pForTitle = document.createElement('p')
    pForTitle.style.height = '20px'
    var title = document.createElement('input')
    title.classList.add('inputNote')
    title.id = 'titleEdit'
    title.value = titleValue
    pForTitle.append(title)
    note.append(pForTitle)

    //pin
    var pin = document.createElement('input')
    pin.id = 'pinEdit'
    pin.type = 'checkbox'
    pin.style.float = 'right'
    if(localStorage.getItem(`pin${i}`) === 'true'){
        pin.checked = true
    }
    pForTitle.append(pin)

    
    //line
    var hr = document.createElement('hr')
    hr.style.height = '3px'
    hr.style.backgroundColor = 'black'
    note.append(hr)

    //content
    var contentValue = localStorage.getItem(`content${i}`)
    var pForContent = document.createElement('p')
    var content = document.createElement('textarea')
    content.id = 'contentEdit'
    content.innerHTML = contentValue
    content.classList.add('inputEdit')
    pForContent.append(content)
    note.append(pForContent)

    //date

    //color
    var colorValue = localStorage.getItem(`color${i}`)
    var pForColor = document.createElement('p')
    var color = document.createElement('input')
    color.id = 'colorEdit'
    color.type = 'color'
    color.classList.add('colorEdit')
    color.value = colorValue
    pForColor.append(color)
    note.append(pForColor)

    
    //btn cancel
    var pForBtns = document.createElement('p')
    pForBtns.style.height = '30px'
    var btnCancel = document.createElement('button')
    btnCancel.innerHTML = 'Cancel'
    btnCancel.classList.add('btn-delete')
    btnCancel.addEventListener('click', Show )
    pForBtns.append(btnCancel)
    
    //btn accept
    var btnAccept = document.createElement('button')
    btnAccept.innerHTML = 'Accept'
    btnAccept.classList.add('btn-delete')
    btnAccept.addEventListener('click', function(){ Edit(i) } )
    pForBtns.append(btnAccept)
    
    note.append(pForBtns)

    li.append(note)
    document.querySelector('#list-notes').append(li)
}


function Delete(i){
    localStorage.removeItem(`title${i}`)
    localStorage.removeItem(`content${i}`)
    localStorage.removeItem(`date${i}`)
    localStorage.removeItem(`color${i}`)
    localStorage.removeItem(`pin${i}`)

    Show()
}

function Edit(i){
    //new data
    var newTitle = document.querySelector('#titleEdit').value
    var newContent = document.querySelector('#contentEdit').value
    var newColor = document.querySelector('#colorEdit').value
    var newPin = document.querySelector('#pinEdit').checked

    localStorage.removeItem(`title${i}`)
    localStorage.removeItem(`content${i}`)
    localStorage.removeItem(`color${i}`)
    localStorage.removeItem(`pin${i}`)

    localStorage.setItem(`title${i}`, newTitle)
    localStorage.setItem(`content${i}`, newContent)
    localStorage.setItem(`color${i}`, newColor)
    localStorage.setItem(`pin${i}`, newPin)

    Show()
}

function OnBtnEdit(n){
    document.querySelector('#list-notes').innerHTML = ''
    
    
    for(let i = 0; i < localStorage.length * 10; i++){
        if(localStorage.getItem(`title${i}`) != null){
            if(localStorage.getItem(`pin${i}`) === 'true'){
                if(n === i){
                    CreateEditNote(i)
                }
                else{
                    CreateNote(i)
                }
            }
        }
    }
    for(let i = 0; i < localStorage.length * 10; i++){
        if(localStorage.getItem(`title${i}`) != null){
            if(localStorage.getItem(`pin${i}`) === 'false'){
                if(n === i){
                    CreateEditNote(i)
                }
                else{
                    CreateNote(i)
                }
            }
        }
    }
}
