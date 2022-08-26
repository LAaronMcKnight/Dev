

let clickCount = 1;

showMore = ()=>{

    clickCount++;

    if(clickCount % 2 === 0){
    document.querySelector('.boPics').style.display = 'none';

    document.querySelector('.boPics2').style.display = 'contents';
    }else{
        document.querySelector('.boPics').style.display = 'contents'

        document.querySelector('.boPics2').style.display = 'none';
    }

}
///////
hoverName = (e)=>{
    document.querySelector('.bojackOverlay').innerHTML = e
}
///////
clrConsole = ()=>{
    document.querySelector('.bojackOverlay').innerHTML = "&nbsp"
}
///////
playRollSound = ()=> {
    document.querySele("rollSound").play();
}



const blueyButtons = document.querySelector('.seasons')

const dvds = document.querySelector('.dvd')

coverSwitchSticky = ()=>{

        document.querySelector('.bluey1').style.display = "none"

        document.querySelector('.bluey2').style.display = "none"

        document.querySelector('.bluey3').style.display = "contents"

    }