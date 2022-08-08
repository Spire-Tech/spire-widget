import { h } from 'preact'
import FeedjetIcon from '../../assets/icons/feedjet-icon'
import { handlePostioning } from '../../utils'
import style from './toggleFeedback.css'

const ToggleFeedbackBtn = ({ position, toggleWidget, showWidget }) => {
  return (
    <button aria-haspopup="true" aria-expanded={showWidget} onClick={toggleWidget} class={`${style.__btn} ${style[handlePostioning(position)]}`}>
      <FeedjetIcon /> Leave feedback
    </button>
  )
}

export default ToggleFeedbackBtn