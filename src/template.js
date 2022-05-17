import styles from './index.css'
import feedjeticon from './assets/icons/feedjet-icon.svg'
import closeicon from './assets/icons/close-icon.svg'
import brandimg from './assets/images/flutterwave-logo.png'
import spireicon from './assets/icons/spire-icon.svg'
import { home } from './views/home'

export function createTemplate () {
  const template = document.createElement('template')
  template.innerHTML = `
  <div class="_spire--feedjet">
  <div class="_spire--feedjet_overlay">
    </div>
    <div class="_spire--feedjet_box">
      <button class="_spire--feedjet_box_btn">
      ${closeicon}
      </button>
      <div class="_spire--feedjet_box_img">
        <img src=${brandimg} alt="" />
      </div>
      ${home()}
      <div class="_spire--feedjet_box_spire">
          ${spireicon}
          <div class="_spire--feedjet_box_spire_text">Powered by <a href="getspire.io">Spire</a> </div>
      </div>
    </div>
    <button class="_spire--feedjet_btn _spire--feedjet--text">
    ${feedjeticon} Leave a feedback
    </button>
  </div>
  `

  return template
}