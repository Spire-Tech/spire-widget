import { h, render } from 'preact'
import App from './app'


const rootElement = document.getElementById('_spire--widget')

render(h(App), rootElement)