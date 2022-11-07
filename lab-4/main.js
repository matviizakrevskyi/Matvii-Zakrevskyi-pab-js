// localStorage.setItem('listaNotatek', JSON.stringify([1,2,3,4,5,6]))
// localStorage.getItem('listaNotatek')
// JSON.parse()

const submitBtn = document.querySelector('#submit')
const showBtn = document.querySelector('.btn-show')

submitBtn.addEventListener('click', () => {
    var n = localStorage.length

    //title
    localStorage.setItem(
        `title${n / 4}`, 
        document.querySelector('#title').value
    )

    //content
    localStorage.setItem(
        `content${n / 4}`, 
        document.querySelector('#content').value
    )

    //color
    localStorage.setItem(
        `color${n / 4}`, 
        document.querySelector('#color').value
    )

    //date
    localStorage.setItem(
        `date${n / 4}`,
        new Date().toISOString()
    )

    Show()
})



showBtn.addEventListener('click', Show)


function Show(){
    var listNotes = document.querySelector('#list-notes')
    listNotes.innerHTML = ''
    
    
    for(let i = 0; i < localStorage.length / 4; i++){
        var li = document.createElement('li')
        var note = document.createElement('div')    //????
        note.classList.add('note')
    
        //title
        var titleValue = localStorage.getItem(`title${i}`)
        var pForTitle = document.createElement('p')
        var title = document.createElement('h4')
        title.innerHTML = titleValue
        pForTitle.append(title)
        note.append(pForTitle)
        
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
        note.append(pForBtnDelete)

        li.append(note)

        listNotes.append(li)
    }
}


function Delete(i){
    localStorage.removeItem(`title${i}`)
    localStorage.removeItem(`content${i}`)
    localStorage.removeItem(`date${i}`)
    localStorage.removeItem(`color${i}`)

    Show()
}
