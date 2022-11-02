document.addEventListener('keypress', onKeyPress)

const KeyToSound = {
    'a': 's1',
    's': 's2',
    'd': 's3',
    'f': 's4',
    'g': 's5',
    'h': 's6',
    'j': 's7',
} 

function onKeyPress(ev){
    const sound = KeyToSound[ev.key]
    //console.log(ev.key)
    document.querySelector(`#${ev.key}`).classList.add('key-playing')
    setTimeout(() => {document.querySelector(`#${ev.key}`).classList.remove('key-playing')}, 200)
    playSound(sound)
}

function playSound(sound){
    if (!sound){
        return
    }
    console.log(sound)
    const audioTag = document.querySelector(`#${sound}`)
    audioTag.currentTime = 0
    audioTag.play()
}

// record 1
const btnRecord1 = document.querySelector('#btn-record-1')
const btnPlay1 = document.querySelector('#btn-play-1')
var channel1 = new Map()
var n1 = 1
var isRecording = false

btnRecord1.addEventListener('click', () => {
    isRecording = true
    n1++
    btnRecord1.classList.add('btn-record')
    if (n1 === 2){
        channel1.clear()
    }
    if (n1 % 2 === 1){
        n1 = 1
        isRecording = false
        btnRecord1.classList.remove('btn-record')
        return
    }
    document.addEventListener('keypress', addSound1)
})

function addSound1(ev){
    if (n1 % 2 === 1){
        n1 = 1
        return
    }
    const sound = KeyToSound[ev.key]
    playSound(sound)
    if (sound !== undefined){
        channel1.set(Date.now(), sound)
        console.log(channel1)
    }
}

//2
const btnRecord2 = document.querySelector('#btn-record-2')
const btnPlay2 = document.querySelector('#btn-play-2')
var channel2 = new Map()
var n2 = 1

btnRecord2.addEventListener('click', () => {
    n2++
    btnRecord2.classList.add('btn-record')
    if (n2 === 2){
        channel2.clear()
    }
    if (n2 % 2 === 1){
        n2 = 1
        btnRecord2.classList.remove('btn-record')
        return
    }
    document.addEventListener('keypress', addSound2)
})

function addSound2(ev){
    if (n2 % 2 === 1){
        n2 = 1
        return
    }
    const sound = KeyToSound[ev.key]
    playSound(sound)
    if (sound !== undefined){
        channel2.set(Date.now(), sound)
        console.log(channel2)
    }
}

//3
const btnRecord3 = document.querySelector('#btn-record-3')
const btnPlay3 = document.querySelector('#btn-play-3')
var channel3 = new Map()
var n3 = 1

btnRecord3.addEventListener('click', () => {
    n3++
    btnRecord3.classList.add('btn-record')
    if (n3 === 2){
        channel3.clear()
    }
    if (n3 % 2 === 1){
        n3 = 1
        btnRecord3.classList.remove('btn-record')
        return
    }
    document.addEventListener('keypress', addSound3)
})

function addSound3(ev){
    if (n3 % 2 === 1){
        n3 = 1
        return
    }
    const sound = KeyToSound[ev.key]
    playSound(sound)
    if (sound !== undefined){
        channel3.set(Date.now(), sound)
        console.log(channel3)
    }
}

//4
const btnRecord4 = document.querySelector('#btn-record-4')
const btnPlay4 = document.querySelector('#btn-play-4')
var channel4 = new Map()
var n4 = 1

btnRecord4.addEventListener('click', () => {
    n4++
    btnRecord4.classList.add('btn-record')
    if (n4 === 2){
        channel4.clear()
    }
    if (n4 % 2 === 1){
        n4 = 1
        btnRecord4.classList.remove('btn-record')
        return
    }
    document.addEventListener('keypress', addSound4)
})

function addSound4(ev){
    if (n4 % 2 === 1){
        n4 = 1
        return
    }
    const sound = KeyToSound[ev.key]
    playSound(sound)
    if (sound !== undefined){
        channel4.set(Date.now(), sound)
        console.log(channel4)
    }
}



btnPlay1.addEventListener('click', function(){ playChannel(channel1, 1)} )
btnPlay2.addEventListener('click', function(){ playChannel(channel2, 2)} )
btnPlay3.addEventListener('click', function(){ playChannel(channel3, 3)} )
btnPlay4.addEventListener('click', function(){ playChannel(channel4, 4)} )

function playChannel(channel, k){
    if(isRecording === true){
        return
    }
    document.querySelector(`#btn-play-${k}`).classList.add('btn-playing')
    console.log('start')
    var i = 0
    var keys = Array.from(channel.keys())
    var time = keys[1] - keys[0]

    timeoutFunc(time, i)
    
    function timeoutFunc(time, i){
        setTimeout(
            () => {
                if (i === channel.size){
                    document.querySelector(`#btn-play-${k}`).classList.remove('btn-playing')
                    return
                }

                playSound(channel.get(keys[i]))
                
                if (i > 0){
                    time = keys[i + 1] - keys[i]
                }

                if (i < channel.size){
                    i++
                    timeoutFunc(time, i)
                }
            },
            time
        )
    }

}