import './style.css'
import { showApp } from './app.js'
import { setupCounter } from './counter.js'

showApp(document.querySelector('#app'));
setupCounter(document.querySelector('#counter'));
