import smileyicon from '../assets/icons/smiley-icon.svg'
import warningicon from '../assets/icons/warning-icon.svg'
import bulbicon from '../assets/icons/bulb-icon.svg'


export const home = () => {
  return `
  <ul class="_spire--feedjet_box_list">
        <li class="_spire--feedjet_box_list_item">
          <div class="_spire--feedjet_box_list_item_icon">
          ${smileyicon}
          </div>
          <div class="_spire--feedjet_box_list_item_content">
            <p class="_spire--feedjet_box_list_item_content_lg _spire--feedjet--heading">Rate your experience</p>
            <p class="_spire--feedjet_box_list_item_content_sm _spire--feedjet--text">Let us know how we can improve</p>
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
  `
}