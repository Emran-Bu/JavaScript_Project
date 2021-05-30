var text = document.querySelector('#text')
var buttons = document.querySelectorAll('.btn')
var keyboard = document.querySelector('.keyboard')
var wrapper = document.querySelector('.wrapper')


text.addEventListener('click', function() {
    
    keyboard.style.left = '50%'
    keyboard.style.transition = '2s all ease'
    keyboard.style.display = 'block'
})   

wrapper.addEventListener('click', function() {
    // keyboard.style.display = 'none'
    keyboard.style.left = '-9999px'
    keyboard.style.transition = '5s all ease'
})

keyboard.addEventListener('click', function() {
    keyboard.style.display = 'block'
})

// var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// document.addEventListener('keydown', function(e) {
//     for (let i = 0; i < arr.length; i++) {
//         if (e.code === 'Key'+arr[i]) {
//             document.querySelector('.btn' + arr[i]).style.backgroundColor = "red"
//         }
//     }
// })


var storage = '';

var color = ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'black', 'purple', 'lightblue']

for (const button of buttons) {
    button.addEventListener('click', function() {
        storage += this.innerText
        text.innerHTML = storage
    })
}

document.querySelector('.btnEnter').addEventListener('click', function() {
    storage += "\n"
})

document.querySelector('.btnBack').addEventListener('click', function() {
    storage = storage.slice(0, -1)
    text.innerText = storage
})

document.querySelector('.btnSpace').addEventListener('click', function() {
    storage += '/\s/g;'
    var result = str.match(patt1)
    text.innerHTML = result
    // "<button>&nbsp;</button>"
})


document.addEventListener('keydown', function(e) {
    document.querySelector('.'+e.code).style.backgroundColor = color[Math.floor(Math.random()*color.length)]
    document.querySelector('.'+e.code).style.color = "white"
})

function removeColor(e) {
    document.querySelector('.'+e.code).style.backgroundColor = ""
    document.querySelector('.'+e.code).style.color = ""
}

document.addEventListener('keyup', function(e) {
    // console.log(e);
    if(e.code == "Enter"){
        storage += "\n"
        removeColor(e)
    } 
    
    else if (e.code == "Backspace") {
        storage = storage.slice(0, -1)
        text.innerText = storage
        removeColor(e)
    }

    else{
        removeColor(e)

        storage += document.querySelector('.'+e.code).innerText
        text.innerHTML = storage
    } 
    // storage += e.code.slice(-1)
})
