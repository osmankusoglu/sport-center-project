import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


setupCounter(document.querySelector('#counter'))

var header = document.getElementById('header');
document.addEventListener('scroll',function(event) {
    if(window.scrollY > 100 ) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
})
