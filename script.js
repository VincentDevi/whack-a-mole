// First exercice

// const para = document.querySelector('p');
// const word = 'prout';
// let index = 0;

// function prout() {
//         if (index<word.length){
//             para.appendChild(document.createTextNode(word[index]));
//             index ++ ;
//         }
//         else{
//             clearInterval();
//         }
       
    
// }
// setInterval(prout,1000);


//second exercice
// let second =0;
// let minute =0;
// let hour =0;
// function time() {
//     if (second<60){
//         second ++;
//     }
//     else if (second == 60 && minute <60){
//         second = 1;
//         minute ++;
//     }
//     else{
//         minute = 0;
//         hour ++;
//     }
//     console.log(second + ": second has passed. " + minute +": minute has passed. " +hour + ": hour has passed. ");

// }



// setInterval(time, 1000);


// third exercice

const main = document.querySelector('main');
for ( let i =0 ; i < 12 ; i++){
    const div = document.createElement('div');
    div.id = i;
    div.className = "circle";
    main.appendChild(div);
}

function getRed() {
        let num = Math.floor(Math.random()*12);
        console.log(num);
        let getElement = document.getElementById(num);
        console.log(getElement);
        getElement.classList.add('red');
        
        if (lives>0){
            setTimeout(removeRed,1000);

            setTimeout(getRed,1000);
        }
        else{
            alert('You noob');
            let res = prompt('Try again : Y/N');
            if(res==="Y" || res==="y"){
                const p = document.querySelector('p');
                const s = document.querySelector('span');
                lives = 5;
                compteur =0;
                s.textContent = 'Lifes: '+lives;
                p.textContent = "Score: "+compteur;
                setTimeout(getRed,1000);
                setTimeout(removeRed,1000);
            }
            else{
                return 
            }
        }

}
 
function removeRed() {
    const el = document.querySelector('.red');
    if (el==null){
        console.log('prout');
        

    }
    else{
      
        el.classList.remove('red');   
        lives --;      
        sp.textContent = "Lifes :" + lives;
       
    }
   
}

let lives =5;
let compteur = 0;

const p = document.querySelector('p');
const sp = document.querySelector('span');
p.innerHTML = "Score :" + compteur;
sp.textContent = "Lifes :" + lives;


const getDiv = document.querySelectorAll('div');
for (const adiv of getDiv) {
    adiv.addEventListener('click', event =>{
    let a = event.target;
    
    if ( a.classList.contains('red')){
        removeRed();
        compteur++;
        lives ++;
        p.innerHTML = "score: " + compteur;
       
    }
    else{
        
        lives --;
        sp.innerHTML = "Lifes: " + lives;
        sp.textContent = "Lifes :" + lives;


   
    }
})
}


setTimeout(getRed,1000);
