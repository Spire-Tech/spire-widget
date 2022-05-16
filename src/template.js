import styles from './index.css'
import feedjeticon from './assets/icons/feedjet-icon.svg'
import closeicon from './assets/icons/close-icon.svg'
import brandimg from './assets/images/flutterwave-logo.png'
import smileyicon from './assets/icons/smiley-icon.svg'
import warningicon from './assets/icons/warning-icon.svg'
import bulbicon from './assets/icons/bulb-icon.svg'
import spireicon from './assets/icons/spire-icon.svg'

export function createTemplate (greeting) {
  const template = document.createElement('template')
  template.innerHTML = `
  <style>${styles.toString()}</style>
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
      <ul class="_spire--feedjet_box_list">
        <li class="_spire--feedjet_box_list_item">
          <div class="_spire--feedjet_box_list_item_icon">
          ${smileyicon}
          </div>
          <div class="_spire--feedjet_box_list_item_content">
            <p class="_spire--feedjet_box_list_item_content_lg">Rate your experience</p>
            <p class="_spire--feedjet_box_list_item_content_sm">Let us know how we can improve</p>
          </div>
        </li>
        <li class="_spire--feedjet_box_list_item">
          <div class="_spire--feedjet_box_list_item_icon">
          ${warningicon}
          </div>
          <div class="_spire--feedjet_box_list_item_content">
            <p class="_spire--feedjet_box_list_item_content_lg">Report an issue</p>
            <p class="_spire--feedjet_box_list_item_content_sm">Is something wrong? Let us know.</p>
          </div>
        </li>
        <li class="_spire--feedjet_box_list_item">
          <div class="_spire--feedjet_box_list_item_icon">
          ${bulbicon}
          </div>
          <div class="_spire--feedjet_box_list_item_content">
            <p class="_spire--feedjet_box_list_item_content_lg">Feature request</p>
            <p class="_spire--feedjet_box_list_item_content_sm">Got some ideas? Tell us about it.</p>
          </div>
        </li>
      </ul>
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