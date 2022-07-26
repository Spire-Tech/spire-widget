import { h, render } from 'preact'
import App from './app'

const rootElement = document.createElement('div')
rootElement.id = '_spire--widget'
const scriptElement = document.createElement('script')
scriptElement.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"

document.head.appendChild(scriptElement)
document.body.append(rootElement)

const spire = document.getElementById('_s-w')
const token = spire.getAttribute('widget')

render(h(App, { token: token }), rootElement)