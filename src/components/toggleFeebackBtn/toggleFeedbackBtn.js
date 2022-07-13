import { h } from 'preact'
import FeedjetIcon from '../../assets/icons/feedjet-icon'
import { useNavigation } from '../../context/NavigationContext'
import { handlePostioning } from '../../utils'
import style from './toggleFeedback.css'

const ToggleFeedbackBtn = ({ position }) => {
  const { triggerMinimize, minimize } = useNavigation()
  return (
    <button aria-haspopup="true" aria-expanded={!minimize} onClick={() => triggerMinimize(state => !state)} class={`${style.__btn} ${style[handlePostioning(position)]}`}>
      <FeedjetIcon /> Leave feedback
    </button>
  )
}

export default ToggleFeedbackBtn