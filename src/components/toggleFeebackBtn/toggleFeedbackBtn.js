import { h } from 'preact'
import FeedjetIcon from '../../assets/icons/feedjet-icon'
import style from './toggleFeedback.css'

const ToggleFeedbackBtn = ({ toggleFeedJet }) => {
  return (
    <button onClick={toggleFeedJet} class={style.__btn}>
      <FeedjetIcon /> Leave feedback
    </button>
  )
}

export default ToggleFeedbackBtn