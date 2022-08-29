



//Body background color changer
const btnColor = document.querySelector('.funBtn')

btnColor.addEventListener('click', e =>{
    

let r = (Math.random() * 255);
let g = (Math.random() * 255);
let b = (Math.random() * 255);

let randomColor = `rgb(${r},${g},${b})`;

    document.querySelector('body').style.backgroundColor = randomColor;
});


//Legible background colors --sensible button -- using Event Listener method
const senseBtn = document.querySelector('.infoBtns')

senseBtn.addEventListener('click', e=>{

    document.querySelector('body').style.backgroundColor = 'rgb(96, 84, 104)';

})

// call sound function in html element

playRollSound = ()=> {
    document.getElementById("rollSound").play();
}

// using onClick in html, could use click Event Listener.. result the same
// html could look cleaner if using Event Listener

jobClick = ()=> {
    document.querySelector('.myDescription').style.display = 'none'

    document.querySelector('.jobHistory').style.display = 'unset'

    document.querySelector('#jobHistoryBtn').style.backgroundColor = 'goldenrod'

    document.querySelector('#aboutMeBtn').style.backgroundColor = 'beige'
}

aboutClick = ()=> {
    document.querySelector('.myDescription').style.display = 'unset'

    document.querySelector('.jobHistory').style.display = 'none'

    document.querySelector('#jobHistoryBtn').style.backgroundColor = 'beige'

    document.querySelector('#aboutMeBtn').style.backgroundColor = 'goldenrod'
}

showContact = ()=> {
    document.querySelector('.hoverInfo').style.visibility = 'visible';
}

hideContact = ()=> {
    document.querySelector('.hoverInfo').style.visibility = 'hidden';
}


    // const boxMove = document.querySelector('.funBox');

    // boxMove.addEventListener('click', f=>{

//     const boxMove = ()=>{

//     let xM = (math.random() *99)
//     let yM = (math.random() *99)

//     document.querySelector('.funBox').style.top = `${xM}vh`

//     document.querySelector('.funBox').style.left = '${yM}vw`;
// })