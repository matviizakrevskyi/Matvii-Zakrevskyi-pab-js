document.addEventListener('keypress', onKeyPress)

const KeyToSound = {
    'a': 's1',
    'b': 's2'
}

function onKeyPress(ev){
    const sound = KeyToSound[ev.key]
    playSound(sound)
}

function playSound(sound){
    if (!sound){
        return
    }
    const audioTag = document.querySelector(`#${sound}`)
    audioTag.currentTime = 0
    audioTag.play()
}