const sus = document.getElementById('sus')
const Cancion = new Audio('assets/AmongUsSong.mp3')

function playSound(){
  Cancion.play()
}

sus.addEventListener('click',() => playSound())





