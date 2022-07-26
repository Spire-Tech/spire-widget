import { h, render } from 'preact'
import App from './app'

const rootElement = document.createElement('div')
rootElement.id = '_spire--widget'
document.body.append(rootElement)

const spire = document.getElementById('_s-w')
const token = spire.getAttribute('widget')

render(h(App, { token: token }), rootElement)