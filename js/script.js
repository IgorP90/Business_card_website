
const time = document.getElementById('time')
time.innerText = new Date().getFullYear() + 'г.'

const contacts = document.getElementsByClassName('contacts')
const phone_number = contacts[0].querySelector('a').innerText
console.log(phone_number)

const mouseOver = () => contacts[0].querySelector('a').style.fontSize = '23px'
const mouseOut = () => contacts[0].querySelector('a').style.fontSize = '20px'
function call(){
    if(/Android/i.test(navigator.userAgent)){
        console.log('моб устройство')
        window.location.href="tel://" + phone_number
    }       
    else{
        console.log('обыч устройство')  
        window.open('https://t.me/' + phone_number)  
    }    
        
} 

contacts[0].addEventListener('mouseover', mouseOver)    
contacts[0].addEventListener('mouseout', mouseOut) 
contacts[0].addEventListener('mousedown', call)







                                                        