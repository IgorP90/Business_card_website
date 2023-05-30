document.getElementById('time').innerText = new Date().getFullYear()

let am = document.getElementsByClassName('phone_number')

const mouseOver = () => am[0].style.fontSize = '17px'
const mouseOut = () => am[0].style.fontSize = '15px'
function call(){
    if(/Android/i.test(navigator.userAgent)){
        console.log('моб устройство')
        window.location.href="tel://" + am[0]
    }       
    else{
        console.log('обыч устройство')  
        window.open('https://t.me/+7123456789')  
    }    
        
} 

am[0].addEventListener('mouseover', mouseOver) 
am[0].addEventListener('mouseout', mouseOut) 
am[0].addEventListener('mousedown', call)








                                                        