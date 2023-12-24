const audio = document.querySelector('audio');
const content = document.querySelector('.content');
const text = document.querySelector('.text');
const yes = document.querySelector('.yes');
const btn = document.querySelector('.btn');
const page1 = document.querySelector('.page1');
const click = document.querySelector('.click');
const btn2 = document.querySelector('.btn2');
const page2 = document.querySelector('.page2');
const click2 = document.querySelector('.click2');
const btn3 = document.querySelector('.btn3');
const page3 = document.querySelector('.page3');
const click3 = document.querySelector('.click3');
const btn4 = document.querySelector('.btn4');
const page4 = document.querySelector('.page4');
const click4 = document.querySelector('.click4');
const btn5 = document.querySelector('.btn5');
const page5 = document.querySelector('.page5');
const click5 = document.querySelector('.click5');
const animation = document.querySelector('.pyro');

var hisNum1;
var hisNum2;
var a = 2;
var b = 2;

click.onmouseover = function (e) {

    switch (a) {
        case 2:
            break;
        case 3:
            text.innerText = 'Đố mày bắt được tao :))'
            text.style.display = 'block';
            break;
        case 4:
            text.innerText = 'Gà vl vậy mày'
            text.style.display = 'block';
            break;
        case 5:
            text.innerText = 'Nhấn cho đàng hoàng coi !'
            text.style.display = 'block';
            break;
        case 6:
            text.innerText = 'Má vậy mà cũng không nhấn được'
            text.style.display = 'block';
            break;
        default:
            text.innerText = 'Nguuuuuuuuuuuu'
            text.style.display = 'block';
    }

    switch (b) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            break;
        default:
            yes.style.display = 'block';
            yes.innerText = 'Chỉ nhấn tao được thôi'

    }

    randomNumber1 = Math.floor(Math.random() * 1000);

    while ((randomNumber1 < 60) || (randomNumber1 > 580) || (Math.abs(randomNumber1 - hisNum1) < 200)) {
        randomNumber1 = Math.floor(Math.random() * 1000);
    }

    randomNumber2 = Math.floor(Math.random() * 1000);

    while ((randomNumber2 < 60) || (randomNumber2 > 1200) || (Math.abs(randomNumber2 - hisNum2) < 100)) {
        randomNumber2 = Math.floor(Math.random() * 1000);
    }



    click.style.top = randomNumber1 + 'px';
    click.style.left = randomNumber2 + 'px';
    hisNum1 = randomNumber1;
    hisNum2 = randomNumber2;
    a = a + 1;
    b = b + 1;

}

btn.onclick = function () {
    audio.play();
    animation.style.display = 'block';
    page1.style.animation = 'opacity  0.8s linear'
    setTimeout(function () {
        page1.style.display = 'none';
    }, 800)
    page2.style.animation = 'opacityup 0.8s linear'
    setTimeout(function () {
        page2.style.display = 'block';
    }, 800)


}

click2.onmouseover = function (e) {

    animation.style.display = 'none';


    randomNumber1 = Math.floor(Math.random() * 1000);

    while ((randomNumber1 < 60) || (randomNumber1 > 580) || (Math.abs(randomNumber1 - hisNum1) < 200)) {
        randomNumber1 = Math.floor(Math.random() * 1000);
    }

    randomNumber2 = Math.floor(Math.random() * 1000);

    while ((randomNumber2 < 60) || (randomNumber2 > 1200) || (Math.abs(randomNumber2 - hisNum2) < 100)) {
        randomNumber2 = Math.floor(Math.random() * 1000);
    }



    click2.style.top = randomNumber1 + 'px';
    click2.style.left = randomNumber2 + 'px';
    hisNum1 = randomNumber1;
    hisNum2 = randomNumber2;

}

btn2.onclick = function () {
    
    audio.play();
    animation.style.display = 'block';
    page2.style.animation = 'opacity  0.8s linear'
    setTimeout(function () {
        page2.style.display = 'none';
        
    }, 800)
    page3.style.animation = 'opacityup 0.8s linear'
    setTimeout(function () {
        page3.style.display = 'block';
    }, 800)
   
}

click3.onmouseover = function (e) {

    animation.style.display = 'none';


    randomNumber1 = Math.floor(Math.random() * 1000);

    while ((randomNumber1 < 60) || (randomNumber1 > 580) || (Math.abs(randomNumber1 - hisNum1) < 200)) {
        randomNumber1 = Math.floor(Math.random() * 1000);
    }

    randomNumber2 = Math.floor(Math.random() * 1000);

    while ((randomNumber2 < 60) || (randomNumber2 > 1200) || (Math.abs(randomNumber2 - hisNum2) < 100)) {
        randomNumber2 = Math.floor(Math.random() * 1000);
    }



    click3.style.top = randomNumber1 + 'px';
    click3.style.left = randomNumber2 + 'px';
    hisNum1 = randomNumber1;
    hisNum2 = randomNumber2;

}


btn3.onclick = function () {
    
    audio.play();
    animation.style.display = 'block';
    page3.style.animation = 'opacity  0.8s linear'
    setTimeout(function () {
        page3.style.display = 'none';
        
    }, 800)
    page4.style.animation = 'opacityup 0.8s linear'
    setTimeout(function () {
        page4.style.display = 'block';
    }, 800)
   
}

click4.onmouseover = function (e) {

    animation.style.display = 'none';


    randomNumber1 = Math.floor(Math.random() * 1000);

    while ((randomNumber1 < 60) || (randomNumber1 > 580) || (Math.abs(randomNumber1 - hisNum1) < 200)) {
        randomNumber1 = Math.floor(Math.random() * 1000);
    }

    randomNumber2 = Math.floor(Math.random() * 1000);

    while ((randomNumber2 < 60) || (randomNumber2 > 1200) || (Math.abs(randomNumber2 - hisNum2) < 100)) {
        randomNumber2 = Math.floor(Math.random() * 1000);
    }



    click4.style.top = randomNumber1 + 'px';
    click4.style.left = randomNumber2 + 'px';
    hisNum1 = randomNumber1;
    hisNum2 = randomNumber2;

}

btn4.onclick = function () {
    
    audio.play();
    animation.style.display = 'block';
    page4.style.animation = 'opacity  0.8s linear'
    setTimeout(function () {
        page4.style.display = 'none';
        
    }, 800)
    page5.style.animation = 'opacityup 0.8s linear'
    setTimeout(function () {
        page5.style.display = 'block';
    }, 800)
   
}

click5.onmouseover = function (e) {

    animation.style.display = 'none';


    randomNumber1 = Math.floor(Math.random() * 1000);

    while ((randomNumber1 < 60) || (randomNumber1 > 580) || (Math.abs(randomNumber1 - hisNum1) < 200)) {
        randomNumber1 = Math.floor(Math.random() * 1000);
    }

    randomNumber2 = Math.floor(Math.random() * 1000);

    while ((randomNumber2 < 60) || (randomNumber2 > 1200) || (Math.abs(randomNumber2 - hisNum2) < 100)) {
        randomNumber2 = Math.floor(Math.random() * 1000);
    }



    click5.style.top = randomNumber1 + 'px';
    click5.style.left = randomNumber2 + 'px';
    hisNum1 = randomNumber1;
    hisNum2 = randomNumber2;

}