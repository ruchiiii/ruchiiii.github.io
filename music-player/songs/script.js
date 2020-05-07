const songs = [
    "bensound-summer.mp3",
    "kalimba.mp3",
    "Maid with the Flaxen Hair.mp3",
    "Sleep Away.mp3"
]

const createSongList = () =>{

    const list = document.createElement('ol')

    for(let i=0;i < songs.length;i++)
    {
        const item =document.createElement('li')
     
       item.appendChild(document.createTextNode(songs[i]))

       list.appendChild(item)
    }

    return list
}

document.getElementById('songlist').appendChild(createSongList())

songlist.onclick = (e)=>{
 const clcikeditem = e.target
 const source = document.getElementById('source')
 source.src =  clcikeditem.innerText
 console.log(clcikeditem.innerText)

 document.getElementById('currentlyplayingsong').innerText = "Curently playing : "
document.getElementById('currentsong').innerText = clcikeditem.innerText
 player.load()
// player.play()
}

const playAudio = () => {
    if(player.readyState){
        player.play()
    }
    
}

const pauseAudio = () => {
    player.pause()
}

const slider = document.getElementById('VolumeSlider')
slider.oninput = (e) => {
    const volume = e.target.value
    player.volume = volume
}

const updateprpgree = () => {
    if(player.currentTime > 0){
        const progressbar =document.getElementById('progress')
        progressbar.value = (player.currentTime /player.duration) * 100
    }
   
}