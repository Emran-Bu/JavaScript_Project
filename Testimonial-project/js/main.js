let customerImage = document.querySelector('#customer-img')
let customerName = document.querySelector('#customer-name')
let customerText = document.querySelector('#customer-text')
let buttons = document.querySelectorAll('.btn')

var change = [
    {
        img: "img/customer-1.jpg",
        title : "SANDY",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
    },

    {
        img: "img/customer-2.jpg",
        title : "AMY",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },

    {
        img: "img/customer-3.jpg",
        title : "TYRELL",
        text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },

    {
        img: "img/customer-4.jpg",
        title : "WANDA",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }

]

var random;
var check = change.length+1
for (const button of buttons) {
    button.addEventListener('click', function(e) {
        e.preventDefault()

        function name(params) {
            random = Math.floor(Math.random()*change.length)
        }
        name()
        while(true){
            if (random == check) {
                name()
            } else{
                break;
            }
        }
       
        customerImage.setAttribute('src', change[random].img)
        console.log();

        customerName.textContent = change[random].title
        customerText.textContent = change[random].text
        check = random
    })
}
