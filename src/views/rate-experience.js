import backIcon from '../assets/icons/back-icon.svg'
import starIcon from '../assets/icons/star-icon.svg'

export const rateExperience = () => {
  return `
    <div class="_spire--feedjet_box_container">
    <button class="_spire--feedjet_back-btn">
    ${backIcon}
    <span>Back</span>
    </button>
        <div class="_spire--feedjet_box_container_header">
        <h3 class="_spire--feedjet_title">Rate your experience</h3>
        <p class="_spire--feedjet_desc">Let us know how we can improve</p>
        </div>
        <div class="_spire--feedjet_ratings">
          <button class="_spire--feedjet_ratings_btn active">
          ${starIcon}
          </button>
          <button class="_spire--feedjet_ratings_btn active">
          ${starIcon}
          </button>
          <button class="_spire--feedjet_ratings_btn active">
          ${starIcon}
          </button>
          <button class="_spire--feedjet_ratings_btn">
          ${starIcon}
          </button>
        </div>
        <form class="_spire--feedjet_form">
          <div class="_spire--feedjet_form-control">
            <label class="_spire--feedjet_label">What's your email? <span>*Required</span></label>
            <input class="_spire--feedjet_input" type="email" placeholder="example@gmail.com" />
          </div>
          <div class="_spire--feedjet_form-control">
            <label class="_spire--feedjet_label">Leave us a comment <span>(Optional)</span></label>
            <textarea class="_spire--feedjet_textarea" placeholder="Let us know how we can improve"></textarea />
          </div>
          <button class="_spire--feedjet_submit-btn">Submit</button>
        </form>
    </div>
  `
}