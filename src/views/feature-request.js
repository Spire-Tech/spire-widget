import backIcon from '../assets/icons/back-icon.svg'

export const featureRequest = () => {
  return `
  <div class="_spire--feedjet_box_container">
  <button class="_spire--feedjet_back-btn">
  ${backIcon}
  <span>Back</span>
  </button>
      <div class="_spire--feedjet_box_container_header">
      <h3 class="_spire--feedjet_title">Feature Request</h3>
      <p class="_spire--feedjet_desc">Got some ideas? Tell us about it.</p>
      </div>
      
      <form class="_spire--feedjet_form">
        <div class="_spire--feedjet_form-control">
          <label class="_spire--feedjet_label">What's your email? <span>*Required</span></label>
          <input class="_spire--feedjet_input" type="email" placeholder="example@gmail.com" />
        </div>

        <div class="_spire--feedjet_form-control">
          <label class="_spire--feedjet_label">Tell us about this feature<span>*Required</span></label>
          <textarea class="_spire--feedjet_textarea" placeholder="What are you looking to see and what’s the problem it solves."></textarea>
        </div>
        
        <button class="_spire--feedjet_submit-btn">Submit</button>
      </form>
  </div>
`
}