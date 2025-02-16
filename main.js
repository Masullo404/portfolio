const video = document.getElementById('RocketVideo')
video.addEventListener('ended',()=>{
    setTimeout(()=>{
        video.play()
    },8000)
})
