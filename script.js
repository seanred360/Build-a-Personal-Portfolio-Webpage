const tiles = document.querySelectorAll('.project-tile')
const urls = ["https://glitch.com/edit/#!/sean-movie-app?path=index.html%3A28%3A0", 
"https://glitch.com/edit/#!/seanred360---product-landing-page", 
"https://glitch.com/edit/#!/sean-ringtone-website?path=index.html%3A1%3A0", 
"https://glitch.com/edit/#!/drink-water-tracker?path=index.html%3A2%3A16", 
"https://glitch.com/edit/#!/sean-drawing-app?path=index.html%3A1%3A0"]

// tiles.forEach(tile => {
//     tile.addEventListener('click', () => {
//         if(tile.classList.contains('active')) {
//             window.open(urls[], '_blank');
//         }

//         removeActiveClasses()
//         tile.classList.add('active')
//     })
// })

for(let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', () => {
        if(tiles[i].classList.contains('active')) {
            window.open(urls[i], '_blank')
        }

        removeActiveClasses()
        tiles[i].classList.add('active')
    })
}

function removeActiveClasses() {
    tiles.forEach(tile => {
        tile.classList.remove('active')
    })
}