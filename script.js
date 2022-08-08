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


// check score and set difficulty

const checkDifficulty = () =>{
    if ( score < 5 ){
        setTimeout(removeRedCircle,900);
    }
    else if ( score > 4 && score < 10){
        setTimeout(removeRedCircle,700);
    }
    else{
        setTimeout(removeRedCircle,500);
    }
}

// check the lifes and stop the game or call a function to continue.
const checkLifes = () =>{
    if (lifes < 1){
        clearInterval(game);
    }
    else{
        checkDifficulty();
    }
}


// check if an element has the 'clicked' class

const isClicked = (element) =>{
    if ( element.classList.contains('clicked')){
        element.classList.remove('clicked');
        return true;
    }
    else{
        return false;
       
    }
}


// create a random number between 0 and the number of circle, get the corresponding id and add a red class

const getredCircle = () =>{
    const randomCircle = Math.floor(Math.random()*12);
    const div = document.getElementById(randomCircle);
    div.classList.add('red');
    
    checkLifes();

    
}


// function to remove the red circle and all the possible blue.

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

getDiv(); // create all the circle
const aListe = document.querySelectorAll('div'); 

let game =setInterval(getredCircle,1000); // start the game here ( as soon as the page load).
// EVENTS

// on click on each circle to add score or reduce lifes.
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
