import cameraIcon from '../assets/icons/camera-icon.svg'
import backIcon from '../assets/icons/back-icon.svg'

export const reportIssue = () => {
  return `
  <div class="_spire--feedjet_box_container">
  <button class="_spire--feedjet_back-btn">
  ${backIcon}
  <span>Back</span>
  </button>
      <div class="_spire--feedjet_box_container_header">
      <h3 class="_spire--feedjet_title">Report an issue</h3>
      <p class="_spire--feedjet_desc">Is something wrong? Let us know.</p>
      </div>
      
      <form class="_spire--feedjet_form">
        <div class="_spire--feedjet_form-control">
          <label class="_spire--feedjet_label">What's your email? <span>*Required</span></label>
          <input class="_spire--feedjet_input" type="email" placeholder="example@gmail.com" />
        </div>

        <div class="_spire--feedjet_form-control">
        <label class="_spire--feedjet_label">What’s the issue?<span>*Required</span></label>
        <textarea class="_spire--feedjet_textarea" placeholder="Tell us more about the issue you’re having. You can take a screenshot."></textarea>
      </div>

        <button class="_spire--feedjet_screenshot-btn">${cameraIcon} Take screenshot</button>
        <button class="_spire--feedjet_submit-btn">Submit</button>
      </form>
  </div>
`
}