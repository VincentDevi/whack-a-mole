//global variables
const getMain = document.querySelector('main');
const scoreLine = document.querySelector('p');
const lifesLine = document.querySelector('span');
let lifes = 10;
let score = 0;

scoreLine.textContent = 'Your score is: ' + score;
lifesLine.textContent = 'Lifes remaining: ' + lifes;

// create Circle
const getDiv = () =>{
    for (let i = 0; i < 12 ; i++){
        const div = document.createElement('div');
        div.id = i;
        div.classList.add('circle');
        getMain.appendChild(div);

    }
}

const checkLifes = () =>{
    if (lifes < 1){
        clearInterval(game);
    }
    else{
        setTimeout(removeRedCircle,900);
    }
}

const isClicked = (element) =>{
    if ( element.classList.contains('clicked')){
        element.classList.remove('clicked');
        return true;
    }
    else{
        return false;
       
    }
}

const getredCircle = () =>{
    const randomCircle = Math.floor(Math.random()*12);
    const div = document.getElementById(randomCircle);
    div.classList.add('red');
    
    checkLifes();

    
}


const removeRedCircle = () =>{
    const redCircle = document.querySelector('.red');
    if (redCircle == null){
        return 
    }
    else{
        if (isClicked(redCircle)== true){
            console.log('ok');
        }
        else{
            lifes --;
            lifesLine.textContent = 'Lifes remaining: ' + lifes;
    
        }
        redCircle.classList.remove('red');
    }
    const blueCircle = document.querySelectorAll('.clicked');
    if ( blueCircle.length>0){
        blueCircle.forEach(i => {
            i.classList.remove('clicked');
        });
    }
}



// code to execute

getDiv();
let game =setInterval(getredCircle,1000);
const aListe = document.querySelectorAll('div');


aListe.forEach(circle => {
    circle.addEventListener('click', getScore =>{
        let circleClicked = getScore.target;
        circleClicked.classList.add('clicked');
        
        if ( circleClicked.classList.contains('red') ){
            score ++;
            scoreLine.textContent = 'Your score is: ' + score;

        }
        else{
            lifes --;
            lifesLine.textContent = 'Lifes remaining: ' + lifes;

        }
    })
});
