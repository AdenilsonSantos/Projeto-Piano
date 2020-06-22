// get all keys

const keys = document.querySelectorAll(".keys")
console.log(keys)

//play notes

playNote = event =>{
    console.log(event)
    //KeyCode
    let audioKeyCode = getKeyCode(event)

    console.log(audioKeyCode)
    //typed or pressed key

    const key = document.querySelector(`[data-key = "${audioKeyCode}"]`)
    console.log(key)

    //if key exists

    const cantFoundAnyKey = !key

    if(cantFoundAnyKey) {
        return
    }

    //play audio

    addPlayingClass(key);

    playAudio(audioKeyCode)
   //removePlayingClass(key)

}

function addPlayingClass(key) {
    key.classList.add("playing")
}

removePlayingClass = (event) => {
    event.target.classList.remove('playing')
}

//play audio

getKeyCode = event => {
    return (event.type === "keydown")? event.keyCode : event.target.dataset.key
}

playAudio = (audioKeyCode) => {
    const audio = document.querySelector(`audio[data-key = "${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()

}

//click width mouse

keys.forEach(key => {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})

//keyboard types

window.addEventListener("keydown", playNote)