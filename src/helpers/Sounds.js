function playErrorSound() {   
    const audio = new Audio('/sounds/error.mp3')
    audio.play()
}

function playCorrectSound() {
    const audio = new Audio('/sounds/correct.mp3')
    audio.play()
}

export default { playErrorSound, playCorrectSound }