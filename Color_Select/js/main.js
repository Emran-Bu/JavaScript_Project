var num = document.querySelector('.num')
var colorDiv = document.querySelector('.colorDiv')
var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var generate = document.querySelector('.generate')


var count = 0
var btnColor = ''
var colorArr = ['red', 'green']

generate.addEventListener('click', function() {
    // generate.style.display = 'none'
    generate.setAttribute('disabled','disabled');
    counter = 9;
    var inter = setInterval(() => {
        generate.innerHTML = counter;
        counter--;
    }, 100);

    setTimeout(() => {
        clearInterval(inter)
        generate.innerHTML = 'Generate';
        generate.removeAttribute('disabled','disabled')
        // generate.style.display = 'block'
        // generate.style.textAlign = 'center'
        // document.querySelector('.generateDiv').style.display = 'flex'
        // document.querySelector('.generateDiv').style.justifyContent= 'center'
    }, 1000);

    console.log();
    if (btnColor == '') {
        
    } else{
        var color = colorDiv.style.backgroundColor = colorArr[Math.floor(Math.random()*colorArr.length)]
        this.style.border = '2px solid #FFF'
        // btn1.style.border = 'none'
        // btn2.style.border = 'none'
        // console.log(color);

        if (color==btnColor) {
            count++
            num.innerHTML = count
           
            // num.innerHTML = 'Win'
            console.log('win');
        }else{
            count--
            num.innerHTML = count
            
            // num.innerHTML = 'Lose'
            console.log('lose');
        }
    }
    

})

btn1.addEventListener('click', function() {
    this.style.border = '2px solid yellow'
    btn2.style.border = 'none'
    btnColor = 'red'
    // console.log(btnColor);
})

btn2.addEventListener('click', function() {
    this.style.border = '2px solid yellow'
    btn1.style.border = 'none'
    btnColor = 'green'
    // console.log(btnColor);
})